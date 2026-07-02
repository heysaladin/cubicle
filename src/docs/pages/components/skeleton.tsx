import { Skeleton } from '@/components/ui/skeleton';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonDemo() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="skeleton">
      <ComponentPreview code={code}>
        <div className="flex items-center gap-4">
          <Skeleton className="size-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
}
