'use client';

import { DocPage, DocSection } from '../../components/DocPage';
import { ComponentPreview } from '../../components/ComponentPreview';
import { ProgressRing } from '@/components/mobileapp/ProgressRing';
import { MiniSparkline } from '@/components/mobileapp/MiniSparkline';
import { MobileStatCard } from '@/components/mobileapp/MobileCard';
import { DollarSign, Users, ShoppingCart, Activity } from 'lucide-react';

const progressRingCode = `import { ProgressRing } from '@/components/mobileapp/ProgressRing';

export function Demo() {
  return (
    <div className="flex items-center gap-8 flex-wrap">
      <div className="flex flex-col items-center gap-2">
        <ProgressRing value={25} size={64} strokeWidth={6} label="25%" sublabel="Storage" />
        <p className="text-xs text-muted-foreground">Small / 25%</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressRing value={60} size={88} strokeWidth={8} label="60%" sublabel="Progress" />
        <p className="text-xs text-muted-foreground">Medium / 60%</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressRing value={85} size={112} strokeWidth={10} label="85%" sublabel="Complete" />
        <p className="text-xs text-muted-foreground">Large / 85%</p>
      </div>
    </div>
  );
}`;

const sparklineCode = `import { MiniSparkline } from '@/components/mobileapp/MiniSparkline';

const uptrend = [12, 19, 14, 22, 18, 27, 31, 26, 35, 40];
const downtrend = [45, 38, 42, 30, 35, 28, 22, 25, 18, 15];
const volatile = [20, 35, 15, 40, 25, 38, 12, 44, 30, 20];

export function Demo() {
  return (
    <div className="flex flex-col gap-6 max-w-xs">
      <div className="flex items-center justify-between border rounded-xl p-4">
        <div>
          <p className="text-xs text-muted-foreground">Revenue</p>
          <p className="text-lg font-bold">$24,500</p>
          <p className="text-xs text-emerald-600 font-medium">+12.4% ↑</p>
        </div>
        <MiniSparkline data={uptrend} width={80} height={36} filled className="text-emerald-500" />
      </div>
      <div className="flex items-center justify-between border rounded-xl p-4">
        <div>
          <p className="text-xs text-muted-foreground">Churn Rate</p>
          <p className="text-lg font-bold">3.2%</p>
          <p className="text-xs text-red-500 font-medium">-2.1% ↓</p>
        </div>
        <MiniSparkline data={downtrend} width={80} height={36} filled className="text-red-500" />
      </div>
      <div className="flex items-center justify-between border rounded-xl p-4">
        <div>
          <p className="text-xs text-muted-foreground">Sessions</p>
          <p className="text-lg font-bold">8,920</p>
          <p className="text-xs text-muted-foreground">Volatile</p>
        </div>
        <MiniSparkline data={volatile} width={80} height={36} />
      </div>
    </div>
  );
}`;

const statCardGridCode = `import { MobileStatCard } from '@/components/mobileapp/MobileCard';
import { DollarSign, Users, ShoppingCart, Activity } from 'lucide-react';

export function Demo() {
  return (
    <div className="max-w-xs grid grid-cols-2 gap-3">
      <MobileStatCard
        label="Revenue"
        value="$48.2k"
        change="+18% vs last month"
        changeType="increase"
        icon={<DollarSign />}
      />
      <MobileStatCard
        label="Active Users"
        value="12,841"
        change="+3.4% this week"
        changeType="increase"
        icon={<Users />}
      />
      <MobileStatCard
        label="Orders"
        value="1,293"
        change="-6 today"
        changeType="decrease"
        icon={<ShoppingCart />}
      />
      <MobileStatCard
        label="Uptime"
        value="99.9%"
        change="Stable"
        changeType="neutral"
        icon={<Activity />}
      />
    </div>
  );
}`;

const uptrend = [12, 19, 14, 22, 18, 27, 31, 26, 35, 40];
const downtrend = [45, 38, 42, 30, 35, 28, 22, 25, 18, 15];
const volatile = [20, 35, 15, 40, 25, 38, 12, 44, 30, 20];

export default function Page() {
  return (
    <DocPage
      title="MobileApp — Visualization"
      description="Data visualization components for mobile: progress rings, sparklines, and stat card grids."
    >
      <DocSection title="ProgressRing — Three Sizes and Values">
        <ComponentPreview code={progressRingCode}>
          <div className="flex items-center gap-8 flex-wrap justify-center">
            <div className="flex flex-col items-center gap-2">
              <ProgressRing value={25} size={64} strokeWidth={6} label="25%" sublabel="Storage" />
              <p className="text-xs text-muted-foreground">Small / 25%</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ProgressRing value={60} size={88} strokeWidth={8} label="60%" sublabel="Progress" />
              <p className="text-xs text-muted-foreground">Medium / 60%</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ProgressRing value={85} size={112} strokeWidth={10} label="85%" sublabel="Complete" />
              <p className="text-xs text-muted-foreground">Large / 85%</p>
            </div>
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="MiniSparkline — Uptrend, Downtrend, and Volatile">
        <ComponentPreview code={sparklineCode} previewClassName="p-6 items-start">
          <div className="flex flex-col gap-3 max-w-xs w-full">
            <div className="flex items-center justify-between border rounded-xl p-4">
              <div>
                <p className="text-xs text-muted-foreground">Revenue</p>
                <p className="text-lg font-bold">$24,500</p>
                <p className="text-xs text-emerald-600 font-medium">+12.4%</p>
              </div>
              <MiniSparkline data={uptrend} width={80} height={36} filled className="text-emerald-500" />
            </div>
            <div className="flex items-center justify-between border rounded-xl p-4">
              <div>
                <p className="text-xs text-muted-foreground">Churn Rate</p>
                <p className="text-lg font-bold">3.2%</p>
                <p className="text-xs text-red-500 font-medium">-2.1%</p>
              </div>
              <MiniSparkline data={downtrend} width={80} height={36} filled className="text-red-500" />
            </div>
            <div className="flex items-center justify-between border rounded-xl p-4">
              <div>
                <p className="text-xs text-muted-foreground">Sessions</p>
                <p className="text-lg font-bold">8,920</p>
                <p className="text-xs text-muted-foreground">Volatile</p>
              </div>
              <MiniSparkline data={volatile} width={80} height={36} />
            </div>
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="MobileStatCard — 4-Card Grid with Change Types">
        <ComponentPreview code={statCardGridCode} previewClassName="p-6 items-start">
          <div className="max-w-xs w-full grid grid-cols-2 gap-3">
            <MobileStatCard
              label="Revenue"
              value="$48.2k"
              change="+18% vs last month"
              changeType="increase"
              icon={<DollarSign />}
            />
            <MobileStatCard
              label="Active Users"
              value="12,841"
              change="+3.4% this week"
              changeType="increase"
              icon={<Users />}
            />
            <MobileStatCard
              label="Orders"
              value="1,293"
              change="-6 today"
              changeType="decrease"
              icon={<ShoppingCart />}
            />
            <MobileStatCard
              label="Uptime"
              value="99.9%"
              change="Stable"
              changeType="neutral"
              icon={<Activity />}
            />
          </div>
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
