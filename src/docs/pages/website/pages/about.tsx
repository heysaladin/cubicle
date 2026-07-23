import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { AboutPage } from '@/components/website/pages/AboutPage';

const CODE = `import { AboutPage } from '@/components/website/pages/AboutPage';

export default function Page() {
  return <AboutPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="Website — About"
      description="About page with mission hero, stats banner, story section, values grid, and team members."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start p-0 overflow-hidden">
        <AboutPage />
      </ComponentPreview>
    </DocPage>
  );
}
