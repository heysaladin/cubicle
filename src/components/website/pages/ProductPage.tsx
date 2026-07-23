import * as React from 'react';
import { Zap, Shield, Globe, BarChart3, Users, Lock, GitBranch, Layers, Bell, Code2 } from 'lucide-react';
import { SiteHeader } from '@/components/website/SiteHeader';
import { HeroSection } from '@/components/website/HeroSection';
import { FeatureGrid, FeatureCard } from '@/components/website/FeatureCard';
import { StatsBanner } from '@/components/website/StatsBanner';
import { CTASection } from '@/components/website/CTASection';
import { SiteFooter } from '@/components/website/SiteFooter';
import { SectionWrapper, SectionHeading } from '@/components/website/SectionWrapper';
import { Badge } from '@/components/ui/badge';

const CORE_FEATURES = [
  { icon: <GitBranch />, title: 'Version control built in', description: 'Every change is tracked. Roll back to any point in your project history with one click.' },
  { icon: <Layers />, title: 'Modular architecture', description: 'Break your work into reusable modules. Compose complex products from simple, tested building blocks.' },
  { icon: <Bell />, title: 'Smart notifications', description: 'Get alerted only on what matters. Customizable per-project and per-channel notification rules.' },
  { icon: <Code2 />, title: 'Developer API', description: 'Full REST and GraphQL API access. Automate anything or build custom integrations in minutes.' },
];

const ADVANCED_FEATURES = [
  { icon: <BarChart3 />, title: 'Real-time analytics', description: 'Monitor performance and usage across every project with live dashboards.' },
  { icon: <Users />, title: 'Guest access', description: 'Invite clients or stakeholders with read-only or limited-edit access.' },
  { icon: <Lock />, title: 'Audit logs', description: 'Full visibility into who did what and when — for compliance and debugging.' },
  { icon: <Globe />, title: 'Multi-region storage', description: 'Choose where your data lives. GDPR-compliant storage in EU, US, and APAC.' },
];

const STATS = [
  { value: '3×', label: 'Faster shipping', description: 'average across teams' },
  { value: '40%', label: 'Less context switching', description: 'reported by users' },
  { value: '200+', label: 'Integrations', description: 'with your existing stack' },
  { value: '10min', label: 'Avg setup time', description: 'to full productivity' },
];

export function ProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <HeroSection
        badge="Product overview"
        headline="One platform for your entire product workflow"
        subheadline="From idea to production, Cubicle keeps your team in sync at every step — without the tool sprawl."
        primaryCta={{ label: 'Start for free', href: '#' }}
        secondaryCta={{ label: 'See all features', href: '#' }}
      />

      <StatsBanner stats={STATS} variant="muted" />

      <SectionWrapper background="default">
        <SectionHeading
          eyebrow="Core features"
          title="Built for how modern teams actually work"
          description="We spent two years talking to product teams before writing a single line of code. Cubicle is what they asked for."
        />
        <FeatureGrid features={CORE_FEATURES} columns={2} variant="card" />
      </SectionWrapper>

      {/* Highlight feature */}
      <SectionWrapper background="muted">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <Badge variant="secondary">Spotlight</Badge>
            <h2 className="text-2xl font-bold tracking-tight">
              Your entire workflow, one editor
            </h2>
            <p className="text-muted-foreground">
              Stop toggling between Notion, Jira, Figma, and your IDE. Cubicle's unified editor
              connects your docs, tasks, designs, and code reviews in one continuous surface.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                'Inline code snippets with syntax highlighting',
                'Drag-and-drop task management inside docs',
                'Live design embeds from Figma',
                'One-click GitHub PR links',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-video rounded-xl bg-muted-foreground/10 border flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Editor screenshot</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="default">
        <SectionHeading
          eyebrow="Advanced"
          title="Enterprise-ready from day one"
          description="Security, compliance, and scalability built in — not bolted on."
          align="left"
        />
        <FeatureGrid features={ADVANCED_FEATURES} columns={4} variant="minimal" />
      </SectionWrapper>

      <CTASection
        headline="See Cubicle in action"
        subheadline="Book a 30-minute demo with our team — no sales pitch, just the product."
        primaryCta={{ label: 'Book a demo', href: '#' }}
        secondaryCta={{ label: 'Start free trial', href: '#' }}
        variant="muted"
      />

      <SiteFooter />
    </div>
  );
}
