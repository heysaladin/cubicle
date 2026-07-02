import type { Meta, StoryObj } from '@storybook/react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Toaster> = {
  title: 'UI/Sonner',
  component: Toaster,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast('Event has been created')}>
      Show Toast
    </Button>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => {},
          },
        })
      }
    >
      Show Toast with Action
    </Button>
  ),
};

export const Types: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="outline" onClick={() => toast.success('Success message')}>Success</Button>
      <Button variant="outline" onClick={() => toast.error('Error message')}>Error</Button>
      <Button variant="outline" onClick={() => toast.warning('Warning message')}>Warning</Button>
      <Button variant="outline" onClick={() => toast.info('Info message')}>Info</Button>
    </div>
  ),
};
