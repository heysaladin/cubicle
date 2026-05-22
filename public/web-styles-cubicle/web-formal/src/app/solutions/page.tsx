import type { Metadata } from 'next'
import { InnerBanner } from '@/components/sections/InnerBanner'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { OutcomesSection } from '@/components/sections/OutcomesSection'
import { RationaleCards } from '@/components/sections/RationaleCards'
import { CtaSection } from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Strategic consulting solutions for strategy, leadership, and organizational performance.',
}

export default function SolutionsPage() {
  return (
    <>
      <InnerBanner
        label="Solutions"
        title="Practical direction for complex business"
        description="We guide organizations through complexity, aligning priorities to achieve results."
        variant="primary"
      />
      <OutcomesSection
        title="Modern businesses face predictable patterns of growth and slowdown"
        outcomes={[
          { number: '01', label: 'Challenge', description: 'Productivity suffers due to costly inefficiencies and delayed decisions.' },
          { number: '02', label: 'Opportunity', description: 'Boost performance by synchronizing strategy, execution, and insights.' },
          { number: '03', label: 'Impact', description: 'Transparency and control enable informed decisions and growth.' },
        ]}
      />
      <ServicesGrid layout="grid" label="What we have to offer" title="Because good intentions aren't enough" description="Businesses start with ambition, focus, and clear goals—but day-to-day pressure, complexity, and constant change get in the way." />
      <RationaleCards
        label="Resources"
        title="Practical guides to help your business grow"
        cards={[
          {
            title: 'How to build a clear business strategy that actually drives results.',
            description: '',
            cta: { label: 'All resources', href: '/blog' },
          },
          {
            title: 'Simple ways to reduce complexity and improve day-to-day performance.',
            description: '',
            cta: { label: 'All resources', href: '/blog' },
          },
        ]}
      />
      <CtaSection />
    </>
  )
}
