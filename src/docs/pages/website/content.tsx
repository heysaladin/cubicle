import { DocPage, DocSection } from '../../components/DocPage';
import { BlogCard } from '@/components/website/BlogCard';
import { TeamMemberCard } from '@/components/website/TeamMemberCard';
import { SectionHeading } from '@/components/website/SectionWrapper';

export default function Page() {
  return (
    <DocPage
      title="Website — Content"
      description="Content and typography components for marketing websites."
    >
      <DocSection title="SectionHeading — Center">
        <div className="border rounded-lg p-8 bg-background">
          <SectionHeading
            eyebrow="Our product"
            title="Built for the way modern teams work"
            description="Cubicle brings your tools, workflows, and people into one streamlined platform. No more context-switching."
            align="center"
          />
        </div>
      </DocSection>

      <DocSection title="SectionHeading — Left">
        <div className="border rounded-lg p-8 bg-background">
          <SectionHeading
            eyebrow="Latest from the blog"
            title="Insights for product builders"
            align="left"
          />
        </div>
      </DocSection>

      <DocSection title="BlogCard">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <BlogCard
            title="How we reduced deploy times by 80% using Cubicle's pipeline tools"
            excerpt="A deep dive into the architectural changes that helped our team ship faster without sacrificing reliability or developer happiness."
            category="Engineering"
            publishedAt="Jul 18, 2026"
            readTime="5 min"
            authorName="James Park"
          />
          <BlogCard
            title="Designing for scale: lessons from building our component system"
            excerpt="The decisions behind our design system and how a shared token library unlocked consistency across all our products."
            category="Design"
            publishedAt="Jul 12, 2026"
            readTime="7 min"
            authorName="Leila Torres"
          />
          <BlogCard
            title="Customer spotlight: How Finova ships 3x faster with Cubicle"
            excerpt="We sat down with Finova's engineering team to understand how Cubicle fits into their daily workflow."
            category="Customer stories"
            publishedAt="Jul 5, 2026"
            readTime="4 min"
            authorName="Aria Chen"
          />
          <BlogCard
            title="The case for async-first collaboration in distributed teams"
            excerpt="Why async communication leads to better decisions, more focus time, and a healthier team culture."
            category="Culture"
            publishedAt="Jun 28, 2026"
            readTime="6 min"
            authorName="James Park"
          />
        </div>
      </DocSection>

      <DocSection title="TeamMemberCard — Card variant">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <TeamMemberCard
            name="Aria Chen"
            role="CEO & Co-founder"
            bio="Previously led product at Stripe for 6 years. Passionate about developer tooling."
          />
          <TeamMemberCard
            name="James Park"
            role="CTO & Co-founder"
            bio="Ex-Staff Engineer at Vercel and Netlify. Open-source contributor."
          />
          <TeamMemberCard
            name="Leila Torres"
            role="Head of Design"
            bio="Designed products used by 50M+ people. Former design lead at Notion."
          />
        </div>
      </DocSection>

      <DocSection title="TeamMemberCard — Minimal variant">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-4">
          {[
            { name: 'Aria Chen', role: 'CEO' },
            { name: 'James Park', role: 'CTO' },
            { name: 'Leila Torres', role: 'Design' },
            { name: 'Sam Wright', role: 'Marketing' },
          ].map((m) => (
            <TeamMemberCard key={m.name} {...m} variant="minimal" />
          ))}
        </div>
      </DocSection>
    </DocPage>
  );
}
