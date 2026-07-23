'use client';

import * as React from 'react';
import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { HelpScreen } from '@/components/mobileapp/screens/HelpScreen';

const CODE = `import { HelpScreen } from '@/components/mobileapp/screens/HelpScreen';

export default function Page() {
  return <HelpScreen />;
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — Help & Support"
      description="Help screen with a search bar, popular help topics list, contact options (Live Chat, Email, Docs) as MobileCard buttons with icons, and an interactive RatingStars widget for experience feedback."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
        <HelpScreen />
      </ComponentPreview>
    </DocPage>
  );
}
