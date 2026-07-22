import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { UserManagementPage } from '@/components/webapp/pages/UserManagementPage';

const CODE = `import { UserManagementPage } from '@/components/webapp/pages/UserManagementPage';

export default function Page() {
  return <UserManagementPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="WebApp - User Management"
      description="User management page template with search, action menu, role-based filters, and a data table for managing users and permissions."
    >
      <ComponentPreview
        code={CODE}
        previewClassName="min-h-[650px] items-start p-0 overflow-hidden"
      >
        <UserManagementPage />
      </ComponentPreview>
    </DocPage>
  );
}
