import { DocPage, DocSection } from '../../components/DocPage';
import { ComponentPreview } from '../../components/ComponentPreview';
import { AppSidebar } from '@/components/webapp/AppSidebar';
import { TopNav } from '@/components/webapp/TopNav';
import { NavBreadcrumb } from '@/components/webapp/NavBreadcrumb';

const appSidebarCode = `import { AppSidebar } from '@/components/webapp/AppSidebar';

export function Demo() {
  return <AppSidebar appName="Cubicle" />;
}`;

const appSidebarCollapsedCode = `import { AppSidebar } from '@/components/webapp/AppSidebar';

export function Demo() {
  return <AppSidebar appName="Cubicle" collapsed />;
}`;

const topNavCode = `import { TopNav } from '@/components/webapp/TopNav';

export function Demo() {
  return (
    <TopNav
      appName="Cubicle"
      userName="Jane Doe"
      userEmail="jane@example.com"
      notificationCount={3}
    />
  );
}`;

const navBreadcrumbCode = `import { NavBreadcrumb } from '@/components/webapp/NavBreadcrumb';

export function Demo() {
  return (
    <NavBreadcrumb
      items={[
        { label: 'Settings', href: '/settings' },
        { label: 'Team', href: '/settings/team' },
        { label: 'Members' },
      ]}
    />
  );
}`;

export default function Page() {
  return (
    <DocPage
      title="WebApp - Navigation"
      description="Navigation components and patterns for web applications."
    >
      <DocSection title="AppSidebar">
        <ComponentPreview
          code={appSidebarCode}
          previewClassName="items-start p-0 overflow-hidden min-h-[400px]"
        >
          <div className="h-[400px] w-full">
            <AppSidebar appName="Cubicle" />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="AppSidebar (Collapsed)">
        <ComponentPreview
          code={appSidebarCollapsedCode}
          previewClassName="items-start p-0 overflow-hidden min-h-[200px]"
        >
          <div className="h-[400px]">
            <AppSidebar appName="Cubicle" collapsed />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="TopNav">
        <ComponentPreview
          code={topNavCode}
          previewClassName="p-0 items-start min-h-[80px]"
        >
          <div className="w-full">
            <TopNav
              appName="Cubicle"
              userName="Jane Doe"
              userEmail="jane@example.com"
              notificationCount={3}
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="NavBreadcrumb">
        <ComponentPreview code={navBreadcrumbCode}>
          <NavBreadcrumb
            items={[
              { label: 'Settings', href: '/settings' },
              { label: 'Team', href: '/settings/team' },
              { label: 'Members' },
            ]}
          />
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
