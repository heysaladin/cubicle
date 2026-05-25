import type { Metadata } from 'next'
import { InnerBanner } from '@/components/sections/InnerBanner'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { RationaleCards } from '@/components/sections/RationaleCards'
import { CtaSection } from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Leadership Advisory',
  description: 'Executive leadership development and advisory programs from [Company].',
}

const leadershipServices = [
  { title: 'Strategic Direction', description: 'We guide businesses in setting priorities and establishing a long-term vision.', href: '/solutions' },
  { title: 'Operational Execution', description: 'Our team actively transforms strategic plans into tangible results.', href: '/solutions' },
  { title: 'Growth Optimization', description: 'We continuously analyze performance to identify opportunities for improvement.', href: '/solutions' },
]

export default function LeadershipAdvisoryPage() {
  return (
    <>
      <InnerBanner
        label="Leadership Advisory"
        title="Leadership Advisory"
        description="Supplying executives with professional guidance to successfully manage extensive growth and transformation efforts."
        variant="primary"
      />
      <RationaleCards
        label="Business Strategy Framework"
        title="Business Strategy Framework"
        cards={[
          {
            title: 'How the approach is applied',
            description: 'This approach is built to address complex business challenges through structured thinking, practical insight, and clear direction. It brings together strategic analysis and execution planning to help organizations navigate change, scale responsibly, and make informed decisions.',
            bullets: [
              'Strategic and operational diagnostics',
              'Alignment of business goals and leadership priorities',
              'Process and performance refinement',
              'Market and competitive positioning',
              'Ongoing advisory support for decision-making',
            ],
          },
          {
            title: 'What this delivers',
            description: 'This solution-oriented approach helps organizations move from uncertainty to structured progress. It creates clarity where complexity exists and ensures that strategic intent is reflected in everyday actions.',
            bullets: [
              'A shared understanding of direction and priorities',
              'Clear frameworks for execution and accountability',
              'Stronger alignment across leadership and teams',
              'Better decision-making supported by data and context',
              'Scalable structures that support future growth',
            ],
          },
        ]}
      />
      <ServicesGrid
        label="Practical solutions"
        title="Practical solutions shaped by real challenges"
        services={leadershipServices}
        layout="grid"
        cta={{ label: 'See All Solutions', href: '/solutions' }}
      />
      <CtaSection />
    </>
  )
}
