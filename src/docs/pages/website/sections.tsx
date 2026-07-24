import { Zap, Shield, Globe, BarChart3, Users, Lock } from 'lucide-react';
import { DocPage, DocSection } from '../../components/DocPage';
import { HeroSection } from '@/components/website/HeroSection';
import { FeatureGrid } from '@/components/website/FeatureCard';
import { TestimonialCard } from '@/components/website/TestimonialCard';
import { StatsBanner } from '@/components/website/StatsBanner';
import { CTASection } from '@/components/website/CTASection';
import { LogoCloud } from '@/components/website/LogoCloud';
import { SectionWrapper, SectionHeading } from '@/components/website/SectionWrapper';

const FEATURES = [
  { icon: <Zap />, title: 'Lightning fast', description: 'Built for speed from the ground up. Sub-second load times on every page.' },
  { icon: <Shield />, title: 'Secure by default', description: 'End-to-end encryption and SOC 2 compliance out of the box.' },
  { icon: <Globe />, title: 'Global CDN', description: 'Distributed across 200+ edge locations for low latency worldwide.' },
  { icon: <BarChart3 />, title: 'Advanced analytics', description: 'Real-time dashboards and customizable reports for every team.' },
  { icon: <Users />, title: 'Team collaboration', description: 'Invite unlimited teammates and manage permissions granularly.' },
  { icon: <Lock />, title: 'Role-based access', description: 'Fine-grained access control to keep sensitive data protected.' },
];

const LOGOS = [
  { name: 'Acme Corp' },
  { name: 'Globex' },
  { name: 'Initech' },
  { name: 'Umbrella' },
  { name: 'Weyland' },
];

const STATS = [
  { value: '50K+', label: 'Active users', description: 'across 120 countries' },
  { value: '99.9%', label: 'Uptime SLA', description: 'guaranteed' },
  { value: '2M+', label: 'Projects created', description: 'and counting' },
  { value: '<50ms', label: 'Avg response time', description: 'globally' },
];

export default function Page() {
  return (
    <DocPage
      title="Website — Sections"
      description="Page section building blocks for marketing websites."
    >
      <DocSection title="HeroSection — Centered">
        <div className="border rounded-lg overflow-hidden bg-background">
          <HeroSection
            badge="Now in public beta"
            headline="Build products your users will love"
            subheadline="The all-in-one platform for modern teams — ship faster, collaborate better, and grow with confidence."
          />
        </div>
      </DocSection>

      <DocSection title="HeroSection — Left aligned">
        <div className="border rounded-lg overflow-hidden bg-background">
          <HeroSection
            headline="Everything your team needs"
            subheadline="One platform, zero friction. From design to deployment."
            align="left"
            primaryCta={{ label: 'Start for free', href: '#' }}
            secondaryCta={{ label: 'Book a demo', href: '#' }}
          />
        </div>
      </DocSection>

      <DocSection title="LogoCloud">
        <div className="border rounded-lg p-8 bg-background">
          <LogoCloud label="Trusted by teams at" logos={LOGOS} />
        </div>
      </DocSection>

      <DocSection title="StatsBanner">
        <div className="border rounded-lg overflow-hidden">
          <StatsBanner stats={STATS} variant="muted" />
        </div>
        <div className="border rounded-lg overflow-hidden mt-3">
          <StatsBanner stats={STATS} variant="brand" />
        </div>
      </DocSection>

      <DocSection title="FeatureGrid — Card variant">
        <div className="border rounded-lg p-6 bg-background">
          <SectionHeading
            eyebrow="Features"
            title="Everything you need, nothing you don't"
            description="Cubicle is designed to reduce complexity and help teams focus on what matters."
          />
          <FeatureGrid features={FEATURES} columns={3} variant="card" />
        </div>
      </DocSection>

      <DocSection title="FeatureGrid — Minimal variant">
        <div className="border rounded-lg p-6 bg-background">
          <FeatureGrid features={FEATURES.slice(0, 4)} columns={4} variant="minimal" />
        </div>
      </DocSection>

      <DocSection title="TestimonialCard">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TestimonialCard
            quote="Cubicle completely transformed how our team ships. We went from weekly deploys to multiple deploys a day."
            authorName="Sarah Kim"
            authorTitle="CTO at Finova"
            rating={5}
          />
          <TestimonialCard
            quote="The best tool investment we've made this year. Setup took 10 minutes and ROI was visible in the first week."
            authorName="Marcus Patel"
            authorTitle="Head of Engineering, Luminary"
            rating={5}
          />
        </div>
      </DocSection>

      <DocSection title="CTASection">
        <div className="border rounded-lg overflow-hidden">
          <CTASection
            headline="Start building today"
            subheadline="Free forever for individuals. Upgrade when your team grows."
            primaryCta={{ label: 'Get started for free', href: '#' }}
            secondaryCta={{ label: 'Talk to sales', href: '#' }}
            variant="muted"
          />
        </div>
        <div className="border rounded-lg overflow-hidden mt-3">
          <CTASection
            headline="Ready to scale?"
            subheadline="Get enterprise-grade security and support for your entire org."
            primaryCta={{ label: 'Contact us', href: '#' }}
            variant="brand"
          />
        </div>
      </DocSection>

      <DocSection title="SectionWrapper + SectionHeading">
        <div className="border rounded-lg overflow-hidden bg-muted">
          <SectionWrapper background="muted" size="sm">
            <SectionHeading
              eyebrow="Why Cubicle"
              title="Built for teams that move fast"
              description="We obsess over developer experience so your team can focus on building, not babysitting tools."
              align="center"
            />
          </SectionWrapper>
        </div>
      </DocSection>
    </DocPage>
  );
}
