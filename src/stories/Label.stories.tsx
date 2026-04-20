import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Label>Label text</Label>,
};

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[320px]">
      <Label htmlFor="email-label">Email address</Label>
      <Input id="email-label" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="newsletter" />
      <Label htmlFor="newsletter">Subscribe to newsletter</Label>
    </div>
  ),
};

export const DisabledState: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[320px]">
      <Label htmlFor="disabled-input">Disabled field</Label>
      <Input id="disabled-input" placeholder="Cannot edit" disabled />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[320px]">
      <Label htmlFor="required-field">
        Full name <span className="text-destructive">*</span>
      </Label>
      <Input id="required-field" placeholder="John Doe" />
    </div>
  ),
};
