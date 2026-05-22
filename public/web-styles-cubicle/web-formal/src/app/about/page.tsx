import type { Metadata } from 'next'
import { InnerBanner } from '@/components/sections/InnerBanner'
import { StatsSection } from '@/components/sections/StatsSection'
import { RationaleCards } from '@/components/sections/RationaleCards'
import { TeamGrid } from '@/components/sections/TeamGrid'
import { CtaSection } from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Bestra — our mission, values, and the team behind your results.',
}

export default function AboutPage() {
  return (
    <>
      <InnerBanner
        label="About Bestra"
        title="Solving problems with innovations."
        description="A proficient team of highly skilled and experienced consultants offering detailed analyses, strategic guidance, and impactful business solutions."
      />
      <StatsSection />
      <RationaleCards
        label="About Bestra"
        title="Bestra is a business-focused team dedicated to helping companies grow with clarity, confidence, and purpose"
        cards={[
          {
            title: 'Our mission',
            description: 'We work at the intersection of strategy, execution, and insight—supporting organizations as they navigate complexity and turn ideas into measurable results.',
            cta: { label: 'Discover our solutions', href: '/solutions' },
          },
          {
            title: 'Our approach',
            description: 'Our approach is simple: understand the challenge, define what truly matters, and build solutions that are practical, scalable, and aligned with long-term goals.',
            cta: { label: 'Meet Our Team', href: '/our-team' },
          },
        ]}
      />
      <TeamGrid title="Experienced professionals behind every decision" />
      <CtaSection />
    </>
  )
}
