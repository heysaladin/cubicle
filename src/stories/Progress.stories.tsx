import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@/components/ui/progress';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Progress value={50} className="w-[320px]" />,
};

export const Empty: Story = {
  render: () => <Progress value={0} className="w-[320px]" />,
};

export const Quarter: Story = {
  render: () => <Progress value={25} className="w-[320px]" />,
};

export const Half: Story = {
  render: () => <Progress value={50} className="w-[320px]" />,
};

export const ThreeQuarters: Story = {
  render: () => <Progress value={75} className="w-[320px]" />,
};

export const Complete: Story = {
  render: () => <Progress value={100} className="w-[320px]" />,
};

export const AllValues: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[320px]">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">0%</span>
        <Progress value={0} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">25%</span>
        <Progress value={25} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">50%</span>
        <Progress value={50} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">75%</span>
        <Progress value={75} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">100%</span>
        <Progress value={100} />
      </div>
    </div>
  ),
};
