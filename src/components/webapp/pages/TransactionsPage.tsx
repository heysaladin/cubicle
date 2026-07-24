'use client';

import * as React from 'react';
import { LayoutDashboard, Users, BarChart3, Settings, Bell, FileText } from 'lucide-react';
import { AppLayout } from '@/components/webapp/AppLayout';
import { PageHeader } from '@/components/webapp/PageHeader';
import { NavBreadcrumb } from '@/components/webapp/NavBreadcrumb';
import { StatCard } from '@/components/webapp/StatCard';
import { FilterBar } from '@/components/webapp/FilterBar';
import { DataTable } from '@/components/webapp/DataTable';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: <LayoutDashboard className="size-4" />, href: '#' },
  { label: 'Users', icon: <Users className="size-4" />, href: '#' },
  { label: 'Analytics', icon: <BarChart3 className="size-4" />, href: '#' },
  { label: 'Notifications', icon: <Bell className="size-4" />, href: '#' },
  { label: 'Reports', icon: <FileText className="size-4" />, href: '#', active: true },
  { label: 'Settings', icon: <Settings className="size-4" />, href: '#' },
];

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'successful', label: 'Successful' },
  { id: 'pending', label: 'Pending' },
  { id: 'failed', label: 'Failed' },
  { id: 'refunded', label: 'Refunded' },
];

export function TransactionsPage() {
  const [activeFilter, setActiveFilter] = React.useState<string[]>(['all']);

  return (
    <AppLayout navItems={NAV_ITEMS}>
          <PageHeader
            title="Transactions & Activity"
            description="Track all financial transactions and activity logs."
          />

          <NavBreadcrumb
            items={[{ label: 'Home', href: '#' }, { label: 'Transactions' }]}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatCard label="Total Transactions" value="8,294" trend={5.3} />
            <StatCard label="Successful" value="7,981" trend={2.1} />
            <StatCard label="Failed" value="313" trend={-18.4} />
          </div>

          <FilterBar
            filters={FILTERS}
            active={activeFilter}
            onChange={setActiveFilter}
          />

          <DataTable />
    </AppLayout>
  );
}
