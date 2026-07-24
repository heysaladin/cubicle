import * as React from 'react';
import { PhoneFrame, PhoneScreen } from '@/components/mobileapp/PhoneFrame';
import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { BottomNav } from '@/components/mobileapp/BottomNav';
import { MobileCard } from '@/components/mobileapp/MobileCard';
import { SegmentedControl } from '@/components/mobileapp/SegmentedControl';
import { ListItem } from '@/components/mobileapp/ListItem';
import { MiniSparkline } from '@/components/mobileapp/MiniSparkline';
import { Home, Bell, User, ArrowDownLeft, ArrowUpRight, CreditCard, Layers, Zap, ShoppingBag, Coffee } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', icon: <Home /> },
  { label: 'Cards', icon: <CreditCard /> },
  { label: 'Inbox', icon: <Bell /> },
  { label: 'Profile', icon: <User />, active: true },
];

const sparkData = [28, 34, 29, 42, 38, 51, 47, 60, 55, 68, 72, 80];

type TransactionType = 'income' | 'expense';

const transactions: {
  id: number;
  label: string;
  subtitle: string;
  amount: string;
  type: TransactionType;
  icon: React.ReactNode;
  date: string;
}[] = [
  { id: 1, label: 'Stripe Payout', subtitle: 'Revenue · Jul 22', amount: '+$4,200.00', type: 'income', icon: <Zap />, date: 'Today' },
  { id: 2, label: 'Figma', subtitle: 'Subscription · Jul 22', amount: '-$45.00', type: 'expense', icon: <Layers />, date: 'Today' },
  { id: 3, label: 'AWS Services', subtitle: 'Infrastructure · Jul 21', amount: '-$183.40', type: 'expense', icon: <CreditCard />, date: 'Yesterday' },
  { id: 4, label: 'Client Invoice #38', subtitle: 'Revenue · Jul 20', amount: '+$8,750.00', type: 'income', icon: <Zap />, date: 'Jul 20' },
  { id: 5, label: 'Coffee & Snacks', subtitle: 'Team expenses · Jul 19', amount: '-$62.00', type: 'expense', icon: <Coffee />, date: 'Jul 19' },
  { id: 6, label: 'Shopify Integration', subtitle: 'App revenue · Jul 18', amount: '+$320.00', type: 'income', icon: <ShoppingBag />, date: 'Jul 18' },
  { id: 7, label: 'Linear', subtitle: 'Subscription · Jul 18', amount: '-$19.00', type: 'expense', icon: <Layers />, date: 'Jul 18' },
  { id: 8, label: 'Stripe Payout', subtitle: 'Revenue · Jul 15', amount: '+$3,980.00', type: 'income', icon: <Zap />, date: 'Jul 15' },
];

export function TransactionsScreen() {
  const [segment, setSegment] = React.useState('All');

  const filtered = segment === 'All'
    ? transactions
    : transactions.filter((t) => t.type === (segment === 'Income' ? 'income' : 'expense'));

  return (
    <PhoneFrame>
      <PhoneScreen>
        <MobileTopBar title="Transactions" bordered />

        <div className="flex-1 overflow-y-auto">
          {/* Balance card */}
          <div className="px-4 py-4">
            <MobileCard>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Total Balance</p>
                  <p className="text-3xl font-bold tracking-tight mt-1">$24,830</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">+$13,250 this month</p>
                </div>
                <MiniSparkline
                  data={sparkData}
                  width={80}
                  height={40}
                  filled
                  className="text-primary"
                />
              </div>
            </MobileCard>
          </div>

          {/* Filter */}
          <div className="px-4 pb-3">
            <SegmentedControl
              segments={['All', 'Income', 'Expense']}
              value={segment}
              onChange={setSegment}
            />
          </div>

          {/* Transactions list */}
          <div className="border-t divide-y">
            {filtered.map((tx) => (
              <ListItem
                key={tx.id}
                leading={
                  <div className={cn(
                    'h-9 w-9 rounded-xl flex items-center justify-center [&_svg]:h-4 [&_svg]:w-4',
                    tx.type === 'income' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-muted text-muted-foreground',
                  )}>
                    {tx.type === 'income' ? <ArrowDownLeft /> : <ArrowUpRight />}
                  </div>
                }
                title={tx.label}
                subtitle={tx.subtitle}
                trailing={
                  <div className="text-right">
                    <p className={cn('text-sm font-semibold', tx.type === 'income' ? 'text-emerald-600' : 'text-foreground')}>
                      {tx.amount}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{tx.date}</p>
                  </div>
                }
                onClick={() => {}}
              />
            ))}
          </div>
        </div>

        <BottomNav items={navItems} />
      </PhoneScreen>
    </PhoneFrame>
  );
}
