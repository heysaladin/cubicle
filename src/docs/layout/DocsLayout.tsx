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
