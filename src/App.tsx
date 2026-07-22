import { lazy, Suspense, useEffect } from 'react';
import type { ComponentType } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router';
import { Button } from '@/components/ui/button';
import { DocsLayout } from './docs/layout/DocsLayout';
import { Home } from './docs/pages/Home';
import { Introduction } from './docs/pages/Introduction';
import { Installation } from './docs/pages/Installation';
import { Tokens } from './docs/pages/Tokens';

const componentPages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: ComponentType }>('./docs/pages/components/*.tsx'),
  ).map(([path, loader]) => [path.match(/\/([^/]+)\.tsx$/)![1], lazy(loader)]),
);

const webappComponentPages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: ComponentType }>('./docs/pages/webapp/*.tsx'),
  ).map(([path, loader]) => [path.match(/\/([^/]+)\.tsx$/)![1], lazy(loader)]),
);

const webappPagePages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: ComponentType }>('./docs/pages/webapp/pages/*.tsx'),
  ).map(([path, loader]) => [path.match(/\/([^/]+)\.tsx$/)![1], lazy(loader)]),
);

const websiteComponentPages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: ComponentType }>('./docs/pages/website/*.tsx'),
  ).map(([path, loader]) => [path.match(/\/([^/]+)\.tsx$/)![1], lazy(loader)]),
);

const websitePagePages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: ComponentType }>('./docs/pages/website/pages/*.tsx'),
  ).map(([path, loader]) => [path.match(/\/([^/]+)\.tsx$/)![1], lazy(loader)]),
);

const mobileappComponentPages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: ComponentType }>('./docs/pages/mobileapp/*.tsx'),
  ).map(([path, loader]) => [path.match(/\/([^/]+)\.tsx$/)![1], lazy(loader)]),
);

const mobileappScreenPages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: ComponentType }>('./docs/pages/mobileapp/screens/*.tsx'),
  ).map(([path, loader]) => [path.match(/\/([^/]+)\.tsx$/)![1], lazy(loader)]),
);

function ComponentDocRoute() {
  const { slug } = useParams();
  const Page = slug ? componentPages[slug] : undefined;

  if (!Page) return <NotFound />;

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

function GlobRoute({ pages }: { pages: Record<string, ComponentType> }) {
  const { slug } = useParams();
  const Page = slug ? pages[slug] : undefined;
  if (!Page) return <NotFound />;
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-24 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-muted-foreground">This page doesn&apos;t exist (yet).</p>
      <Button asChild variant="outline">
        <Link to="/docs">Back to docs</Link>
      </Button>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<DocsLayout />}>
          <Route path="/docs" element={<Introduction />} />
          <Route path="/docs/installation" element={<Installation />} />
          <Route path="/docs/tokens" element={<Tokens />} />
          <Route path="/docs/components/:slug" element={<ComponentDocRoute />} />
          <Route path="/docs/webapp/pages/:slug" element={<GlobRoute pages={webappPagePages} />} />
          <Route path="/docs/webapp/:slug" element={<GlobRoute pages={webappComponentPages} />} />
          <Route path="/docs/website/pages/:slug" element={<GlobRoute pages={websitePagePages} />} />
          <Route path="/docs/website/:slug" element={<GlobRoute pages={websiteComponentPages} />} />
          <Route path="/docs/mobileapp/screens/:slug" element={<GlobRoute pages={mobileappScreenPages} />} />
          <Route path="/docs/mobileapp/:slug" element={<GlobRoute pages={mobileappComponentPages} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
