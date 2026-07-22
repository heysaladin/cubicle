import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { NotificationsPage } from '@/components/webapp/pages/NotificationsPage';

const CODE = `import { NotificationsPage } from '@/components/webapp/pages/NotificationsPage';

export default function Page() {
  return <NotificationsPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="WebApp - Notifications"
      description="Notifications page template with dismissible alert banners for errors, warnings, successes, and informational messages."
    >
      <ComponentPreview
        code={CODE}
        previewClassName="min-h-[650px] items-start p-0 overflow-hidden"
      >
        <NotificationsPage />
      </ComponentPreview>
    </DocPage>
  );
}
