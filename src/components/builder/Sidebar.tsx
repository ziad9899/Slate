import { Plus } from 'lucide-react'
import { listSections } from '@/data/sectionRegistry'
import { useBuilderStore } from '@/state/builderStore'
import { useTranslation } from '@/i18n/useTranslation'

export function Sidebar() {
  const { t } = useTranslation()
  const sections = listSections()
  const addSection = useBuilderStore((s) => s.addSection)

  return (
    <aside className="flex w-[260px] shrink-0 flex-col border-e border-zinc-900/80 bg-zinc-950/40">
      <div className="flex shrink-0 items-baseline justify-between border-b border-zinc-900/60 px-4 py-3.5">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
          {t('builder.sections')}
        </h2>
        <span className="text-[11px] text-zinc-600">{t('builder.clickToAdd')}</span>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        <div className="space-y-1">
          {sections.map(({ type, labelKey, descriptionKey, icon: Icon }) => (
            <button
              key={type}
              type="button"
              onClick={() => addSection(type)}
              className="group flex w-full items-start gap-3 rounded-lg border border-transparent p-2.5 text-start transition hover:border-zinc-800 hover:bg-zinc-900/60 focus-ring"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 transition group-hover:border-zinc-700 group-hover:bg-zinc-800">
                <Icon className="h-4 w-4 text-zinc-400 transition group-hover:text-zinc-200" strokeWidth={1.5} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-zinc-200">{t(labelKey)}</span>
                  <Plus className="h-3.5 w-3.5 text-zinc-700 transition group-hover:text-accent-soft" strokeWidth={2} />
                </div>
                <p className="mt-0.5 text-xs leading-snug text-zinc-500">{t(descriptionKey)}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="shrink-0 border-t border-zinc-900/60 px-4 py-3 text-[11px] leading-relaxed text-zinc-600">
        {t('builder.dragHint')}
      </div>
    </aside>
  )
}
