import type { Section } from '@/types/section'
import { useTranslation } from '@/i18n/useTranslation'
import type { TranslationKey } from '@/i18n/translations'
import { deriveSectionPalette } from './sectionPalette'

const testimonials: { quoteKey: TranslationKey; nameKey: TranslationKey; roleKey: TranslationKey }[] = [
  {
    quoteKey: 'section.testimonials.t1.quote',
    nameKey: 'section.testimonials.t1.name',
    roleKey: 'section.testimonials.t1.role',
  },
  {
    quoteKey: 'section.testimonials.t2.quote',
    nameKey: 'section.testimonials.t2.name',
    roleKey: 'section.testimonials.t2.role',
  },
  {
    quoteKey: 'section.testimonials.t3.quote',
    nameKey: 'section.testimonials.t3.name',
    roleKey: 'section.testimonials.t3.role',
  },
]

function initials(name: string): string {
  const parts = name.trim().split(/\s+/)
  return (parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '')
}

export function TestimonialsSection({ section }: { section: Section }) {
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
          {testimonials.map((tt) => {
            const name = t(tt.nameKey)
            return (
              <figure
                key={tt.nameKey}
                className="flex h-full flex-col rounded-xl p-6"
                style={{
                  backgroundColor: p.surface,
                  border: `1px solid ${p.border}`,
                }}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  style={{ color: p.primary }}
                >
                  <path
                    d="M9.5 8H6.5A1.5 1.5 0 005 9.5v3A1.5 1.5 0 006.5 14H8c0 2-1 3.5-3 4M19.5 8h-3a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5H18c0 2-1 3.5-3 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <blockquote
                  className="mt-4 flex-1 text-sm leading-relaxed"
                  style={{ color: p.text }}
                >
                  {t(tt.quoteKey)}
                </blockquote>
                <figcaption
                  className="mt-5 flex items-center gap-3 border-t pt-4"
                  style={{ borderColor: p.border }}
                >
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold uppercase"
                    style={{
                      backgroundColor: p.surface,
                      border: `1px solid ${p.border}`,
                      color: p.textMuted,
                    }}
                  >
                    {initials(name)}
                  </div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: p.text }}>
                      {name}
                    </div>
                    <div className="text-xs" style={{ color: p.textFaint }}>
                      {t(tt.roleKey)}
                    </div>
                  </div>
                </figcaption>
              </figure>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={content.buttonHref}
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition"
            style={{ border: `1px solid ${p.border}`, color: p.text }}
          >
            {content.buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}
