import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { CareersPage } from '@/components/website/pages/CareersPage';

const CODE = `import { CareersPage } from '@/components/website/pages/CareersPage';

export default function Page() {
  return <CareersPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="Website — Careers"
      description="Careers page with mission hero, culture stats, values, benefits grid, and open role listings."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start p-0 overflow-hidden">
        <CareersPage />
      </ComponentPreview>
    </DocPage>
  );
}
