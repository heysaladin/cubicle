import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { TestimonialsPage } from '@/components/website/pages/TestimonialsPage';

const CODE = `import { TestimonialsPage } from '@/components/website/pages/TestimonialsPage';

export default function Page() {
  return <TestimonialsPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="Website — Testimonials / Case Studies"
      description="Social proof page with testimonial grid, stats banner, and expandable case study entries."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start p-0 overflow-hidden">
        <TestimonialsPage />
      </ComponentPreview>
    </DocPage>
  );
}
