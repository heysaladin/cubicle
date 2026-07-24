import type { Meta, StoryObj } from '@storybook/react';
import { LayoutDashboard, Users, BarChart3, Settings, Bell, FileText, Plus, Download, Trash2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AppLayout } from '@/components/webapp/AppLayout';
import { AppSidebar } from '@/components/webapp/AppSidebar';
import { TopNav } from '@/components/webapp/TopNav';
import { NavBreadcrumb } from '@/components/webapp/NavBreadcrumb';
import { DataTable } from '@/components/webapp/DataTable';
import { StatCard } from '@/components/webapp/StatCard';
import { EmptyState } from '@/components/webapp/EmptyState';
import { SearchInput } from '@/components/webapp/SearchInput';
import { FilterBar } from '@/components/webapp/FilterBar';
import { FormField } from '@/components/webapp/FormField';
import { AlertBanner } from '@/components/webapp/AlertBanner';
import { ConfirmDialog } from '@/components/webapp/ConfirmDialog';
import { InlineStatus } from '@/components/webapp/InlineStatus';
import { Toolbar } from '@/components/webapp/Toolbar';
import { BulkActions } from '@/components/webapp/BulkActions';
import { ActionMenu } from '@/components/webapp/ActionMenu';
import { MetricCard } from '@/components/webapp/MetricCard';
import { ChartWidget } from '@/components/webapp/ChartWidget';
import { PageHeader } from '@/components/webapp/PageHeader';
import { ContentShell } from '@/components/webapp/ContentShell';
import { SplitPanel } from '@/components/webapp/SplitPanel';
import { CommandPalette } from '@/components/webapp/CommandPalette';
import { KeyboardShortcut } from '@/components/webapp/KeyboardShortcut';
import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: <LayoutDashboard className="size-4" />, href: '#', active: true },
  { label: 'Users', icon: <Users className="size-4" />, href: '#' },
  { label: 'Analytics', icon: <BarChart3 className="size-4" />, href: '#' },
  { label: 'Notifications', icon: <Bell className="size-4" />, href: '#' },
  { label: 'Reports', icon: <FileText className="size-4" />, href: '#' },
  { label: 'Settings', icon: <Settings className="size-4" />, href: '#' },
];

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'inactive', label: 'Inactive' },
  { id: 'pending', label: 'Pending' },
];

const ACTIONS = [
  { label: 'Edit', onClick: () => {} },
  { label: 'Duplicate', onClick: () => {} },
  { separator: true, label: '', onClick: () => {} },
  { label: 'Delete', onClick: () => {}, destructive: true },
];

const meta: Meta = {
  title: 'WebApp/Components',
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AppLayoutStory: Story = {
  name: 'AppLayout',
  render: () => (
    <div className="h-[500px] w-full border rounded-lg overflow-hidden">
      <AppLayout
        navItems={[
          { label: 'Dashboard', icon: <LayoutDashboard className="size-4" />, href: '#', active: true },
          { label: 'Users', icon: <Users className="size-4" />, href: '#' },
          { label: 'Analytics', icon: <BarChart3 className="size-4" />, href: '#' },
          { label: 'Notifications', icon: <Bell className="size-4" />, href: '#' },
          { label: 'Settings', icon: <Settings className="size-4" />, href: '#' },
        ]}
      >
        <p className="text-sm text-muted-foreground">Main content area</p>
      </AppLayout>
    </div>
  ),
};

export const AppSidebarExpanded: Story = {
  name: 'AppSidebar — Expanded',
  render: () => (
    <div className="h-[500px] w-60 border rounded-lg overflow-hidden">
      <AppSidebar items={NAV_ITEMS} appName="Cubicle" />
    </div>
  ),
};

export const AppSidebarCollapsed: Story = {
  name: 'AppSidebar — Collapsed',
  render: () => (
    <div className="h-[500px] w-16 border rounded-lg overflow-hidden">
      <AppSidebar items={NAV_ITEMS} collapsed appName="Cubicle" />
    </div>
  ),
};

export const TopNavStory: Story = {
  name: 'TopNav',
  render: () => (
    <div className="w-full border rounded-lg overflow-hidden">
      <TopNav appName="Cubicle" userName="Jane Doe" userEmail="jane@example.com" notificationCount={5} />
    </div>
  ),
};

export const NavBreadcrumbStory: Story = {
  name: 'NavBreadcrumb',
  render: () => (
    <NavBreadcrumb items={[{ label: 'Home', href: '#' }, { label: 'Users', href: '#' }, { label: 'Jane Doe' }]} />
  ),
};

export const DataTableStory: Story = {
  name: 'DataTable',
  render: () => <DataTable />,
};

export const StatCardStory: Story = {
  name: 'StatCard',
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
      <StatCard label="Total Users" value="12,483" trend={8.2} description="vs last month" />
      <StatCard label="Revenue" value="$48,295" trend={-2.1} description="vs last month" />
      <StatCard label="Sessions" value="1,429" trend={0} description="vs last month" />
      <StatCard label="Conversion" value="3.6%" description="No change" />
    </div>
  ),
};

export const EmptyStateStory: Story = {
  name: 'EmptyState',
  render: () => (
    <div className="w-full max-w-sm">
      <EmptyState
        title="No results found"
        description="Try adjusting your search or filter to find what you're looking for."
        action={{ label: 'Clear filters', onClick: () => {} }}
      />
    </div>
  ),
};

