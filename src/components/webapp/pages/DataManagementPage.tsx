'use client';

import * as React from 'react';
import { LayoutDashboard, Users, BarChart3, Settings, Bell, FileText, Download, Upload, RefreshCw } from 'lucide-react';
import { AppLayout } from '@/components/webapp/AppLayout';
import { PageHeader } from '@/components/webapp/PageHeader';
import { NavBreadcrumb } from '@/components/webapp/NavBreadcrumb';
import { Toolbar } from '@/components/webapp/Toolbar';
import { FilterBar } from '@/components/webapp/FilterBar';
import { BulkActions } from '@/components/webapp/BulkActions';
import { DataTable } from '@/components/webapp/DataTable';
import { Button } from '@/components/ui/button';

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
  { id: 'active', label: 'Active' },
  { id: 'inactive', label: 'Inactive' },
  { id: 'pending', label: 'Pending' },
];

export function DataManagementPage() {
  const [activeFilter, setActiveFilter] = React.useState<string[]>(['all']);
  const [selectedCount, setSelectedCount] = React.useState(0);

  return (
    <AppLayout navItems={NAV_ITEMS}>
          <PageHeader
            title="Data Management"
            description="Manage and organize your data records."
            actions={<Button>+ Add Record</Button>}
          />

          <NavBreadcrumb
            items={[{ label: 'Home', href: '#' }, { label: 'Data Management' }]}
          />

          <Toolbar
            title="Records"
            actions={[
              { label: 'Export', icon: <Download className="size-4" />, onClick: () => {} },
              { label: 'Import', icon: <Upload className="size-4" />, onClick: () => {} },
              { label: 'Refresh', icon: <RefreshCw className="size-4" />, onClick: () => {} },
            ]}
          />

          <FilterBar
            filters={FILTERS}
            active={activeFilter}
            onChange={setActiveFilter}
          />

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedCount(selectedCount === 0 ? 3 : 0)}
            >
              {selectedCount === 0 ? 'Simulate Selection (3)' : 'Clear Selection'}
            </Button>
          </div>

          {selectedCount > 0 && (
            <BulkActions
              selectedCount={selectedCount}
              onClear={() => setSelectedCount(0)}
            />
          )}

          <DataTable />
    </AppLayout>
  );
}
