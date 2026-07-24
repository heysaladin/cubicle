'use client';

import { Download, Plus, Trash2 } from 'lucide-react';
import { DocPage, DocSection } from '../../components/DocPage';
import { ComponentPreview } from '../../components/ComponentPreview';
import { Toolbar } from '@/components/webapp/Toolbar';
import { BulkActions } from '@/components/webapp/BulkActions';
import { ActionMenu } from '@/components/webapp/ActionMenu';

const toolbarCode = `import { Toolbar } from '@/components/webapp/Toolbar';
import { Plus, Download } from 'lucide-react';

export function Demo() {
  return (
    <Toolbar
      title="Team Members"
      actions={[
        { label: 'Export', icon: <Download />, onClick: () => {}, variant: 'outline' },
        { label: 'Add member', icon: <Plus />, onClick: () => {}, variant: 'default' },
      ]}
    />
  );
}`;

const bulkActionsCode = `import { BulkActions } from '@/components/webapp/BulkActions';

export function Demo() {
  return (
    <BulkActions
      selectedCount={4}
      onClear={() => {}}
    />
  );
}`;

const actionMenuCode = `import { ActionMenu } from '@/components/webapp/ActionMenu';
import { Pencil, Copy, Trash2 } from 'lucide-react';

export function Demo() {
  return (
    <ActionMenu
      label="Actions"
      items={[
        { label: 'Edit', icon: <Pencil />, onClick: () => {} },
        { label: 'Duplicate', icon: <Copy />, onClick: () => {} },
        { label: 'Delete', icon: <Trash2 />, onClick: () => {}, destructive: true, separator: true },
      ]}
    />
  );
}`;

export default function Page() {
  return (
    <DocPage
      title="WebApp - Control"
      description="Control components and interactive elements for web applications."
    >
      <DocSection title="Toolbar">
        <ComponentPreview code={toolbarCode}>
          <div className="w-full max-w-lg">
            <Toolbar
              title="Team Members"
              actions={[
                {
                  label: 'Export',
                  icon: <Download />,
                  onClick: () => {},
                  variant: 'outline',
                },
                {
                  label: 'Add member',
                  icon: <Plus />,
                  onClick: () => {},
                  variant: 'default',
                },
              ]}
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="BulkActions">
        <ComponentPreview code={bulkActionsCode}>
          <BulkActions
            selectedCount={4}
            onClear={() => {}}
            actions={[
              {
                label: 'Export',
                icon: <Download />,
                onClick: () => {},
                variant: 'outline',
              },
              {
                label: 'Delete',
                icon: <Trash2 />,
                onClick: () => {},
                variant: 'destructive',
              },
            ]}
          />
        </ComponentPreview>
      </DocSection>

      <DocSection title="ActionMenu">
        <ComponentPreview code={actionMenuCode}>
          <ActionMenu
            label="Actions"
            items={[
              { label: 'Edit', onClick: () => {} },
              { label: 'Duplicate', onClick: () => {} },
              {
                label: 'Delete',
                onClick: () => {},
                destructive: true,
                separator: true,
              },
            ]}
          />
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
