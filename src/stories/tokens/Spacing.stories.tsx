import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design Tokens/Spacing',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const spacingScale = [
  { name: '0', value: '0px', class: 'w-0' },
  { name: 'px', value: '1px', class: 'w-px' },
  { name: '0.5', value: '2px', class: 'w-0.5' },
  { name: '1', value: '4px', class: 'w-1' },
  { name: '1.5', value: '6px', class: 'w-1.5' },
  { name: '2', value: '8px', class: 'w-2' },
  { name: '2.5', value: '10px', class: 'w-2.5' },
  { name: '3', value: '12px', class: 'w-3' },
  { name: '3.5', value: '14px', class: 'w-3.5' },
  { name: '4', value: '16px', class: 'w-4' },
  { name: '5', value: '20px', class: 'w-5' },
  { name: '6', value: '24px', class: 'w-6' },
  { name: '7', value: '28px', class: 'w-7' },
  { name: '8', value: '32px', class: 'w-8' },
  { name: '9', value: '36px', class: 'w-9' },
  { name: '10', value: '40px', class: 'w-10' },
  { name: '11', value: '44px', class: 'w-11' },
  { name: '12', value: '48px', class: 'w-12' },
  { name: '14', value: '56px', class: 'w-14' },
  { name: '16', value: '64px', class: 'w-16' },
  { name: '20', value: '80px', class: 'w-20' },
  { name: '24', value: '96px', class: 'w-24' },
  { name: '28', value: '112px', class: 'w-28' },
  { name: '32', value: '128px', class: 'w-32' },
  { name: '36', value: '144px', class: 'w-36' },
  { name: '40', value: '160px', class: 'w-40' },
  { name: '48', value: '192px', class: 'w-48' },
  { name: '56', value: '224px', class: 'w-56' },
  { name: '64', value: '256px', class: 'w-64' },
];

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-3 p-4 max-w-[640px]">
      <h2 className="text-lg font-semibold mb-2">Tailwind Spacing Scale</h2>
      {spacingScale.map(({ name, value, class: cls }) => (
        <div key={name} className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground font-mono w-8 text-right">{name}</span>
          <span className="text-xs text-muted-foreground w-14">{value}</span>
          <div className="flex items-center">
            <div
              className={`h-4 bg-primary rounded-sm ${cls}`}
              style={{ minWidth: name === '0' ? '2px' : undefined, opacity: name === '0' ? 0.3 : 1 }}
            />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const PaddingExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <h2 className="text-lg font-semibold">Padding Scale</h2>
      <div className="flex flex-wrap gap-4">
        {[1, 2, 3, 4, 6, 8, 10, 12, 16].map((size) => (
          <div key={size} className="flex flex-col items-center gap-1">
            <div
              className="bg-muted border border-border rounded flex items-center justify-center"
              style={{ padding: `calc(${size} * 4px)` }}
            >
              <div className="bg-primary/20 border border-primary text-xs rounded w-8 h-8 flex items-center justify-center text-primary font-mono">
                {size}
              </div>
            </div>
            <span className="text-xs text-muted-foreground font-mono">p-{size}</span>
            <span className="text-xs text-muted-foreground">{size * 4}px</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const GapExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <h2 className="text-lg font-semibold">Gap Scale</h2>
      {[1, 2, 4, 6, 8, 10, 12].map((size) => (
        <div key={size} className="flex flex-col gap-1">
          <span className="text-xs text-muted-foreground font-mono">gap-{size} ({size * 4}px)</span>
          <div
            className="flex"
            style={{ gap: `calc(${size} * 4px)` }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-8 w-16 bg-primary/20 border border-primary rounded text-xs flex items-center justify-center text-primary font-mono"
              >
                item
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
