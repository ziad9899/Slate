import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '@/i18n/useTranslation'
import { cn } from '@/lib/utils'

interface ColorFieldProps {
  label: string
  value: string
  onChange: (next: string) => void
}

const HEX_RE = /^#?[0-9a-f]{6}$/i

function normalize(v: string): string {
  const trimmed = v.trim()
  return trimmed.startsWith('#') ? trimmed : `#${trimmed}`
}

export function ColorField({ label, value, onChange }: ColorFieldProps) {
  const { t } = useTranslation()
  const [draft, setDraft] = useState(value)
  const [valid, setValid] = useState(true)
  const colorInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setDraft(value)
    setValid(true)
  }, [value])

  const commit = (raw: string) => {
    const candidate = normalize(raw)
    if (HEX_RE.test(candidate)) {
      onChange(candidate.toUpperCase())
      setValid(true)
    } else {
      setValid(false)
    }
  }

  return (
    <div>
      <label className="label-base">{label}</label>
      <div
        className={cn(
          'flex items-center gap-2 rounded-lg border bg-zinc-900/60 p-1.5 transition focus-within:border-zinc-700',
          valid ? 'border-zinc-800' : 'border-red-900/60',
        )}
      >
        <button
          type="button"
          aria-label={t('inspector.changeColorAria', { label })}
          onClick={() => colorInputRef.current?.click()}
          className="relative h-7 w-7 shrink-0 overflow-hidden rounded-md ring-1 ring-inset ring-white/10 transition hover:ring-white/20 focus-ring"
          style={{ backgroundColor: HEX_RE.test(normalize(draft)) ? draft : '#000' }}
        >
          <input
            ref={colorInputRef}
            type="color"
            value={HEX_RE.test(normalize(draft)) ? draft : '#000000'}
            onChange={(e) => {
              setDraft(e.target.value.toUpperCase())
              onChange(e.target.value.toUpperCase())
            }}
            className="absolute inset-0 cursor-pointer opacity-0"
            tabIndex={-1}
          />
        </button>
        <input
          type="text"
          value={draft}
          onChange={(e) => {
            setDraft(e.target.value)
            if (HEX_RE.test(normalize(e.target.value))) commit(e.target.value)
            else setValid(false)
          }}
          onBlur={() => {
            if (!HEX_RE.test(normalize(draft))) {
              setDraft(value)
              setValid(true)
            }
          }}
          spellCheck={false}
          dir="ltr"
          className="w-full bg-transparent font-mono text-xs uppercase tracking-wide text-zinc-200 outline-none placeholder:text-zinc-600"
        />
      </div>
    </div>
  )
}
