'use client';

import * as React from 'react';
import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { DetailScreen } from '@/components/mobileapp/screens/DetailScreen';

const CODE = `import { DetailScreen } from '@/components/mobileapp/screens/DetailScreen';

export default function Page() {
  return <DetailScreen />;
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — Detail"
      description="Task detail screen with a hero image placeholder, title, metadata (date, status badge, author avatar), body text, a rating widget, and a sticky bottom action bar with primary and secondary actions."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
        <DetailScreen />
      </ComponentPreview>
    </DocPage>
  );
}
