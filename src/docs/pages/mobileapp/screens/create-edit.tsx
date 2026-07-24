'use client';

import { DocPage, DocSection } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { CreateScreen, EditScreen } from '@/components/mobileapp/screens/CreateEditScreen';

const createCode = `import { CreateScreen } from '@/components/mobileapp/screens/CreateEditScreen';

export default function Page() {
  return <CreateScreen />;
}`;

const editCode = `import { EditScreen } from '@/components/mobileapp/screens/CreateEditScreen';

export default function Page() {
  return <EditScreen />;
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — Create / Edit"
      description="Form screens for creating and editing tasks. Includes title, description (multiline), project picker, priority selector, due date, and assignee fields. The edit variant shows a success toast after saving."
    >
      <DocSection title="Create Task">
        <ComponentPreview code={createCode} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
          <CreateScreen />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Edit Task (with success toast)">
        <ComponentPreview code={editCode} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
          <EditScreen />
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
