import type { ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeBlock } from './CodeBlock';
import { cn } from '@/lib/utils';

interface ComponentPreviewProps {
  code: string;
  children: ReactNode;
  /** Extra classes for the preview area, e.g. taller demos */
  previewClassName?: string;
}

export function ComponentPreview({ code, children, previewClassName }: ComponentPreviewProps) {
  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div
          className={cn(
            'flex min-h-[350px] w-full items-center justify-center rounded-lg border p-10',
            previewClassName,
          )}
        >
          {children}
        </div>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock code={code} className="max-h-[350px] overflow-y-auto" />
      </TabsContent>
    </Tabs>
  );
}
