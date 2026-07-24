import { DocPage, DocSection } from '../../components/DocPage';
import { AnnouncementBanner } from '@/components/website/AnnouncementBanner';
import { NewsletterForm } from '@/components/website/NewsletterForm';

export default function Page() {
  return (
    <DocPage
      title="Website — Feedback"
      description="Feedback and notification components for marketing websites."
    >
      <DocSection title="AnnouncementBanner — Variants">
        <div className="border rounded-lg overflow-hidden divide-y">
          <AnnouncementBanner
            message="Cubicle v2.0 is now available — new editor, faster performance."
            linkLabel="Read more"
            variant="brand"
            dismissible={false}
          />
          <AnnouncementBanner
            message="Maintenance window tonight from 11 PM – 1 AM UTC."
            linkLabel="Status page"
            variant="warning"
            dismissible={false}
          />
          <AnnouncementBanner
            message="You're viewing a shared workspace. Some features are limited."
            variant="default"
            dismissible={false}
          />
        </div>
      </DocSection>

      <DocSection title="CookieBanner">
        <div className="relative border rounded-lg overflow-hidden bg-background min-h-[120px]">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="bg-background border rounded-lg shadow-lg p-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-sm text-muted-foreground flex-1">
                  We use cookies to improve your experience. By continuing, you agree to our cookie policy.{' '}
                  <a href="#" className="underline hover:text-foreground transition-colors">Learn more</a>
                </p>
                <div className="flex gap-2 shrink-0">
                  <button className="px-3 py-1.5 text-sm border rounded-md hover:bg-muted transition-colors">Decline</button>
                  <button className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Accept all</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="NewsletterForm — All variants">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6 space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Inline</p>
            <NewsletterForm layout="inline" />
          </div>
          <div className="border rounded-lg p-6 space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Stacked</p>
            <NewsletterForm
              headline="Get weekly tips"
              description="Practical advice for product teams. No spam."
              layout="stacked"
            />
          </div>
        </div>
      </DocSection>
    </DocPage>
  );
}
