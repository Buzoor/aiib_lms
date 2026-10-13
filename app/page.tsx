import { SiteHeader } from '@/components/landing/site-header'
import { Hero } from '@/components/landing/hero'
import { SeasonBanner } from '@/components/landing/season-banner'
import { MethodSection } from '@/components/landing/method-section'
import { ProgramOverview } from '@/components/landing/program-overview'
import { HowItWorks } from '@/components/landing/how-it-works'
import { FinalCta } from '@/components/landing/final-cta'
import { ProblemSection } from '@/components/landing/problem-section'
import { AudienceFaq } from '@/components/landing/audience-faq'

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SeasonBanner />
        <ProblemSection />
        <MethodSection />
        <ProgramOverview />
        <HowItWorks />
        <AudienceFaq />
        <FinalCta />
      </main>
    </>
  )
}
