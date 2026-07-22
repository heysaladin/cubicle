import type { Meta, StoryObj } from '@storybook/react';
import { DashboardPage } from '@/components/webapp/pages/DashboardPage';
import { DataManagementPage } from '@/components/webapp/pages/DataManagementPage';
import { AnalyticsPage } from '@/components/webapp/pages/AnalyticsPage';
import { UserManagementPage } from '@/components/webapp/pages/UserManagementPage';
import { TransactionsPage } from '@/components/webapp/pages/TransactionsPage';
import { NotificationsPage } from '@/components/webapp/pages/NotificationsPage';
import { SettingsPage } from '@/components/webapp/pages/SettingsPage';
import { SupportPage } from '@/components/webapp/pages/SupportPage';
import { AuthPage } from '@/components/webapp/pages/AuthPage';
import { SystemPagesPage } from '@/components/webapp/pages/SystemPagesPage';

const meta: Meta = {
  title: 'WebApp/Pages',
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Dashboard: Story = { render: () => <DashboardPage /> };
export const DataManagement: Story = { render: () => <DataManagementPage /> };
export const Analytics: Story = { render: () => <AnalyticsPage /> };
export const UserManagement: Story = { render: () => <UserManagementPage /> };
export const Transactions: Story = { render: () => <TransactionsPage /> };
export const Notifications: Story = { render: () => <NotificationsPage /> };
export const Settings: Story = { render: () => <SettingsPage /> };
export const Support: Story = { render: () => <SupportPage /> };
export const Auth: Story = { render: () => <AuthPage /> };
export const SystemPages: Story = { render: () => <SystemPagesPage /> };
