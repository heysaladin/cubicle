import type { ReactNode } from 'react';

export function DocPage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-3xl space-y-8 pb-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="text-base text-muted-foreground">{description}</p>
      </header>
      {children}
    </article>
  );
}

export function DocSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
