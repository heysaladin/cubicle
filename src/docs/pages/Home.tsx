import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SiteHeader } from '../layout/DocsLayout';
import { components } from '../registry';

const highlights = [
  {
    title: `${components.length} Components`,
    description: 'Accessible, composable React components built on Radix primitives.',
  },
  {
    title: 'Design Tokens',
    description: 'A single DTCG token source compiled to CSS, TS, Swift, Kotlin, and Dart.',
  },
  {
    title: 'Dark Mode',
    description: 'Semantic light and dark themes out of the box, synced with Figma.',
  },
];

export function Home() {
  return (
    <div className="min-h-svh">
      <SiteHeader />
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center">
        <Badge variant="secondary">Cubicle Design System</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          Build consistent products, one cubicle at a time.
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground text-balance">
          Cubicle is a design system with tokens, components, and guidelines — built with React,
          Tailwind CSS, and Radix.
        </p>
        <div className="flex gap-3">
          <Button asChild size="lg">
            <Link to="/docs">
              Get Started <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/docs/components/button">Browse Components</Link>
          </Button>
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-4 px-4 pb-24 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </section>
    </div>
  );
}
