import { isLightColor } from '@/lib/utils'
import type { SectionStyle } from '@/types/section'

export interface SectionPalette {
  bg: string
  primary: string
  text: string
  textMuted: string
  textFaint: string
  surface: string
  border: string
  buttonText: string
}

/**
 * Derives a section palette from the user-controlled style fields.
 * Light backgrounds get dark text; dark backgrounds get light text.
 * Surfaces and borders are kept as semi-transparent overlays of the
 * opposing tone so they always read on either base.
 */
export function deriveSectionPalette(style: SectionStyle): SectionPalette {
  const light = isLightColor(style.backgroundColor)
  const primaryLight = isLightColor(style.primaryColor)

  return {
    bg: style.backgroundColor,
    primary: style.primaryColor,
    text: light ? '#0A0A0A' : '#FAFAFA',
    textMuted: light ? '#52525B' : '#A1A1AA',
    textFaint: light ? '#71717A' : '#71717A',
    surface: light ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
    border: light ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)',
    buttonText: primaryLight ? '#0A0A0A' : '#FFFFFF',
  }
}
