import { Sparkles, LayoutGrid, CreditCard, MessageSquareQuote, HelpCircle, Megaphone } from 'lucide-react'
import { useTranslation } from '@/i18n/useTranslation'

/**
 * Static, decorative preview of the builder UI used in the hero.
 * Not interactive — visual only. Forced to LTR layout so the columns
 * keep the canonical Sidebar | Canvas | Inspector arrangement
 * regardless of page direction.
 */
export function BuilderMock() {
  const { t } = useTranslation()

  return (
    <div className="relative" dir="ltr">
      <div
        aria-hidden
        className="absolute -inset-x-12 -inset-y-8 -z-10 opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 40%, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0) 70%)',
        }}
      />

      <div className="overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/60 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] ring-1 ring-inset ring-white/[0.04]">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 border-b border-zinc-800/80 bg-zinc-950/60 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <div className="ml-3 hidden items-center gap-2 sm:flex">
            <div className="h-1.5 w-24 rounded-full bg-zinc-800" />
            <div className="h-1.5 w-12 rounded-full bg-zinc-800/70" />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="hidden h-5 w-12 rounded-md bg-zinc-800/70 sm:block" />
            <div className="h-5 w-14 rounded-md bg-accent/80" />
          </div>
        </div>

        <div className="grid grid-cols-[140px_1fr_180px] gap-0">
          {/* Sidebar */}
          <div className="border-r border-zinc-800/80 bg-zinc-950/40 p-2.5">
            <div className="mb-2 px-1 text-[10px] font-medium uppercase tracking-wider text-zinc-600">
              {t('builder.sections')}
            </div>
            <div className="space-y-1">
              <SidebarItem icon={Sparkles} label={t('registry.hero.label')} active />
              <SidebarItem icon={LayoutGrid} label={t('registry.features.label')} />
              <SidebarItem icon={CreditCard} label={t('registry.pricing.label')} />
              <SidebarItem icon={MessageSquareQuote} label={t('registry.testimonials.label')} />
              <SidebarItem icon={HelpCircle} label={t('registry.faq.label')} />
              <SidebarItem icon={Megaphone} label={t('registry.cta.label')} />
            </div>
          </div>

          {/* Canvas */}
          <div className="relative bg-zinc-950/60 p-5">
            <div className="rounded-lg border border-accent/40 bg-zinc-950 p-6 ring-2 ring-accent/30">
              <div className="mx-auto max-w-md text-center">
                <div className="mx-auto mb-3 inline-flex h-4 w-20 items-center justify-center rounded-full bg-zinc-800/80" />
                <div className="mx-auto mb-2 h-3 w-3/4 rounded-md bg-zinc-200/95" />
                <div className="mx-auto mb-4 h-3 w-1/2 rounded-md bg-zinc-200/95" />
                <div className="mx-auto mb-5 space-y-1.5">
                  <div className="mx-auto h-1.5 w-5/6 rounded-full bg-zinc-700" />
                  <div className="mx-auto h-1.5 w-2/3 rounded-full bg-zinc-700" />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-6 w-20 rounded-md bg-accent" />
                  <div className="h-6 w-16 rounded-md border border-zinc-700" />
                </div>
              </div>
              <Corner className="-left-1 -top-1" />
              <Corner className="-right-1 -top-1" />
              <Corner className="-bottom-1 -left-1" />
              <Corner className="-bottom-1 -right-1" />
            </div>

            <div className="mt-3 rounded-lg border border-zinc-800/60 bg-zinc-900/30 p-4 opacity-60">
              <div className="grid grid-cols-3 gap-2">
                <div className="h-12 rounded-md bg-zinc-800/60" />
                <div className="h-12 rounded-md bg-zinc-800/60" />
                <div className="h-12 rounded-md bg-zinc-800/60" />
              </div>
            </div>
          </div>

          {/* Inspector */}
          <div className="border-l border-zinc-800/80 bg-zinc-950/40 p-3">
            <div className="mb-2 px-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-600">
              {t('inspector.editingLabel')}
            </div>
            <div className="space-y-3">
              <InspectorField label={t('inspector.field.title')} filled />
              <InspectorField label={t('inspector.field.description')} rows={2} />
              <InspectorField label={t('inspector.field.buttonText')} />
              <div className="grid grid-cols-2 gap-2 pt-1">
                <ColorChip color="#6366F1" label={t('inspector.field.primaryColor')} />
                <ColorChip color="#09090B" label={t('inspector.field.backgroundColor')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: typeof Sparkles
  label: string
  active?: boolean
}) {
  return (
    <div
      className={
        active
          ? 'flex items-center gap-2 rounded-md bg-zinc-800/80 px-2 py-1.5 text-[11px] font-medium text-zinc-100 ring-1 ring-inset ring-white/5'
          : 'flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] text-zinc-400'
      }
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
      <span className="truncate">{label}</span>
    </div>
  )
}

function InspectorField({
  label,
  rows = 1,
  filled = false,
}: {
  label: string
  rows?: number
  filled?: boolean
}) {
  return (
    <div>
      <div className="mb-1 truncate text-[9px] font-medium uppercase tracking-wider text-zinc-600">
        {label}
      </div>
      <div className="space-y-1">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className={
              filled && i === 0
                ? 'h-5 rounded-md bg-zinc-800 ring-1 ring-inset ring-zinc-700/50'
                : 'h-5 rounded-md bg-zinc-900 ring-1 ring-inset ring-zinc-800'
            }
          />
        ))}
      </div>
    </div>
  )
}

function ColorChip({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5 rounded-md bg-zinc-900 p-1.5 ring-1 ring-inset ring-zinc-800">
      <div
        className="h-4 w-4 shrink-0 rounded ring-1 ring-inset ring-white/10"
        style={{ backgroundColor: color }}
      />
      <span className="truncate text-[9px] text-zinc-500">{label}</span>
    </div>
  )
}

function Corner({ className }: { className?: string }) {
  return (
    <div
      className={`absolute h-2 w-2 rounded-[2px] border border-accent bg-zinc-950 ${className ?? ''}`}
    />
  )
}
