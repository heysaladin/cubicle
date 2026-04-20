import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design Tokens/Border Radius',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const borderRadii = [
  { name: 'rounded-none', label: 'None', value: '0px', class: 'rounded-none' },
  { name: 'rounded-sm', label: 'Small', value: '2px', class: 'rounded-sm' },
  { name: 'rounded', label: 'Default', value: '4px', class: 'rounded' },
  { name: 'rounded-md', label: 'Medium', value: '6px', class: 'rounded-md' },
  { name: 'rounded-lg', label: 'Large', value: '8px', class: 'rounded-lg' },
  { name: 'rounded-xl', label: 'Extra Large', value: '12px', class: 'rounded-xl' },
  { name: 'rounded-2xl', label: '2X Large', value: '16px', class: 'rounded-2xl' },
  { name: 'rounded-3xl', label: '3X Large', value: '24px', class: 'rounded-3xl' },
  { name: 'rounded-full', label: 'Full', value: '9999px', class: 'rounded-full' },
];

export const All: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6 p-6 max-w-[800px]">
      {borderRadii.map(({ name, label, value, class: cls }) => (
        <div key={name} className="flex flex-col gap-3">
          <div
            className={`h-20 w-full bg-primary/10 border-2 border-primary ${cls} flex items-center justify-center`}
          />
          <div>
            <p className="text-sm font-medium">{label}</p>
            <p className="text-xs text-muted-foreground font-mono">{name}</p>
            <p className="text-xs text-muted-foreground">{value}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const OnComponents: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-6 max-w-[640px]">
      <h2 className="text-lg font-semibold">Border Radius on Components</h2>
      <div className="flex flex-wrap gap-4">
        {borderRadii.map(({ name, label, class: cls }) => (
          <div key={name} className="flex flex-col items-center gap-2">
            <button
              className={`px-4 py-2 bg-primary text-primary-foreground text-sm font-medium ${cls}`}
            >
              Button
            </button>
            <span className="text-xs text-muted-foreground font-mono">{name.replace('rounded-', '') || 'none'}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {borderRadii.map(({ name, class: cls }) => (
          <div
            key={name}
            className={`h-16 w-16 bg-secondary border-2 border-secondary-foreground/20 ${cls}`}
          />
        ))}
      </div>
    </div>
  ),
};

export const SemanticRadii: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 max-w-[640px]">
      <h2 className="text-lg font-semibold">Common Component Radii</h2>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex flex-col gap-2">
          <div className="h-10 bg-primary/10 border border-primary rounded-md flex items-center px-3 text-xs font-mono">
            Input — rounded-md (6px)
          </div>
          <div className="h-10 bg-primary/10 border border-primary rounded-md flex items-center px-3 text-xs font-mono">
            Button — rounded-md (6px)
          </div>
          <div className="h-10 bg-primary/10 border border-primary rounded-lg flex items-center px-3 text-xs font-mono">
            Card — rounded-lg (8px)
          </div>
          <div className="h-10 bg-primary/10 border border-primary rounded-full flex items-center px-3 text-xs font-mono">
            Badge — rounded-full (9999px)
          </div>
          <div className="h-10 bg-primary/10 border border-primary rounded-full flex items-center px-3 text-xs font-mono">
            Avatar — rounded-full (9999px)
          </div>
        </div>
      </div>
    </div>
  ),
};
