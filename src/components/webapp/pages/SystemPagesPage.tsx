'use client';

import * as React from 'react';
import { SearchX, Wrench } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EmptyState } from '@/components/webapp/EmptyState';

export function SystemPagesPage() {
  return (
    <div className="w-full bg-background">
      <Tabs defaultValue="404" className="w-full">
        <div className="border-b px-6 pt-4">
          <TabsList>
            <TabsTrigger value="404">404 — Not Found</TabsTrigger>
            <TabsTrigger value="503">503 — Maintenance</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="404" className="mt-0">
          <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-background">
            <EmptyState
              icon={<SearchX />}
              title="Page Not Found"
              description="The page you're looking for doesn't exist or has been moved."
              action={{ label: 'Go to Dashboard', onClick: () => {} }}
            />
          </div>
        </TabsContent>

        <TabsContent value="503" className="mt-0">
          <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-background">
            <EmptyState
              icon={<Wrench />}
              title="Under Maintenance"
              description="We're performing scheduled maintenance. We'll be back shortly."
              action={{ label: 'Check Status', onClick: () => {} }}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
