import { Badge } from '@/components/ui/badge';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Badge } from '@/components/ui/badge';

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="badge">
      <ComponentPreview code={code}>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
}
