import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { SettingsPage } from '@/components/webapp/pages/SettingsPage';

const CODE = `import { SettingsPage } from '@/components/webapp/pages/SettingsPage';

export default function Page() {
  return <SettingsPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="WebApp - Settings"
      description="Settings page template with tabbed sections for Profile, Security, and Notification preferences."
    >
      <ComponentPreview
        code={CODE}
        previewClassName="min-h-[650px] items-start p-0 overflow-hidden"
      >
        <SettingsPage />
      </ComponentPreview>
    </DocPage>
  );
}
