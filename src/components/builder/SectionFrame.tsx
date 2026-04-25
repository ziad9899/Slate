import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, Trash2 } from 'lucide-react'
import type { MouseEvent, ReactNode } from 'react'
import type { Section } from '@/types/section'
import { sectionRegistry } from '@/data/sectionRegistry'
import { useBuilderStore } from '@/state/builderStore'
import { useTranslation } from '@/i18n/useTranslation'
import { cn } from '@/lib/utils'

interface SectionFrameProps {
  section: Section
  children: ReactNode
}

export function SectionFrame({ section, children }: SectionFrameProps) {
  const { t } = useTranslation()
  const def = sectionRegistry[section.type]
  const Icon = def.icon
  const sectionLabel = t(def.labelKey)
  const selectedId = useBuilderStore((s) => s.selectedId)
  const selectSection = useBuilderStore((s) => s.selectSection)
  const removeSection = useBuilderStore((s) => s.removeSection)
  const isSelected = selectedId === section.id

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation()
    selectSection(section.id)
  }

  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation()
    removeSection(section.id)
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={handleClick}
      className={cn(
        'group relative isolate cursor-pointer transition-shadow',
        isDragging && 'z-10 opacity-60',
      )}
    >
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 rounded-md ring-2 ring-inset transition-colors',
          isSelected
            ? 'ring-accent/80'
            : 'ring-transparent group-hover:ring-zinc-700/60',
        )}
      />

      <div
        className={cn(
          'absolute -top-8 start-0 z-20 flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950/95 px-1.5 py-1 shadow-md backdrop-blur transition-opacity',
          isSelected || isDragging
            ? 'opacity-100'
            : 'opacity-0 group-hover:opacity-100',
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label={t('builder.dragAria', { label: sectionLabel })}
          {...attributes}
          {...listeners}
          className="flex h-6 w-6 cursor-grab items-center justify-center rounded text-zinc-500 transition hover:bg-zinc-800 hover:text-zinc-200 active:cursor-grabbing focus-ring"
        >
          <GripVertical className="h-3.5 w-3.5" strokeWidth={1.75} />
        </button>
        <div className="flex items-center gap-1.5 px-1 text-[11px] text-zinc-400">
          <Icon className="h-3 w-3" strokeWidth={1.75} />
          <span className="font-medium">{sectionLabel}</span>
        </div>
        <span className="h-3 w-px bg-zinc-800" />
        <button
          type="button"
          onClick={handleDelete}
          aria-label={t('builder.deleteAria', { label: sectionLabel })}
          className="flex h-6 w-6 items-center justify-center rounded text-zinc-500 transition hover:bg-red-950/50 hover:text-red-300 focus-ring"
        >
          <Trash2 className="h-3.5 w-3.5" strokeWidth={1.75} />
        </button>
      </div>

      <div className="overflow-hidden rounded-md">{children}</div>
    </div>
  )
}
