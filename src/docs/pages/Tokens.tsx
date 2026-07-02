import { DocPage, DocSection } from '../components/DocPage';

const colorTokens = [
  'background',
  'foreground',
  'primary',
  'primary-foreground',
  'secondary',
  'secondary-foreground',
  'muted',
  'muted-foreground',
  'accent',
  'accent-foreground',
  'destructive',
  'destructive-foreground',
  'card',
  'card-foreground',
  'popover',
  'popover-foreground',
  'border',
  'input',
  'ring',
  'chart-1',
  'chart-2',
  'chart-3',
  'chart-4',
  'chart-5',
];

const radiusTokens = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];

const shadowTokens = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'];

export function Tokens() {
  return (
    <DocPage
      title="Design Tokens"
      description="Every visual decision in Cubicle comes from tokens. The source of truth lives in tokens/ as DTCG JSON, compiled by Style Dictionary and synced to Figma."
    >
      <DocSection title="Colors">
        <p className="leading-7 text-muted-foreground">
          Semantic colors adapt automatically to light and dark mode. Toggle the theme in the
          header to see them change.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {colorTokens.map((token) => (
            <div key={token} className="space-y-1.5">
              <div
                className="h-14 rounded-lg border"
                style={{ backgroundColor: `var(--${token})` }}
              />
              <p className="font-mono text-xs text-muted-foreground">--{token}</p>
            </div>
          ))}
        </div>
      </DocSection>
      <DocSection title="Radius">
        <div className="flex flex-wrap gap-4">
          {radiusTokens.map((token) => (
            <div key={token} className="space-y-1.5 text-center">
              <div
                className="size-16 border-2 border-primary bg-primary/10"
                style={{ borderRadius: `var(--radius-${token})` }}
              />
              <p className="font-mono text-xs text-muted-foreground">{token}</p>
            </div>
          ))}
        </div>
      </DocSection>
      <DocSection title="Shadows">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {shadowTokens.map((token) => (
            <div key={token} className="space-y-1.5 text-center">
              <div
                className="h-16 rounded-lg bg-card"
                style={{ boxShadow: `var(--shadow-${token})` }}
              />
              <p className="font-mono text-xs text-muted-foreground">{token}</p>
            </div>
          ))}
        </div>
      </DocSection>
      <DocSection title="Typography">
        <div className="space-y-4 rounded-lg border p-6">
          <p className="text-4xl font-semibold tracking-tight">Heading 1</p>
          <p className="text-3xl font-semibold tracking-tight">Heading 2</p>
          <p className="text-2xl font-semibold tracking-tight">Heading 3</p>
          <p className="text-xl font-semibold tracking-tight">Heading 4</p>
          <p className="text-base leading-7">
            Body — The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-sm text-muted-foreground">
            Muted — The quick brown fox jumps over the lazy dog.
          </p>
          <p className="font-mono text-sm">Mono — const cubicle = true;</p>
        </div>
      </DocSection>
    </DocPage>
  );
}
