'use client';

import * as React from 'react';
import { LayoutDashboard, Users, BarChart3, Settings, Bell, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AppLayout } from '@/components/webapp/AppLayout';
import { PageHeader } from '@/components/webapp/PageHeader';
import { StatCard } from '@/components/webapp/StatCard';
import { ChartWidget } from '@/components/webapp/ChartWidget';
import { DataTable } from '@/components/webapp/DataTable';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: <LayoutDashboard className="size-4" />, href: '#', active: true },
  { label: 'Users', icon: <Users className="size-4" />, href: '#' },
  { label: 'Analytics', icon: <BarChart3 className="size-4" />, href: '#' },
  { label: 'Notifications', icon: <Bell className="size-4" />, href: '#' },
  { label: 'Reports', icon: <FileText className="size-4" />, href: '#' },
  { label: 'Settings', icon: <Settings className="size-4" />, href: '#' },
];

export function DashboardPage() {
  return (
    <AppLayout navItems={NAV_ITEMS}>
          <PageHeader
            title="Dashboard"
            description="Welcome back, Jane."
            actions={<Button>Export</Button>}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Total Users" value="12,483" trend={8.2} />
            <StatCard label="Revenue" value="$48,295" trend={12.5} />
            <StatCard label="Active Sessions" value="1,429" trend={-2.1} />
            <StatCard label="Conversion" value="3.6%" trend={0.4} />
          </div>

          <ChartWidget
            title="Revenue Overview"
            description="Monthly revenue for current year"
          />

          <DataTable />
    </AppLayout>
  );
}
