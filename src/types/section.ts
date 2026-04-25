export type SectionType =
  | 'hero'
  | 'features'
  | 'pricing'
  | 'testimonials'
  | 'faq'
  | 'contact'
  | 'cta'

export interface SectionContent {
  title: string
  description: string
  buttonText: string
  buttonHref: string
}

export interface SectionStyle {
  primaryColor: string
  backgroundColor: string
}

export interface Section {
  id: string
  type: SectionType
  content: SectionContent
  style: SectionStyle
}

/** What the Inspector can patch on a selected section. */
export type SectionPatch = {
  content?: Partial<SectionContent>
  style?: Partial<SectionStyle>
}
