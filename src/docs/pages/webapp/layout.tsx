'use client';

import * as React from 'react';
import { LayoutDashboard, Users, BarChart3, Settings, Bell } from 'lucide-react';
import { DocPage, DocSection } from '../../components/DocPage';
import { ComponentPreview } from '../../components/ComponentPreview';
import { AppLayout } from '@/components/webapp/AppLayout';
import { PageHeader } from '@/components/webapp/PageHeader';
import { ContentShell } from '@/components/webapp/ContentShell';
import { SplitPanel } from '@/components/webapp/SplitPanel';
import { NavBreadcrumb } from '@/components/webapp/NavBreadcrumb';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const APP_NAV = [
  { label: 'Dashboard', icon: <LayoutDashboard className="size-4" />, href: '#', active: true },
  { label: 'Users', icon: <Users className="size-4" />, href: '#' },
  { label: 'Analytics', icon: <BarChart3 className="size-4" />, href: '#' },
  { label: 'Notifications', icon: <Bell className="size-4" />, href: '#' },
  { label: 'Settings', icon: <Settings className="size-4" />, href: '#' },
];

const appLayoutCode = `import { AppLayout } from '@/components/webapp/AppLayout';
import { LayoutDashboard, Users, Settings } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: <LayoutDashboard className="size-4" />, href: '#', active: true },
  { label: 'Users', icon: <Users className="size-4" />, href: '#' },
  { label: 'Settings', icon: <Settings className="size-4" />, href: '#' },
];

export function Demo() {
  return (
    <AppLayout navItems={navItems}>
      <p className="text-sm text-muted-foreground">Main content area</p>
    </AppLayout>
  );
}`;

const pageHeaderCode = `import { PageHeader } from '@/components/webapp/PageHeader';
import { NavBreadcrumb } from '@/components/webapp/NavBreadcrumb';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export function Demo() {
  return (
    <PageHeader
      title="Team Members"
      description="Manage your team and their access levels."
      breadcrumb={
        <NavBreadcrumb items={[{ label: 'Settings', href: '#' }, { label: 'Team' }]} />
      }
      actions={
        <Button size="sm">
          <Plus />
          Add member
        </Button>
      }
    />
  );
}`;

const contentShellCode = `import { ContentShell } from '@/components/webapp/ContentShell';

export function Demo() {
  return (
    <ContentShell loading>
      <p>Content here</p>
    </ContentShell>
  );
}`;

const splitPanelCode = `import { SplitPanel } from '@/components/webapp/SplitPanel';

export function Demo() {
  return (
    <div style={{ height: 300 }}>
      <SplitPanel
        left={<div className="p-4 space-y-2">
          {['Inbox', 'Sent', 'Drafts', 'Archive'].map(item => (
            <p key={item} className="text-sm px-2 py-1.5 rounded hover:bg-muted cursor-pointer">{item}</p>
          ))}
        </div>}
        right={<div className="p-4">
          <p className="text-sm text-muted-foreground">Select an item from the left panel.</p>
        </div>}
      />
    </div>
  );
}`;

export default function Page() {
  return (
    <DocPage
      title="WebApp - Layout"
      description="Layout components and structural patterns for web applications."
    >
      <DocSection title="AppLayout">
        <ComponentPreview
          code={appLayoutCode}
          previewClassName="items-start p-0 overflow-hidden min-h-[400px]"
        >
          <div className="h-[400px] w-full border rounded-lg overflow-hidden">
            <AppLayout navItems={APP_NAV}>
              <p className="text-sm text-muted-foreground">Main content area</p>
            </AppLayout>
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="PageHeader">
        <ComponentPreview code={pageHeaderCode} previewClassName="items-start">
          <div className="w-full">
            <PageHeader
              title="Team Members"
              description="Manage your team and their access levels."
              breadcrumb={
                <NavBreadcrumb
                  items={[{ label: 'Settings', href: '#' }, { label: 'Team' }]}
                />
              }
              actions={
                <Button size="sm">
                  <Plus />
                  Add member
                </Button>
              }
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="ContentShell (loading)">
        <ComponentPreview code={contentShellCode}>
          <div className="w-full max-w-sm">
            <ContentShell loading>
              <p>This won't show while loading.</p>
            </ContentShell>
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="SplitPanel">
        <ComponentPreview
          code={splitPanelCode}
          previewClassName="items-start p-0 overflow-hidden min-h-[300px]"
        >
          <div className="h-[300px] w-full">
            <SplitPanel
              left={
                <div className="p-4 space-y-1">
                  {['Inbox', 'Sent', 'Drafts', 'Archive', 'Trash'].map((item) => (
                    <p
                      key={item}
                      className="text-sm px-2 py-1.5 rounded hover:bg-muted cursor-pointer"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              }
              right={
                <div className="p-6">
                  <p className="text-sm font-medium mb-1">Inbox</p>
                  <p className="text-sm text-muted-foreground">
                    Select a folder from the left panel to see its contents.
                  </p>
                </div>
              }
            />
          </div>
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
