import { SiteHeader } from '@/components/website/SiteHeader';
import { SiteFooter } from '@/components/website/SiteFooter';
import { Button } from '@/components/ui/button';
import { Construction, Clock, ServerCrash, Search } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center space-y-5 max-w-md">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Search className="h-7 w-7 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-muted-foreground/50">404</h1>
            <h2 className="text-xl font-semibold">Page not found</h2>
            <p className="text-sm text-muted-foreground">
              Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <a href="#">Go home</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#">Contact support</a>
            </Button>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

export function ServerErrorPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center space-y-5 max-w-md">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <ServerCrash className="h-7 w-7 text-destructive" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-muted-foreground/50">500</h1>
            <h2 className="text-xl font-semibold">Something went wrong</h2>
            <p className="text-sm text-muted-foreground">
              We're having trouble on our end. Our team has been notified and is working on a fix.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <a href="#">Try again</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#">Check status page</a>
            </Button>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

export function MaintenancePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center space-y-5 max-w-md">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/20">
              <Construction className="h-7 w-7 text-amber-600" />
            </div>
          </div>
          <div className="flex items-center gap-2 font-bold text-lg justify-center">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold">C</div>
            Cubicle
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">We'll be right back</h1>
            <p className="text-sm text-muted-foreground">
              We're currently performing scheduled maintenance. The site will be back online shortly.
              Thank you for your patience.
            </p>
          </div>
          <div className="border rounded-lg p-4 text-sm text-muted-foreground space-y-1">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber-500" />
              <span>Estimated completion: <strong className="text-foreground">July 26, 2026 at 4:00 AM UTC</strong></span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm text-primary hover:underline">Check our status page for live updates</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Follow @cubicle on X for updates</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex items-center gap-2 font-bold text-lg justify-center">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold">C</div>
          Cubicle
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Something big is coming</h1>
          <p className="text-sm text-muted-foreground">
            We're working on something exciting. Leave your email and we'll let you know when it's ready.
          </p>
        </div>
        <form className="flex gap-2 justify-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-48"
          />
          <Button type="submit" size="sm">Notify me</Button>
        </form>
      </div>
    </div>
  );
}

export function SystemPagesPage() {
  return (
    <div className="space-y-1">
      {/* 404 */}
      <div className="border rounded-xl overflow-hidden">
        <div className="bg-muted/50 border-b px-4 py-2 text-xs font-medium text-muted-foreground">404 — Not Found</div>
        <NotFoundPage />
      </div>

      {/* 500 */}
      <div className="border rounded-xl overflow-hidden">
        <div className="bg-muted/50 border-b px-4 py-2 text-xs font-medium text-muted-foreground">500 — Server Error</div>
        <ServerErrorPage />
      </div>

      {/* Maintenance */}
      <div className="border rounded-xl overflow-hidden">
        <div className="bg-muted/50 border-b px-4 py-2 text-xs font-medium text-muted-foreground">Maintenance</div>
        <MaintenancePage />
      </div>

      {/* Coming soon */}
      <div className="border rounded-xl overflow-hidden">
        <div className="bg-muted/50 border-b px-4 py-2 text-xs font-medium text-muted-foreground">Coming Soon</div>
        <ComingSoonPage />
      </div>
    </div>
  );
}
