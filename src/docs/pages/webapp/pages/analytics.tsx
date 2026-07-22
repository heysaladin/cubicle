import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { AnalyticsPage } from '@/components/webapp/pages/AnalyticsPage';

const CODE = `import { AnalyticsPage } from '@/components/webapp/pages/AnalyticsPage';

export default function Page() {
  return <AnalyticsPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="WebApp - Analytics / Reports"
      description="Analytics and reporting page template with metric cards and side-by-side chart widgets for performance insights."
    >
      <ComponentPreview
        code={CODE}
        previewClassName="min-h-[650px] items-start p-0 overflow-hidden"
      >
        <AnalyticsPage />
      </ComponentPreview>
    </DocPage>
  );
}
