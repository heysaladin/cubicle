import type { Metadata } from 'next'
import { InnerBanner } from '@/components/sections/InnerBanner'
import { BlogSection } from '@/components/sections/BlogSection'
import { CtaSection } from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Rethinking Decision-Making',
  description: 'A deep dive into how modern organizations can improve their decision-making culture.',
}

export default function RethinkingDecisionMakingPage() {
  return (
    <>
      <InnerBanner
        label="Blog Post"
        title="Rethinking Decision-Making"
        description="Unclear decision-making structures lead to delays, confusion, and missed opportunities."
      />
      <section className="section">
        <div className="base-container">
          <div className="max-w-[720px] mx-auto flex flex-col gap-[3xl]">
            <p className="text-text-sm text-primary">April 21, 2026</p>
            <h2 className="text-h3 font-medium tracking-tightest leading-[1.1em]">
              Building Clarity in Complex Organizations
            </h2>
            <p className="text-text-body text-primary leading-[1.5em]">
              In many organizations, decision-making is not limited by a lack of data or expertise, but by a lack of clarity. As companies grow, processes become more complex, responsibilities overlap, and decisions take longer than they should.
            </p>
            <p className="text-text-body text-primary leading-[1.5em]">
              Without a clear structure, even simple decisions can create delays, misalignment, and inefficiencies that impact overall performance. Building clarity in decision-making is not just an operational improvement—it is a strategic advantage.
            </p>
            <h2 className="text-h3 font-medium tracking-tightest leading-[1.1em]">
              Why Decision-Making Becomes Complex
            </h2>
            <p className="text-text-body text-primary leading-[1.5em]">
              As organizations scale, decision-making naturally becomes more distributed. More teams, more stakeholders, and more dependencies create an environment where clarity is harder to maintain.
            </p>
            <p className="text-text-body text-primary leading-[1.5em]">Common challenges include:</p>
            <ul className="flex flex-col gap-s text-text-body text-primary pl-4">
              <li>Unclear ownership of decisions</li>
              <li>Too many stakeholders involved in simple processes</li>
              <li>Lack of alignment between strategy and execution</li>
              <li>Inconsistent approaches across teams</li>
              <li>Overreliance on informal communication</li>
            </ul>
            <p className="text-text-body text-primary leading-[1.5em]">
              These issues slow down progress and reduce confidence across the organization, leading to a cycle of inefficiency. When teams are unsure of their roles or the decision-making process, it creates hesitation and second-guessing. This lack of clarity can result in missed opportunities and a reactive rather than proactive approach to challenges.
            </p>
            <h2 className="text-h3 font-medium tracking-tightest leading-[1.1em]">
              The Cost of Unclear Decisions
            </h2>
            <p className="text-text-body text-primary leading-[1.5em]">
              When decision-making lacks structure, the impact goes beyond delays. It affects how teams operate on a daily basis.
            </p>
            <p className="text-text-body text-primary leading-[1.5em]">
              Decisions are often revisited multiple times, leading to unnecessary friction and inefficiencies. This can cause teams to diverge, resulting in duplicated efforts or conflicting outcomes. In some instances, crucial decisions are delayed, hindering the organization's ability to adapt to changes. Over time, this fosters a culture of uncertainty, where progress relies more on individual initiative than on a cohesive system.
            </p>
            <h2 className="text-h3 font-medium tracking-tightest leading-[1.1em]">
              Creating Clarity Through Structure
            </h2>
            <h2 className="text-h3 font-medium tracking-tightest leading-[1.1em]">
              Balancing Speed and Quality
            </h2>
            <p className="text-text-body text-primary leading-[1.5em]">
              The goal is not to make every decision perfect, but to make decisions efficiently and move forward with confidence. Organizations that find the right balance between speed and quality are better positioned to adapt and grow.
            </p>
            <h2 className="text-h3 font-medium tracking-tightest leading-[1.1em]">
              Building a Culture of Confident Decisions
            </h2>
            <p className="text-text-body text-primary leading-[1.5em]">
              Structure alone is not enough. Decision-making is also influenced by culture. Teams need to feel empowered to make decisions within their scope and trust the system in place.
            </p>
            <p className="text-text-body text-primary leading-[1.5em]">This requires:</p>
            <ul className="flex flex-col gap-s text-text-body text-primary pl-4">
              <li>Clear expectations around responsibilities</li>
              <li>Support from leadership</li>
              <li>A willingness to learn from outcomes</li>
              <li>Continuous improvement of processes</li>
            </ul>
            <p className="text-text-body text-primary leading-[1.5em]">
              When these elements are in place, decision-making transforms into a strategic asset rather than a hindrance. Teams operate with greater confidence, knowing their roles and the processes that guide them.
            </p>
            <h2 className="text-h3 font-medium tracking-tightest leading-[1.1em]">
              Conclusion
            </h2>
            <p className="text-text-body text-primary leading-[1.5em]">
              In complex organizations, clarity is the foundation of effective decision-making. By introducing structure, defining ownership, and aligning decisions with strategy, companies can improve both speed and consistency.
            </p>
            <p className="text-text-body text-primary leading-[1.5em]">
              Decision-making is not just about choosing the right option—it is about creating a system that enables the organization to move forward with confidence.
            </p>
          </div>
        </div>
      </section>
      <BlogSection
        label="Practical guides"
        title="Practical guides to help your business grow"
        posts={[
          { title: 'The Hidden Cost of Inefficiency', description: 'Inefficiencies remain hidden until they significantly impact performance.', category: 'Blog Post', href: '/blog', featured: true },
          { title: 'Market Expansion', description: 'Expand into new markets strategically to reduce risks and enhance success.', category: 'Blog Post', href: '/blog' },
          { title: 'Performance Improvement', description: 'Optimize processes to boost efficiency and sustain top performance.', category: 'Blog Post', href: '/blog' },
        ]}
        cta={{ label: 'All resources', href: '/blog' }}
      />
      <CtaSection />
    </>
  )
}
