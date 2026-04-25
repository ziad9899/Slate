import { useEffect, useState } from 'react'
import { useBuilderStore } from './builderStore'
import { useTranslation } from '@/i18n/useTranslation'

/**
 * Tracks the last time the document changed and reports a translated
 * "Saved · {time ago}" label. Persistence is synchronous via the
 * Zustand `persist` middleware, so the moment a change lands the
 * write is already on disk.
 */
export function useSaveStatus(): { label: string; isFresh: boolean } {
  const { t } = useTranslation()
  const sections = useBuilderStore((s) => s.sections)
  const [lastChangeAt, setLastChangeAt] = useState<number>(() => Date.now())
  const [, setTick] = useState(0)

  useEffect(() => {
    setLastChangeAt(Date.now())
  }, [sections])

  useEffect(() => {
    const id = window.setInterval(() => setTick((x) => x + 1), 10_000)
    return () => window.clearInterval(id)
  }, [])

  const seconds = Math.max(0, Math.floor((Date.now() - lastChangeAt) / 1000))
  let ago: string
  if (seconds < 5) ago = t('common.justNow')
  else if (seconds < 60) ago = t('common.secondsAgo', { n: seconds })
  else if (seconds < 3600) ago = t('common.minutesAgo', { n: Math.floor(seconds / 60) })
  else if (seconds < 86400) ago = t('common.hoursAgo', { n: Math.floor(seconds / 3600) })
  else ago = t('common.daysAgo', { n: Math.floor(seconds / 86400) })

  return {
    label: `${t('common.savedPrefix')}${ago}`,
    isFresh: seconds < 4,
  }
}
