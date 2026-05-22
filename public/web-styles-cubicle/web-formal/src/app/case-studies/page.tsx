import type { Metadata } from 'next'
import { InnerBanner } from '@/components/sections/InnerBanner'
import { RationaleCards } from '@/components/sections/RationaleCards'
import { StatsSection } from '@/components/sections/StatsSection'
import { CtaSection } from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real-world results from Bestra consulting engagements across industries.',
}

export default function CaseStudiesPage() {
  return (
    <>
      <InnerBanner
        label="Case studies"
        title="Built on Expertise"
        description="Seasoned professionals bringing diverse expertise, clear perspective, and a practical approach to complex business challenges."
      />
      <StatsSection />
      <RationaleCards
        label="Case studies"
        title="Projects that delivered measurable impact"
        cards={[
          { title: 'Change Enablement', description: 'Aligning teams, roles, and decision-making structures to support strategic priorities. September 10, 2025', cta: { label: 'Explore our work', href: '/decision-clarity' } },
          { title: 'Strategic Realignment', description: 'Assisted a growing company in defining goals and improving decision-making. February 17, 2026', cta: { label: 'Explore our work', href: '/decision-clarity' } },
          { title: 'Market Expansion', description: 'Supported a client in market entry through strategic planning and risk management. November 26, 2025', cta: { label: 'Explore our work', href: '/decision-clarity' } },
          { title: 'Performance Boost', description: 'Boosted productivity through targeted actions to resolve operational inefficiencies. March 3, 2026', cta: { label: 'Explore our work', href: '/decision-clarity' } },
        ]}
      />
      <CtaSection />
    </>
  )
}
