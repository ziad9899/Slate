import { Logo } from './Logo'
import { useTranslation } from '@/i18n/useTranslation'

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t border-zinc-900/80">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="text-xs text-zinc-600">
              © {new Date().getFullYear()} — {t('footer.tagline')}
            </span>
          </div>
          <nav className="flex items-center gap-5 text-xs text-zinc-500">
            <a href="#features" className="transition hover:text-zinc-300">
              {t('nav.features')}
            </a>
            <a href="#how" className="transition hover:text-zinc-300">
              {t('nav.howItWorks')}
            </a>
            <a
              href="https://github.com/ziad9899"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-zinc-300"
            >
              {t('nav.github')}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
