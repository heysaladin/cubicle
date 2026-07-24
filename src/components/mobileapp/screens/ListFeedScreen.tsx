import * as React from 'react';
import { PhoneFrame, PhoneScreen } from '@/components/mobileapp/PhoneFrame';
import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { BottomNav } from '@/components/mobileapp/BottomNav';
import { MobileSearchBar } from '@/components/mobileapp/MobileSearchBar';
import { SegmentedControl } from '@/components/mobileapp/SegmentedControl';
import { ListItem } from '@/components/mobileapp/ListItem';
import { SwipeableRow } from '@/components/mobileapp/SwipeableRow';
import { Badge } from '@/components/ui/badge';
import { Home, Bell, User, CheckCircle2, Circle } from 'lucide-react';

const navItems = [
  { label: 'Home', icon: <Home /> },
  { label: 'Tasks', icon: <CheckCircle2 />, active: true },
  { label: 'Inbox', icon: <Bell />, badge: 3 },
  { label: 'Profile', icon: <User /> },
];

const tasks = [
  {
    id: 1,
    title: 'Finalize homepage mockup',
    subtitle: 'Website Redesign · Due today',
    status: 'active',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Write Q3 executive summary',
    subtitle: 'Q3 Report · Due tomorrow',
    status: 'active',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'Review design token audit',
    subtitle: 'Design System · Due Jul 25',
    status: 'active',
    priority: 'low',
  },
  {
    id: 4,
    title: 'User interview synthesis',
    subtitle: 'Research · Done Jul 20',
    status: 'done',
    priority: 'medium',
  },
  {
    id: 5,
    title: 'Set up Storybook deployment',
    subtitle: 'Engineering · Done Jul 18',
    status: 'done',
    priority: 'low',
  },
];

const priorityBadge: Record<string, { label: string; variant: 'default' | 'destructive' | 'secondary' | 'outline' }> = {
  high: { label: 'High', variant: 'destructive' },
  medium: { label: 'Med', variant: 'default' },
  low: { label: 'Low', variant: 'secondary' },
};

export function ListFeedScreen() {
  const [segment, setSegment] = React.useState('All');

  const filtered = segment === 'All' ? tasks : tasks.filter((t) => t.status === (segment === 'Active' ? 'active' : 'done'));

  return (
    <PhoneFrame>
      <PhoneScreen>
        <MobileTopBar title="My Tasks" large bordered />

        <MobileSearchBar placeholder="Search tasks…" showCancel={false} />

        <div className="px-4 pb-2">
          <SegmentedControl
            segments={['All', 'Active', 'Done']}
            value={segment}
            onChange={setSegment}
          />
        </div>

        <div className="flex-1 overflow-y-auto divide-y border-t">
          {filtered.map((task) => (
            <SwipeableRow key={task.id} onArchive={() => {}} onDelete={() => {}}>
              <ListItem
                leading={
                  task.status === 'done' ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )
                }
                title={task.title}
                subtitle={task.subtitle}
                trailing={
                  <Badge variant={priorityBadge[task.priority].variant} className="text-[10px] px-1.5 py-0">
                    {priorityBadge[task.priority].label}
                  </Badge>
                }
                onClick={() => {}}
              />
            </SwipeableRow>
          ))}
        </div>

        <BottomNav items={navItems} />
      </PhoneScreen>
    </PhoneFrame>
  );
}
