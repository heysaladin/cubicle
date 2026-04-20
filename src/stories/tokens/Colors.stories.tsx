import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design Tokens/Colors',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

interface ColorSwatchProps {
  name: string;
  variable: string;
  foregroundVariable?: string;
}

function ColorSwatch({ name, variable, foregroundVariable }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 w-full rounded-lg border"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <div className="flex flex-col">
        <span className="text-xs font-medium">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{variable}</span>
        {foregroundVariable && (
          <span className="text-xs text-muted-foreground font-mono">{foregroundVariable}</span>
        )}
      </div>
    </div>
  );
}

const backgroundColors: ColorSwatchProps[] = [
  { name: 'Background', variable: '--background', foregroundVariable: '--foreground' },
  { name: 'Card', variable: '--card', foregroundVariable: '--card-foreground' },
  { name: 'Popover', variable: '--popover', foregroundVariable: '--popover-foreground' },
];

const semanticColors: ColorSwatchProps[] = [
  { name: 'Primary', variable: '--primary', foregroundVariable: '--primary-foreground' },
  { name: 'Secondary', variable: '--secondary', foregroundVariable: '--secondary-foreground' },
  { name: 'Muted', variable: '--muted', foregroundVariable: '--muted-foreground' },
  { name: 'Accent', variable: '--accent', foregroundVariable: '--accent-foreground' },
  { name: 'Destructive', variable: '--destructive', foregroundVariable: '--destructive-foreground' },
];

const utilityColors: ColorSwatchProps[] = [
  { name: 'Border', variable: '--border' },
  { name: 'Input', variable: '--input' },
  { name: 'Ring', variable: '--ring' },
];

export const All: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4 max-w-[800px]">
      <section>
        <h2 className="text-lg font-semibold mb-4">Background & Surface</h2>
        <div className="grid grid-cols-3 gap-4">
          {backgroundColors.map((color) => (
            <ColorSwatch key={color.variable} {...color} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Semantic Colors</h2>
        <div className="grid grid-cols-3 gap-4">
          {semanticColors.map((color) => (
            <ColorSwatch key={color.variable} {...color} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Utility Colors</h2>
        <div className="grid grid-cols-3 gap-4">
          {utilityColors.map((color) => (
            <ColorSwatch key={color.variable} {...color} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Foreground on Background</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { bg: '--primary', fg: '--primary-foreground', label: 'Primary' },
            { bg: '--secondary', fg: '--secondary-foreground', label: 'Secondary' },
            { bg: '--destructive', fg: '--destructive-foreground', label: 'Destructive' },
            { bg: '--muted', fg: '--muted-foreground', label: 'Muted' },
            { bg: '--accent', fg: '--accent-foreground', label: 'Accent' },
            { bg: '--card', fg: '--card-foreground', label: 'Card' },
          ].map(({ bg, fg, label }) => (
            <div
              key={bg}
              className="h-12 rounded-lg flex items-center justify-center border"
              style={{
                backgroundColor: `var(${bg})`,
                color: `var(${fg})`,
              }}
            >
              <span className="text-sm font-medium">{label} foreground on {label.toLowerCase()}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};

export const Background: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-[600px] p-4">
      {backgroundColors.map((color) => (
        <ColorSwatch key={color.variable} {...color} />
      ))}
    </div>
  ),
};

export const Semantic: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-[600px] p-4">
      {semanticColors.map((color) => (
        <ColorSwatch key={color.variable} {...color} />
      ))}
    </div>
  ),
};
