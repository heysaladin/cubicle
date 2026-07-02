import { Button } from '@/components/ui/button';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';
import { DocSection } from '../../components/DocPage';

const variantsCode = `import { Button } from '@/components/ui/button';

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}`;

const sizesCode = `import { Button } from '@/components/ui/button';

export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">+</Button>
    </div>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="button">
      <ComponentPreview code={variantsCode}>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </ComponentPreview>
      <DocSection title="Sizes">
        <ComponentPreview code={sizesCode}>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">+</Button>
          </div>
        </ComponentPreview>
      </DocSection>
    </ComponentDoc>
  );
}
