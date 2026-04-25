import { Sparkles, ArrowLeft } from 'lucide-react'
import { useTranslation } from '@/i18n/useTranslation'

export function EmptyState() {
  const { t } = useTranslation()
  return (
    <div className="flex h-full items-center justify-center px-8 py-16">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60">
          <Sparkles className="h-5 w-5 text-zinc-500" strokeWidth={1.5} />
        </div>
        <h3 className="text-lg font-medium text-zinc-200 tracking-tight-2">
          {t('builder.empty.title')}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">
          {t('builder.empty.body')}
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-500">
          <ArrowLeft className="h-3 w-3 rtl:rotate-180" strokeWidth={1.75} />
          {t('builder.empty.hint')}
        </div>
      </div>
    </div>
  )
}
