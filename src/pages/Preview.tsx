import { Link } from 'react-router-dom'
import { ArrowLeft, FileX } from 'lucide-react'
import { useBuilderStore } from '@/state/builderStore'
import { SectionRenderer } from '@/components/sections/SectionRenderer'
import { useTranslation } from '@/i18n/useTranslation'

export default function Preview() {
  const { t } = useTranslation()
  const sections = useBuilderStore((s) => s.sections)

  if (sections.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60">
          <FileX className="h-5 w-5 text-zinc-500" strokeWidth={1.5} />
        </div>
        <h1 className="mt-5 text-lg font-medium text-zinc-200 tracking-tight-2">
          {t('preview.empty.title')}
        </h1>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-500">
          {t('preview.empty.body')}
        </p>
        <Link
          to="/builder"
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900 focus-ring"
        >
          <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" strokeWidth={1.75} />
          {t('common.backToEditor')}
        </Link>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-zinc-950">
      <Link
        to="/builder"
        className="group fixed start-5 top-5 z-50 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-3.5 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-md transition hover:border-zinc-700 hover:bg-zinc-900 focus-ring"
      >
        <ArrowLeft
          className="h-3.5 w-3.5 transition rtl:rotate-180 ltr:group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
        {t('common.backToEditor')}
      </Link>

      <main>
        {sections.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
      </main>
    </div>
  )
}
