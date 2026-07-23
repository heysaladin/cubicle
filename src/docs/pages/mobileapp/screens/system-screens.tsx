'use client';

import * as React from 'react';
import { DocPage, DocSection } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { LoadingScreen, AppErrorScreen, OfflineScreen, ForceUpdateScreen } from '@/components/mobileapp/screens/SystemScreensScreen';

const loadingCode = `import { LoadingScreen } from '@/components/mobileapp/screens/SystemScreensScreen';

export default function Page() {
  return <LoadingScreen />;
}`;

const errorCode = `import { AppErrorScreen } from '@/components/mobileapp/screens/SystemScreensScreen';

export default function Page() {
  return <AppErrorScreen />;
}`;

const offlineCode = `import { OfflineScreen } from '@/components/mobileapp/screens/SystemScreensScreen';

export default function Page() {
  return <OfflineScreen />;
}`;

const updateCode = `import { ForceUpdateScreen } from '@/components/mobileapp/screens/SystemScreensScreen';

export default function Page() {
  return <ForceUpdateScreen />;
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — System Screens"
      description="Utility screens that appear outside the main app flow: a skeleton loading/splash screen, an app error screen with retry, an offline/no-internet screen, and a force update prompt with release notes."
    >
      <DocSection title="Loading / Splash Screen">
        <ComponentPreview code={loadingCode} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
          <LoadingScreen />
        </ComponentPreview>
      </DocSection>

      <DocSection title="App Error Screen">
        <ComponentPreview code={errorCode} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
          <AppErrorScreen />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Offline / No Internet Screen">
        <ComponentPreview code={offlineCode} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
          <OfflineScreen />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Force Update Prompt">
        <ComponentPreview code={updateCode} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
          <ForceUpdateScreen />
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
