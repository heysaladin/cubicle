import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Fragment } from 'react';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const tags = Array.from({ length: 20 }).map((_, i) => `v1.2.0-beta.${20 - i}`);

const code = `import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const tags = Array.from({ length: 20 }).map(
  (_, i) => \`v1.2.0-beta.\${20 - i}\`,
);

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-lg border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="scroll-area">
      <ComponentPreview code={code}>
        <ScrollArea className="h-72 w-48 rounded-lg border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium">Tags</h4>
            {tags.map((tag) => (
              <Fragment key={tag}>
                <div className="text-sm">{tag}</div>
                <Separator className="my-2" />
              </Fragment>
            ))}
          </div>
        </ScrollArea>
      </ComponentPreview>
    </ComponentDoc>
  );
}
