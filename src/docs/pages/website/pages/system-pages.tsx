import { DocPage, DocSection } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import {
  NotFoundPage,
  ServerErrorPage,
  MaintenancePage,
  ComingSoonPage,
} from '@/components/website/pages/SystemPagesPage';

const CODE_404 = `import { NotFoundPage } from '@/components/website/pages/SystemPagesPage';

export default function Page() {
  return <NotFoundPage />;
}`;

const CODE_500 = `import { ServerErrorPage } from '@/components/website/pages/SystemPagesPage';

export default function Page() {
  return <ServerErrorPage />;
}`;

const CODE_MAINTENANCE = `import { MaintenancePage } from '@/components/website/pages/SystemPagesPage';

export default function Page() {
  return <MaintenancePage />;
}`;

const CODE_COMING_SOON = `import { ComingSoonPage } from '@/components/website/pages/SystemPagesPage';

export default function Page() {
  return <ComingSoonPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="Website — System Pages"
      description="Utility pages for error states and special situations: 404, 500, maintenance mode, and coming soon."
    >
      <DocSection title="404 — Not Found">
        <ComponentPreview code={CODE_404} previewClassName="min-h-[500px] items-start p-0 overflow-hidden">
          <NotFoundPage />
        </ComponentPreview>
      </DocSection>

      <DocSection title="500 — Server Error">
        <ComponentPreview code={CODE_500} previewClassName="min-h-[500px] items-start p-0 overflow-hidden">
          <ServerErrorPage />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Maintenance">
        <ComponentPreview code={CODE_MAINTENANCE} previewClassName="min-h-[450px] items-start p-0 overflow-hidden">
          <MaintenancePage />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Coming Soon">
        <ComponentPreview code={CODE_COMING_SOON} previewClassName="min-h-[400px] items-start p-0 overflow-hidden">
          <ComingSoonPage />
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
