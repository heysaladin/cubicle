'use client';

import * as React from 'react';
import { DocPage, DocSection } from '../../components/DocPage';
import { ComponentPreview } from '../../components/ComponentPreview';
import { AlertBanner } from '@/components/webapp/AlertBanner';
import { ConfirmDialog } from '@/components/webapp/ConfirmDialog';
import { InlineStatus } from '@/components/webapp/InlineStatus';
import { Button } from '@/components/ui/button';

const alertBannerCode = `import { AlertBanner } from '@/components/webapp/AlertBanner';

export function Demo() {
  return (
    <div className="space-y-3 w-full max-w-md">
      <AlertBanner variant="info" title="Information" description="Your account is being reviewed." />
      <AlertBanner variant="success" title="Success" description="Your changes have been saved." />
      <AlertBanner variant="warning" title="Warning" description="Your subscription expires in 3 days." dismissible />
      <AlertBanner variant="error" title="Error" description="Failed to connect to the server." />
    </div>
  );
}`;

const confirmDialogCode = `import { ConfirmDialog } from '@/components/webapp/ConfirmDialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="destructive" onClick={() => setOpen(true)}>Delete item</Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Delete this item?"
        description="This action cannot be undone. The item will be permanently removed."
        confirmLabel="Delete"
        variant="destructive"
        onConfirm={() => console.log('Confirmed')}
      />
    </>
  );
}`;

const inlineStatusCode = `import { InlineStatus } from '@/components/webapp/InlineStatus';

export function Demo() {
  return (
    <div className="flex flex-col gap-2">
      <InlineStatus status="online" />
      <InlineStatus status="offline" />
      <InlineStatus status="busy" />
      <InlineStatus status="away" />
      <InlineStatus status="pending" />
      <InlineStatus status="active" />
      <InlineStatus status="inactive" />
    </div>
  );
}`;

function ConfirmDialogDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button variant="destructive" onClick={() => setOpen(true)}>
        Delete item
      </Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Delete this item?"
        description="This action cannot be undone. The item will be permanently removed from the system."
        confirmLabel="Delete"
        variant="destructive"
        onConfirm={() => {}}
      />
    </>
  );
}

export default function Page() {
  return (
    <DocPage
      title="WebApp - Feedback"
      description="Feedback and notification components for web applications."
    >
      <DocSection title="AlertBanner">
        <ComponentPreview code={alertBannerCode} previewClassName="items-start">
          <div className="space-y-3 w-full max-w-md">
            <AlertBanner
              variant="info"
              title="Information"
              description="Your account is being reviewed by our team."
            />
            <AlertBanner
              variant="success"
              title="Success"
              description="Your changes have been saved successfully."
            />
            <AlertBanner
              variant="warning"
              title="Warning"
              description="Your subscription expires in 3 days."
              dismissible
            />
            <AlertBanner
              variant="error"
              title="Error"
              description="Failed to connect to the server. Please try again."
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="ConfirmDialog">
        <ComponentPreview code={confirmDialogCode}>
          <ConfirmDialogDemo />
        </ComponentPreview>
      </DocSection>

      <DocSection title="InlineStatus">
        <ComponentPreview code={inlineStatusCode}>
          <div className="flex flex-col gap-2">
            <InlineStatus status="online" />
            <InlineStatus status="offline" />
            <InlineStatus status="busy" />
            <InlineStatus status="away" />
            <InlineStatus status="pending" />
            <InlineStatus status="active" />
            <InlineStatus status="inactive" />
          </div>
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
