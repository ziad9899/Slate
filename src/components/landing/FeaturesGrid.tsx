import { Layers, MousePointerClick, Palette, Save } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/i18n/useTranslation'
import type { TranslationKey } from '@/i18n/translations'

interface FeatureCardProps {
  icon: typeof Layers
  titleKey: TranslationKey
  bodyKey: TranslationKey
  visual: ReactNode
  className?: string
}

export function FeaturesGrid() {
  const { t } = useTranslation()

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-accent-soft">
            {t('features.eyebrow')}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight-2 text-zinc-50 sm:text-4xl">
            {t('features.heading')}
          </h2>
          <p className="mt-4 text-pretty text-zinc-400">
            {t('features.subheading')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
          <FeatureCard
            className="md:col-span-4 md:row-span-1"
            icon={Layers}
            titleKey="features.cards.sections.title"
            bodyKey="features.cards.sections.body"
            visual={<SectionsVisual />}
          />
          <FeatureCard
            className="md:col-span-2 md:row-span-1"
            icon={MousePointerClick}
            titleKey="features.cards.drag.title"
            bodyKey="features.cards.drag.body"
            visual={<DragVisual />}
          />
          <FeatureCard
            className="md:col-span-2 md:row-span-1"
            icon={Palette}
            titleKey="features.cards.style.title"
            bodyKey="features.cards.style.body"
            visual={<PaletteVisual />}
          />
          <FeatureCard
            className="md:col-span-4 md:row-span-1"
            icon={Save}
            titleKey="features.cards.save.title"
            bodyKey="features.cards.save.body"
            visual={<SaveVisual />}
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, titleKey, bodyKey, visual, className }: FeatureCardProps) {
  const { t } = useTranslation()
  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 transition hover:border-zinc-700/80 hover:bg-zinc-900/60',
        className,
      )}
    >
      <div className="flex items-center gap-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 bg-zinc-950">
          <Icon className="h-3.5 w-3.5 text-zinc-400" strokeWidth={1.75} />
        </div>
        <h3 className="text-[15px] font-medium text-zinc-100">{t(titleKey)}</h3>
      </div>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">{t(bodyKey)}</p>
      <div className="mt-6 flex-1">{visual}</div>
    </article>
  )
}

function SectionsVisual() {
  const { t } = useTranslation()
  const items: { key: TranslationKey; accent?: boolean }[] = [
    { key: 'registry.hero.label', accent: true },
    { key: 'registry.features.label' },
    { key: 'registry.pricing.label' },
    { key: 'registry.testimonials.label' },
    { key: 'registry.faq.label' },
    { key: 'registry.contact.label' },
    { key: 'registry.cta.label' },
  ]
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((it) => (
        <div
          key={it.key}
          className={cn(
            'rounded-md border px-2.5 py-1 text-xs',
            it.accent
              ? 'border-accent/40 bg-accent/10 text-accent-soft'
              : 'border-zinc-800 bg-zinc-950/50 text-zinc-400',
          )}
        >
          {t(it.key)}
        </div>
      ))}
    </div>
  )
}

function DragVisual() {
  return (
    <div className="space-y-1.5">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            'flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950/60 px-2 py-1.5',
            i === 1 && 'border-accent/40 bg-accent/10 ltr:translate-x-1 rtl:-translate-x-1',
          )}
        >
          <div className="flex flex-col gap-0.5">
            <div className="h-0.5 w-2.5 rounded-full bg-zinc-600" />
            <div className="h-0.5 w-2.5 rounded-full bg-zinc-600" />
          </div>
          <div className="h-1.5 flex-1 rounded-full bg-zinc-800" />
        </div>
      ))}
    </div>
  )
}

function PaletteVisual() {
  const { t } = useTranslation()
  return (
    <div className="space-y-2">
      <div className="rounded-md bg-zinc-950/60 p-2 ring-1 ring-inset ring-zinc-800">
        <div className="text-[9px] font-medium uppercase tracking-wider text-zinc-600">
          {t('inspector.field.title')}
        </div>
        <div className="mt-1 h-1.5 w-3/4 rounded-full bg-zinc-700" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center gap-1.5 rounded-md bg-zinc-950/60 p-2 ring-1 ring-inset ring-zinc-800">
          <div className="h-3 w-3 rounded ring-1 ring-inset ring-white/10" style={{ backgroundColor: '#6366F1' }} />
          <div className="h-1 flex-1 rounded-full bg-zinc-800" />
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-zinc-950/60 p-2 ring-1 ring-inset ring-zinc-800">
          <div className="h-3 w-3 rounded ring-1 ring-inset ring-white/10" style={{ backgroundColor: '#09090B' }} />
          <div className="h-1 flex-1 rounded-full bg-zinc-800" />
        </div>
      </div>
    </div>
  )
}

function SaveVisual() {
  const { t } = useTranslation()
  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950/60 px-4 py-3">
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-emerald-400/60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="text-xs font-medium text-zinc-300">{t('features.savedLabel')}</span>
        <span className="text-xs text-zinc-600">{t('features.savedSuffix')}</span>
      </div>
      <div className="rounded-md bg-zinc-900 px-2 py-0.5 text-[10px] font-medium text-zinc-500">
        {t('common.local')}
      </div>
    </div>
  )
}
