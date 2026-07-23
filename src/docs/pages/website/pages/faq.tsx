import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { FaqPage } from '@/components/website/pages/FaqPage';

const CODE = `import { FaqPage } from '@/components/website/pages/FaqPage';

export default function Page() {
  return <FaqPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="Website — FAQ / Help"
      description="FAQ page with search bar, categorized accordion sections, and support contact prompt."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start p-0 overflow-hidden">
        <FaqPage />
      </ComponentPreview>
    </DocPage>
  );
}
