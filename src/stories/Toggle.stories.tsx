import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@/components/ui/toggle';
import { Bold, Italic, Underline } from 'lucide-react';

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Toggle>Toggle</Toggle>,
};

export const Outline: Story = {
  render: () => <Toggle variant="outline">Outline</Toggle>,
};

export const Small: Story = {
  render: () => <Toggle size="sm">Small</Toggle>,
};

export const Large: Story = {
  render: () => <Toggle size="lg">Large</Toggle>,
};

export const Pressed: Story = {
  render: () => <Toggle defaultPressed>Pressed</Toggle>,
};

export const Disabled: Story = {
  render: () => <Toggle disabled>Disabled</Toggle>,
};

export const WithIcon: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};

export const TextFormatting: Story = {
  render: () => (
    <div className="flex gap-1">
      <Toggle aria-label="Toggle bold" size="sm">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic" size="sm">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle underline" size="sm">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Toggle variant="default">Default</Toggle>
      <Toggle variant="outline">Outline</Toggle>
      <Toggle variant="default" size="sm">Small</Toggle>
      <Toggle variant="default" size="lg">Large</Toggle>
      <Toggle defaultPressed>Pressed</Toggle>
      <Toggle disabled>Disabled</Toggle>
    </div>
  ),
};
