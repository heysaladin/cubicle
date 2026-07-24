import { PhoneFrame, PhoneScreen } from '@/components/mobileapp/PhoneFrame';
import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { BottomNav } from '@/components/mobileapp/BottomNav';
import { MobileStatCard } from '@/components/mobileapp/MobileCard';
import { ActivityFeedItem } from '@/components/mobileapp/ActivityFeedItem';
import { Home, Search, Bell, User, TrendingUp, Users, MousePointerClick, Percent, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', icon: <Home />, active: true },
  { label: 'Search', icon: <Search /> },
  { label: 'Inbox', icon: <Bell />, badge: 3 },
  { label: 'Profile', icon: <User /> },
];

const stats = [
  { label: 'Revenue', value: '$48.2k', change: '+12.4% this month', changeType: 'increase' as const, icon: <TrendingUp /> },
  { label: 'Users', value: '1,284', change: '+8.1% this month', changeType: 'increase' as const, icon: <Users /> },
  { label: 'Sessions', value: '9,410', change: '-2.3% this week', changeType: 'decrease' as const, icon: <MousePointerClick /> },
  { label: 'Conversion', value: '3.6%', change: '+0.4% this month', changeType: 'increase' as const, icon: <Percent /> },
];

const activities = [
  {
    avatarFallback: 'LC',
    title: 'Luna Clark commented on Website Redesign',
    description: '"The new hero section looks great! Can we tweak the CTA color to match the brand guidelines?"',
    time: '2m ago',
    badge: 'Comment',
    badgeVariant: 'secondary' as const,
  },
  {
    avatarFallback: 'MK',
    title: 'Marco Kim completed Q3 Report',
    description: 'Task marked as done. View the attached deliverables in the project files.',
    time: '1h ago',
    badge: 'Done',
    badgeVariant: 'default' as const,
  },
  {
    avatarFallback: 'SC',
    title: 'Sophie Chen created a new task',
    description: 'Mobile App — Design token audit added to the Design System sprint.',
    time: '3h ago',
    badge: 'New',
    badgeVariant: 'outline' as const,
  },
];

export function DashboardScreen() {
  return (
    <PhoneFrame>
      <PhoneScreen>
        <MobileTopBar
          title="Good morning, Aria 👋"
          large
          bordered
          rightAction={
            <button className="p-1.5 rounded-full bg-primary/10 text-primary">
              <Plus className="h-4 w-4" />
            </button>
          }
        />

        <div className="flex-1 overflow-y-auto">
          {/* Stats grid */}
          <div className="px-4 py-4">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <MobileStatCard
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  change={stat.change}
                  changeType={stat.changeType}
                  icon={stat.icon}
                />
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="px-4 mb-2 flex items-center justify-between">
            <p className="text-sm font-semibold">Recent Activity</p>
            <button className="text-xs text-primary font-medium">See all</button>
          </div>

          <div className="divide-y border-t border-b">
            {activities.map((item, i) => (
              <ActivityFeedItem key={i} {...item} />
            ))}
          </div>

          {/* Quick actions */}
          <div className="px-4 pt-5 pb-4">
            <p className="text-sm font-semibold mb-3">Quick Actions</p>
            <div className="grid grid-cols-3 gap-2">
              {['New Task', 'New Project', 'Invite'].map((label) => (
                <Button key={label} variant="outline" size="sm" className="h-10 text-xs">
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <BottomNav items={navItems} />
      </PhoneScreen>
    </PhoneFrame>
  );
}
