'use client';

import * as React from 'react';
import { LayoutDashboard, Users, BarChart3, Settings, Bell, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AppLayout } from '@/components/webapp/AppLayout';
import { PageHeader } from '@/components/webapp/PageHeader';
import { NavBreadcrumb } from '@/components/webapp/NavBreadcrumb';
import { SearchInput } from '@/components/webapp/SearchInput';
import { AlertBanner } from '@/components/webapp/AlertBanner';
import { InlineStatus } from '@/components/webapp/InlineStatus';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: <LayoutDashboard className="size-4" />, href: '#' },
  { label: 'Users', icon: <Users className="size-4" />, href: '#' },
  { label: 'Analytics', icon: <BarChart3 className="size-4" />, href: '#' },
  { label: 'Notifications', icon: <Bell className="size-4" />, href: '#' },
  { label: 'Reports', icon: <FileText className="size-4" />, href: '#' },
  { label: 'Settings', icon: <Settings className="size-4" />, href: '#', active: true },
];

const TICKETS = [
  {
    id: '#TK-001',
    title: 'Cannot export data to CSV',
    status: 'active' as const,
    date: 'Jul 22, 2026',
  },
  {
    id: '#TK-002',
    title: 'Login issues on mobile',
    status: 'pending' as const,
    date: 'Jul 21, 2026',
  },
  {
    id: '#TK-003',
    title: 'Billing question',
    status: 'offline' as const,
    date: 'Jul 18, 2026',
  },
  {
    id: '#TK-004',
    title: 'API rate limit exceeded',
    status: 'busy' as const,
    date: 'Jul 17, 2026',
  },
];

const STATUS_LABEL: Record<string, string> = {
  active: 'Open',
  pending: 'Pending',
  offline: 'Resolved',
  busy: 'In Progress',
};

export function SupportPage() {
  const [search, setSearch] = React.useState('');

  return (
    <AppLayout navItems={NAV_ITEMS}>
          <PageHeader
            title="Support"
            description="Get help and find answers to your questions."
            actions={<Button>+ New Ticket</Button>}
          />

          <NavBreadcrumb
            items={[{ label: 'Home', href: '#' }, { label: 'Support' }]}
          />

          <SearchInput
            placeholder="Search help articles..."
            value={search}
            onChange={setSearch}
            className="max-w-md"
          />

          <AlertBanner
            variant="info"
            title="Response Time"
            description="Our support team typically responds within 2 business hours."
          />

          <div className="space-y-3">
            {TICKETS.map((ticket) => (
              <Card key={ticket.id} className="hover:shadow-sm transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="font-mono text-xs shrink-0">
                        {ticket.id}
                      </Badge>
                      <span className="text-sm font-medium">{ticket.title}</span>
                    </div>
                    <InlineStatus status={ticket.status} />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground capitalize">
                      {STATUS_LABEL[ticket.status]}
                    </span>
                    <span className="text-xs text-muted-foreground">{ticket.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
    </AppLayout>
  );
}
