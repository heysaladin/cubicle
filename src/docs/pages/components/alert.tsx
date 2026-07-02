import { Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="size-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using Cubicle.
      </AlertDescription>
    </Alert>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="alert">
      <ComponentPreview code={code}>
        <Alert className="max-w-md">
          <Terminal className="size-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>You can add components to your app using Cubicle.</AlertDescription>
        </Alert>
      </ComponentPreview>
    </ComponentDoc>
  );
}
