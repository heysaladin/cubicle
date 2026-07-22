import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { SupportPage } from '@/components/webapp/pages/SupportPage';

const CODE = `import { SupportPage } from '@/components/webapp/pages/SupportPage';

export default function Page() {
  return <SupportPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="WebApp - Support"
      description="Support page template with article search, response time notice, and a ticket list with status indicators."
    >
      <ComponentPreview
        code={CODE}
        previewClassName="min-h-[650px] items-start p-0 overflow-hidden"
      >
        <SupportPage />
      </ComponentPreview>
    </DocPage>
  );
}
