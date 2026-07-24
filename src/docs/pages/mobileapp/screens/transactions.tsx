'use client';

import { DocPage } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { TransactionsScreen } from '@/components/mobileapp/screens/TransactionsScreen';

const CODE = `import { TransactionsScreen } from '@/components/mobileapp/screens/TransactionsScreen';

export default function Page() {
  return <TransactionsScreen />;
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — Transactions"
      description="Financial transactions screen with a balance card featuring a MiniSparkline chart, a segmented filter (All / Income / Expense), and a scrollable list of 8 transaction rows with colored income/expense amounts."
    >
      <ComponentPreview code={CODE} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
        <TransactionsScreen />
      </ComponentPreview>
    </DocPage>
  );
}
