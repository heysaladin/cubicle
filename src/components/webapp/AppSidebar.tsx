'use client';

import * as React from 'react';
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Bell,
  FileText,
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
}

export interface AppSidebarProps {
  items?: NavItem[];
  collapsed?: boolean;
  appName?: string;
}

const defaultItems: NavItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboard />, href: '#', active: true },
  { label: 'Users', icon: <Users />, href: '#' },
  { label: 'Analytics', icon: <BarChart3 />, href: '#' },
  { label: 'Documents', icon: <FileText />, href: '#' },
  { label: 'Notifications', icon: <Bell />, href: '#' },
  { label: 'Settings', icon: <Settings />, href: '#' },
];

export function AppSidebar({
  items = defaultItems,
  collapsed = false,
  appName = 'Cubicle',
}: AppSidebarProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <div
        className={cn(
          'flex h-full flex-col border-r bg-background transition-all duration-200',
          collapsed ? 'w-14' : 'w-60',
        )}
      >
        {/* Logo area */}
        <div className="flex h-14 items-center border-b px-3">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold">
              {appName.charAt(0)}
            </div>
            {!collapsed && (
              <span className="truncate text-sm font-semibold">{appName}</span>
            )}
          </div>
        </div>

        {/* Nav items */}
        <ScrollArea className="flex-1 py-2">
          <nav className="space-y-0.5 px-2">
            {items.map((item) => {
              const btn = (
                <Button
                  key={item.label}
                  variant={item.active ? 'secondary' : 'ghost'}
                  className={cn(
                    'w-full justify-start gap-2',
                    collapsed && 'justify-center px-0',
                  )}
                  asChild
                >
                  <a href={item.href}>
                    <span className="shrink-0">{item.icon}</span>
                    {!collapsed && (
                      <span className="truncate">{item.label}</span>
                    )}
                  </a>
                </Button>
              );

              return collapsed ? (
                <Tooltip key={item.label}>
                  <TooltipTrigger asChild>{btn}</TooltipTrigger>
                  <TooltipContent side="right">{item.label}</TooltipContent>
                </Tooltip>
              ) : (
                btn
              );
            })}
          </nav>
        </ScrollArea>

        {/* User footer */}
        <div>
          <Separator />
          <div
            className={cn(
              'flex items-center gap-2 p-3',
              collapsed && 'justify-center',
            )}
          >
            <Avatar className="h-7 w-7 shrink-0">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            {!collapsed && (
              <div className="min-w-0">
                <p className="truncate text-xs font-medium">Jane Doe</p>
                <p className="truncate text-xs text-muted-foreground">
                  jane@example.com
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
