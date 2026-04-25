import { useEffect, useRef } from 'react'
import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { useBuilderStore } from '@/state/builderStore'
import { SectionFrame } from './SectionFrame'
import { EmptyState } from './EmptyState'
import { SectionRenderer } from '@/components/sections/SectionRenderer'

export function Canvas() {
  const sections = useBuilderStore((s) => s.sections)
  const moveSectionById = useBuilderStore((s) => s.moveSectionById)
  const selectSection = useBuilderStore((s) => s.selectSection)

  const scrollRef = useRef<HTMLDivElement>(null)
  const prevLenRef = useRef<number>(sections.length)

  // Auto-scroll to the freshly added section
  useEffect(() => {
    const grew = sections.length > prevLenRef.current
    prevLenRef.current = sections.length
    if (grew && scrollRef.current) {
      requestAnimationFrame(() => {
        scrollRef.current?.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: 'smooth',
        })
      })
    }
  }, [sections.length])

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return
    moveSectionById(String(active.id), String(over.id))
  }

  const handleBackgroundClick = () => selectSection(null)

  return (
    <div
      ref={scrollRef}
      className="relative flex-1 overflow-y-auto bg-zinc-900/30"
      onClick={handleBackgroundClick}
    >
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-zinc opacity-40"
        style={{ backgroundSize: '24px 24px' }}
      />

      <div className="relative mx-auto max-w-5xl px-8 py-10">
        {sections.length === 0 ? (
          <EmptyState />
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={sections.map((s) => s.id)} strategy={verticalListSortingStrategy}>
              <div className="space-y-6">
                {sections.map((section) => (
                  <SectionFrame key={section.id} section={section}>
                    <SectionRenderer section={section} />
                  </SectionFrame>
                ))}
              </div>
            </SortableContext>
          </DndContext>
        )}

        {/* Bottom buffer so the last section can breathe + show the action bar */}
        {sections.length > 0 && <div className="h-24" />}
      </div>
    </div>
  )
}
