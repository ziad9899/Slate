import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'
import { BuilderMock } from './BuilderMock'
import { useTranslation } from '@/i18n/useTranslation'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Subtle dotted grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-zinc opacity-60"
        style={{ backgroundSize: '24px 24px' }}
      />
      {/* Top fade overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-zinc-950 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
            <span>{t('hero.badge')}</span>
            <span className="text-zinc-600 transition group-hover:text-zinc-400">
              · {t('hero.badgeNote')}
            </span>
          </a>

          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tightest text-zinc-50 sm:text-6xl md:text-7xl">
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            {t('hero.description')}
          </p>

          <div className="mt-9 flex items-center justify-center gap-3">
            <Link
              to="/builder"
              className="group inline-flex items-center gap-2 rounded-lg bg-zinc-50 px-5 py-2.5 text-sm font-medium text-zinc-950 shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.06)] transition hover:bg-white focus-ring"
            >
              {t('common.startBuilding')}
              <ArrowRight
                className="h-4 w-4 transition rtl:rotate-180 ltr:group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
            <a
              href="https://github.com/ziad9899/Slate"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <Github className="h-4 w-4" strokeWidth={1.75} />
              {t('common.viewSource')}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          className="mx-auto mt-20 max-w-5xl"
        >
          <BuilderMock />
        </motion.div>
      </div>
    </section>
  )
}
