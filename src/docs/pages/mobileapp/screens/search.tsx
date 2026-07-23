'use client';

import * as React from 'react';
import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { SearchScreen } from '@/components/mobileapp/screens/SearchScreen';

const CODE = `import { SearchScreen } from '@/components/mobileapp/screens/SearchScreen';

export default function Page() {
  return <SearchScreen />;
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — Search"
      description="Explore screen with a pre-filled search bar, recent search pills, and a results section showing mixed content types — projects, tasks, documents, and people — as ActivityFeedItem rows with type badges."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
        <SearchScreen />
      </ComponentPreview>
    </DocPage>
  );
}
