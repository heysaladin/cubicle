import type { Metadata } from 'next'
import { InnerBanner } from '@/components/sections/InnerBanner'
import { FaqSection } from '@/components/sections/FaqSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CtaSection } from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about working with [Company].',
}

export default function FaqPage() {
  return (
    <>
      <InnerBanner
        label="FAQ"
        title="What You Need to Know"
        description="Clear, structured answers to the most common questions about our consulting services, process, and collaboration model."
      />
      <FaqSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
