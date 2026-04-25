import type { Section } from '@/types/section'
import { useTranslation } from '@/i18n/useTranslation'
import { deriveSectionPalette } from './sectionPalette'

export function HeroSection({ section }: { section: Section }) {
  const { t } = useTranslation()
  const p = deriveSectionPalette(section.style)
  const { content } = section

  return (
    <section
      className="relative overflow-hidden px-8 py-24 sm:px-12 sm:py-32"
      style={{ backgroundColor: p.bg, color: p.text }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[42rem] -translate-x-1/2 opacity-50 blur-3xl"
        style={{
          background: `radial-gradient(closest-side, ${p.primary}33, transparent)`,
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <div
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
          style={{
            backgroundColor: p.surface,
            border: `1px solid ${p.border}`,
            color: p.textMuted,
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: p.primary }}
          />
          {t('section.hero.badge')}
        </div>

        <h1
          className="text-balance text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-5xl md:text-6xl"
          style={{ color: p.text }}
        >
          {content.title}
        </h1>
        <p
          className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed sm:text-lg"
          style={{ color: p.textMuted }}
        >
          {content.description}
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href={content.buttonHref}
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition active:scale-[0.98]"
            style={{
              backgroundColor: p.primary,
              color: p.buttonText,
            }}
          >
            {content.buttonText}
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition"
            style={{
              border: `1px solid ${p.border}`,
              color: p.text,
            }}
          >
            {t('common.learnMore')}
          </a>
        </div>
      </div>
    </section>
  )
}
