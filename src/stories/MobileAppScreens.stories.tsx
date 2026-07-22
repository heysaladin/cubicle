import type { Meta, StoryObj } from '@storybook/react';
import OnboardingPage from '@/docs/pages/mobileapp/screens/onboarding';
import AuthenticationPage from '@/docs/pages/mobileapp/screens/authentication';
import DashboardPage from '@/docs/pages/mobileapp/screens/dashboard';
import ListFeedPage from '@/docs/pages/mobileapp/screens/list-feed';
import DetailPage from '@/docs/pages/mobileapp/screens/detail';
import CreateEditPage from '@/docs/pages/mobileapp/screens/create-edit';
import NotificationsPage from '@/docs/pages/mobileapp/screens/notifications';
import ProfilePage from '@/docs/pages/mobileapp/screens/profile';
import SettingsPage from '@/docs/pages/mobileapp/screens/settings';
import TransactionsPage from '@/docs/pages/mobileapp/screens/transactions';
import SearchPage from '@/docs/pages/mobileapp/screens/search';
import HelpPage from '@/docs/pages/mobileapp/screens/help';
import EmptyStatesPage from '@/docs/pages/mobileapp/screens/empty-states';
import SystemScreensPage from '@/docs/pages/mobileapp/screens/system-screens';

const meta: Meta = {
  title: 'MobileApp/Screens',
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Onboarding: Story = { render: () => <OnboardingPage /> };
export const Authentication: Story = { render: () => <AuthenticationPage /> };
export const Dashboard: Story = { render: () => <DashboardPage /> };
export const ListFeed: Story = { render: () => <ListFeedPage /> };
export const Detail: Story = { render: () => <DetailPage /> };
export const CreateEdit: Story = { render: () => <CreateEditPage /> };
export const Notifications: Story = { render: () => <NotificationsPage /> };
export const Profile: Story = { render: () => <ProfilePage /> };
export const Settings: Story = { render: () => <SettingsPage /> };
export const Transactions: Story = { render: () => <TransactionsPage /> };
export const Search: Story = { render: () => <SearchPage /> };
export const Help: Story = { render: () => <HelpPage /> };
export const EmptyStates: Story = { render: () => <EmptyStatesPage /> };
export const SystemScreens: Story = { render: () => <SystemScreensPage /> };
