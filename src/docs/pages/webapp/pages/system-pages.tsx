import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { SystemPagesPage } from '@/components/webapp/pages/SystemPagesPage';

const CODE = `import { SystemPagesPage } from '@/components/webapp/pages/SystemPagesPage';

export default function Page() {
  return <SystemPagesPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="WebApp - System Pages"
      description="System page templates for 404 Not Found and 503 Maintenance states, using EmptyState with full-viewport centered layouts."
    >
      <ComponentPreview
        code={CODE}
        previewClassName="min-h-[650px] items-start p-0 overflow-hidden"
      >
        <SystemPagesPage />
      </ComponentPreview>
    </DocPage>
  );
}
