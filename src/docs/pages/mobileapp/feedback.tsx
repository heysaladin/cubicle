'use client';

import * as React from 'react';
import { DocPage, DocSection } from '../../components/DocPage';
import { ComponentPreview } from '../../components/ComponentPreview';
import { MobileToast } from '@/components/mobileapp/MobileToast';
import { BottomSheet, ActionSheet } from '@/components/mobileapp/BottomSheet';
import { SkeletonListItem, SkeletonCard, SkeletonText } from '@/components/mobileapp/SkeletonLoader';
import { ListItem } from '@/components/mobileapp/ListItem';
import { Share2, Download, Trash2, Edit3, Flag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const toastCode = `import { MobileToast } from '@/components/mobileapp/MobileToast';

export function Demo() {
  return (
    <div className="space-y-2 w-full max-w-xs">
      <MobileToast variant="success" message="Changes saved successfully!" />
      <MobileToast variant="error" message="Failed to connect. Please try again." />
      <MobileToast variant="warning" message="Your session expires in 5 minutes." />
      <MobileToast variant="info" message="A new version is available." action={{ label: 'Update', onClick: () => {} }} />
    </div>
  );
}`;

const bottomSheetCode = `import { BottomSheet } from '@/components/mobileapp/BottomSheet';
import { ListItem } from '@/components/mobileapp/ListItem';
import { Share2, Download, Trash2 } from 'lucide-react';

export function Demo() {
  return (
    <div className="relative h-72 max-w-xs border rounded-xl overflow-hidden bg-muted/30">
      <div className="p-4">
        <p className="text-sm text-muted-foreground">Screen content behind the sheet</p>
      </div>
      <BottomSheet open title="Options" showClose>
        <div className="divide-y">
          <ListItem leading={<Share2 />} title="Share" showChevron onClick={() => {}} />
          <ListItem leading={<Download />} title="Save to Library" showChevron onClick={() => {}} />
          <ListItem leading={<Trash2 />} title="Delete" destructive onClick={() => {}} />
        </div>
      </BottomSheet>
    </div>
  );
}`;

const actionSheetCode = `import { ActionSheet } from '@/components/mobileapp/BottomSheet';
import { Share2, Edit3, Flag, Trash2 } from 'lucide-react';

export function Demo() {
  return (
    <div className="relative h-72 max-w-xs border rounded-xl overflow-hidden bg-muted/30">
      <div className="p-4">
        <p className="text-sm text-muted-foreground">Screen content</p>
      </div>
      <ActionSheet
        open
        title="What would you like to do?"
        items={[
          { label: 'Share Post', icon: <Share2 /> },
          { label: 'Edit Post', icon: <Edit3 /> },
          { label: 'Report', icon: <Flag /> },
          { label: 'Delete Post', icon: <Trash2 />, destructive: true },
        ]}
      />
    </div>
  );
}`;

const skeletonCode = `import { SkeletonListItem, SkeletonCard, SkeletonText } from '@/components/mobileapp/SkeletonLoader';

export function Demo() {
  return (
    <div className="max-w-xs space-y-6">
      <div>
        <p className="text-xs text-muted-foreground mb-2 px-1">List loading state</p>
        <div className="border rounded-xl overflow-hidden divide-y">
          <SkeletonListItem />
          <SkeletonListItem />
          <SkeletonListItem />
        </div>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-2 px-1">Card loading state</p>
        <SkeletonCard />
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-2 px-1">Text block loading state</p>
        <div className="border rounded-xl p-4">
          <SkeletonText lines={4} />
        </div>
      </div>
    </div>
  );
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — Feedback"
      description="Feedback and notification components for mobile applications: toasts, bottom sheets, action sheets, and loading skeletons."
    >
      <DocSection title="MobileToast — All Variants">
        <ComponentPreview code={toastCode} previewClassName="p-6 items-start">
          <div className="space-y-2 w-full max-w-xs">
            <MobileToast variant="success" message="Changes saved successfully!" />
            <MobileToast variant="error" message="Failed to connect. Please try again." />
            <MobileToast variant="warning" message="Your session expires in 5 minutes." />
            <MobileToast
              variant="info"
              message="A new version is available."
              action={{ label: 'Update', onClick: () => {} }}
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="BottomSheet — Static Open Preview">
        <ComponentPreview code={bottomSheetCode} previewClassName="p-6 items-start">
          <div className="relative h-72 max-w-xs w-full border rounded-xl overflow-hidden bg-muted/30">
            <div className="p-4">
              <p className="text-sm text-muted-foreground">Screen content behind the sheet</p>
            </div>
            <BottomSheet open title="Options" showClose>
              <div className="divide-y">
                <ListItem leading={<Share2 />} title="Share" showChevron onClick={() => {}} />
                <ListItem leading={<Download />} title="Save to Library" showChevron onClick={() => {}} />
                <ListItem leading={<Trash2 />} title="Delete" destructive onClick={() => {}} />
              </div>
            </BottomSheet>
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="ActionSheet — Static Open Preview">
        <ComponentPreview code={actionSheetCode} previewClassName="p-6 items-start">
          <div className="relative h-80 max-w-xs w-full border rounded-xl overflow-hidden bg-muted/30">
            <div className="p-4">
              <p className="text-sm text-muted-foreground">Screen content</p>
            </div>
            <ActionSheet
              open
              title="What would you like to do?"
              items={[
                { label: 'Share Post', icon: <Share2 /> },
                { label: 'Edit Post', icon: <Edit3 /> },
                { label: 'Report', icon: <Flag /> },
                { label: 'Delete Post', icon: <Trash2 />, destructive: true },
              ]}
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="SkeletonLoader — List, Card, and Text">
        <ComponentPreview code={skeletonCode} previewClassName="p-6 items-start">
          <div className="max-w-xs w-full space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-2 px-1">List loading state</p>
              <div className="border rounded-xl overflow-hidden divide-y">
                <SkeletonListItem />
                <SkeletonListItem />
                <SkeletonListItem />
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2 px-1">Card loading state</p>
              <SkeletonCard />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2 px-1">Text block loading state</p>
              <div className="border rounded-xl p-4">
                <SkeletonText lines={4} />
              </div>
            </div>
          </div>
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
