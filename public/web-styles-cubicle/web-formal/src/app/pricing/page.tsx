import type { Metadata } from 'next'
import { InnerBanner } from '@/components/sections/InnerBanner'
import { PricingCards } from '@/components/sections/PricingCards'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CtaSection } from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Flexible engagement models for every stage of your strategic journey.',
}

export default function PricingPage() {
  return (
    <>
      <InnerBanner
        label="Pricing"
        title="Engagement options, clearly defined"
        description="Strategic collaboration frameworks that prioritize clear communication, development, and demonstrable achievements."
      />
      <PricingCards />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
