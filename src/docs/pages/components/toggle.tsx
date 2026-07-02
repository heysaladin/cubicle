import { Bold } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Bold } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="size-4" />
    </Toggle>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="toggle">
      <ComponentPreview code={code}>
        <Toggle aria-label="Toggle bold">
          <Bold className="size-4" />
        </Toggle>
      </ComponentPreview>
    </ComponentDoc>
  );
}
