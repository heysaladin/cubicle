import { DocPage, DocSection } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { AuthPage, AuthPageSplit } from '@/components/website/pages/AuthPage';

const CODE_CENTERED = `import { AuthPage } from '@/components/website/pages/AuthPage';

export default function Page() {
  return <AuthPage />;
}`;

const CODE_SPLIT = `import { AuthPageSplit } from '@/components/website/pages/AuthPage';

export default function Page() {
  return <AuthPageSplit />;
}`;

export default function Page() {
  return (
    <DocPage
      title="Website — Auth"
      description="Authentication pages: centered layout and split-panel layout, both with OAuth, email/password, sign in, sign up, and forgot password modes."
    >
      <DocSection title="Centered layout">
        <ComponentPreview code={CODE_CENTERED} previewClassName="min-h-[650px] items-start p-0 overflow-hidden">
          <AuthPage />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Split-panel layout">
        <ComponentPreview code={CODE_SPLIT} previewClassName="min-h-[650px] items-start p-0 overflow-hidden">
          <AuthPageSplit />
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
