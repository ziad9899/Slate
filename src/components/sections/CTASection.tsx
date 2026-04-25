import type { Section } from '@/types/section'
import { deriveSectionPalette } from './sectionPalette'

export function CTASection({ section }: { section: Section }) {
  const p = deriveSectionPalette(section.style)
  const { content } = section

  return (
    <section
      className="px-8 py-20 sm:px-12 sm:py-24"
      style={{ backgroundColor: p.bg }}
    >
      <div
        className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl px-8 py-14 text-center sm:px-12 sm:py-20"
        style={{
          backgroundColor: p.surface,
          border: `1px solid ${p.border}`,
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -end-24 -top-24 h-64 w-64 rounded-full opacity-50 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${p.primary}33 0%, transparent 60%)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -start-24 -bottom-24 h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${p.primary}22 0%, transparent 60%)`,
          }}
        />

        <h2
          className="relative text-balance text-3xl font-semibold tracking-tight-2 sm:text-4xl md:text-5xl"
          style={{ color: p.text }}
        >
          {content.title}
        </h2>
        <p
          className="relative mx-auto mt-4 max-w-xl text-pretty leading-relaxed"
          style={{ color: p.textMuted }}
        >
          {content.description}
        </p>
        <div className="relative mt-8 flex items-center justify-center gap-3">
          <a
            href={content.buttonHref}
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition active:scale-[0.98]"
            style={{ backgroundColor: p.primary, color: p.buttonText }}
          >
            {content.buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}
