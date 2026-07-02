import { Bold, Italic, Underline } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Bold, Italic, Underline } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="toggle-group">
      <ComponentPreview code={code}>
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </ComponentPreview>
    </ComponentDoc>
  );
}
