import * as React from 'react';
import { PhoneFrame, PhoneScreen } from '@/components/mobileapp/PhoneFrame';
import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { BottomNav } from '@/components/mobileapp/BottomNav';
import { ListItem, ListSection } from '@/components/mobileapp/ListItem';
import { Switch } from '@/components/ui/switch';
import {
  Home, Search, Bell, User, Mail, Smartphone, Moon, Globe,
  Shield, Eye, EyeOff, Lock, Info, FileText, Star,
} from 'lucide-react';

const navItems = [
  { label: 'Home', icon: <Home /> },
  { label: 'Search', icon: <Search /> },
  { label: 'Inbox', icon: <Bell /> },
  { label: 'Profile', icon: <User />, active: true },
];

export function SettingsScreen() {
  const [pushEnabled, setPushEnabled] = React.useState(true);
  const [emailEnabled, setEmailEnabled] = React.useState(true);
  const [smsEnabled, setSmsEnabled] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const [activityVisible, setActivityVisible] = React.useState(true);
  const [twoFactor, setTwoFactor] = React.useState(false);

  return (
    <PhoneFrame>
      <PhoneScreen>
        <MobileTopBar title="Settings" large bordered />

        <div className="flex-1 overflow-y-auto py-4">
          {/* Account */}
          <ListSection title="Account">
            <ListItem
              leading={<User />}
              title="Profile"
              subtitle="Aria Chen · aria@cubicle.io"
              showChevron
              onClick={() => {}}
            />
            <ListItem
              leading={<Globe />}
              title="Language"
              subtitle="English"
              trailing={<span className="text-xs text-muted-foreground">English</span>}
              showChevron
              onClick={() => {}}
            />
            <ListItem
              leading={<Moon />}
              title="Dark Mode"
              trailing={
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              }
            />
          </ListSection>

          {/* Notifications */}
          <ListSection title="Notifications">
            <ListItem
              leading={<Bell />}
              title="Push Notifications"
              trailing={<Switch checked={pushEnabled} onCheckedChange={setPushEnabled} />}
            />
            <ListItem
              leading={<Mail />}
              title="Email Digest"
              subtitle="Daily summary at 9 AM"
              trailing={<Switch checked={emailEnabled} onCheckedChange={setEmailEnabled} />}
            />
            <ListItem
              leading={<Smartphone />}
              title="SMS Alerts"
              subtitle="Critical updates only"
              trailing={<Switch checked={smsEnabled} onCheckedChange={setSmsEnabled} />}
            />
            <ListItem
              leading={<Bell />}
              title="Notification Schedule"
              subtitle="Quiet hours: 10 PM – 8 AM"
              showChevron
              onClick={() => {}}
            />
          </ListSection>

          {/* Privacy */}
          <ListSection title="Privacy">
            <ListItem
              leading={<Eye />}
              title="Activity Visibility"
              subtitle="Show when you're active"
              trailing={<Switch checked={activityVisible} onCheckedChange={setActivityVisible} />}
            />
            <ListItem
              leading={<EyeOff />}
              title="Read Receipts"
              trailing={<Switch checked={false} onCheckedChange={() => {}} />}
            />
            <ListItem
              leading={<Lock />}
              title="Two-Factor Auth"
              trailing={<Switch checked={twoFactor} onCheckedChange={setTwoFactor} />}
            />
            <ListItem
              leading={<Shield />}
              title="Blocked Users"
              trailing={<span className="text-xs text-muted-foreground">0</span>}
              showChevron
              onClick={() => {}}
            />
          </ListSection>

          {/* About */}
          <ListSection title="About">
            <ListItem
              leading={<Info />}
              title="App Version"
              trailing={<span className="text-xs text-muted-foreground">2.4.1</span>}
            />
            <ListItem leading={<FileText />} title="Terms of Service" showChevron onClick={() => {}} />
            <ListItem leading={<FileText />} title="Privacy Policy" showChevron onClick={() => {}} />
            <ListItem leading={<Star />} title="Rate the App" showChevron onClick={() => {}} />
          </ListSection>
        </div>

        <BottomNav items={navItems} />
      </PhoneScreen>
    </PhoneFrame>
  );
}
