import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';

// Render <Toaster /> once at the root of your app.
export function SonnerDemo() {
  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
          })
        }
      >
        Show toast
      </Button>
    </>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="sonner">
      <ComponentPreview code={code}>
        <Toaster />
        <Button
          variant="outline"
          onClick={() =>
            toast('Event has been created', {
              description: 'Sunday, December 03, 2023 at 9:00 AM',
            })
          }
        >
          Show toast
        </Button>
      </ComponentPreview>
    </ComponentDoc>
  );
}
