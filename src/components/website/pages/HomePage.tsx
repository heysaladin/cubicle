import * as React from 'react';
import { Zap, Shield, Globe, BarChart3, Users, Lock } from 'lucide-react';
import { AnnouncementBanner } from '@/components/website/AnnouncementBanner';
import { SiteHeader } from '@/components/website/SiteHeader';
import { HeroSection } from '@/components/website/HeroSection';
import { LogoCloud } from '@/components/website/LogoCloud';
import { StatsBanner } from '@/components/website/StatsBanner';
import { FeatureGrid } from '@/components/website/FeatureCard';
import { TestimonialCard } from '@/components/website/TestimonialCard';
import { CTASection } from '@/components/website/CTASection';
import { SiteFooter } from '@/components/website/SiteFooter';
import { SectionWrapper, SectionHeading } from '@/components/website/SectionWrapper';

const FEATURES = [
  { icon: <Zap />, title: 'Lightning fast', description: 'Sub-second load times on every page, anywhere in the world.' },
  { icon: <Shield />, title: 'Secure by default', description: 'End-to-end encryption and SOC 2 compliance out of the box.' },
  { icon: <Globe />, title: 'Global CDN', description: 'Distributed across 200+ edge locations for ultra-low latency.' },
  { icon: <BarChart3 />, title: 'Advanced analytics', description: 'Real-time dashboards and custom reports for every team.' },
  { icon: <Users />, title: 'Team collaboration', description: 'Invite unlimited teammates and manage permissions granularly.' },
  { icon: <Lock />, title: 'Role-based access', description: 'Fine-grained access control to keep sensitive data protected.' },
];

const LOGOS = [
  { name: 'Acme Corp' },
  { name: 'Globex' },
  { name: 'Initech' },
  { name: 'Umbrella' },
  { name: 'Weyland' },
  { name: 'Soylent' },
];

const STATS = [
  { value: '50K+', label: 'Active users', description: 'across 120 countries' },
  { value: '99.9%', label: 'Uptime SLA', description: 'guaranteed' },
  { value: '2M+', label: 'Projects created', description: 'and counting' },
  { value: '<50ms', label: 'Avg response time', description: 'globally' },
];

const TESTIMONIALS = [
  {
    quote: 'Cubicle completely transformed how our team ships. We went from weekly deploys to multiple deploys a day.',
    authorName: 'Sarah Kim',
    authorTitle: 'CTO at Finova',
    rating: 5,
  },
  {
    quote: 'The best tool investment we made this year. Setup took 10 minutes and ROI was visible in the first week.',
    authorName: 'Marcus Patel',
    authorTitle: 'Head of Engineering, Luminary',
    rating: 5,
  },
  {
    quote: "Our entire design and eng team is aligned for the first time ever. Cubicle's collaboration features are unmatched.",
    authorName: 'Priya Okonkwo',
    authorTitle: 'Product Lead, Orbit',
    rating: 5,
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBanner
        message="Cubicle v2.0 is here — redesigned editor, 3× faster performance."
        linkLabel="See what's new"
        variant="brand"
      />
      <SiteHeader />

      <HeroSection
        badge="Now in public beta"
        headline="Build products your users will love"
        subheadline="The all-in-one platform for modern teams — ship faster, collaborate better, and grow with confidence."
        primaryCta={{ label: 'Get started for free', href: '#' }}
        secondaryCta={{ label: 'View demo', href: '#' }}
      />

      <LogoCloud label="Trusted by teams at" logos={LOGOS} className="pb-14" />

      <StatsBanner stats={STATS} variant="muted" />

      <SectionWrapper background="default">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need, nothing you don't"
          description="Cubicle is designed to reduce complexity and help teams focus on what matters."
        />
        <FeatureGrid features={FEATURES} columns={3} variant="card" />
      </SectionWrapper>

      <SectionWrapper background="muted">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by teams worldwide"
          description="Don't take our word for it — hear from the teams already shipping faster with Cubicle."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.authorName} {...t} />
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        headline="Start building today"
        subheadline="Free forever for individuals. Upgrade when your team grows."
        primaryCta={{ label: 'Get started for free', href: '#' }}
        secondaryCta={{ label: 'Talk to sales', href: '#' }}
        variant="brand"
      />

      <SiteFooter />
    </div>
  );
}
