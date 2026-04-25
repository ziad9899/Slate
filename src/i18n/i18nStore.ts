import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { Language } from './translations'

const STORAGE_KEY = 'slate.lang.v1'

export type Direction = 'ltr' | 'rtl'

export const dirFor = (lang: Language): Direction => (lang === 'ar' ? 'rtl' : 'ltr')

interface I18nState {
  lang: Language
  setLang: (next: Language) => void
}

function applyDocumentDirection(lang: Language) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.lang = lang
  root.dir = dirFor(lang)
}

export const useI18nStore = create<I18nState>()(
  persist(
    (set) => ({
      lang: 'en',
      setLang: (next) => {
        applyDocumentDirection(next)
        set({ lang: next })
      },
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      version: 1,
      onRehydrateStorage: () => (state) => {
        if (state) applyDocumentDirection(state.lang)
      },
    },
  ),
)

/**
 * Read the persisted language synchronously (used at boot to set the
 * document direction before React mounts — avoids LTR→RTL flicker).
 */
export function readPersistedLang(): Language {
  if (typeof window === 'undefined') return 'en'
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return 'en'
    const parsed = JSON.parse(raw) as { state?: { lang?: Language } }
    const lang = parsed.state?.lang
    return lang === 'ar' || lang === 'en' ? lang : 'en'
  } catch {
    return 'en'
  }
}

export function initDocumentDirection(): Language {
  const lang = readPersistedLang()
  applyDocumentDirection(lang)
  return lang
}
