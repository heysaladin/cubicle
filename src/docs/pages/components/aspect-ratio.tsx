import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { AspectRatio } from '@/components/ui/aspect-ratio';

export function AspectRatioDemo() {
  return (
    <div className="w-[400px]">
      <AspectRatio ratio={16 / 9} className="rounded-lg bg-muted" />
    </div>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="aspect-ratio">
      <ComponentPreview code={code}>
        <div className="w-full max-w-sm">
          <AspectRatio ratio={16 / 9} className="flex items-center justify-center rounded-lg bg-muted">
            <span className="text-sm text-muted-foreground">16 : 9</span>
          </AspectRatio>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
}
