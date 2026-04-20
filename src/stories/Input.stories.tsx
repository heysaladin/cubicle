import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Input className="w-[320px]" />,
};

export const WithPlaceholder: Story = {
  render: () => <Input className="w-[320px]" placeholder="Enter your text..." />,
};

export const Disabled: Story = {
  render: () => <Input className="w-[320px]" placeholder="Disabled input" disabled />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[320px]">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const Password: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[320px]">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="••••••••" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[320px]">
      <Input placeholder="Default" />
      <Input placeholder="With value" defaultValue="Hello world" />
      <Input placeholder="Disabled" disabled />
    </div>
  ),
};
