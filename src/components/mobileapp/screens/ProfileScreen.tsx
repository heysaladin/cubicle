import { PhoneFrame, PhoneScreen } from '@/components/mobileapp/PhoneFrame';
import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { BottomNav } from '@/components/mobileapp/BottomNav';
import { ListItem, ListSection } from '@/components/mobileapp/ListItem';
import { ProgressRing } from '@/components/mobileapp/ProgressRing';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Home, Search, Bell, User, Edit3, Shield, Lock, CreditCard,
  HelpCircle, LogOut, Briefcase, Bell as BellIcon,
} from 'lucide-react';

const navItems = [
  { label: 'Home', icon: <Home /> },
  { label: 'Search', icon: <Search /> },
  { label: 'Inbox', icon: <Bell /> },
  { label: 'Profile', icon: <User />, active: true },
];

export function ProfileScreen() {
  return (
    <PhoneFrame>
      <PhoneScreen>
        <MobileTopBar
          title="Profile"
          bordered
          rightAction={
            <Button size="sm" variant="ghost" className="h-8 px-2 text-xs font-semibold">
              Edit
            </Button>
          }
        />

        <div className="flex-1 overflow-y-auto">
          {/* Profile header */}
          <div className="px-4 py-6 flex flex-col items-center text-center">
            <div className="relative mb-3">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="text-2xl font-semibold bg-primary/10 text-primary">AC</AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center border-2 border-background">
                <Edit3 className="h-3 w-3" />
              </button>
            </div>

            <h2 className="text-xl font-bold tracking-tight">Aria Chen</h2>
            <p className="text-sm text-muted-foreground">@ariac · cubicle.io</p>
            <p className="text-xs text-muted-foreground mt-2 max-w-[240px] leading-relaxed">
              Lead Designer at Cubicle. Building beautiful products that ship fast. Design systems nerd. ✦
            </p>

            <div className="flex gap-6 mt-4">
              {[['124', 'Projects'], ['2.1k', 'Tasks'], ['48', 'Following']].map(([val, label]) => (
                <div key={label} className="text-center">
                  <p className="text-sm font-bold">{val}</p>
                  <p className="text-[10px] text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>

            <Badge variant="secondary" className="mt-3 text-xs">Pro Plan</Badge>
          </div>

          {/* Profile completion */}
          <div className="mx-4 mb-4 rounded-xl border p-4 flex items-center gap-4">
            <ProgressRing value={78} size={60} strokeWidth={6} label="78%" sublabel="Done" />
            <div className="flex-1">
              <p className="text-sm font-semibold">Complete your profile</p>
              <p className="text-xs text-muted-foreground mt-0.5">Add your role and team to unlock all features.</p>
              <button className="text-xs text-primary font-medium mt-1.5">Finish setup →</button>
            </div>
          </div>

          {/* Account settings */}
          <ListSection title="Account">
            <ListItem leading={<Edit3 />} title="Edit Profile" showChevron onClick={() => {}} />
            <ListItem leading={<Briefcase />} title="Workspace" subtitle="cubicle.io" showChevron onClick={() => {}} />
            <ListItem leading={<CreditCard />} title="Billing & Plan" subtitle="Pro · $12/mo" showChevron onClick={() => {}} />
          </ListSection>

          <ListSection title="Preferences">
            <ListItem leading={<BellIcon />} title="Notifications" showChevron onClick={() => {}} />
            <ListItem leading={<Shield />} title="Privacy" showChevron onClick={() => {}} />
            <ListItem leading={<Lock />} title="Security" showChevron onClick={() => {}} />
          </ListSection>

          <ListSection title="Support">
            <ListItem leading={<HelpCircle />} title="Help & Support" showChevron onClick={() => {}} />
          </ListSection>

          {/* Sign out */}
          <div className="mx-0 mb-8">
            <div className="border-y">
              <ListItem
                leading={<LogOut className="text-destructive" />}
                title="Sign Out"
                destructive
                onClick={() => {}}
              />
            </div>
          </div>
        </div>

        <BottomNav items={navItems} />
      </PhoneScreen>
    </PhoneFrame>
  );
}
