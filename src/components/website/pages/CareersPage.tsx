import * as React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { SiteHeader } from '@/components/website/SiteHeader';
import { CTASection } from '@/components/website/CTASection';
import { SiteFooter } from '@/components/website/SiteFooter';
import { SectionWrapper, SectionHeading } from '@/components/website/SectionWrapper';
import { Badge } from '@/components/ui/badge';
import { StatsBanner } from '@/components/website/StatsBanner';

const STATS = [
  { value: '32', label: 'Team members', description: 'across 8 countries' },
  { value: '100%', label: 'Remote-friendly', description: 'async-first culture' },
  { value: '4.8/5', label: 'Glassdoor rating', description: '46 reviews' },
  { value: '90%', label: 'Employee retention', description: 'year over year' },
];

const VALUES = [
  { title: 'Ownership', description: 'Everyone owns their domain end to end. We ship things we\'re proud of.' },
  { title: 'Async-first', description: 'We respect deep work. Meetings have an agenda or they don\'t happen.' },
  { title: 'Growth', description: '$3K/year learning budget per person, plus internal mentorship tracks.' },
  { title: 'Balance', description: 'Unlimited PTO (and we actually use it). No "hero culture" here.' },
];

const BENEFITS = [
  'Competitive salary + equity',
  'Health, dental, and vision',
  '$3,000 learning & development budget',
  'Home office setup stipend ($1,500)',
  'Unlimited PTO',
  'Parental leave (16 weeks)',
  'Annual team offsites',
  '401(k) with company match',
];

const OPENINGS = [
  { title: 'Staff Frontend Engineer', team: 'Engineering', location: 'Remote', type: 'Full-time' },
  { title: 'Senior Backend Engineer (Go)', team: 'Engineering', location: 'Remote', type: 'Full-time' },
  { title: 'Product Designer', team: 'Design', location: 'Remote / SF', type: 'Full-time' },
  { title: 'Senior Product Manager', team: 'Product', location: 'Remote', type: 'Full-time' },
  { title: 'Developer Advocate', team: 'Marketing', location: 'Remote', type: 'Full-time' },
  { title: 'Customer Success Manager', team: 'Customer Success', location: 'Remote', type: 'Full-time' },
];

export function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <SectionWrapper background="default" size="lg">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Careers</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Help us build the future of product development
          </h1>
          <p className="text-lg text-muted-foreground">
            We're a small team with a big mission. Join us if you care deeply about craft, collaboration,
            and building things that last.
          </p>
        </div>
      </SectionWrapper>

      <StatsBanner stats={STATS} variant="muted" />

      {/* Values */}
      <SectionWrapper background="default">
        <SectionHeading
          eyebrow="Culture"
          title="How we work"
          description="We've built a culture that attracts people who do their best work when given trust and ownership."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v) => (
            <div key={v.title} className="space-y-2">
              <h3 className="text-sm font-semibold">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper background="muted">
        <SectionHeading
          eyebrow="Benefits"
          title="We take care of our team"
          align="left"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {BENEFITS.map((b) => (
            <div key={b} className="bg-background border rounded-lg px-4 py-3 text-sm">
              {b}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Open roles */}
      <SectionWrapper background="default">
        <SectionHeading
          eyebrow="Open roles"
          title="Join the team"
          description="We're hiring across engineering, design, and product. All roles are remote-friendly."
          align="left"
        />
        <div className="space-y-3">
          {OPENINGS.map((role) => (
            <a
              key={role.title}
              href="#"
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between border rounded-xl p-4 sm:p-5 hover:shadow-md transition-shadow group"
            >
              <div className="space-y-1">
                <p className="text-sm font-semibold group-hover:text-primary transition-colors">{role.title}</p>
                <div className="flex items-center flex-wrap gap-3 text-xs text-muted-foreground">
                  <Badge variant="secondary" className="text-xs">{role.team}</Badge>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {role.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {role.type}
                  </span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-3 sm:mt-0 shrink-0" />
            </a>
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        headline="Don't see your role?"
        subheadline="We're always interested in exceptional people. Send us a note."
        primaryCta={{ label: 'Send an open application', href: '#' }}
        variant="muted"
      />

      <SiteFooter />
    </div>
  );
}
