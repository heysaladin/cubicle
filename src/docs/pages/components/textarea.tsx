import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function TextareaDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="textarea">
      <ComponentPreview code={code}>
        <div className="grid w-full max-w-sm gap-2">
          <Label htmlFor="textarea-demo">Your message</Label>
          <Textarea id="textarea-demo" placeholder="Type your message here." />
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
}
