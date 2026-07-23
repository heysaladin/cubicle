import * as React from 'react';
import { SiteHeader } from '@/components/website/SiteHeader';
import { TestimonialCard } from '@/components/website/TestimonialCard';
import { StatsBanner } from '@/components/website/StatsBanner';
import { CTASection } from '@/components/website/CTASection';
import { SiteFooter } from '@/components/website/SiteFooter';
import { SectionWrapper, SectionHeading } from '@/components/website/SectionWrapper';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const STATS = [
  { value: '50K+', label: 'Happy teams', description: 'globally' },
  { value: '4.9/5', label: 'Average rating', description: 'across review sites' },
  { value: '97%', label: 'Customer retention', description: 'year over year' },
  { value: '< 4h', label: 'Support response', description: 'average' },
];

const TESTIMONIALS = [
  { quote: 'Cubicle completely transformed how our team ships. We went from weekly deploys to multiple times per day.', authorName: 'Sarah Kim', authorTitle: 'CTO at Finova', rating: 5 },
  { quote: 'The best tool investment we made this year. Setup took 10 minutes and ROI was visible in the first week.', authorName: 'Marcus Patel', authorTitle: 'Head of Engineering, Luminary', rating: 5 },
  { quote: "Our design and eng team is aligned for the first time. Cubicle's collaboration features are unmatched.", authorName: 'Priya Okonkwo', authorTitle: 'Product Lead, Orbit', rating: 5 },
  { quote: "I've tried every project tool out there. Cubicle is the first one our whole team actually uses.", authorName: 'Tom Reidel', authorTitle: 'Engineering Manager, Nexum', rating: 5 },
  { quote: 'We cut our sprint planning time from 3 hours to 45 minutes. The async tools are a game changer.', authorName: 'Yuki Tanaka', authorTitle: 'VP Product, Kanso', rating: 5 },
  { quote: 'Migrating from Jira took one afternoon. We immediately got back 30 minutes a day per engineer.', authorName: 'Lara Novak', authorTitle: 'Staff Engineer, Brightwave', rating: 5 },
];

const CASE_STUDIES = [
  {
    company: 'Finova',
    industry: 'Fintech',
    result: '80% reduction in deploy time',
    summary: 'Finova used Cubicle Pipelines to automate their deployment workflow, cutting deploy times from 4 hours to 45 minutes and eliminating manual rollback steps.',
  },
  {
    company: 'Orbit Health',
    industry: 'Healthcare tech',
    result: '3× faster product iterations',
    summary: 'By replacing 5 separate tools with Cubicle, Orbit\'s product team reduced context-switching and shipped their HIPAA-compliant platform 3 months ahead of schedule.',
  },
  {
    company: 'Kanso',
    industry: 'E-commerce',
    result: '40% fewer missed deadlines',
    summary: 'Kanso\'s async-first culture was being hurt by tool fragmentation. After switching to Cubicle, their cross-timezone team saw a measurable drop in missed milestones.',
  },
];

export function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <SectionWrapper background="default" size="md">
        <div className="text-center space-y-4 mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Social proof</p>
          <h1 className="text-4xl font-bold tracking-tight">Loved by teams worldwide</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Over 50,000 teams use Cubicle to ship better products faster. Here's what they're saying.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.authorName} {...t} />
          ))}
        </div>
      </SectionWrapper>

      <StatsBanner stats={STATS} variant="muted" />

      {/* Case studies */}
      <SectionWrapper background="default">
        <SectionHeading
          eyebrow="Case studies"
          title="Real results, real teams"
          description="A closer look at how teams are using Cubicle to solve real problems."
          align="left"
        />

        <div className="space-y-4">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.company} className="border rounded-xl p-6 sm:p-8 hover:shadow-md transition-shadow group">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{cs.company}</span>
                    <Badge variant="secondary" className="text-xs">{cs.industry}</Badge>
                  </div>
                  <p className="text-xl font-bold text-primary">{cs.result}</p>
                  <p className="text-sm text-muted-foreground max-w-xl">{cs.summary}</p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline shrink-0"
                >
                  Read case study
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        headline="Join 50,000+ teams already using Cubicle"
        subheadline="Start for free — no credit card required."
        primaryCta={{ label: 'Get started for free', href: '#' }}
        secondaryCta={{ label: 'See a demo', href: '#' }}
        variant="brand"
      />

      <SiteFooter />
    </div>
  );
}
