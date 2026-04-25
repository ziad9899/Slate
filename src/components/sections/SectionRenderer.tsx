import type { Section } from '@/types/section'
import { HeroSection } from './HeroSection'
import { FeaturesSection } from './FeaturesSection'
import { PricingSection } from './PricingSection'
import { TestimonialsSection } from './TestimonialsSection'
import { FAQSection } from './FAQSection'
import { ContactSection } from './ContactSection'
import { CTASection } from './CTASection'

export function SectionRenderer({ section }: { section: Section }) {
  switch (section.type) {
    case 'hero':
      return <HeroSection section={section} />
    case 'features':
      return <FeaturesSection section={section} />
    case 'pricing':
      return <PricingSection section={section} />
    case 'testimonials':
      return <TestimonialsSection section={section} />
    case 'faq':
      return <FAQSection section={section} />
    case 'contact':
      return <ContactSection section={section} />
    case 'cta':
      return <CTASection section={section} />
  }
}
