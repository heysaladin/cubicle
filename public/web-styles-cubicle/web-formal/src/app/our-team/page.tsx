import type { Metadata } from 'next'
import { InnerBanner } from '@/components/sections/InnerBanner'
import { TeamGrid } from '@/components/sections/TeamGrid'
import { CtaSection } from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the [Company] team — senior consultants and advisors dedicated to your success.',
}

export default function OurTeamPage() {
  return (
    <>
      <InnerBanner
        label="Our team"
        title="Built on Expertise"
        description="Seasoned professionals bringing diverse expertise, clear perspective, and a practical approach to complex business challenges."
      />
      <TeamGrid />
      <CtaSection />
    </>
  )
}
