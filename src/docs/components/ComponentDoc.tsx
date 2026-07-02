import type { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { components } from '../registry';
import { DocPage } from './DocPage';

export function ComponentDoc({ slug, children }: { slug: string; children: ReactNode }) {
  const entry = components.find((c) => c.slug === slug)!;
  const storybookUrl = `/dev/?path=/docs/ui-${slug.replace(/-/g, '')}--docs`;

  return (
    <DocPage title={entry.title} description={entry.description}>
      <div className="-mt-4">
        <Button variant="outline" size="sm" asChild>
          <a href={storybookUrl}>
            Open in Storybook <ExternalLink className="size-3.5" />
          </a>
        </Button>
      </div>
      {children}
    </DocPage>
  );
}
