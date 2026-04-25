import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="relative h-7 w-7 overflow-hidden rounded-[7px] bg-zinc-950 ring-1 ring-inset ring-white/10">
        <div className="absolute left-1.5 top-1.5 h-1 w-4 rounded-[2px] bg-accent" />
        <div className="absolute left-1.5 top-3.5 h-1 w-2.5 rounded-[2px] bg-zinc-600" />
        <div className="absolute left-1.5 top-[22px] h-1 w-4 rounded-[2px] bg-zinc-800" />
      </div>
      <span className="text-[15px] font-semibold tracking-tight-2 text-zinc-100">Slate</span>
    </div>
  )
}
