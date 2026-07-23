import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { BlogPage } from '@/components/website/pages/BlogPage';

const CODE = `import { BlogPage } from '@/components/website/pages/BlogPage';

export default function Page() {
  return <BlogPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="Website — Blog / Resources"
      description="Blog listing page with category filters, featured post, article grid, and newsletter signup."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start p-0 overflow-hidden">
        <BlogPage />
      </ComponentPreview>
    </DocPage>
  );
}
