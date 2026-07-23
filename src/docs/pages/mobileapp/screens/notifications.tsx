'use client';

import * as React from 'react';
import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { NotificationsScreen } from '@/components/mobileapp/screens/NotificationsScreen';

const CODE = `import { NotificationsScreen } from '@/components/mobileapp/screens/NotificationsScreen';

export default function Page() {
  return <NotificationsScreen />;
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — Notifications"
      description="Notifications center with a segmented filter (All / Unread / Archived), a mixed list of read and unread NotificationItems showing mentions, completions, assignments, and system alerts."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
        <NotificationsScreen />
      </ComponentPreview>
    </DocPage>
  );
}
