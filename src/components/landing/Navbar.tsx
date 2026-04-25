import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Logo } from './Logo'
import { LanguageToggle } from '@/components/common/LanguageToggle'
import { useTranslation } from '@/i18n/useTranslation'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-quart',
        scrolled
          ? 'border-b border-zinc-900/80 bg-zinc-950/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="focus-ring rounded-md">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <a
            href="#features"
            className="text-sm text-zinc-400 transition hover:text-zinc-100"
          >
            {t('nav.features')}
          </a>
          <a
            href="#how"
            className="text-sm text-zinc-400 transition hover:text-zinc-100"
          >
            {t('nav.howItWorks')}
          </a>
          <a
            href="https://github.com/ziad9899/Slate"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-400 transition hover:text-zinc-100"
          >
            {t('nav.github')}
          </a>
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageToggle />
          <Link
            to="/builder"
            className="group inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 text-sm font-medium text-zinc-100 transition hover:border-zinc-700 hover:bg-zinc-900 focus-ring"
          >
            {t('common.openBuilder')}
            <ArrowUpRight
              className="h-3.5 w-3.5 text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:text-zinc-300 ltr:group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
              strokeWidth={1.75}
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
