import * as React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface SiteHeaderProps {
  logo?: React.ReactNode;
  siteName?: string;
  navLinks?: { label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  transparent?: boolean;
}

export function SiteHeader({
  logo,
  siteName = 'Cubicle',
  navLinks = [
    { label: 'Product', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Docs', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  ctaLabel = 'Get started',
  ctaHref = '#',
  transparent = false,
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header
      className={cn(
        'w-full border-b',
        transparent ? 'bg-transparent border-transparent' : 'bg-background',
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            {logo ?? (
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                {siteName.charAt(0)}
              </div>
            )}
            <span className="text-sm font-semibold">{siteName}</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sign in
            </a>
            <Button size="sm" asChild>
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a href="#" className="px-3 py-2 text-sm text-muted-foreground">Sign in</a>
              <Button size="sm" className="mx-3" asChild>
                <a href={ctaHref}>{ctaLabel}</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
