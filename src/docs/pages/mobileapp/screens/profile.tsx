'use client';

import * as React from 'react';
import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { ProfileScreen } from '@/components/mobileapp/screens/ProfileScreen';

const CODE = `import { ProfileScreen } from '@/components/mobileapp/screens/ProfileScreen';

export default function Page() {
  return <ProfileScreen />;
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — Profile"
      description="User profile screen with avatar, name, username, bio, follower counts, a ProgressRing showing profile completion, and grouped ListSection settings including a destructive sign-out action."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
        <ProfileScreen />
      </ComponentPreview>
    </DocPage>
  );
}
