'use client';

import * as React from 'react';
import { DocPage, DocSection } from '../../components/DocPage';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PhoneFrame, PhoneScreen } from '@/components/mobileapp/PhoneFrame';
import { MobileCard } from '@/components/mobileapp/MobileCard';
import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { BottomNav } from '@/components/mobileapp/BottomNav';
import { ListItem, ListSection } from '@/components/mobileapp/ListItem';
import { Home, Search, Bell, User, CreditCard, Settings, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const phoneFrameCode = `import { PhoneFrame, PhoneScreen } from '@/components/mobileapp/PhoneFrame';
import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { BottomNav } from '@/components/mobileapp/BottomNav';
import { Home, Search, Bell, User } from 'lucide-react';

export function Demo() {
  return (
    <PhoneFrame>
      <PhoneScreen>
        <MobileTopBar title="Home" large />
        <div className="flex-1 p-4">
          <p className="text-sm text-muted-foreground">Screen content goes here.</p>
        </div>
        <BottomNav
          items={[
            { label: 'Home', icon: <Home />, active: true },
            { label: 'Search', icon: <Search /> },
            { label: 'Inbox', icon: <Bell /> },
            { label: 'Profile', icon: <User /> },
          ]}
        />
      </PhoneScreen>
    </PhoneFrame>
  );
}`;

const phoneScreenCode = `import { PhoneFrame, PhoneScreen } from '@/components/mobileapp/PhoneFrame';
import { MobileCard } from '@/components/mobileapp/MobileCard';

export function Demo() {
  return (
    <PhoneFrame>
      <PhoneScreen className="p-4 gap-3">
        <MobileCard>
          <p className="text-sm font-semibold">PhoneScreen as flex column</p>
          <p className="text-xs text-muted-foreground mt-1">Children stack vertically with full-height background.</p>
        </MobileCard>
        <MobileCard>
          <p className="text-sm font-semibold">Another card</p>
        </MobileCard>
      </PhoneScreen>
    </PhoneFrame>
  );
}`;

const cardPaddingCode = `import { MobileCard } from '@/components/mobileapp/MobileCard';

export function Demo() {
  return (
    <div className="max-w-xs space-y-3">
      <MobileCard padding="md">
        <p className="text-xs font-medium mb-1">padding="md" (default)</p>
        <p className="text-xs text-muted-foreground">Standard 16px padding on all sides. Best for content cards.</p>
      </MobileCard>
      <MobileCard padding="sm">
        <p className="text-xs font-medium mb-1">padding="sm"</p>
        <p className="text-xs text-muted-foreground">Compact 12px padding. Good for dense layouts.</p>
      </MobileCard>
      <MobileCard padding="none" className="overflow-hidden">
        <div className="h-16 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center px-4">
          <p className="text-xs font-medium">padding="none" + media</p>
        </div>
        <div className="p-4">
          <p className="text-xs text-muted-foreground">Padding controlled manually for full-bleed images.</p>
        </div>
      </MobileCard>
    </div>
  );
}`;

const listSectionNestingCode = `import { ListItem, ListSection } from '@/components/mobileapp/ListItem';
import { User, CreditCard, Settings, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Demo() {
  return (
    <div className="max-w-xs">
      <ListSection title="Account" footer="Changes to your profile are visible to other users.">
        <ListItem leading={<User />} title="Profile" subtitle="Name, photo, bio" showChevron onClick={() => {}} />
        <ListItem leading={<CreditCard />} title="Billing" trailing={<Badge variant="secondary">Pro</Badge>} showChevron onClick={() => {}} />
      </ListSection>
      <ListSection title="App Settings">
        <ListItem leading={<Settings />} title="General" showChevron onClick={() => {}} />
        <ListItem leading={<Lock />} title="Privacy & Security" showChevron onClick={() => {}} />
      </ListSection>
    </div>
  );
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — Layout"
      description="Layout primitives for mobile screens: PhoneFrame shell, PhoneScreen wrapper, MobileCard padding variants, and ListSection nesting."
    >
      <DocSection title="PhoneFrame — Full Shell with TopBar &amp; BottomNav">
        <ComponentPreview code={phoneFrameCode} previewClassName="p-8 items-start overflow-x-auto" >
          <div style={{ transform: 'scale(0.75)', transformOrigin: 'top center', minWidth: 375 }}>
            <PhoneFrame>
              <PhoneScreen>
                <MobileTopBar title="Home" large />
                <div className="flex-1 p-4 space-y-3">
                  <p className="text-sm text-muted-foreground">Screen content goes here.</p>
                  <div className="h-24 rounded-xl bg-muted/50 border flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">Content area</p>
                  </div>
                </div>
                <BottomNav
                  items={[
                    { label: 'Home', icon: <Home />, active: true },
                    { label: 'Search', icon: <Search /> },
                    { label: 'Inbox', icon: <Bell /> },
                    { label: 'Profile', icon: <User /> },
                  ]}
                />
              </PhoneScreen>
            </PhoneFrame>
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="PhoneScreen — Content Wrapper">
        <ComponentPreview code={phoneScreenCode} previewClassName="p-8 items-start overflow-x-auto">
          <div style={{ transform: 'scale(0.75)', transformOrigin: 'top center', minWidth: 375 }}>
            <PhoneFrame>
              <PhoneScreen className="p-4 gap-3">
                <MobileCard>
                  <p className="text-sm font-semibold">PhoneScreen as flex column</p>
                  <p className="text-xs text-muted-foreground mt-1">Children stack vertically with full-height background.</p>
                </MobileCard>
                <MobileCard>
                  <p className="text-sm font-semibold">Another card</p>
                  <p className="text-xs text-muted-foreground mt-1">Add more cards as needed.</p>
                </MobileCard>
              </PhoneScreen>
            </PhoneFrame>
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="MobileCard — Padding Variants">
        <ComponentPreview code={cardPaddingCode} previewClassName="p-6 items-start">
          <div className="max-w-xs w-full space-y-3">
            <MobileCard padding="md">
              <p className="text-xs font-medium mb-1">padding="md" (default)</p>
              <p className="text-xs text-muted-foreground">Standard 16px padding on all sides. Best for content cards.</p>
            </MobileCard>
            <MobileCard padding="sm">
              <p className="text-xs font-medium mb-1">padding="sm"</p>
              <p className="text-xs text-muted-foreground">Compact 12px padding. Good for dense layouts.</p>
            </MobileCard>
            <MobileCard padding="none" className="overflow-hidden">
              <div className="h-16 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center px-4">
                <p className="text-xs font-medium">padding="none" + media area</p>
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground">Padding controlled manually for full-bleed images.</p>
              </div>
            </MobileCard>
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="ListSection — Nesting and Footer Text">
        <ComponentPreview code={listSectionNestingCode} previewClassName="p-6 items-start">
          <div className="max-w-xs w-full">
            <ListSection title="Account" footer="Changes to your profile are visible to other users.">
              <ListItem leading={<User />} title="Profile" subtitle="Name, photo, bio" showChevron onClick={() => {}} />
              <ListItem leading={<CreditCard />} title="Billing" trailing={<Badge variant="secondary">Pro</Badge>} showChevron onClick={() => {}} />
            </ListSection>
            <ListSection title="App Settings">
              <ListItem leading={<Settings />} title="General" showChevron onClick={() => {}} />
              <ListItem leading={<Lock />} title="Privacy & Security" showChevron onClick={() => {}} />
            </ListSection>
          </div>
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
