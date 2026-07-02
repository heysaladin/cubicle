import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export function SwitchDemo() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="switch">
      <ComponentPreview code={code}>
        <div className="flex items-center gap-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
}
