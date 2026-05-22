import type { Metadata } from 'next'
import { InnerBanner } from '@/components/sections/InnerBanner'
import { RationaleCards } from '@/components/sections/RationaleCards'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CtaSection } from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Our Values',
  description: 'The values and principles that guide every Bestra engagement.',
}

export default function OurValuesPage() {
  return (
    <>
      <InnerBanner
        label="Our values"
        title="Integrity and innovation at the core of our work"
        description="A proficient team of highly skilled and experienced consultants offering detailed analyses, strategic guidance, and impactful business solutions."
      />
      <RationaleCards
        label="Our values"
        title="Harmonizing strategy, execution, and insight."
        cards={[
          {
            title: 'Our commitment to clarity',
            description: 'When priorities clash and decisions accumulate, teams often struggle to maintain consistency. This can lead to growth that is more reactive than strategic, causing valuable opportunities to slip by unnoticed.',
            cta: { label: 'Learn more', href: '/solutions' },
          },
          {
            title: 'How we can help',
            description: 'Modern businesses face predictable patterns of growth and slowdown. We help teams align strategy and execution to gain insights, drive growth, and maintain transparency and control.',
            cta: { label: 'Learn more', href: '/solutions' },
          },
        ]}
      />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
