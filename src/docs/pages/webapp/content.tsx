import { FileX } from 'lucide-react';
import { DocPage, DocSection } from '../../components/DocPage';
import { ComponentPreview } from '../../components/ComponentPreview';
import { DataTable } from '@/components/webapp/DataTable';
import { StatCard } from '@/components/webapp/StatCard';
import { EmptyState } from '@/components/webapp/EmptyState';

const dataTableCode = `import { DataTable } from '@/components/webapp/DataTable';

export function Demo() {
  return <DataTable />;
}`;

const statCardCode = `import { StatCard } from '@/components/webapp/StatCard';
import { Users } from 'lucide-react';

export function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <StatCard
        label="Total Users"
        value="12,483"
        trend={8.2}
        description="from last month"
        icon={<Users />}
      />
      <StatCard
        label="Churn Rate"
        value="3.1%"
        trend={-1.4}
        description="from last month"
      />
    </div>
  );
}`;

const emptyStateCode = `import { EmptyState } from '@/components/webapp/EmptyState';
import { FileX } from 'lucide-react';

export function Demo() {
  return (
    <EmptyState
      icon={<FileX />}
      title="No documents found"
      description="Get started by creating your first document."
      action={{ label: 'New document', onClick: () => {} }}
    />
  );
}`;

export default function Page() {
  return (
    <DocPage
      title="WebApp - Content (Data Display)"
      description="Content and data display components for web applications."
    >
      <DocSection title="DataTable">
        <ComponentPreview code={dataTableCode} previewClassName="items-start p-4">
          <div className="w-full">
            <DataTable />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="StatCard">
        <ComponentPreview code={statCardCode}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
            <StatCard
              label="Total Users"
              value="12,483"
              trend={8.2}
              description="from last month"
            />
            <StatCard
              label="Churn Rate"
              value="3.1%"
              trend={-1.4}
              description="from last month"
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="EmptyState">
        <ComponentPreview code={emptyStateCode}>
          <EmptyState
            icon={<FileX />}
            title="No documents found"
            description="Get started by creating your first document."
            action={{ label: 'New document', onClick: () => {} }}
          />
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
