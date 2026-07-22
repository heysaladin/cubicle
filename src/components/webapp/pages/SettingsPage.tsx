'use client';

import * as React from 'react';
import { LayoutDashboard, Users, BarChart3, Settings, Bell, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { AppLayout } from '@/components/webapp/AppLayout';
import { PageHeader } from '@/components/webapp/PageHeader';
import { NavBreadcrumb } from '@/components/webapp/NavBreadcrumb';
import { FormField } from '@/components/webapp/FormField';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: <LayoutDashboard className="size-4" />, href: '#' },
  { label: 'Users', icon: <Users className="size-4" />, href: '#' },
  { label: 'Analytics', icon: <BarChart3 className="size-4" />, href: '#' },
  { label: 'Notifications', icon: <Bell className="size-4" />, href: '#' },
  { label: 'Reports', icon: <FileText className="size-4" />, href: '#' },
  { label: 'Settings', icon: <Settings className="size-4" />, href: '#', active: true },
];

export function SettingsPage() {
  return (
    <AppLayout navItems={NAV_ITEMS}>
          <PageHeader
            title="Settings"
            description="Manage your account and preferences."
          />

          <NavBreadcrumb
            items={[{ label: 'Home', href: '#' }, { label: 'Settings' }]}
          />

          <Tabs defaultValue="profile" className="w-full">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="mt-6">
              <div className="max-w-lg space-y-5">
                <FormField label="Full Name" htmlFor="full-name">
                  <Input id="full-name" defaultValue="Jane Doe" />
                </FormField>
                <FormField label="Email" htmlFor="email" required>
                  <Input id="email" type="email" defaultValue="jane@example.com" />
                </FormField>
                <FormField label="Bio" htmlFor="bio" helperText="Write a short bio about yourself.">
                  <Input id="bio" placeholder="Tell us about yourself..." />
                </FormField>
                <Button>Save Changes</Button>
              </div>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="mt-6">
              <div className="max-w-lg space-y-5">
                <FormField label="Current Password" htmlFor="current-password">
                  <Input id="current-password" type="password" placeholder="Enter current password" />
                </FormField>
                <FormField label="New Password" htmlFor="new-password">
                  <Input id="new-password" type="password" placeholder="Enter new password" />
                </FormField>
                <FormField label="Confirm Password" htmlFor="confirm-password">
                  <Input id="confirm-password" type="password" placeholder="Confirm new password" />
                </FormField>
                <Button>Update Password</Button>
              </div>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="mt-6">
              <div className="max-w-lg space-y-1">
                <div className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-sm font-medium">Email Notifications</p>
                    <p className="text-xs text-muted-foreground">Receive updates and alerts via email.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-sm font-medium">Product Announcements</p>
                    <p className="text-xs text-muted-foreground">Get notified about new features and releases.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-sm font-medium">Security Alerts</p>
                    <p className="text-xs text-muted-foreground">Important alerts about your account security.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </TabsContent>
          </Tabs>
    </AppLayout>
  );
}
