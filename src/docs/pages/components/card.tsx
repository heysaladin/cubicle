import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Name of your project" />
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="card">
      <ComponentPreview code={code}>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one click.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <Label htmlFor="card-demo-name">Name</Label>
              <Input id="card-demo-name" placeholder="Name of your project" />
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>
    </ComponentDoc>
  );
}
