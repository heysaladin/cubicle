import { SiteHeader } from '@/components/website/SiteHeader';
import { PricingCard } from '@/components/website/PricingCard';
import { FAQAccordion } from '@/components/website/FAQAccordion';
import { CTASection } from '@/components/website/CTASection';
import { SiteFooter } from '@/components/website/SiteFooter';
import { SectionWrapper, SectionHeading } from '@/components/website/SectionWrapper';
import { LogoCloud } from '@/components/website/LogoCloud';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FREE_FEATURES = [
  'Up to 3 projects',
  '1 seat',
  'Basic analytics',
  '5 GB storage',
  'Community support',
];

const PRO_FEATURES = [
  'Unlimited projects',
  'Up to 10 seats',
  'Advanced analytics',
  '50 GB storage',
  'Priority email support',
  'Custom domain',
  'API access',
];

const ENTERPRISE_FEATURES = [
  'Everything in Pro',
  'Unlimited seats',
  'SSO & SAML',
  'Unlimited storage',
  'Dedicated support manager',
  'SLA guarantee',
  'Custom contracts',
  'On-premise option',
];

const FAQ = [
  {
    question: 'Can I try Cubicle for free?',
    answer: 'Yes — our Free plan gives you full access to core features with no credit card required. Upgrade anytime when your team grows.',
  },
  {
    question: 'How does billing work?',
    answer: 'We bill monthly or annually. Annual plans come with a 20% discount applied automatically. You can switch plans or cancel at any time.',
  },
  {
    question: 'What counts as a "seat"?',
    answer: 'A seat is any user with edit access to your workspace. Viewers and guests with read-only access are always free.',
  },
  {
    question: 'Can I change plans mid-cycle?',
    answer: 'Yes. Upgrades take effect immediately and are prorated. Downgrades apply at the end of your current billing period.',
  },
  {
    question: 'Do you offer discounts for startups or nonprofits?',
    answer: 'Yes, we offer a 50% discount for qualifying startups (under 2 years, under $1M funding) and nonprofits. Contact us to apply.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, Amex) and can arrange invoicing for Enterprise plans.',
  },
];

const LOGOS = [
  { name: 'Acme Corp' },
  { name: 'Globex' },
  { name: 'Initech' },
  { name: 'Umbrella' },
  { name: 'Weyland' },
];

export function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <SectionWrapper background="default" size="md">
        <div className="text-center space-y-4 mb-10">
          <h1 className="text-4xl font-bold tracking-tight">Simple, transparent pricing</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start for free. Upgrade when your team is ready. No hidden fees, no surprises.
          </p>
          <div className="flex justify-center">
            <Tabs defaultValue="monthly">
              <TabsList>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annual">Annual (save 20%)</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <PricingCard
            planName="Free"
            price={0}
            description="Perfect for individuals and side projects."
            features={FREE_FEATURES}
            ctaLabel="Get started"
          />
          <PricingCard
            planName="Pro"
            price={29}
            description="For growing teams that need more power."
            features={PRO_FEATURES}
            highlighted
            badge="Most popular"
            ctaLabel="Start free trial"
          />
          <PricingCard
            planName="Enterprise"
            price="Custom"
            period=""
            description="For large orgs with advanced requirements."
            features={ENTERPRISE_FEATURES}
            ctaLabel="Contact sales"
          />
        </div>
      </SectionWrapper>

      <LogoCloud label="Teams that trust us" logos={LOGOS} className="pb-14" />

      <SectionWrapper background="muted">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          description="Everything you need to know about pricing and billing."
        />
        <div className="max-w-2xl mx-auto">
          <FAQAccordion items={FAQ} />
        </div>
      </SectionWrapper>

      <CTASection
        headline="Not sure which plan is right?"
        subheadline="Talk to our team — we'll help you find the best fit for your workflow and budget."
        primaryCta={{ label: 'Talk to sales', href: '#' }}
        secondaryCta={{ label: 'Start for free', href: '#' }}
        variant="muted"
      />

      <SiteFooter />
    </div>
  );
}
