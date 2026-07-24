'use client';

import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { SettingsScreen } from '@/components/mobileapp/screens/SettingsScreen';

const CODE = `import { SettingsScreen } from '@/components/mobileapp/screens/SettingsScreen';

export default function Page() {
  return <SettingsScreen />;
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — Settings"
      description="Settings screen organized into four grouped ListSections: Account (profile, language, dark mode), Notifications (push, email digest, SMS, schedule), Privacy (visibility, read receipts, 2FA, blocked users), and About (version, legal, rate app)."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
        <SettingsScreen />
      </ComponentPreview>
    </DocPage>
  );
}
