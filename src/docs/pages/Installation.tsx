import { DocPage, DocSection } from '../components/DocPage';
import { CodeBlock } from '../components/CodeBlock';

export function Installation() {
  return (
    <DocPage
      title="Installation"
      description="How to use Cubicle components and tokens in your project."
    >
      <DocSection title="Clone the repository">
        <CodeBlock code={`git clone https://github.com/heysaladin/cubicle.git\ncd cubicle\nnpm install`} />
      </DocSection>
      <DocSection title="Run locally">
        <p className="leading-7 text-muted-foreground">
          The docs site and Storybook run as separate dev servers:
        </p>
        <CodeBlock code={`npm run dev        # docs site (this website)\nnpm run storybook  # component playground at :6006`} />
      </DocSection>
      <DocSection title="Use a component">
        <p className="leading-7 text-muted-foreground">
          Components live in <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">src/components/ui</code> and
          are imported via the <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">@/</code> alias:
        </p>
        <CodeBlock
          code={`import { Button } from '@/components/ui/button';\n\nexport function Example() {\n  return <Button>Click me</Button>;\n}`}
        />
      </DocSection>
      <DocSection title="Build tokens">
        <p className="leading-7 text-muted-foreground">
          Design tokens are the source of truth in <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">tokens/</code>.
          Compile them to CSS and other platforms with:
        </p>
        <CodeBlock code={`npm run tokens:build   # Style Dictionary → build/\nnpm run tokens:bundle  # bundle for Figma (Tokens Studio)`} />
      </DocSection>
    </DocPage>
  );
}
