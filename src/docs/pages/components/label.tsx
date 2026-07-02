import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export function LabelDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="label">
      <ComponentPreview code={code}>
        <div className="flex items-center gap-2">
          <Checkbox id="label-demo-terms" />
          <Label htmlFor="label-demo-terms">Accept terms and conditions</Label>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
}
