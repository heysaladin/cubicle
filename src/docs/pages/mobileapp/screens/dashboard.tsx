'use client';

import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { DashboardScreen } from '@/components/mobileapp/screens/DashboardScreen';

const CODE = `import { DashboardScreen } from '@/components/mobileapp/screens/DashboardScreen';

export default function Page() {
  return <DashboardScreen />;
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — Dashboard"
      description="Home dashboard with a personalized large-title greeting, 2-column stat card grid (Revenue, Users, Sessions, Conversion), a recent activity feed, quick action buttons, and a bottom navigation bar."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
        <DashboardScreen />
      </ComponentPreview>
    </DocPage>
  );
}
