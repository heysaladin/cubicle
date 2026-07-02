import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="space-y-1">
          <h4 className="font-medium">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="popover">
      <ComponentPreview code={code}>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-72">
            <div className="space-y-1">
              <h4 className="font-medium">Dimensions</h4>
              <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
            </div>
          </PopoverContent>
        </Popover>
      </ComponentPreview>
    </ComponentDoc>
  );
}
