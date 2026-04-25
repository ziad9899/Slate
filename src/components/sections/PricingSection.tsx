import { Check } from 'lucide-react'
import type { Section } from '@/types/section'
import { useTranslation } from '@/i18n/useTranslation'
import type { TranslationKey } from '@/i18n/translations'
import { deriveSectionPalette } from './sectionPalette'

interface PlanKeys {
  nameKey: TranslationKey
  priceKey: TranslationKey
  periodKey: TranslationKey
  descriptionKey: TranslationKey
  features: TranslationKey[]
  highlighted: boolean
}

const plans: PlanKeys[] = [
  {
    nameKey: 'section.pricing.starter.name',
    priceKey: 'section.pricing.starter.price',
    periodKey: 'section.pricing.starter.period',
    descriptionKey: 'section.pricing.starter.description',
    features: [
      'section.pricing.starter.f1',
      'section.pricing.starter.f2',
      'section.pricing.starter.f3',
      'section.pricing.starter.f4',
    ],
    highlighted: false,
  },
  {
    nameKey: 'section.pricing.pro.name',
    priceKey: 'section.pricing.pro.price',
    periodKey: 'section.pricing.pro.period',
    descriptionKey: 'section.pricing.pro.description',
    features: [
      'section.pricing.pro.f1',
      'section.pricing.pro.f2',
      'section.pricing.pro.f3',
      'section.pricing.pro.f4',
    ],
    highlighted: true,
  },
  {
    nameKey: 'section.pricing.team.name',
    priceKey: 'section.pricing.team.price',
    periodKey: 'section.pricing.team.period',
    descriptionKey: 'section.pricing.team.description',
    features: [
      'section.pricing.team.f1',
      'section.pricing.team.f2',
      'section.pricing.team.f3',
      'section.pricing.team.f4',
    ],
    highlighted: false,
  },
]

export function PricingSection({ section }: { section: Section }) {
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
          <p className="mt-4 text-pretty leading-relaxed" style={{ color: p.textMuted }}>
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => {
            const isHighlighted = plan.highlighted
            return (
              <div
                key={plan.nameKey}
                className="relative flex flex-col rounded-xl p-7"
                style={{
                  backgroundColor: isHighlighted ? p.surface : p.bg,
                  border: `1px solid ${isHighlighted ? p.primary : p.border}`,
                  boxShadow: isHighlighted ? `0 0 0 1px ${p.primary}33` : 'none',
                }}
              >
                {isHighlighted && (
                  <div
                    className="absolute -top-3 start-7 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: p.primary, color: p.buttonText }}
                  >
                    {t('section.pricing.popular')}
                  </div>
                )}

                <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: p.textMuted }}>
                  {t(plan.nameKey)}
                </h3>

                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight-2" style={{ color: p.text }}>
                    {t(plan.priceKey)}
                  </span>
                  <span className="text-sm" style={{ color: p.textFaint }}>
                    {t(plan.periodKey)}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed" style={{ color: p.textMuted }}>
                  {t(plan.descriptionKey)}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((fKey) => (
                    <li key={fKey} className="flex items-center gap-2.5 text-sm" style={{ color: p.text }}>
                      <Check className="h-4 w-4 shrink-0" strokeWidth={2} style={{ color: p.primary }} />
                      <span style={{ color: p.textMuted }}>{t(fKey)}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={content.buttonHref}
                  onClick={(e) => e.preventDefault()}
                  className="mt-7 inline-flex items-center justify-center rounded-lg py-2.5 text-sm font-medium transition active:scale-[0.98]"
                  style={
                    isHighlighted
                      ? { backgroundColor: p.primary, color: p.buttonText }
                      : { border: `1px solid ${p.border}`, color: p.text }
                  }
                >
                  {content.buttonText}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
