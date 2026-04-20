import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@/components/ui/separator';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-[320px]">
      <p className="text-sm">Above the separator</p>
      <Separator className="my-4" />
      <p className="text-sm">Below the separator</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-4">
      <span className="text-sm">Left</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Center</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Right</span>
    </div>
  ),
};

export const InMenu: Story = {
  render: () => (
    <div className="w-[200px] space-y-1 text-sm">
      <p className="font-medium">My Account</p>
      <Separator />
      <p className="text-muted-foreground px-2 py-1 hover:bg-accent rounded cursor-pointer">Profile</p>
      <p className="text-muted-foreground px-2 py-1 hover:bg-accent rounded cursor-pointer">Billing</p>
      <p className="text-muted-foreground px-2 py-1 hover:bg-accent rounded cursor-pointer">Settings</p>
      <Separator />
      <p className="text-muted-foreground px-2 py-1 hover:bg-accent rounded cursor-pointer">Logout</p>
    </div>
  ),
};

export const InlineVertical: Story = {
  render: () => (
    <div className="flex h-5 items-center gap-2 text-sm">
      <span>Blog</span>
      <Separator orientation="vertical" />
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Source</span>
    </div>
  ),
};
