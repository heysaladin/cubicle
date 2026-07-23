import * as React from 'react';
import { SiteHeader } from '@/components/website/SiteHeader';
import { FAQAccordion } from '@/components/website/FAQAccordion';
import { CTASection } from '@/components/website/CTASection';
import { SiteFooter } from '@/components/website/SiteFooter';
import { SectionWrapper, SectionHeading } from '@/components/website/SectionWrapper';
import { NewsletterForm } from '@/components/website/NewsletterForm';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const FAQ_SECTIONS = [
  {
    category: 'Getting started',
    items: [
      { question: 'How do I create my first project?', answer: 'After signing up, click "New project" from your dashboard. Choose a template or start blank. Your first project is set up in under 2 minutes.' },
      { question: 'Do I need a credit card to sign up?', answer: 'No. The Free plan requires no credit card. You only need one when upgrading to a paid plan.' },
      { question: 'How do I invite my team?', answer: 'Go to Settings → Team, enter your teammates\' email addresses, and choose their role. Invites are sent immediately.' },
    ],
  },
  {
    category: 'Billing & plans',
    items: [
      { question: 'Can I change my plan at any time?', answer: 'Yes. Upgrades take effect immediately and are prorated. Downgrades apply at the end of your current billing period.' },
      { question: 'What happens when I hit the Free plan limits?', answer: 'You\'ll get an in-app notification when approaching limits. Your existing data is never deleted — you just won\'t be able to create new items until you upgrade or free up space.' },
      { question: 'Do you offer refunds?', answer: 'We offer a 30-day money-back guarantee on all paid plans. Contact support and we\'ll process your refund within 5 business days.' },
      { question: 'Is there a discount for annual billing?', answer: 'Yes — annual billing saves you 20% compared to monthly. The discount is applied automatically when you select annual at checkout.' },
    ],
  },
  {
    category: 'Security & privacy',
    items: [
      { question: 'How is my data stored?', answer: 'All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II certified and conduct regular third-party security audits.' },
      { question: 'Where are your servers located?', answer: 'Our primary infrastructure is in the US (AWS us-east-1). EU customers can opt into EU-only storage (Frankfurt) at no extra cost.' },
      { question: 'Can I export my data?', answer: 'Yes. You can export all your data at any time from Settings → Export. Data is available in JSON and CSV formats.' },
    ],
  },
  {
    category: 'Integrations',
    items: [
      { question: 'Which tools does Cubicle integrate with?', answer: 'Cubicle connects with 200+ tools including GitHub, GitLab, Slack, Figma, Linear, Jira, Notion, and Zapier. See the full list at cubicle.io/integrations.' },
      { question: 'Is there an API?', answer: 'Yes. We offer a full REST and GraphQL API on Pro and Enterprise plans. API documentation is available at docs.cubicle.io.' },
      { question: 'Can I build custom integrations?', answer: 'Absolutely. Use our public API and webhooks to build anything. Our Enterprise plan includes dedicated support for custom integration projects.' },
    ],
  },
];

export function FaqPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <SectionWrapper background="default" size="sm">
        <div className="text-center space-y-4 mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Frequently asked questions</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Can't find your answer here? Reach out to our team and we'll get back to you within 4 hours.
          </p>
          <div className="relative max-w-sm mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search questions…" className="pl-9" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-10">
          {FAQ_SECTIONS.map((section) => (
            <div key={section.category} className="space-y-4">
              <h2 className="text-base font-semibold">{section.category}</h2>
              <FAQAccordion items={section.items} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted" size="sm">
        <div className="max-w-md mx-auto text-center space-y-4">
          <h2 className="text-lg font-semibold">Still have questions?</h2>
          <p className="text-sm text-muted-foreground">
            Our support team is available Monday–Friday, 9 AM–6 PM PST.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center rounded-md border text-sm px-4 py-2 hover:bg-muted transition-colors">
              Contact support
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground text-sm px-4 py-2 hover:bg-primary/90 transition-colors">
              Open live chat
            </a>
          </div>
        </div>
      </SectionWrapper>

      <SiteFooter />
    </div>
  );
}
