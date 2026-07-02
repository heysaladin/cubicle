import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function InputDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="input">
      <ComponentPreview code={code}>
        <div className="grid w-full max-w-sm gap-2">
          <Label htmlFor="input-demo-email">Email</Label>
          <Input type="email" id="input-demo-email" placeholder="Email" />
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
}
