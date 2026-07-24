'use client';

import * as React from 'react';
import { LayoutDashboard, Users, BarChart3, Settings, Bell, FileText, UserPen, ShieldCheck, UserX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AppLayout } from '@/components/webapp/AppLayout';
import { PageHeader } from '@/components/webapp/PageHeader';
import { NavBreadcrumb } from '@/components/webapp/NavBreadcrumb';
import { SearchInput } from '@/components/webapp/SearchInput';
import { FilterBar } from '@/components/webapp/FilterBar';
import { ActionMenu } from '@/components/webapp/ActionMenu';
import { DataTable } from '@/components/webapp/DataTable';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: <LayoutDashboard className="size-4" />, href: '#' },
  { label: 'Users', icon: <Users className="size-4" />, href: '#', active: true },
  { label: 'Analytics', icon: <BarChart3 className="size-4" />, href: '#' },
  { label: 'Notifications', icon: <Bell className="size-4" />, href: '#' },
  { label: 'Reports', icon: <FileText className="size-4" />, href: '#' },
  { label: 'Settings', icon: <Settings className="size-4" />, href: '#' },
];

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'admin', label: 'Admin' },
  { id: 'editor', label: 'Editor' },
  { id: 'viewer', label: 'Viewer' },
  { id: 'pending', label: 'Pending' },
];

const ACTION_MENU_ITEMS = [
  { label: 'Edit Profile', icon: <UserPen className="size-4" />, onClick: () => {} },
  { label: 'Change Role', icon: <ShieldCheck className="size-4" />, onClick: () => {} },
  { separator: true, label: '', onClick: () => {} },
  { label: 'Deactivate', icon: <UserX className="size-4" />, onClick: () => {}, destructive: true },
];

export function UserManagementPage() {
  const [search, setSearch] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState<string[]>(['all']);

  return (
    <AppLayout navItems={NAV_ITEMS}>
          <PageHeader
            title="User Management"
            description="Manage users, roles, and permissions."
            actions={<Button>+ Invite User</Button>}
          />

          <NavBreadcrumb
            items={[{ label: 'Home', href: '#' }, { label: 'Users' }]}
          />

          <div className="flex items-center gap-3">
            <SearchInput
              placeholder="Search users..."
              value={search}
              onChange={setSearch}
            />
            <ActionMenu label="Actions" items={ACTION_MENU_ITEMS} />
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
