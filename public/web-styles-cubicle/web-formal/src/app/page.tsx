import type { Metadata } from 'next'
import { HeroBanner } from '@/components/sections/HeroBanner'
import { LogosStrip } from '@/components/sections/LogosStrip'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { OutcomesSection } from '@/components/sections/OutcomesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { RationaleCards } from '@/components/sections/RationaleCards'
import { CtaSection } from '@/components/sections/CtaSection'
import { BlogSection } from '@/components/sections/BlogSection'

export const metadata: Metadata = {
  title: 'Bestra',
  description: 'Bestra streamlines operations and drives business growth.',
}

export default function Home() {
  return (
    <>
      <HeroBanner />
      <LogosStrip />
      <ServicesGrid />
      <OutcomesSection />
      <TestimonialsSection />
      <RationaleCards />
      <CtaSection />
      <BlogSection />
    </>
  )
}
