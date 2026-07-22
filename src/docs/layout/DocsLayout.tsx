import { Link, NavLink, Outlet, useLocation } from 'react-router';
import { PanelsTopLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { components } from '../registry';
import { ThemeToggle } from './ThemeToggle';

const gettingStarted = [
  { to: '/docs', label: 'Introduction' },
  { to: '/docs/installation', label: 'Installation' },
  { to: '/docs/tokens', label: 'Design Tokens' },
];

const webAppComponents = [
  { to: '/docs/webapp/navigation', label: '↳ WebApp - Navigation' },
  { to: '/docs/webapp/content', label: '↳ WebApp - Content (Data Display)' },
  { to: '/docs/webapp/input', label: '↳ WebApp - Input' },
  { to: '/docs/webapp/feedback', label: '↳ WebApp - Feedback' },
  { to: '/docs/webapp/control', label: '↳ WebApp - Control' },
  { to: '/docs/webapp/visualization', label: '↳ WebApp - Visualization' },
  { to: '/docs/webapp/layout', label: '↳ WebApp - Layout' },
  { to: '/docs/webapp/system', label: '↳ WebApp - System / Advanced Patterns' },
];

const webAppPages = [
  { to: '/docs/webapp/pages/dashboard', label: '1. WebApp - Dashboard (Overview)' },
  { to: '/docs/webapp/pages/data-management', label: '2. WebApp - Data Management' },
  { to: '/docs/webapp/pages/analytics', label: '3. WebApp - Analytics / Reports' },
  { to: '/docs/webapp/pages/user-management', label: '4. WebApp - User Management' },
  { to: '/docs/webapp/pages/transactions', label: '5. WebApp - Transactions / Activity' },
  { to: '/docs/webapp/pages/notifications', label: '6. WebApp - Notifications' },
  { to: '/docs/webapp/pages/settings', label: '7. WebApp - Settings' },
  { to: '/docs/webapp/pages/support', label: '8. WebApp - Support' },
  { to: '/docs/webapp/pages/auth', label: '9. WebApp - Auth' },
  { to: '/docs/webapp/pages/system-pages', label: '10. WebApp - System Pages' },
];

const websiteComponents = [
  { to: '/docs/website/navigation', label: '↳ Website - Navigation' },
  { to: '/docs/website/content', label: '↳ Website - Content / Typography' },
  { to: '/docs/website/sections', label: '↳ Website - Sections (Page Building Blocks)' },
  { to: '/docs/website/components', label: '↳ Website - Components (UI Elements)' },
  { to: '/docs/website/feedback', label: '↳ Website - Feedback' },
  { to: '/docs/website/media', label: '↳ Website - Media & Visual' },
  { to: '/docs/website/layout', label: '↳ Website - Layout' },
  { to: '/docs/website/system', label: '↳ Website - System / Advanced Patterns' },
];

const websitePages = [
  { to: '/docs/website/pages/home', label: '1. Website - Home' },
  { to: '/docs/website/pages/product', label: '2. Website - Product / Features' },
  { to: '/docs/website/pages/pricing', label: '3. Website - Pricing' },
  { to: '/docs/website/pages/about', label: '4. Website - About' },
  { to: '/docs/website/pages/blog', label: '5. Website - Blog / Resources' },
  { to: '/docs/website/pages/contact', label: '6. Website - Contact' },
  { to: '/docs/website/pages/faq', label: '7. Website - FAQ / Help' },
  { to: '/docs/website/pages/testimonials', label: '8. Website - Testimonials / Case Studies' },
  { to: '/docs/website/pages/careers', label: '9. Website - Careers' },
  { to: '/docs/website/pages/legal', label: '10. Website - Legal' },
  { to: '/docs/website/pages/auth', label: '11. Website - Auth' },
  { to: '/docs/website/pages/system-pages', label: '12. Website - System Pages' },
];

const mobileAppComponents = [
  { to: '/docs/mobileapp/navigation', label: '↳ MobileApp - Navigation' },
  { to: '/docs/mobileapp/content', label: '↳ MobileApp - Content (Data Display)' },
  { to: '/docs/mobileapp/input', label: '↳ MobileApp - Input' },
  { to: '/docs/mobileapp/feedback', label: '↳ MobileApp - Feedback' },
  { to: '/docs/mobileapp/control', label: '↳ MobileApp - Control' },
  { to: '/docs/mobileapp/visualization', label: '↳ MobileApp - Visualization' },
  { to: '/docs/mobileapp/layout', label: '↳ MobileApp - Layout' },
  { to: '/docs/mobileapp/system', label: '↳ MobileApp - System / Advanced Patterns' },
];

const mobileAppScreens = [
  { to: '/docs/mobileapp/screens/onboarding', label: '1. MobileApp - Onboarding' },
  { to: '/docs/mobileapp/screens/authentication', label: '2. MobileApp - Authentication' },
  { to: '/docs/mobileapp/screens/dashboard', label: '3. MobileApp - Home / Dashboard' },
  { to: '/docs/mobileapp/screens/list-feed', label: '4. MobileApp - List / Feed' },
  { to: '/docs/mobileapp/screens/detail', label: '5. MobileApp - Detail' },
  { to: '/docs/mobileapp/screens/create-edit', label: '6. MobileApp - Create / Edit' },
  { to: '/docs/mobileapp/screens/notifications', label: '7. MobileApp - Notifications' },
  { to: '/docs/mobileapp/screens/profile', label: '8. MobileApp - Profile / Account' },
  { to: '/docs/mobileapp/screens/settings', label: '9. MobileApp - Settings' },
  { to: '/docs/mobileapp/screens/transactions', label: '10. MobileApp - Transactions / Activity' },
  { to: '/docs/mobileapp/screens/search', label: '11. MobileApp - Search' },
  { to: '/docs/mobileapp/screens/help', label: '12. MobileApp - Help / Support' },
  { to: '/docs/mobileapp/screens/empty-states', label: '13. MobileApp - Empty / State Screens' },
  { to: '/docs/mobileapp/screens/system-screens', label: '14. MobileApp - System Screens' },
];

function SidebarLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        cn(
          'block rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground',
          isActive && 'bg-accent font-medium text-accent-foreground',
        )
      }
    >
      {label}
    </NavLink>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center gap-6 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex size-6 items-center justify-center rounded bg-primary text-primary-foreground">
            <PanelsTopLeft className="size-3.5" />
          </span>
          Cubicle
        </Link>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <NavLink to="/docs" className={({ isActive }) => cn('transition-colors hover:text-foreground', isActive && 'text-foreground')} end>
            Docs
          </NavLink>
          <NavLink to="/docs/components/button" className={({ isActive }) => cn('transition-colors hover:text-foreground', isActive && 'text-foreground')}>
            Components
          </NavLink>
          {/* Full page load on purpose: Storybook is a separate app */}
          <a href="/dev/" className="transition-colors hover:text-foreground">
            Storybook
          </a>
        </nav>
        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/heysaladin/cubicle" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export function DocsLayout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-svh">
      <SiteHeader />
      <div className="mx-auto flex max-w-screen-2xl px-4 md:px-8">
        <aside className="sticky top-14 hidden h-[calc(100svh-3.5rem)] w-60 shrink-0 md:block">
          <ScrollArea className="h-full py-6 pr-4">
            <div className="space-y-6">
              <div>
                <p className="mb-2 px-3 text-sm font-semibold">Getting Started</p>
                <div className="space-y-0.5">
                  {gettingStarted.map((item) => (
                    <SidebarLink key={item.to} {...item} />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 px-3 text-sm font-semibold">Components</p>
                <div className="space-y-0.5">
                  {components.map((c) => (
                    <SidebarLink key={c.slug} to={`/docs/components/${c.slug}`} label={c.title} />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 px-3 text-sm font-semibold">WEB APP - COMPONENTS</p>
                <div className="space-y-0.5">
                  {webAppComponents.map((item) => (
                    <SidebarLink key={item.to} {...item} />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 px-3 text-sm font-semibold">WEB APP - PAGES</p>
                <div className="space-y-0.5">
                  {webAppPages.map((item) => (
                    <SidebarLink key={item.to} {...item} />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 px-3 text-sm font-semibold">WEBSITE - COMPONENTS</p>
                <div className="space-y-0.5">
                  {websiteComponents.map((item) => (
                    <SidebarLink key={item.to} {...item} />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 px-3 text-sm font-semibold">WEBSITE - PAGES</p>
                <div className="space-y-0.5">
                  {websitePages.map((item) => (
                    <SidebarLink key={item.to} {...item} />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 px-3 text-sm font-semibold">MOBILE APP - COMPONENTS</p>
                <div className="space-y-0.5">
                  {mobileAppComponents.map((item) => (
                    <SidebarLink key={item.to} {...item} />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 px-3 text-sm font-semibold">MOBILE APP - SCREENS</p>
                <div className="space-y-0.5">
                  {mobileAppScreens.map((item) => (
                    <SidebarLink key={item.to} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </aside>
        <main key={pathname} className="min-w-0 flex-1 py-10 md:pl-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
