import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { HomePage } from '@/components/website/pages/HomePage';

const CODE = `import { HomePage } from '@/components/website/pages/HomePage';

export default function Page() {
  return <HomePage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="Website — Home"
      description="Full landing page with announcement banner, hero, logo cloud, stats, features, testimonials, and CTA."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start p-0 overflow-hidden">
        <HomePage />
      </ComponentPreview>
    </DocPage>
  );
}
