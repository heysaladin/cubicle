import { DocPage, DocSection } from '../../components/DocPage';
import { AnnouncementBanner } from '@/components/website/AnnouncementBanner';
import { SiteHeader } from '@/components/website/SiteHeader';
import { HeroSection } from '@/components/website/HeroSection';
import { LogoCloud } from '@/components/website/LogoCloud';
import { StatsBanner } from '@/components/website/StatsBanner';
import { CTASection } from '@/components/website/CTASection';
import { SiteFooter } from '@/components/website/SiteFooter';
import { Zap, Shield, Globe, BarChart3 } from 'lucide-react';
import { FeatureGrid } from '@/components/website/FeatureCard';
import { SectionWrapper, SectionHeading } from '@/components/website/SectionWrapper';

const FEATURES = [
  { icon: <Zap />, title: 'Lightning fast', description: 'Sub-second load times on every page.' },
  { icon: <Shield />, title: 'Secure by default', description: 'SOC 2 certified end-to-end.' },
  { icon: <Globe />, title: 'Global CDN', description: '200+ edge locations worldwide.' },
  { icon: <BarChart3 />, title: 'Advanced analytics', description: 'Real-time dashboards for every team.' },
];

const LOGOS = [
  { name: 'Acme Corp' },
  { name: 'Globex' },
  { name: 'Initech' },
  { name: 'Umbrella' },
  { name: 'Weyland' },
];

const STATS = [
  { value: '50K+', label: 'Active users' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '2M+', label: 'Projects created' },
  { value: '<50ms', label: 'Avg response' },
];

export default function Page() {
  return (
    <DocPage
      title="Website — System"
      description="Full-page compositions and advanced patterns for marketing websites."
    >
      <DocSection title="Landing page composition">
        <div className="border rounded-lg overflow-hidden">
          <AnnouncementBanner
            message="Cubicle v2.0 is here — faster, smarter, better."
            linkLabel="What's new"
            variant="brand"
            dismissible={false}
          />
          <SiteHeader />
          <HeroSection
            badge="Now in public beta"
            headline="Build products your users will love"
            subheadline="The all-in-one platform for modern teams — ship faster, collaborate better, grow with confidence."
          />
          <LogoCloud label="Trusted by teams at" logos={LOGOS} className="pb-12" />
          <StatsBanner stats={STATS} variant="muted" />
          <SectionWrapper background="default">
            <SectionHeading
              eyebrow="Features"
              title="Everything you need, nothing you don't"
              description="Cubicle is designed to reduce complexity and help teams focus on what matters."
            />
            <FeatureGrid features={FEATURES} columns={4} variant="minimal" />
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
      </DocSection>
    </DocPage>
  );
}
