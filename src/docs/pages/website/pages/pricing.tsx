import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { PricingPage } from '@/components/website/pages/PricingPage';

const CODE = `import { PricingPage } from '@/components/website/pages/PricingPage';

export default function Page() {
  return <PricingPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="Website — Pricing"
      description="Pricing page with three-tier cards, billing toggle, logo cloud, FAQ accordion, and CTA."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start p-0 overflow-hidden">
        <PricingPage />
      </ComponentPreview>
    </DocPage>
  );
}
