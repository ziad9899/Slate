import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { nanoid } from 'nanoid'
import { arrayMove } from '@dnd-kit/sortable'
import type { Section, SectionType, SectionPatch } from '@/types/section'
import { sectionRegistry } from '@/data/sectionRegistry'
import { useI18nStore } from '@/i18n/i18nStore'
import { translations } from '@/i18n/translations'

interface BuilderState {
  sections: Section[]
  selectedId: string | null

  addSection: (type: SectionType) => void
  removeSection: (id: string) => void
  selectSection: (id: string | null) => void
  reorderSections: (fromIndex: number, toIndex: number) => void
  moveSectionById: (activeId: string, overId: string) => void
  updateSection: (id: string, patch: SectionPatch) => void
  reset: () => void
}

const STORAGE_KEY = 'slate.builder.v1'

function buildSection(type: SectionType): Section {
  const def = sectionRegistry[type]
  const lang = useI18nStore.getState().lang
  const dict = translations[lang]
  return {
    id: nanoid(8),
    type,
    content: {
      title: dict[def.defaultContentKeys.title],
      description: dict[def.defaultContentKeys.description],
      buttonText: dict[def.defaultContentKeys.buttonText],
      buttonHref: def.defaultButtonHref,
    },
    style: { ...def.defaultStyle },
  }
}

export const useBuilderStore = create<BuilderState>()(
  persist(
    (set, get) => ({
      sections: [],
      selectedId: null,

      addSection: (type) => {
        const section = buildSection(type)
        set((s) => ({
          sections: [...s.sections, section],
          selectedId: section.id,
        }))
      },

      removeSection: (id) => {
        set((s) => ({
          sections: s.sections.filter((x) => x.id !== id),
          selectedId: s.selectedId === id ? null : s.selectedId,
        }))
      },

      selectSection: (id) => set({ selectedId: id }),

      reorderSections: (from, to) => {
        const { sections } = get()
        if (
          from === to ||
          from < 0 ||
          to < 0 ||
          from >= sections.length ||
          to >= sections.length
        ) return
        set({ sections: arrayMove(sections, from, to) })
      },

      moveSectionById: (activeId, overId) => {
        if (activeId === overId) return
        const { sections } = get()
        const from = sections.findIndex((s) => s.id === activeId)
        const to = sections.findIndex((s) => s.id === overId)
        if (from < 0 || to < 0) return
        set({ sections: arrayMove(sections, from, to) })
      },

      updateSection: (id, patch) => {
        set((s) => ({
          sections: s.sections.map((sec) =>
            sec.id === id
              ? {
                  ...sec,
                  content: patch.content ? { ...sec.content, ...patch.content } : sec.content,
                  style: patch.style ? { ...sec.style, ...patch.style } : sec.style,
                }
              : sec,
          ),
        }))
      },

      reset: () => set({ sections: [], selectedId: null }),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ sections: s.sections }),
      version: 1,
    },
  ),
)

/** Read-only selectors for fine-grained subscriptions. */
export const selectSelectedSection = (s: BuilderState): Section | null =>
  s.sections.find((sec) => sec.id === s.selectedId) ?? null
