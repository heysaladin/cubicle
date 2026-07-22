import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { DataManagementPage } from '@/components/webapp/pages/DataManagementPage';

const CODE = `import { DataManagementPage } from '@/components/webapp/pages/DataManagementPage';

export default function Page() {
  return <DataManagementPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="WebApp - Data Management"
      description="Data management page template with toolbar actions, filter bar, bulk selection, and a data table for managing records."
    >
      <ComponentPreview
        code={CODE}
        previewClassName="min-h-[650px] items-start p-0 overflow-hidden"
      >
        <DataManagementPage />
      </ComponentPreview>
    </DocPage>
  );
}
