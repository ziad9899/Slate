import { useState } from 'react'
import { Plus } from 'lucide-react'
import type { Section } from '@/types/section'
import { useTranslation } from '@/i18n/useTranslation'
import type { TranslationKey } from '@/i18n/translations'
import { deriveSectionPalette } from './sectionPalette'

const items: { qKey: TranslationKey; aKey: TranslationKey }[] = [
  { qKey: 'section.faq.q1.q', aKey: 'section.faq.q1.a' },
  { qKey: 'section.faq.q2.q', aKey: 'section.faq.q2.a' },
  { qKey: 'section.faq.q3.q', aKey: 'section.faq.q3.a' },
  { qKey: 'section.faq.q4.q', aKey: 'section.faq.q4.a' },
  { qKey: 'section.faq.q5.q', aKey: 'section.faq.q5.a' },
]

export function FAQSection({ section }: { section: Section }) {
  const { t } = useTranslation()
  const p = deriveSectionPalette(section.style)
  const { content } = section
  const [openIdx, setOpenIdx] = useState<number>(0)

  return (
    <section
      className="px-8 py-24 sm:px-12 sm:py-28"
      style={{ backgroundColor: p.bg, color: p.text }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <h2
            className="text-balance text-3xl font-semibold tracking-tight-2 sm:text-4xl"
            style={{ color: p.text }}
          >
            {content.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed" style={{ color: p.textMuted }}>
            {content.description}
          </p>
          <a
            href={content.buttonHref}
            onClick={(e) => e.preventDefault()}
            className="mt-6 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition"
            style={{
              backgroundColor: p.primary,
              color: p.buttonText,
            }}
          >
            {content.buttonText}
          </a>
        </div>

        <div
          className="overflow-hidden rounded-xl"
          style={{ border: `1px solid ${p.border}` }}
        >
          {items.map((it, i) => {
            const open = openIdx === i
            return (
              <div
                key={it.qKey}
                style={{
                  borderTop: i === 0 ? 'none' : `1px solid ${p.border}`,
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start transition"
                  style={{ color: p.text }}
                >
                  <span className="text-[15px] font-medium">{t(it.qKey)}</span>
                  <Plus
                    className="h-4 w-4 shrink-0 transition-transform"
                    style={{
                      color: p.textFaint,
                      transform: open ? 'rotate(45deg)' : 'rotate(0)',
                    }}
                    strokeWidth={1.75}
                  />
                </button>
                <div
                  className="grid transition-all duration-200 ease-out"
                  style={{
                    gridTemplateRows: open ? '1fr' : '0fr',
                  }}
                >
                  <div className="overflow-hidden">
                    <p
                      className="px-5 pb-5 text-sm leading-relaxed"
                      style={{ color: p.textMuted }}
                    >
                      {t(it.aKey)}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
