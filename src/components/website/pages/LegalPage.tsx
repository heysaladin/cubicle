import * as React from 'react';
import { SiteHeader } from '@/components/website/SiteHeader';
import { SiteFooter } from '@/components/website/SiteFooter';
import { SectionWrapper } from '@/components/website/SectionWrapper';
import { cn } from '@/lib/utils';

const LEGAL_DOCS = [
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'terms', label: 'Terms of Service' },
  { id: 'cookies', label: 'Cookie Policy' },
  { id: 'dpa', label: 'Data Processing Agreement' },
  { id: 'sla', label: 'Service Level Agreement' },
];

const SECTIONS = [
  {
    title: '1. Introduction',
    body: 'These Terms of Service ("Terms") govern your access to and use of Cubicle ("the Service"), operated by Cubicle Inc. ("we", "us", or "our"). By accessing or using the Service you agree to be bound by these Terms.',
  },
  {
    title: '2. Acceptance of Terms',
    body: 'By creating an account or using any part of the Service, you represent that you are at least 18 years old, have read and understood these Terms, and have the authority to enter into this agreement on behalf of yourself or your organization.',
  },
  {
    title: '3. Use of the Service',
    body: 'You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service in any way that violates any applicable law, transmit any harmful or offensive content, or attempt to gain unauthorized access to any part of the Service.',
  },
  {
    title: '4. Intellectual Property',
    body: 'The Service and its original content, features, and functionality are and will remain the exclusive property of Cubicle Inc. and its licensors. You retain ownership of any content you submit, post, or display through the Service.',
  },
  {
    title: '5. Privacy',
    body: 'Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your information.',
  },
  {
    title: '6. Termination',
    body: 'We may terminate or suspend your access to the Service immediately, without prior notice, if we determine that you have violated these Terms. Upon termination, your right to use the Service will cease immediately.',
  },
  {
    title: '7. Limitation of Liability',
    body: 'To the maximum extent permitted by applicable law, Cubicle Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the Service.',
  },
  {
    title: '8. Changes to Terms',
    body: 'We reserve the right to modify these Terms at any time. We will notify you of significant changes by email or by displaying a notice within the Service. Your continued use of the Service after changes become effective constitutes acceptance of the new Terms.',
  },
  {
    title: '9. Contact Us',
    body: 'If you have any questions about these Terms, please contact us at legal@cubicle.io.',
  },
];

export function LegalPage() {
  const [active, setActive] = React.useState('terms');

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <SectionWrapper background="default" size="md">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {/* Sidebar nav */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Legal documents
              </p>
              {LEGAL_DOCS.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => setActive(doc.id)}
                  className={cn(
                    'w-full text-left text-sm rounded-md px-3 py-2 transition-colors',
                    active === doc.id
                      ? 'bg-primary text-primary-foreground font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                  )}
                >
                  {doc.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-3 space-y-8">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight">
                {LEGAL_DOCS.find((d) => d.id === active)?.label}
              </h1>
              <p className="text-xs text-muted-foreground">Last updated: July 1, 2026</p>
            </div>

            <div className="space-y-6">
              {SECTIONS.map((section) => (
                <div key={section.title} className="space-y-2">
                  <h2 className="text-sm font-semibold">{section.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </SectionWrapper>

      <SiteFooter />
    </div>
  );
}
