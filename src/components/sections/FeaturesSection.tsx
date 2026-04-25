import { Zap, Shield, Workflow, GitBranch, Code2, BellRing } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Section } from '@/types/section'
import { useTranslation } from '@/i18n/useTranslation'
import type { TranslationKey } from '@/i18n/translations'
import { deriveSectionPalette } from './sectionPalette'

const items: { icon: LucideIcon; titleKey: TranslationKey; bodyKey: TranslationKey }[] = [
  { icon: Zap, titleKey: 'section.features.items.speed.title', bodyKey: 'section.features.items.speed.body' },
  { icon: Shield, titleKey: 'section.features.items.secure.title', bodyKey: 'section.features.items.secure.body' },
  { icon: Workflow, titleKey: 'section.features.items.workflow.title', bodyKey: 'section.features.items.workflow.body' },
  { icon: GitBranch, titleKey: 'section.features.items.diffs.title', bodyKey: 'section.features.items.diffs.body' },
  { icon: Code2, titleKey: 'section.features.items.dx.title', bodyKey: 'section.features.items.dx.body' },
  { icon: BellRing, titleKey: 'section.features.items.alerts.title', bodyKey: 'section.features.items.alerts.body' },
]

export function FeaturesSection({ section }: { section: Section }) {
  const { t } = useTranslation()
  const p = deriveSectionPalette(section.style)
  const { content } = section

  return (
    <section
      className="px-8 py-24 sm:px-12 sm:py-28"
      style={{ backgroundColor: p.bg, color: p.text }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-balance text-3xl font-semibold tracking-tight-2 sm:text-4xl"
            style={{ color: p.text }}
          >
            {content.title}
          </h2>
          <p
            className="mt-4 text-pretty leading-relaxed"
            style={{ color: p.textMuted }}
          >
            {content.description}
          </p>
        </div>

        <div
          className="mt-14 grid gap-px overflow-hidden rounded-xl sm:grid-cols-2 lg:grid-cols-3"
          style={{ backgroundColor: p.border }}
        >
          {items.map(({ icon: Icon, titleKey, bodyKey }) => (
            <div
              key={titleKey}
              className="flex flex-col gap-3 p-6"
              style={{ backgroundColor: p.bg }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: p.surface,
                  border: `1px solid ${p.border}`,
                  color: p.primary,
                }}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </div>
              <h3 className="text-[15px] font-medium tracking-tight-2" style={{ color: p.text }}>
                {t(titleKey)}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: p.textMuted }}>
                {t(bodyKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={content.buttonHref}
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition"
            style={{
              border: `1px solid ${p.border}`,
              color: p.text,
            }}
          >
            {content.buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}
