import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design Tokens/Typography',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-[640px] p-4">
      <div>
        <p className="text-xs text-muted-foreground mb-1 font-mono">text-5xl / font-extrabold</p>
        <h1 className="text-5xl font-extrabold tracking-tight">Heading 1</h1>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-1 font-mono">text-4xl / font-bold</p>
        <h2 className="text-4xl font-bold tracking-tight">Heading 2</h2>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-1 font-mono">text-3xl / font-bold</p>
        <h3 className="text-3xl font-bold tracking-tight">Heading 3</h3>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-1 font-mono">text-2xl / font-semibold</p>
        <h4 className="text-2xl font-semibold tracking-tight">Heading 4</h4>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-1 font-mono">text-xl / font-semibold</p>
        <h5 className="text-xl font-semibold tracking-tight">Heading 5</h5>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-1 font-mono">text-lg / font-semibold</p>
        <h6 className="text-lg font-semibold tracking-tight">Heading 6</h6>
      </div>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-[640px] p-4">
      <div>
        <p className="text-xs text-muted-foreground mb-1 font-mono">text-base (16px)</p>
        <p className="text-base leading-7">
          The quick brown fox jumps over the lazy dog. This is base body text used for most
          readable content across the application.
        </p>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-1 font-mono">text-sm (14px)</p>
        <p className="text-sm leading-6">
          The quick brown fox jumps over the lazy dog. This smaller text size is used for
          supporting text, descriptions, and secondary content.
        </p>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-1 font-mono">text-xs (12px)</p>
        <p className="text-xs leading-5">
          The quick brown fox jumps over the lazy dog. Extra small text is used for captions,
          labels, timestamps, and other supplementary information.
        </p>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-1 font-mono">text-lg (18px)</p>
        <p className="text-lg leading-7">
          The quick brown fox jumps over the lazy dog. Large body text is used for lead
          paragraphs and introductory content.
        </p>
      </div>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-[640px] p-4">
      {[
        { weight: 'font-thin', label: 'Thin (100)', value: '100' },
        { weight: 'font-extralight', label: 'Extra Light (200)', value: '200' },
        { weight: 'font-light', label: 'Light (300)', value: '300' },
        { weight: 'font-normal', label: 'Normal (400)', value: '400' },
        { weight: 'font-medium', label: 'Medium (500)', value: '500' },
        { weight: 'font-semibold', label: 'Semibold (600)', value: '600' },
        { weight: 'font-bold', label: 'Bold (700)', value: '700' },
        { weight: 'font-extrabold', label: 'Extra Bold (800)', value: '800' },
        { weight: 'font-black', label: 'Black (900)', value: '900' },
      ].map(({ weight, label }) => (
        <div key={weight} className="flex items-baseline gap-4">
          <span className="text-xs text-muted-foreground font-mono w-32">{label}</span>
          <p className={`text-xl ${weight}`}>The quick brown fox</p>
        </div>
      ))}
    </div>
  ),
};

export const ScaleComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-3 max-w-[640px] p-4">
      {[
        { size: 'text-xs', label: 'xs · 12px' },
        { size: 'text-sm', label: 'sm · 14px' },
        { size: 'text-base', label: 'base · 16px' },
        { size: 'text-lg', label: 'lg · 18px' },
        { size: 'text-xl', label: 'xl · 20px' },
        { size: 'text-2xl', label: '2xl · 24px' },
        { size: 'text-3xl', label: '3xl · 30px' },
        { size: 'text-4xl', label: '4xl · 36px' },
        { size: 'text-5xl', label: '5xl · 48px' },
      ].map(({ size, label }) => (
        <div key={size} className="flex items-baseline gap-4">
          <span className="text-xs text-muted-foreground font-mono w-24">{label}</span>
          <p className={size}>Aa</p>
        </div>
      ))}
    </div>
  ),
};
