import { ComponentDoc } from '../../components/ComponentDoc';
import { CodeBlock } from '../../components/CodeBlock';

const code = `import { Home, Inbox, Settings } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

const items = [
  { title: 'Home', url: '#', icon: Home },
  { title: 'Inbox', url: '#', icon: Inbox },
  { title: 'Settings', url: '#', icon: Settings },
];

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main className="flex-1 p-4">
        <SidebarTrigger />
        {/* Your page content */}
      </main>
    </SidebarProvider>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="sidebar">
      <p className="leading-7 text-muted-foreground">
        The sidebar is a full-page layout component, so it&apos;s best experienced in the{' '}
        <a href="/dev/?path=/docs/ui-sidebar--docs" className="font-medium text-foreground underline underline-offset-4">
          Storybook playground
        </a>
        . Basic usage:
      </p>
      <CodeBlock code={code} />
    </ComponentDoc>
  );
}
