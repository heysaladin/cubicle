import { DocPage, DocSection } from '../../components/DocPage';
import { SiteHeader } from '@/components/website/SiteHeader';
import { SiteFooter } from '@/components/website/SiteFooter';
import { AnnouncementBanner } from '@/components/website/AnnouncementBanner';

export default function Page() {
  return (
    <DocPage
      title="Website — Navigation"
      description="Navigation components and patterns for marketing websites."
    >
      <DocSection title="AnnouncementBanner">
        <div className="space-y-3 border rounded-lg overflow-hidden">
          <AnnouncementBanner
            message="New: Cubicle v2.0 is here with a redesigned editor."
            linkLabel="See what's new"
            variant="brand"
          />
          <AnnouncementBanner
            message="Scheduled maintenance on Saturday, July 26 from 2–4 AM UTC."
            linkLabel="Learn more"
            variant="warning"
          />
          <AnnouncementBanner
            message="You're on the free plan. Upgrade to unlock unlimited projects."
            variant="default"
            dismissible={false}
          />
        </div>
      </DocSection>

      <DocSection title="SiteHeader">
        <div className="border rounded-lg overflow-hidden">
          <SiteHeader />
        </div>
      </DocSection>

      <DocSection title="SiteFooter">
        <div className="border rounded-lg overflow-hidden">
          <SiteFooter />
        </div>
      </DocSection>
    </DocPage>
  );
}
