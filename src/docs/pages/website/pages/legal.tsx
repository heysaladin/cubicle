import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { LegalPage } from '@/components/website/pages/LegalPage';

const CODE = `import { LegalPage } from '@/components/website/pages/LegalPage';

export default function Page() {
  return <LegalPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="Website — Legal"
      description="Legal page with sidebar document navigation (Privacy, Terms, Cookies, DPA, SLA) and full content area."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[700px] items-start p-0 overflow-hidden">
        <LegalPage />
      </ComponentPreview>
    </DocPage>
  );
}
