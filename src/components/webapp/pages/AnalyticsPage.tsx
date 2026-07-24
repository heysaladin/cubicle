'use client';

import { LayoutDashboard, Users, BarChart3, Settings, Bell, FileText } from 'lucide-react';
import { AppLayout } from '@/components/webapp/AppLayout';
import { PageHeader } from '@/components/webapp/PageHeader';
import { NavBreadcrumb } from '@/components/webapp/NavBreadcrumb';
import { MetricCard } from '@/components/webapp/MetricCard';
import { ChartWidget } from '@/components/webapp/ChartWidget';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: <LayoutDashboard className="size-4" />, href: '#' },
  { label: 'Users', icon: <Users className="size-4" />, href: '#' },
  { label: 'Analytics', icon: <BarChart3 className="size-4" />, href: '#', active: true },
  { label: 'Notifications', icon: <Bell className="size-4" />, href: '#' },
  { label: 'Reports', icon: <FileText className="size-4" />, href: '#' },
  { label: 'Settings', icon: <Settings className="size-4" />, href: '#' },
];

export function AnalyticsPage() {
  return (
    <AppLayout navItems={NAV_ITEMS}>
          <PageHeader
            title="Analytics & Reports"
            description="Insights and performance metrics."
          />

          <NavBreadcrumb
            items={[{ label: 'Home', href: '#' }, { label: 'Analytics' }]}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Page Views"
              value="284,591"
              change="+12.4%"
              changeType="increase"
            />
            <MetricCard
              title="Unique Visitors"
              value="48,291"
              change="+8.1%"
              changeType="increase"
            />
            <MetricCard
              title="Bounce Rate"
              value="42.3%"
              change="-3.2%"
              changeType="decrease"
            />
            <MetricCard
              title="Avg Session"
              value="4m 32s"
              change="+0.8%"
              changeType="increase"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ChartWidget title="Traffic Sources" />
            <ChartWidget title="Conversions" />
          </div>
    </AppLayout>
  );
}
