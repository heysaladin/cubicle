import type { Meta, StoryObj } from '@storybook/react';
import NavigationPage from '@/docs/pages/website/navigation';
import ContentPage from '@/docs/pages/website/content';
import SectionsPage from '@/docs/pages/website/sections';
import ComponentsPage from '@/docs/pages/website/components';
import FeedbackPage from '@/docs/pages/website/feedback';
import MediaPage from '@/docs/pages/website/media';
import LayoutPage from '@/docs/pages/website/layout';
import SystemPage from '@/docs/pages/website/system';

const meta: Meta = {
  title: 'Website/Components',
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Navigation: Story = { render: () => <NavigationPage /> };
export const Content: Story = { render: () => <ContentPage /> };
export const Sections: Story = { render: () => <SectionsPage /> };
export const Components: Story = { render: () => <ComponentsPage /> };
export const Feedback: Story = { render: () => <FeedbackPage /> };
export const Media: Story = { render: () => <MediaPage /> };
export const Layout: Story = { render: () => <LayoutPage /> };
export const System: Story = { render: () => <SystemPage /> };
