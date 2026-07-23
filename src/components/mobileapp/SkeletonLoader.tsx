import * as React from 'react';
import { cn } from '@/lib/utils';

export function SkeletonBox({ className }: { className?: string }) {
  return (
    <div
      className={cn('animate-pulse rounded-lg bg-muted', className)}
    />
  );
}

export function SkeletonListItem({ showAvatar = true }: { showAvatar?: boolean }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      {showAvatar && <SkeletonBox className="h-10 w-10 rounded-full shrink-0" />}
      <div className="flex-1 space-y-2">
        <SkeletonBox className="h-3 w-3/4" />
        <SkeletonBox className="h-3 w-1/2" />
      </div>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-xl border p-4 space-y-3">
      <div className="flex items-center gap-3">
        <SkeletonBox className="h-10 w-10 rounded-full shrink-0" />
        <div className="flex-1 space-y-2">
          <SkeletonBox className="h-3 w-1/2" />
          <SkeletonBox className="h-3 w-1/3" />
        </div>
      </div>
      <SkeletonBox className="h-32 w-full rounded-lg" />
      <SkeletonBox className="h-3 w-full" />
      <SkeletonBox className="h-3 w-4/5" />
    </div>
  );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  const widths = ['w-full', 'w-5/6', 'w-4/5', 'w-3/4', 'w-2/3'];
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonBox key={i} className={cn('h-3', widths[i % widths.length])} />
      ))}
    </div>
  );
}
