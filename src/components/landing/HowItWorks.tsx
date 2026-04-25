import { Plus, PencilLine, Send } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useTranslation } from '@/i18n/useTranslation'
import type { TranslationKey } from '@/i18n/translations'

const steps: { num: string; icon: LucideIcon; titleKey: TranslationKey; bodyKey: TranslationKey }[] = [
  { num: '01', icon: Plus, titleKey: 'how.steps.1.title', bodyKey: 'how.steps.1.body' },
  { num: '02', icon: PencilLine, titleKey: 'how.steps.2.title', bodyKey: 'how.steps.2.body' },
  { num: '03', icon: Send, titleKey: 'how.steps.3.title', bodyKey: 'how.steps.3.body' },
]

export function HowItWorks() {
  const { t } = useTranslation()

  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-accent-soft">
            {t('how.eyebrow')}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight-2 text-zinc-50 sm:text-4xl">
            {t('how.heading')}
          </h2>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-800/80 sm:grid-cols-3">
          {steps.map(({ num, icon: Icon, titleKey, bodyKey }) => (
            <li key={num} className="relative flex flex-col gap-4 bg-zinc-950 p-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-zinc-600" dir="ltr">{num}</span>
                <span className="h-px flex-1 bg-zinc-800" />
                <div className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
                  <Icon className="h-3.5 w-3.5 text-zinc-400" strokeWidth={1.75} />
                </div>
              </div>
              <h3 className="text-lg font-medium text-zinc-100 tracking-tight-2">{t(titleKey)}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{t(bodyKey)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
