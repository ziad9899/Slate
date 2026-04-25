import { useTranslation } from '@/i18n/useTranslation'
import { cn } from '@/lib/utils'

interface LanguageToggleProps {
  className?: string
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { lang, setLang, t } = useTranslation()

  return (
    <div
      role="group"
      aria-label={t('builder.langToggle')}
      dir="ltr"
      className={cn(
        'inline-flex items-center gap-0.5 rounded-md border border-zinc-800 bg-zinc-900/60 p-0.5',
        className,
      )}
    >
      <Segment active={lang === 'en'} onClick={() => setLang('en')}>
        EN
      </Segment>
      <Segment active={lang === 'ar'} onClick={() => setLang('ar')}>
        AR
      </Segment>
    </div>
  )
}

function Segment({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'rounded-[4px] px-2 py-0.5 font-mono text-[11px] font-semibold tracking-wide transition focus-ring',
        active
          ? 'bg-zinc-800 text-zinc-50 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.2)]'
          : 'text-zinc-500 hover:text-zinc-300',
      )}
    >
      {children}
    </button>
  )
}
