import { Navbar } from '@/components/landing/Navbar'
import { Hero } from '@/components/landing/Hero'
import { FeaturesGrid } from '@/components/landing/FeaturesGrid'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { FinalCTA } from '@/components/landing/FinalCTA'
import { Footer } from '@/components/landing/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
