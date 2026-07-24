import { SiteHeader } from '@/components/website/SiteHeader';
import { TeamMemberCard } from '@/components/website/TeamMemberCard';
import { StatsBanner } from '@/components/website/StatsBanner';
import { CTASection } from '@/components/website/CTASection';
import { SiteFooter } from '@/components/website/SiteFooter';
import { SectionWrapper, SectionHeading } from '@/components/website/SectionWrapper';

const STATS = [
  { value: '2022', label: 'Founded', description: 'San Francisco, CA' },
  { value: '50K+', label: 'Users', description: 'across 120 countries' },
  { value: '32', label: 'Team members', description: 'across 8 time zones' },
  { value: '$12M', label: 'Series A', description: 'raised in 2024' },
];

const TEAM = [
  { name: 'Aria Chen', role: 'CEO & Co-founder', bio: 'Previously led product at Stripe for 6 years. Passionate about developer tooling and team culture.' },
  { name: 'James Park', role: 'CTO & Co-founder', bio: 'Ex-Staff Engineer at Vercel and Netlify. Open-source contributor with 10+ years in infrastructure.' },
  { name: 'Leila Torres', role: 'Head of Design', bio: 'Designed products used by 50M+ people. Former design lead at Notion and Figma.' },
  { name: 'Sam Wright', role: 'Head of Growth', bio: 'Scaled three B2B SaaS products from 0 to 100K users. Previously at Linear and Loom.' },
  { name: 'Priya Okonkwo', role: 'Head of Engineering', bio: 'Built distributed systems at Google and Cloudflare. Loves Rust, distributed systems, and coffee.' },
  { name: 'David Müller', role: 'Head of Customer Success', bio: 'Helped 500+ teams onboard and get value from complex developer tools. Empathy-first approach.' },
];

const VALUES = [
  {
    title: 'Ship with intention',
    description: 'We believe great products come from deliberate choices, not endless iteration. We move fast, but we think first.',
  },
  {
    title: 'Default to transparency',
    description: "Internally and externally. We share what we're building, why we're building it, and what isn't working.",
  },
  {
    title: "Respect people's time",
    description: "Every feature we ship has to save our users time — or we don't ship it. Simplicity is the hardest thing to build.",
  },
  {
    title: 'Build for the long run',
    description: 'Short-term growth hacks are easy. We focus on building something that teams will still love in 10 years.',
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Mission */}
      <SectionWrapper background="default" size="lg">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Our mission</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            Make great software the default, not the exception
          </h1>
          <p className="text-lg text-muted-foreground">
            We started Cubicle because we were tired of juggling a dozen tools just to ship one product.
            There had to be a better way — so we built it.
          </p>
        </div>
      </SectionWrapper>

      <StatsBanner stats={STATS} variant="muted" />

      {/* Story */}
      <SectionWrapper background="default">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Our story</p>
            <h2 className="text-2xl font-bold tracking-tight">Started by a frustrated engineering team</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                In 2022, Aria and James were leading product and engineering at a fast-growing startup.
                Despite having a talented team, they spent more time managing tools than building product.
              </p>
              <p>
                After searching for a unified solution and finding nothing that fit, they decided to build one.
                Cubicle launched in private beta in late 2022 and reached 1,000 active teams within six months.
              </p>
              <p>
                Today, Cubicle is trusted by over 50,000 users and is backed by world-class investors who believe
                in the future of integrated developer workflows.
              </p>
            </div>
          </div>
          <div className="aspect-square rounded-xl bg-muted border flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Founding team photo</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper background="muted">
        <SectionHeading
          eyebrow="Values"
          title="What we believe in"
          description="These aren't aspirational — they're the decisions we make every day."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {VALUES.map((v) => (
            <div key={v.title} className="bg-background rounded-lg border p-6 space-y-2">
              <h3 className="text-sm font-semibold">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper background="default">
        <SectionHeading
          eyebrow="Team"
          title="The people behind Cubicle"
          description="A small team with big ambitions — distributed across the globe."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        headline="Want to join us?"
        subheadline="We're always looking for people who care deeply about craft and product."
        primaryCta={{ label: 'View open roles', href: '#' }}
        secondaryCta={{ label: 'Learn about our culture', href: '#' }}
        variant="muted"
      />

      <SiteFooter />
    </div>
  );
}
