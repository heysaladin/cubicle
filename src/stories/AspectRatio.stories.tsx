import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  title: 'UI/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SixteenByNine: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="rounded-md bg-muted">
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          16 : 9
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={1} className="rounded-md bg-muted">
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          1 : 1
        </div>
      </AspectRatio>
    </div>
  ),
};

export const FourByThree: Story = {
  render: () => (
    <div className="w-[400px]">
      <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          4 : 3
        </div>
      </AspectRatio>
    </div>
  ),
};
