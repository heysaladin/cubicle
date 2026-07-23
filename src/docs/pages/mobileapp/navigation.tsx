'use client';

import * as React from 'react';
import { DocPage, DocSection } from '../../components/DocPage';
import { ComponentPreview } from '../../components/ComponentPreview';
import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { BottomNav } from '@/components/mobileapp/BottomNav';
import { SegmentedControl } from '@/components/mobileapp/SegmentedControl';
import { Home, Search, Bell, User, Bookmark, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const topBarBasicCode = `import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';

export function Demo() {
  return (
    <div className="max-w-xs border rounded-xl overflow-hidden">
      <MobileTopBar title="Inbox" />
    </div>
  );
}`;

const topBarBackCode = `import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export function Demo() {
  return (
    <div className="max-w-xs border rounded-xl overflow-hidden">
      <MobileTopBar
        title="Profile"
        showBack
        rightAction={
          <Button size="sm" variant="ghost" className="h-8 px-2 text-xs">Edit</Button>
        }
      />
    </div>
  );
}`;

const topBarLargeCode = `import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { Plus } from 'lucide-react';

export function Demo() {
  return (
    <div className="max-w-xs border rounded-xl overflow-hidden">
      <MobileTopBar
        title="Messages"
        subtitle="3 unread"
        large
        rightAction={
          <button className="p-1.5 rounded-full bg-primary/10 text-primary">
            <Plus className="h-4 w-4" />
          </button>
        }
      />
    </div>
  );
}`;

const bottomNavCode = `import { BottomNav } from '@/components/mobileapp/BottomNav';
import { Home, Search, Bell, User, Bookmark } from 'lucide-react';

export function Demo() {
  return (
    <div className="max-w-xs border rounded-xl overflow-hidden">
      <BottomNav
        items={[
          { label: 'Home', icon: <Home />, active: true },
          { label: 'Search', icon: <Search /> },
          { label: 'Saved', icon: <Bookmark />, badge: 5 },
          { label: 'Inbox', icon: <Bell />, badge: 12 },
          { label: 'Profile', icon: <User /> },
        ]}
      />
    </div>
  );
}`;

const segmentedTwoCode = `import { SegmentedControl } from '@/components/mobileapp/SegmentedControl';
import { useState } from 'react';

export function Demo() {
  const [tab, setTab] = useState('Following');
  return (
    <div className="max-w-xs">
      <SegmentedControl
        segments={['Following', 'For You']}
        value={tab}
        onChange={setTab}
      />
    </div>
  );
}`;

const segmentedThreeCode = `import { SegmentedControl } from '@/components/mobileapp/SegmentedControl';
import { useState } from 'react';

export function Demo() {
  const [view, setView] = useState('Day');
  return (
    <div className="max-w-xs">
      <SegmentedControl
        segments={['Day', 'Week', 'Month']}
        value={view}
        onChange={setView}
      />
    </div>
  );
}`;

export default function Page() {
  const [tab, setTab] = React.useState('Following');
  const [view, setView] = React.useState('Day');
  const [activeNav, setActiveNav] = React.useState('Home');

  const navItems = [
    { label: 'Home', icon: <Home /> },
    { label: 'Search', icon: <Search /> },
    { label: 'Saved', icon: <Bookmark />, badge: 5 },
    { label: 'Inbox', icon: <Bell />, badge: 12 },
    { label: 'Profile', icon: <User /> },
  ];

  return (
    <DocPage
      title="MobileApp — Navigation"
      description="Navigation components and patterns for mobile applications, including top bars, tab bars, and segmented controls."
    >
      <DocSection title="MobileTopBar — Default">
        <ComponentPreview code={topBarBasicCode} previewClassName="p-0 items-start min-h-[80px]">
          <div className="max-w-xs w-full border rounded-xl overflow-hidden">
            <MobileTopBar title="Inbox" />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="MobileTopBar — With Back Button &amp; Custom Action">
        <ComponentPreview code={topBarBackCode} previewClassName="p-0 items-start min-h-[80px]">
          <div className="max-w-xs w-full border rounded-xl overflow-hidden">
            <MobileTopBar
              title="Profile"
              showBack
              rightAction={
                <Button size="sm" variant="ghost" className="h-8 px-2 text-xs">Edit</Button>
              }
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="MobileTopBar — Large Title">
        <ComponentPreview code={topBarLargeCode} previewClassName="p-0 items-start min-h-[100px]">
          <div className="max-w-xs w-full border rounded-xl overflow-hidden">
            <MobileTopBar
              title="Messages"
              subtitle="3 unread"
              large
              rightAction={
                <button className="p-1.5 rounded-full bg-primary/10 text-primary">
                  <Plus className="h-4 w-4" />
                </button>
              }
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="BottomNav — 5 Items with Badges">
        <ComponentPreview code={bottomNavCode} previewClassName="p-0 items-end min-h-[100px]">
          <div className="max-w-xs w-full border rounded-xl overflow-hidden">
            <BottomNav
              items={navItems.map((item) => ({
                ...item,
                active: item.label === activeNav,
                onClick: () => setActiveNav(item.label),
              }))}
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="SegmentedControl — Two Segments">
        <ComponentPreview code={segmentedTwoCode}>
          <div className="max-w-xs w-full">
            <SegmentedControl
              segments={['Following', 'For You']}
              value={tab}
              onChange={setTab}
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="SegmentedControl — Three Segments">
        <ComponentPreview code={segmentedThreeCode}>
          <div className="max-w-xs w-full">
            <SegmentedControl
              segments={['Day', 'Week', 'Month']}
              value={view}
              onChange={setView}
            />
          </div>
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
