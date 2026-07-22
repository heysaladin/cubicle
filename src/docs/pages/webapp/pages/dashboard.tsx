import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { DashboardPage } from '@/components/webapp/pages/DashboardPage';

const CODE = `import { DashboardPage } from '@/components/webapp/pages/DashboardPage';

export default function Page() {
  return <DashboardPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="WebApp - Dashboard (Overview)"
      description="Dashboard page template with stat cards, revenue chart, and data table. Provides an at-a-glance overview of key metrics."
    >
      <ComponentPreview
        code={CODE}
        previewClassName="min-h-[650px] items-start p-0 overflow-hidden"
      >
        <DashboardPage />
      </ComponentPreview>
    </DocPage>
  );
}
