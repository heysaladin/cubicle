'use client';

import * as React from 'react';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TopNav } from '@/components/webapp/TopNav';
import { AppSidebar, type NavItem } from '@/components/webapp/AppSidebar';

interface AppLayoutProps {
  children: React.ReactNode;
  navItems: NavItem[];
}

export function AppLayout({ children, navItems }: AppLayoutProps) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <div className="relative flex h-full flex-col">
          <AppSidebar items={navItems} collapsed={collapsed} />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed((c) => !c)}
            className="absolute -right-3 top-4 z-10 h-6 w-6 rounded-full border bg-background shadow-sm"
          >
            {collapsed
              ? <PanelLeftOpen className="size-3" />
              : <PanelLeftClose className="size-3" />}
          </Button>
        </div>
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
}
