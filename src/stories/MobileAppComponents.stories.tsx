import type { Meta, StoryObj } from '@storybook/react';
import NavigationPage from '@/docs/pages/mobileapp/navigation';
import ContentPage from '@/docs/pages/mobileapp/content';
import InputPage from '@/docs/pages/mobileapp/input';
import FeedbackPage from '@/docs/pages/mobileapp/feedback';
import ControlPage from '@/docs/pages/mobileapp/control';
import VisualizationPage from '@/docs/pages/mobileapp/visualization';
import LayoutPage from '@/docs/pages/mobileapp/layout';
import SystemPage from '@/docs/pages/mobileapp/system';

const meta: Meta = {
  title: 'MobileApp/Components',
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Navigation: Story = { render: () => <NavigationPage /> };
export const Content: Story = { render: () => <ContentPage /> };
export const Input: Story = { render: () => <InputPage /> };
export const Feedback: Story = { render: () => <FeedbackPage /> };
export const Control: Story = { render: () => <ControlPage /> };
export const Visualization: Story = { render: () => <VisualizationPage /> };
export const Layout: Story = { render: () => <LayoutPage /> };
export const System: Story = { render: () => <SystemPage /> };
