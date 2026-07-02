import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-sm">
      <TabsList className="w-full">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="p-2 text-sm text-muted-foreground">
          Make changes to your account here.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="p-2 text-sm text-muted-foreground">
          Change your password here.
        </p>
      </TabsContent>
    </Tabs>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="tabs">
      <ComponentPreview code={code}>
        <Tabs defaultValue="account" className="w-full max-w-sm">
          <TabsList className="w-full">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <p className="p-2 text-sm text-muted-foreground">Make changes to your account here.</p>
          </TabsContent>
          <TabsContent value="password">
            <p className="p-2 text-sm text-muted-foreground">Change your password here.</p>
          </TabsContent>
        </Tabs>
      </ComponentPreview>
    </ComponentDoc>
  );
}
