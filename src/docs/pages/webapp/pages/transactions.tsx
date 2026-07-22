import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { TransactionsPage } from '@/components/webapp/pages/TransactionsPage';

const CODE = `import { TransactionsPage } from '@/components/webapp/pages/TransactionsPage';

export default function Page() {
  return <TransactionsPage />;
}`;

export default function Page() {
  return (
    <DocPage
      title="WebApp - Transactions / Activity"
      description="Transactions and activity page template with summary stat cards, status filters, and a data table for financial records."
    >
      <ComponentPreview
        code={CODE}
        previewClassName="min-h-[650px] items-start p-0 overflow-hidden"
      >
        <TransactionsPage />
      </ComponentPreview>
    </DocPage>
  );
}
