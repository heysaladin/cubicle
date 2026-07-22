'use client';

import * as React from 'react';
import { LayoutDashboard, Users, BarChart3, Settings, Bell, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AppLayout } from '@/components/webapp/AppLayout';
import { PageHeader } from '@/components/webapp/PageHeader';
import { NavBreadcrumb } from '@/components/webapp/NavBreadcrumb';
import { AlertBanner } from '@/components/webapp/AlertBanner';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: <LayoutDashboard className="size-4" />, href: '#' },
  { label: 'Users', icon: <Users className="size-4" />, href: '#' },
  { label: 'Analytics', icon: <BarChart3 className="size-4" />, href: '#' },
  { label: 'Notifications', icon: <Bell className="size-4" />, href: '#', active: true },
  { label: 'Reports', icon: <FileText className="size-4" />, href: '#' },
  { label: 'Settings', icon: <Settings className="size-4" />, href: '#' },
];

export function NotificationsPage() {
  const [showError, setShowError] = React.useState(true);
  const [showWarning, setShowWarning] = React.useState(true);
  const [showSuccess, setShowSuccess] = React.useState(true);
  const [showInfo, setShowInfo] = React.useState(true);

  return (
    <AppLayout navItems={NAV_ITEMS}>
          <PageHeader
            title="Notifications"
            description="System alerts and activity notifications."
            actions={<Button variant="outline">Mark all as read</Button>}
          />

          <NavBreadcrumb
            items={[{ label: 'Home', href: '#' }, { label: 'Notifications' }]}
          />

          <div className="space-y-3">
            {showError && (
              <AlertBanner
                variant="error"
                title="Payment Failed"
                description="Transaction #TX-9821 failed due to insufficient funds."
                dismissible
                onDismiss={() => setShowError(false)}
              />
            )}
            {showWarning && (
              <AlertBanner
                variant="warning"
                title="Storage Almost Full"
                description="You are using 92% of your storage quota."
                dismissible
                onDismiss={() => setShowWarning(false)}
              />
            )}
            {showSuccess && (
              <AlertBanner
                variant="success"
                title="Backup Completed"
                description="Your data was successfully backed up at 3:00 AM."
                dismissible
                onDismiss={() => setShowSuccess(false)}
              />
            )}
            {showInfo && (
              <AlertBanner
                variant="info"
                title="New Feature Available"
                description="Check out the new Analytics dashboard in your sidebar."
                dismissible
                onDismiss={() => setShowInfo(false)}
              />
            )}
            {!showError && !showWarning && !showSuccess && !showInfo && (
              <p className="text-sm text-muted-foreground text-center py-8">
                All notifications have been dismissed.
              </p>
            )}
          </div>
    </AppLayout>
  );
}
