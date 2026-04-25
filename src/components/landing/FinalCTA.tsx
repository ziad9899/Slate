import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from '@/i18n/useTranslation'

export function FinalCTA() {
  const { t } = useTranslation()
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-10 sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full opacity-40 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 60%)' }}
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight-2 text-zinc-50 sm:text-4xl">
              {t('finalCta.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-zinc-400">
              {t('finalCta.body')}
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link
                to="/builder"
                className="group inline-flex items-center gap-2 rounded-lg bg-zinc-50 px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-white focus-ring"
              >
                {t('common.startBuilding')}
                <ArrowRight
                  className="h-4 w-4 transition rtl:rotate-180 ltr:group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
