'use client';

import * as React from 'react';
import { DocPage, DocSection } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { EmptyStatesScreen } from '@/components/mobileapp/screens/EmptyStatesScreen';

const CODE = `import { EmptyStatesScreen } from '@/components/mobileapp/screens/EmptyStatesScreen';

export default function Page() {
  return <EmptyStatesScreen />;
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — Empty States"
      description="Five empty state screens each wrapped in a PhoneFrame: No Results (search), No Notifications, No Transactions, App Error, and Offline state. Each uses MobileEmptyState with a contextual icon, title, description, and action buttons."
    >
      <DocSection title="All Empty States">
        <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-x-auto flex-wrap gap-8">
          <EmptyStatesScreen />
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
