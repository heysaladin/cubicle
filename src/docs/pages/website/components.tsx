import { DocPage, DocSection } from '../../components/DocPage';
import { PricingCard } from '@/components/website/PricingCard';
import { FAQAccordion } from '@/components/website/FAQAccordion';
import { NewsletterForm } from '@/components/website/NewsletterForm';
import { TeamMemberCard } from '@/components/website/TeamMemberCard';
import { BlogCard } from '@/components/website/BlogCard';

const PRICING_FEATURES_FREE = [
  'Up to 3 projects',
  '1 team member',
  'Basic analytics',
  'Community support',
];

const PRICING_FEATURES_PRO = [
  'Unlimited projects',
  'Up to 10 team members',
  'Advanced analytics',
  'Priority email support',
  'Custom domain',
];

const PRICING_FEATURES_ENTERPRISE = [
  'Everything in Pro',
  'Unlimited team members',
  'SSO & advanced security',
  'SLA guarantee',
  'Dedicated support manager',
];

const FAQ_ITEMS = [
  {
    question: 'Can I try Cubicle for free?',
    answer: 'Yes! Our free plan gives you access to core features with no credit card required. Upgrade anytime.',
  },
  {
    question: 'How does billing work?',
    answer: 'We bill monthly or annually. Annual plans come with a 20% discount. You can cancel or change plans at any time.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We are SOC 2 Type II certified and use end-to-end encryption for all data in transit and at rest.',
  },
  {
    question: 'Can I migrate from another tool?',
    answer: 'Yes, we have native importers for the most popular project management tools. Migration usually takes under an hour.',
  },
];

const TEAM = [
  { name: 'Aria Chen', role: 'CEO & Co-founder', bio: 'Previously led product at Stripe for 6 years.' },
  { name: 'James Park', role: 'CTO & Co-founder', bio: 'Ex-Staff Engineer at Vercel and Netlify.' },
  { name: 'Leila Torres', role: 'Head of Design', bio: 'Designed products used by 50M+ people.' },
];

export default function Page() {
  return (
    <DocPage
      title="Website — Components"
      description="UI element components for marketing websites."
    >
      <DocSection title="PricingCard">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <PricingCard
            planName="Free"
            price={0}
            description="Perfect for individuals and side projects."
            features={PRICING_FEATURES_FREE}
            ctaLabel="Get started"
          />
          <PricingCard
            planName="Pro"
            price={29}
            description="For growing teams that need more power."
            features={PRICING_FEATURES_PRO}
            highlighted
            badge="Most popular"
            ctaLabel="Start free trial"
          />
          <PricingCard
            planName="Enterprise"
            price="Custom"
            period=""
            description="For large orgs with advanced requirements."
            features={PRICING_FEATURES_ENTERPRISE}
            ctaLabel="Contact sales"
          />
        </div>
      </DocSection>

      <DocSection title="FAQAccordion">
        <FAQAccordion items={FAQ_ITEMS} />
      </DocSection>

      <DocSection title="NewsletterForm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <NewsletterForm layout="inline" />
          </div>
          <div className="border rounded-lg p-6">
            <NewsletterForm
              headline="Weekly insights"
              description="No spam. Unsubscribe anytime."
              ctaLabel="Join"
              layout="stacked"
            />
          </div>
        </div>
      </DocSection>

      <DocSection title="TeamMemberCard">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {TEAM.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </DocSection>

      <DocSection title="BlogCard">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <BlogCard
            title="How we reduced deploy times by 80% using Cubicle's pipeline tools"
            excerpt="A deep dive into the architectural changes that helped our team ship faster without sacrificing reliability."
            category="Engineering"
            publishedAt="Jul 18"
            readTime="5 min"
            authorName="James Park"
          />
          <BlogCard
            title="Designing for scale: lessons learned building our component system"
            excerpt="The decisions behind our design system and how a shared token library unlocked consistency across all our products."
            category="Design"
            publishedAt="Jul 12"
            readTime="7 min"
            authorName="Leila Torres"
          />
        </div>
      </DocSection>
    </DocPage>
  );
}
