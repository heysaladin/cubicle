'use client';

import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { ListFeedScreen } from '@/components/mobileapp/screens/ListFeedScreen';

const CODE = `import { ListFeedScreen } from '@/components/mobileapp/screens/ListFeedScreen';

export default function Page() {
  return <ListFeedScreen />;
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — List / Feed"
      description="Task list screen with a search bar, segmented filter control (All / Active / Done), and swipeable list rows with priority badges. Demonstrates SwipeableRow wrapping ListItems with archive and delete actions."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
        <ListFeedScreen />
      </ComponentPreview>
    </DocPage>
  );
}
