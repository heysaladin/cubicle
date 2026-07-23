import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { ProductPage } from '@/components/website/pages/ProductPage';

const CODE = `import { ProductPage } from '@/components/website/pages/ProductPage';

export default function Page() {
  return <ProductPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="Website — Product / Features"
      description="Product overview page with hero, stats, feature grid, spotlight section, and CTA."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start p-0 overflow-hidden">
        <ProductPage />
      </ComponentPreview>
    </DocPage>
  );
}
