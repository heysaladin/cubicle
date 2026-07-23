'use client';

import * as React from 'react';
import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { OnboardingScreen } from '@/components/mobileapp/screens/OnboardingScreen';

const CODE = `import { OnboardingScreen } from '@/components/mobileapp/screens/OnboardingScreen';

export default function Page() {
  return <OnboardingScreen />;
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — Onboarding"
      description="A 3-step onboarding carousel showing step 1 with an illustration placeholder, headline, subheadline, progress dots, and a primary CTA. Full-screen immersive experience with no top bar or bottom nav."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
        <OnboardingScreen />
      </ComponentPreview>
    </DocPage>
  );
}
