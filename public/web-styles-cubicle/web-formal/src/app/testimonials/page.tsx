import type { Metadata } from 'next'
import { InnerBanner } from '@/components/sections/InnerBanner'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { CtaSection } from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'What our clients say about working with Bestra.',
}

export default function TestimonialsPage() {
  return (
    <>
      <InnerBanner
        label="Testimonials"
        title="Voices from our clients"
        description="Clients express their success stories, showcasing how our personalized strategies and joint efforts have led to notable achievements and long-term benefits."
      />
      <TestimonialsSection
        title="What our clients say about working with us"
        testimonials={[
          { quote: 'Partnering with Bestra illuminated the path we needed. Their organized approach allowed us to set priorities, make rapid decisions, and proceed with certainty.', name: 'Daniel', title: 'Head of Operations', company: 'Growth Company' },
          { quote: 'Bestra worked closely with our team at every stage. Their hands-on support and practical thinking made a real difference in how we execute and measure results.', name: 'Mark', title: 'Managing Director', company: 'Mid-Market Business' },
          { quote: 'The improvements we saw were tangible. From streamlined processes to clearer reporting, Bestra helped us build a stronger, more scalable foundation.', name: 'Sofia', title: 'CEO', company: 'Technology Company' },
          { quote: 'Bestra brought clarity to our priorities and aligned stakeholders around a shared vision. The result was faster execution and stronger outcomes.', name: 'Laura', title: 'COO', company: 'Growth Company' },
          { quote: 'The Bestra team didn\'t just consult — they partnered with us. Their structured thinking and practical mindset delivered measurable progress.', name: 'James', title: 'Founder', company: 'SaaS Company' },
          { quote: 'Working with Bestra gave us a clear framework for action. We moved faster, avoided costly mistakes, and finally felt in control of our strategic direction.', name: 'Michael', title: 'Managing Director', company: 'Consulting Firm' },
        ]}
      />
      <CtaSection />
    </>
  )
}
