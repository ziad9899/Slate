import {
  Sparkles,
  LayoutGrid,
  CreditCard,
  MessageSquareQuote,
  HelpCircle,
  Mail,
  Megaphone,
  type LucideIcon,
} from 'lucide-react'
import type { SectionType, SectionStyle } from '@/types/section'
import type { TranslationKey } from '@/i18n/translations'

export interface SectionDefinition {
  type: SectionType
  /** i18n keys — resolved at render time so labels follow the active language. */
  labelKey: TranslationKey
  descriptionKey: TranslationKey
  icon: LucideIcon
  defaultContentKeys: {
    title: TranslationKey
    description: TranslationKey
    buttonText: TranslationKey
  }
  defaultButtonHref: string
  defaultStyle: SectionStyle
}

const baseStyle: SectionStyle = {
  primaryColor: '#6366F1',
  backgroundColor: '#09090B',
}

export const sectionRegistry: Record<SectionType, SectionDefinition> = {
  hero: {
    type: 'hero',
    labelKey: 'registry.hero.label',
    descriptionKey: 'registry.hero.description',
    icon: Sparkles,
    defaultContentKeys: {
      title: 'defaults.hero.title',
      description: 'defaults.hero.description',
      buttonText: 'defaults.hero.button',
    },
    defaultButtonHref: '#',
    defaultStyle: baseStyle,
  },
  features: {
    type: 'features',
    labelKey: 'registry.features.label',
    descriptionKey: 'registry.features.description',
    icon: LayoutGrid,
    defaultContentKeys: {
      title: 'defaults.features.title',
      description: 'defaults.features.description',
      buttonText: 'defaults.features.button',
    },
    defaultButtonHref: '#',
    defaultStyle: baseStyle,
  },
  pricing: {
    type: 'pricing',
    labelKey: 'registry.pricing.label',
    descriptionKey: 'registry.pricing.description',
    icon: CreditCard,
    defaultContentKeys: {
      title: 'defaults.pricing.title',
      description: 'defaults.pricing.description',
      buttonText: 'defaults.pricing.button',
    },
    defaultButtonHref: '#',
    defaultStyle: baseStyle,
  },
  testimonials: {
    type: 'testimonials',
    labelKey: 'registry.testimonials.label',
    descriptionKey: 'registry.testimonials.description',
    icon: MessageSquareQuote,
    defaultContentKeys: {
      title: 'defaults.testimonials.title',
      description: 'defaults.testimonials.description',
      buttonText: 'defaults.testimonials.button',
    },
    defaultButtonHref: '#',
    defaultStyle: baseStyle,
  },
  faq: {
    type: 'faq',
    labelKey: 'registry.faq.label',
    descriptionKey: 'registry.faq.description',
    icon: HelpCircle,
    defaultContentKeys: {
      title: 'defaults.faq.title',
      description: 'defaults.faq.description',
      buttonText: 'defaults.faq.button',
    },
    defaultButtonHref: '#',
    defaultStyle: baseStyle,
  },
  contact: {
    type: 'contact',
    labelKey: 'registry.contact.label',
    descriptionKey: 'registry.contact.description',
    icon: Mail,
    defaultContentKeys: {
      title: 'defaults.contact.title',
      description: 'defaults.contact.description',
      buttonText: 'defaults.contact.button',
    },
    defaultButtonHref: '#',
    defaultStyle: baseStyle,
  },
  cta: {
    type: 'cta',
    labelKey: 'registry.cta.label',
    descriptionKey: 'registry.cta.description',
    icon: Megaphone,
    defaultContentKeys: {
      title: 'defaults.cta.title',
      description: 'defaults.cta.description',
      buttonText: 'defaults.cta.button',
    },
    defaultButtonHref: '/builder',
    defaultStyle: baseStyle,
  },
}

/** Stable order for the sidebar and any iteration UI. */
export const sectionOrder: SectionType[] = [
  'hero',
  'features',
  'pricing',
  'testimonials',
  'faq',
  'contact',
  'cta',
]

export function listSections(): SectionDefinition[] {
  return sectionOrder.map((t) => sectionRegistry[t])
}
