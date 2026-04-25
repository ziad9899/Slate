import type { ReactNode } from 'react'
import { Globe, Github } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Logo } from './Logo'
import { useTranslation } from '@/i18n/useTranslation'

const OFQ_WEBSITE = 'https://ofqtech.com/'
const GITHUB_PROFILE = 'https://github.com/ziad9899'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-900/80 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* ── Top: agency credit ── */}
        <div className="flex flex-col items-center gap-6 pt-14 pb-10 text-center">
          <p className="text-sm text-zinc-500">
            {t('footer.builtByPrefix')}{' '}
            <a
              href={OFQ_WEBSITE}
              target="_blank"
              rel="noreferrer noopener"
              className="font-medium text-zinc-200 transition-colors duration-200 ease-out-quart hover:text-white border-b border-transparent hover:border-zinc-400 pb-px focus-ring rounded-sm"
            >
              {t('footer.brand')}
            </a>
          </p>

          <div className="flex items-center gap-1">
            <FooterLink href={OFQ_WEBSITE} icon={Globe}>
              {t('footer.visitWebsite')}
            </FooterLink>
            <span aria-hidden className="h-4 w-px bg-zinc-800" />
            <FooterLink href={GITHUB_PROFILE} icon={Github}>
              {t('nav.github')}
            </FooterLink>
          </div>
        </div>

        {/* ── Hairline divider ── */}
        <div className="h-px bg-zinc-900/80" />

        {/* ── Bottom: utility row ── */}
        <div className="flex flex-col items-center gap-4 py-6 text-xs sm:flex-row sm:justify-between">
          <Logo />
          <nav className="order-3 flex items-center gap-5 text-zinc-500 sm:order-2">
            <a href="#features" className="transition-colors duration-200 hover:text-zinc-200">
              {t('nav.features')}
            </a>
            <a href="#how" className="transition-colors duration-200 hover:text-zinc-200">
              {t('nav.howItWorks')}
            </a>
          </nav>
          <span className="order-2 text-zinc-600 sm:order-3">
            © {year} — {t('footer.tagline')}
          </span>
        </div>
      </div>
    </footer>
  )
}

interface FooterLinkProps {
  href: string
  icon: LucideIcon
  children: ReactNode
}

function FooterLink({ href, icon: Icon, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-zinc-400 transition-all duration-200 ease-out-quart hover:bg-zinc-900/60 hover:text-zinc-100 focus-ring"
    >
      <Icon
        className="h-3.5 w-3.5 text-zinc-500 transition-colors duration-200 group-hover:text-accent-soft"
        strokeWidth={1.75}
      />
      <span>{children}</span>
    </a>
  )
}
