import { useCallback } from 'react'
import { useI18nStore, dirFor, type Direction } from './i18nStore'
import { translations, type Language, type TranslationKey } from './translations'

export type TranslateVars = Record<string, string | number>

function format(template: string, vars?: TranslateVars): string {
  if (!vars) return template
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const v = vars[key]
    return v === undefined ? `{${key}}` : String(v)
  })
}

export interface TranslationApi {
  t: (key: TranslationKey, vars?: TranslateVars) => string
  lang: Language
  setLang: (next: Language) => void
  dir: Direction
  isRtl: boolean
}

export function useTranslation(): TranslationApi {
  const lang = useI18nStore((s) => s.lang)
  const setLang = useI18nStore((s) => s.setLang)

  const t = useCallback(
    (key: TranslationKey, vars?: TranslateVars) => {
      const dict = translations[lang]
      const template = dict[key] ?? translations.en[key] ?? key
      return format(template, vars)
    },
    [lang],
  )

  return {
    t,
    lang,
    setLang,
    dir: dirFor(lang),
    isRtl: lang === 'ar',
  }
}
