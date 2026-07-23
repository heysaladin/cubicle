import * as React from 'react';
import { PhoneFrame, PhoneScreen } from '@/components/mobileapp/PhoneFrame';
import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { BottomNav } from '@/components/mobileapp/BottomNav';
import { SegmentedControl } from '@/components/mobileapp/SegmentedControl';
import { NotificationItem } from '@/components/mobileapp/NotificationItem';
import { Home, Search, Bell, User, CheckCircle2, MessageSquare, AtSign, AlertTriangle } from 'lucide-react';

const navItems = [
  { label: 'Home', icon: <Home /> },
  { label: 'Search', icon: <Search /> },
  { label: 'Inbox', icon: <Bell />, active: true, badge: 4 },
  { label: 'Profile', icon: <User /> },
];

const notifications = [
  {
    title: 'Luna Clark mentioned you',
    body: '@aria Can you take a look at the hero section feedback? I left some comments in the Figma file.',
    time: '2m',
    avatarFallback: 'LC',
    unread: true,
  },
  {
    title: 'Task completed',
    body: 'Marco Kim marked "Q3 Report — Executive Summary" as complete.',
    time: '18m',
    icon: <CheckCircle2 />,
    unread: true,
  },
  {
    title: 'New comment on Website Redesign',
    body: 'Sophie Chen: "The mobile nav looks great! Can we tighten the spacing on the footer links?"',
    time: '1h',
    avatarFallback: 'SC',
    unread: true,
  },
  {
    title: 'You were assigned a task',
    body: 'Design token audit has been assigned to you by the project lead.',
    time: '3h',
    icon: <AtSign />,
    unread: true,
  },
  {
    title: 'Project deadline approaching',
    body: 'Website Redesign is due in 2 days. 4 tasks are still open.',
    time: '5h',
    icon: <AlertTriangle />,
    unread: false,
  },
  {
    title: 'James Park replied to your comment',
    body: '"Agreed — let\'s sync after standup to finalize the typography scale."',
    time: '1d',
    avatarFallback: 'JP',
    unread: false,
  },
  {
    title: 'Weekly digest ready',
    body: 'Your team completed 12 tasks this week. Revenue up 8% month-over-month.',
    time: '2d',
    icon: <MessageSquare />,
    unread: false,
  },
];

export function NotificationsScreen() {
  const [segment, setSegment] = React.useState('All');

  const filtered = segment === 'Unread'
    ? notifications.filter((n) => n.unread)
    : segment === 'Archived'
    ? []
    : notifications;

  return (
    <PhoneFrame>
      <PhoneScreen>
        <MobileTopBar title="Notifications" large bordered />

        <div className="px-4 py-2">
          <SegmentedControl
            segments={['All', 'Unread', 'Archived']}
            value={segment}
            onChange={setSegment}
          />
        </div>

        <div className="flex-1 overflow-y-auto divide-y border-t">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center px-6">
              <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center mb-3">
                <Bell className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium">No archived notifications</p>
              <p className="text-xs text-muted-foreground mt-1">Archived items will appear here</p>
            </div>
          ) : (
            filtered.map((n, i) => (
              <NotificationItem
                key={i}
                title={n.title}
                body={n.body}
                time={n.time}
                avatarFallback={n.avatarFallback}
                icon={n.icon}
                unread={n.unread}
                onClick={() => {}}
              />
            ))
          )}
        </div>

        <BottomNav items={navItems} />
      </PhoneScreen>
    </PhoneFrame>
  );
}
