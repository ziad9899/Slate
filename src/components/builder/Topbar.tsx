import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, RotateCcw, ArrowLeft } from 'lucide-react'
import { Logo } from '@/components/landing/Logo'
import { LanguageToggle } from '@/components/common/LanguageToggle'
import { useBuilderStore } from '@/state/builderStore'
import { useSaveStatus } from '@/state/useSaveStatus'
import { useTranslation } from '@/i18n/useTranslation'
import { cn } from '@/lib/utils'

export function Topbar() {
  const { t } = useTranslation()
  const reset = useBuilderStore((s) => s.reset)
  const sectionCount = useBuilderStore((s) => s.sections.length)
  const { label, isFresh } = useSaveStatus()

  const [confirming, setConfirming] = useState(false)
  const confirmTimer = useRef<number | undefined>(undefined)

  useEffect(() => () => {
    if (confirmTimer.current) window.clearTimeout(confirmTimer.current)
  }, [])

  const handleResetClick = () => {
    if (sectionCount === 0) return
    if (!confirming) {
      setConfirming(true)
      confirmTimer.current = window.setTimeout(() => setConfirming(false), 3000)
      return
    }
    reset()
    setConfirming(false)
    if (confirmTimer.current) window.clearTimeout(confirmTimer.current)
  }

  return (
    <header
      className="flex shrink-0 items-center justify-between border-b border-zinc-900/80 bg-zinc-950/80 px-4 backdrop-blur-sm"
      style={{ height: 52 }}
    >
      {/* Start: back + logo + project name */}
      <div className="flex items-center gap-3">
        <Link
          to="/"
          aria-label={t('common.backToHome')}
          className="btn-icon"
        >
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" strokeWidth={1.75} />
        </Link>
        <span className="hidden h-4 w-px bg-zinc-800 md:block" />
        <Logo className="hidden md:flex" />
        <div className="hidden items-center gap-2 md:flex">
          <span className="text-zinc-700">/</span>
          <span className="text-sm text-zinc-300">{t('builder.untitledDraft')}</span>
        </div>
      </div>

      {/* Center: save status */}
      <div className="flex items-center gap-2 text-xs text-zinc-500">
        <span
          className={cn(
            'h-1.5 w-1.5 rounded-full transition-colors',
            isFresh ? 'bg-accent shadow-[0_0_8px_rgba(99,102,241,0.6)]' : 'bg-emerald-500/70',
          )}
        />
        <span className="tabular-nums">{label}</span>
      </div>

      {/* End: language + actions */}
      <div className="flex items-center gap-2">
        <LanguageToggle />
        <span className="hidden h-4 w-px bg-zinc-800 sm:block" />
        <button
          type="button"
          onClick={handleResetClick}
          disabled={sectionCount === 0}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition focus-ring',
            sectionCount === 0
              ? 'cursor-not-allowed border-zinc-900 text-zinc-700'
              : confirming
                ? 'border-red-900/60 bg-red-950/40 text-red-300 hover:bg-red-950/60'
                : 'border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900',
          )}
        >
          <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.75} />
          {confirming ? t('common.confirmReset') : t('common.reset')}
        </button>
        <Link
          to="/preview"
          className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-950 transition hover:bg-white focus-ring"
        >
          <Eye className="h-3.5 w-3.5" strokeWidth={2} />
          {t('common.preview')}
        </Link>
      </div>
    </header>
  )
}
