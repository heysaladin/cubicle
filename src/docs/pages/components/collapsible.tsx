import { ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export function CollapsibleDemo() {
  return (
    <Collapsible className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">@cubicle starred 3 repositories</p>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon">
            <ChevronsUpDown className="size-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 text-sm">radix-ui/primitives</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 text-sm">tailwindlabs/tailwindcss</div>
        <div className="rounded-md border px-4 py-2 text-sm">storybookjs/storybook</div>
      </CollapsibleContent>
    </Collapsible>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="collapsible">
      <ComponentPreview code={code}>
        <Collapsible className="w-full max-w-sm space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">@cubicle starred 3 repositories</p>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon">
                <ChevronsUpDown className="size-4" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-2 text-sm">radix-ui/primitives</div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 text-sm">tailwindlabs/tailwindcss</div>
            <div className="rounded-md border px-4 py-2 text-sm">storybookjs/storybook</div>
          </CollapsibleContent>
        </Collapsible>
      </ComponentPreview>
    </ComponentDoc>
  );
}
