import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@/components/ui/slider';

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Slider defaultValue={[50]} max={100} step={1} className="w-[320px]" />,
};

export const AtZero: Story = {
  render: () => <Slider defaultValue={[0]} max={100} step={1} className="w-[320px]" />,
};

export const AtMax: Story = {
  render: () => <Slider defaultValue={[100]} max={100} step={1} className="w-[320px]" />,
};

export const WithSteps: Story = {
  render: () => <Slider defaultValue={[50]} max={100} step={10} className="w-[320px]" />,
};

export const Range: Story = {
  render: () => (
    <Slider defaultValue={[25, 75]} max={100} step={1} className="w-[320px]" />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Slider defaultValue={[40]} max={100} step={1} className="w-[320px]" disabled />
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[320px] py-4">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">Default (50)</span>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">Range (25–75)</span>
        <Slider defaultValue={[25, 75]} max={100} step={1} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">Disabled</span>
        <Slider defaultValue={[40]} max={100} step={1} disabled />
      </div>
    </div>
  ),
};
