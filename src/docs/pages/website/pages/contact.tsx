import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { ContactPage } from '@/components/website/pages/ContactPage';

const CODE = `import { ContactPage } from '@/components/website/pages/ContactPage';

export default function Page() {
  return <ContactPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="Website — Contact"
      description="Contact page with two-column layout: inquiry form on the left, contact methods and map on the right."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[700px] items-start p-0 overflow-hidden">
        <ContactPage />
      </ComponentPreview>
    </DocPage>
  );
}
