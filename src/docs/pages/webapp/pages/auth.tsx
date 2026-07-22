import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { AuthPage } from '@/components/webapp/pages/AuthPage';

const CODE = `import { AuthPage } from '@/components/webapp/pages/AuthPage';

export default function Page() {
  return <AuthPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="WebApp - Auth"
      description="Standalone authentication page template with a centered login card, email/password fields, forgot password link, and sign-up prompt."
    >
      <ComponentPreview
        code={CODE}
        previewClassName="min-h-[650px] items-start p-0 overflow-hidden"
      >
        <AuthPage />
      </ComponentPreview>
    </DocPage>
  );
}