export const SearchInputStory: Story = {
  name: 'SearchInput',
  render: () => <SearchInput placeholder="Search records..." className="max-w-xs" />,
};

export const FilterBarStory: Story = {
  name: 'FilterBar',
  render: () => <FilterBar filters={FILTERS} />,
};

export const FormFieldStory: Story = {
  name: 'FormField',
  render: () => (
    <div className="w-full max-w-sm space-y-4">
      <FormField label="Full Name" htmlFor="name" helperText="Your display name">
        <Input id="name" placeholder="Jane Doe" />
      </FormField>
      <FormField label="Email" htmlFor="email" required error="Invalid email address">
        <Input id="email" placeholder="jane@example.com" />
      </FormField>
    </div>
  ),
};

export const AlertBannerStory: Story = {
  name: 'AlertBanner',
  render: () => (
    <div className="w-full max-w-lg space-y-3">
      <AlertBanner variant="info" title="Info" description="This is an informational message." />
      <AlertBanner variant="success" title="Success" description="Your changes have been saved." dismissible />
      <AlertBanner variant="warning" title="Warning" description="Storage is almost full." dismissible />
      <AlertBanner variant="error" title="Error" description="Something went wrong. Please try again." dismissible />
    </div>
  ),
};

export const ConfirmDialogStory: Story = {
  name: 'ConfirmDialog',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>Delete Record</Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          title="Delete Record"
          description="This action cannot be undone. The record will be permanently deleted."
          confirmLabel="Delete"
          variant="destructive"
          onConfirm={() => setOpen(false)}
        />
      </>
    );
  },
};

export const InlineStatusStory: Story = {
  name: 'InlineStatus',
  render: () => (
    <div className="space-y-2">
      {(['online', 'offline', 'busy', 'away', 'pending', 'active', 'inactive'] as const).map((s) => (
        <InlineStatus key={s} status={s} />
      ))}
    </div>
  ),
};

export const ToolbarStory: Story = {
  name: 'Toolbar',
  render: () => (
    <div className="w-full max-w-2xl">
      <Toolbar
        title="Records (128)"
        actions={[
          { label: 'Export', icon: <Download className="size-4" />, onClick: () => {}, variant: 'outline' },
          { label: 'Refresh', icon: <RefreshCw className="size-4" />, onClick: () => {}, variant: 'ghost' },
          { label: 'Add', icon: <Plus className="size-4" />, onClick: () => {} },
        ]}
      />
    </div>
  ),
};

export const BulkActionsStory: Story = {
  name: 'BulkActions',
  render: () => (
    <div className="w-full max-w-2xl">
      <BulkActions
        selectedCount={3}
        onClear={() => {}}
        actions={[
          { label: 'Delete', icon: <Trash2 className="size-4" />, onClick: () => {}, variant: 'destructive' },
          { label: 'Export', icon: <Download className="size-4" />, onClick: () => {}, variant: 'outline' },
        ]}
      />
    </div>
  ),
};

export const ActionMenuStory: Story = {
  name: 'ActionMenu',
  render: () => <ActionMenu label="Actions" items={ACTIONS} />,
};

export const MetricCardStory: Story = {
  name: 'MetricCard',
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
      <MetricCard title="Page Views" value="284,591" change="+12.4%" changeType="increase" period="vs last week" />
      <MetricCard title="Bounce Rate" value="42.3%" change="-3.2%" changeType="decrease" period="vs last week" />
    </div>
  ),
};

export const ChartWidgetStory: Story = {
  name: 'ChartWidget',
  render: () => (
    <div className="w-full max-w-2xl">
      <ChartWidget title="Revenue Overview" description="Monthly revenue for current year" />
    </div>
  ),
};

export const PageHeaderStory: Story = {
  name: 'PageHeader',
  render: () => (
    <div className="w-full max-w-3xl">
      <PageHeader
        title="User Management"
        description="Manage users, roles, and permissions."
        breadcrumb={<NavBreadcrumb items={[{ label: 'Home', href: '#' }, { label: 'Users' }]} />}
        actions={<Button>+ Invite User</Button>}
      />
    </div>
  ),
};

export const ContentShellStory: Story = {
  name: 'ContentShell — Loading',
  render: () => (
    <div className="w-full max-w-lg">
      <ContentShell loading>
        <p>Content here</p>
      </ContentShell>
    </div>
  ),
};

export const SplitPanelStory: Story = {
  name: 'SplitPanel',
  render: () => (
    <div className="w-full max-w-2xl h-64 border rounded-lg overflow-hidden">
      <SplitPanel
        left={<div className="p-4 text-sm text-muted-foreground">Left panel — navigation or filters</div>}
        right={<div className="p-4 text-sm text-muted-foreground">Right panel — main content area</div>}
      />
    </div>
  ),
};

export const CommandPaletteStory: Story = {
  name: 'CommandPalette',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => setOpen(true)}>Open Command Palette</Button>
          <KeyboardShortcut keys={['⌘', 'K']} />
        </div>
        <CommandPalette open={open} onOpenChange={setOpen} />
      </>
    );
  },
};

export const KeyboardShortcutStory: Story = {
  name: 'KeyboardShortcut',
  render: () => (
    <div className="space-y-3">
      <KeyboardShortcut keys={['⌘', 'K']} label="Open command palette" />
      <KeyboardShortcut keys={['⌘', 'S']} label="Save" />
      <KeyboardShortcut keys={['Esc']} label="Close" />
    </div>
  ),
};
