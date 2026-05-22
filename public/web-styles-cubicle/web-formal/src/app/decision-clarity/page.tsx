import type { Metadata } from 'next'
import { InnerBanner } from '@/components/sections/InnerBanner'
import { RationaleCards } from '@/components/sections/RationaleCards'
import { CtaSection } from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Decision Clarity',
  description: 'Structured decision frameworks that accelerate better decisions at every level.',
}

export default function DecisionClarityPage() {
  return (
    <>
      <InnerBanner
        label="Decision Clarity"
        title="Decision Clarity"
        description="Bringing structure to complex decisions and priorities, helping leaders move forward with confidence."
        variant="primary"
      />
      <RationaleCards
        label="Case study"
        title="Aligning decisions across teams"
        cards={[
          {
            title: 'The Challenge',
            description: 'The client was operating in a dynamic environment where decisions needed to be made quickly, but internal complexity created delays and confusion.',
            bullets: [
              'Unclear ownership of decisions across teams',
              'Misalignment between leadership vision and daily operations',
              'Slow decision-making processes causing bottlenecks',
              'Overreliance on informal or inconsistent workflows',
              'Limited visibility into how and why decisions were made',
            ],
          },
          {
            title: 'Our Approach',
            description: 'The work focused on creating clarity through structured frameworks and alignment. Instead of addressing isolated inefficiencies, the approach established a consistent system for decision-making across the organization.',
            bullets: [
              'Definition of clear decision ownership and responsibilities',
              'Alignment of strategic priorities with operational actions',
              'Design of decision-making frameworks and guidelines',
              'Implementation of transparent processes for tracking decisions',
              'Establishment of feedback loops to improve consistency over time',
            ],
          },
          {
            title: 'The Outcome',
            description: 'The result was a more structured and confident approach to decision-making across the organization. Teams gained clarity on responsibilities, and processes became faster and more consistent.',
            bullets: [
              'Clear ownership and accountability for decisions',
              'Faster and more efficient decision-making processes',
              'Stronger alignment between strategy and execution',
              'Improved transparency across teams',
              'A scalable framework to support future growth',
            ],
          },
        ]}
      />
      <RationaleCards
        label="Related projects"
        title="Projects that delivered measurable impact"
        cards={[
          { title: 'Growth Structure', description: 'Supporting sustainable business growth through clear focus, aligned execution, and measurable progress. March 11, 2026', cta: { label: 'Explore our work', href: '/case-studies' } },
          { title: 'Performance Boost', description: 'Boosted productivity through targeted actions to resolve operational inefficiencies. March 3, 2026', cta: { label: 'Explore our work', href: '/case-studies' } },
          { title: 'Market Expansion', description: 'Supported a client in market entry through strategic planning and risk management. November 26, 2025', cta: { label: 'Explore our work', href: '/case-studies' } },
        ]}
      />
      <CtaSection />
    </>
  )
}
