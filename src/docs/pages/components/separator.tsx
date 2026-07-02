import { Separator } from '@/components/ui/separator';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Separator } from '@/components/ui/separator';

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Cubicle Design System</h4>
        <p className="text-sm text-muted-foreground">Tokens, components, guidelines.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Storybook</div>
        <Separator orientation="vertical" />
        <div>Figma</div>
      </div>
    </div>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="separator">
      <ComponentPreview code={code}>
        <div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium">Cubicle Design System</h4>
            <p className="text-sm text-muted-foreground">Tokens, components, guidelines.</p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center gap-4 text-sm">
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Storybook</div>
            <Separator orientation="vertical" />
            <div>Figma</div>
          </div>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
}
