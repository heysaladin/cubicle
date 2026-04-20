import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Textarea className="w-[320px]" />,
};

export const WithPlaceholder: Story = {
  render: () => <Textarea className="w-[320px]" placeholder="Type your message here..." />,
};

export const Disabled: Story = {
  render: () => <Textarea className="w-[320px]" placeholder="Disabled" disabled />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[320px]">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
  ),
};

export const WithValue: Story = {
  render: () => (
    <Textarea
      className="w-[320px]"
      defaultValue="This is some pre-filled content in the textarea. It can span multiple lines."
    />
  ),
};
