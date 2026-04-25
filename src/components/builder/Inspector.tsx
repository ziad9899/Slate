import type { ReactNode } from 'react'
import { MousePointer2 } from 'lucide-react'
import { useBuilderStore, selectSelectedSection } from '@/state/builderStore'
import { sectionRegistry } from '@/data/sectionRegistry'
import { useTranslation } from '@/i18n/useTranslation'
import { ColorField } from './inspector/ColorField'

export function Inspector() {
  const { t } = useTranslation()
  const selected = useBuilderStore(selectSelectedSection)
  const updateSection = useBuilderStore((s) => s.updateSection)

  if (!selected) return <InspectorEmpty />

  const def = sectionRegistry[selected.type]
  const Icon = def.icon

  return (
    <aside className="flex w-[320px] shrink-0 flex-col border-s border-zinc-900/80 bg-zinc-950/40">
      <div className="flex shrink-0 items-center justify-between border-b border-zinc-900/60 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
            <Icon className="h-3.5 w-3.5 text-zinc-400" strokeWidth={1.75} />
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
              {t('inspector.editingLabel')}
            </div>
            <div className="text-[13px] font-medium text-zinc-100 leading-none">
              {t(def.labelKey)}
            </div>
          </div>
        </div>
        <span className="font-mono text-[10px] text-zinc-700" dir="ltr">
          {selected.id}
        </span>
      </div>

      <div className="flex-1 space-y-5 overflow-y-auto p-4">
        <Section title={t('inspector.section.content')}>
          <Field label={t('inspector.field.title')}>
            <input
              type="text"
              value={selected.content.title}
              onChange={(e) =>
                updateSection(selected.id, { content: { title: e.target.value } })
              }
              className="input-base"
              placeholder={t('inspector.field.titlePlaceholder')}
            />
          </Field>

          <Field label={t('inspector.field.description')}>
            <textarea
              value={selected.content.description}
              onChange={(e) =>
                updateSection(selected.id, { content: { description: e.target.value } })
              }
              rows={3}
              className="input-base resize-none leading-relaxed"
              placeholder={t('inspector.field.descriptionPlaceholder')}
            />
          </Field>

          <Field label={t('inspector.field.buttonText')}>
            <input
              type="text"
              value={selected.content.buttonText}
              onChange={(e) =>
                updateSection(selected.id, { content: { buttonText: e.target.value } })
              }
              className="input-base"
              placeholder={t('inspector.field.buttonTextPlaceholder')}
            />
          </Field>

          <Field label={t('inspector.field.buttonLink')}>
            <input
              type="text"
              value={selected.content.buttonHref}
              onChange={(e) =>
                updateSection(selected.id, { content: { buttonHref: e.target.value } })
              }
              spellCheck={false}
              dir="ltr"
              className="input-base font-mono text-xs"
              placeholder="https://"
            />
          </Field>
        </Section>

        <div className="h-px bg-zinc-900" />

        <Section title={t('inspector.section.style')}>
          <ColorField
            label={t('inspector.field.primaryColor')}
            value={selected.style.primaryColor}
            onChange={(v) =>
              updateSection(selected.id, { style: { primaryColor: v } })
            }
          />
          <ColorField
            label={t('inspector.field.backgroundColor')}
            value={selected.style.backgroundColor}
            onChange={(v) =>
              updateSection(selected.id, { style: { backgroundColor: v } })
            }
          />
        </Section>
      </div>
    </aside>
  )
}

function InspectorEmpty() {
  const { t } = useTranslation()
  return (
    <aside className="flex w-[320px] shrink-0 flex-col items-center justify-center border-s border-zinc-900/80 bg-zinc-950/40 p-6 text-center">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60">
        <MousePointer2 className="h-4 w-4 text-zinc-500" strokeWidth={1.5} />
      </div>
      <h3 className="text-sm font-medium text-zinc-300">{t('inspector.empty.title')}</h3>
      <p className="mt-1.5 max-w-[220px] text-xs leading-relaxed text-zinc-500">
        {t('inspector.empty.body')}
      </p>
    </aside>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <div className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
        {title}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="label-base">{label}</label>
      {children}
    </div>
  )
}
