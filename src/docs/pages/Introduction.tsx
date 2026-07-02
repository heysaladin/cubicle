import { Link } from 'react-router';
import { DocPage, DocSection } from '../components/DocPage';

export function Introduction() {
  return (
    <DocPage
      title="Introduction"
      description="Cubicle is a design system: a shared language of tokens, components, and guidelines for building products."
    >
      <DocSection title="What is Cubicle?">
        <p className="leading-7 text-muted-foreground">
          Cubicle provides accessible React components built on Radix primitives and styled with
          Tailwind CSS. Every color, radius, and shadow comes from a single token source that is
          also synced to Figma, so design and code always stay in step.
        </p>
      </DocSection>
      <DocSection title="Principles">
        <ul className="list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">Token-first.</span> Styles come from
            semantic tokens, never hard-coded values.
          </li>
          <li>
            <span className="font-medium text-foreground">Accessible by default.</span> Components
            are keyboard-navigable and screen-reader friendly via Radix.
          </li>
          <li>
            <span className="font-medium text-foreground">Composable.</span> Small parts you
            assemble, not monolithic widgets you configure.
          </li>
        </ul>
      </DocSection>
      <DocSection title="Next steps">
        <p className="leading-7 text-muted-foreground">
          Head to <Link to="/docs/installation" className="font-medium text-foreground underline underline-offset-4">Installation</Link> to
          set up your project, or explore the <Link to="/docs/components/button" className="font-medium text-foreground underline underline-offset-4">components</Link>.
          For an interactive playground with every state and prop, open the{' '}
          <a href="/dev/" className="font-medium text-foreground underline underline-offset-4">Storybook</a>.
        </p>
      </DocSection>
    </DocPage>
  );
}
