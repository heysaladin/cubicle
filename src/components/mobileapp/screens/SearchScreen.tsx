import * as React from 'react';
import { PhoneFrame, PhoneScreen } from '@/components/mobileapp/PhoneFrame';
import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { BottomNav } from '@/components/mobileapp/BottomNav';
import { MobileSearchBar } from '@/components/mobileapp/MobileSearchBar';
import { ActivityFeedItem } from '@/components/mobileapp/ActivityFeedItem';
import { ListItem } from '@/components/mobileapp/ListItem';
import { Home, Search, Bell, User, Clock, Folder, FileText, Users } from 'lucide-react';

const navItems = [
  { label: 'Home', icon: <Home /> },
  { label: 'Explore', icon: <Search />, active: true },
  { label: 'Inbox', icon: <Bell />, badge: 3 },
  { label: 'Profile', icon: <User /> },
];

const recentSearches = ['Website Redesign', 'Q3 Report', 'Aria Chen', 'Design tokens'];

const results = [
  {
    avatarFallback: 'WR',
    avatarIcon: <Folder />,
    title: 'Website Redesign',
    description: 'Project · 12 open tasks · Updated 2h ago',
    time: '',
    badge: 'Project',
    badgeVariant: 'default' as const,
  },
  {
    avatarFallback: 'HM',
    title: 'Homepage Mockup — Final v3',
    description: 'Task in Website Redesign · Assigned to Aria Chen',
    time: '',
    badge: 'Task',
    badgeVariant: 'secondary' as const,
  },
  {
    avatarFallback: 'Q3',
    avatarIcon: <FileText />,
    title: 'Q3 Report — Executive Summary',
    description: 'Document · Shared with 5 people · Completed',
    time: '',
    badge: 'Doc',
    badgeVariant: 'outline' as const,
  },
  {
    avatarFallback: 'AC',
    avatarIcon: <Users />,
    title: 'Aria Chen',
    description: 'Lead Designer · cubicle.io · aria@cubicle.io',
    time: '',
    badge: 'Member',
    badgeVariant: 'secondary' as const,
  },
];

export function SearchScreen() {
  return (
    <PhoneFrame>
      <PhoneScreen>
        <MobileTopBar title="Explore" large bordered />

        <MobileSearchBar placeholder="Search tasks, projects, people…" value="redesign" showCancel />

        <div className="flex-1 overflow-y-auto">
          {/* Recent searches */}
          <div className="px-4 pt-2 pb-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Recent</p>
              <button className="text-xs text-primary font-medium">Clear</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((q) => (
                <button
                  key={q}
                  className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="border-t">
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Results for &quot;redesign&quot;</p>
            </div>
            <div className="divide-y">
              {results.map((item, i) => (
                <ActivityFeedItem
                  key={i}
                  {...item}
                  onClick={() => {}}
                />
              ))}
            </div>
          </div>
        </div>

        <BottomNav items={navItems} />
      </PhoneScreen>
    </PhoneFrame>
  );
}
