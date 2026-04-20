import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design Tokens/Shadows',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const shadowLevels = [
  {
    name: 'shadow-none',
    label: 'None',
    description: 'No shadow',
    class: 'shadow-none',
  },
  {
    name: 'shadow-sm',
    label: 'Small',
    description: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    class: 'shadow-sm',
  },
  {
    name: 'shadow',
    label: 'Default',
    description: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    class: 'shadow',
  },
  {
    name: 'shadow-md',
    label: 'Medium',
    description: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    class: 'shadow-md',
  },
  {
    name: 'shadow-lg',
    label: 'Large',
    description: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    class: 'shadow-lg',
  },
  {
    name: 'shadow-xl',
    label: 'Extra Large',
    description: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    class: 'shadow-xl',
  },
  {
    name: 'shadow-2xl',
    label: '2X Large',
    description: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    class: 'shadow-2xl',
  },
  {
    name: 'shadow-inner',
    label: 'Inner',
    description: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    class: 'shadow-inner',
  },
];

export const All: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-8 max-w-[800px] bg-background">
      {shadowLevels.map(({ name, label, description, class: cls }) => (
        <div key={name} className="flex flex-col gap-3">
          <div
            className={`h-24 w-full rounded-lg bg-card border ${cls}`}
          />
          <div>
            <p className="text-sm font-medium">{label}</p>
            <p className="text-xs text-muted-foreground font-mono">{name}</p>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <div className="flex gap-8 items-end flex-wrap p-12 bg-muted/30 rounded-xl">
      {shadowLevels.filter((s) => s.name !== 'shadow-inner').map(({ name, label, class: cls }) => (
        <div key={name} className="flex flex-col items-center gap-4">
          <div
            className={`h-16 w-24 rounded-lg bg-background border ${cls}`}
          />
          <div className="text-center">
            <p className="text-xs font-medium">{label}</p>
            <p className="text-xs text-muted-foreground font-mono">{name}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};
