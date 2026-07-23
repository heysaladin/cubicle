'use client';

import * as React from 'react';
import { DocPage, DocSection } from '../../components/DocPage';
import { ComponentPreview } from '../../components/ComponentPreview';
import { ListItem, ListSection } from '@/components/mobileapp/ListItem';
import { ActivityFeedItem } from '@/components/mobileapp/ActivityFeedItem';
import { NotificationItem } from '@/components/mobileapp/NotificationItem';
import { MobileCard, MobileStatCard } from '@/components/mobileapp/MobileCard';
import {
  User, Settings, CreditCard, Bell, Lock, HelpCircle,
  Heart, MessageCircle, Share2, TrendingUp, TrendingDown, DollarSign, Users,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const listItemCode = `import { ListItem, ListSection } from '@/components/mobileapp/ListItem';
import { User, Settings, CreditCard, Bell, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Demo() {
  return (
    <div className="max-w-xs border rounded-xl overflow-hidden">
      <ListSection title="Account">
        <ListItem leading={<User />} title="Personal Info" subtitle="Name, email, photo" showChevron onClick={() => {}} />
        <ListItem leading={<CreditCard />} title="Payment Methods" trailing={<Badge variant="secondary">2 cards</Badge>} showChevron onClick={() => {}} />
        <ListItem leading={<Bell />} title="Notifications" showChevron onClick={() => {}} />
      </ListSection>
      <ListSection title="Security" footer="Two-factor authentication adds an extra layer of protection.">
        <ListItem leading={<Lock />} title="Change Password" showChevron onClick={() => {}} />
        <ListItem leading={<Settings />} title="Two-Factor Auth" trailing={<span className="text-xs text-emerald-600 font-medium">On</span>} showChevron onClick={() => {}} />
      </ListSection>
    </div>
  );
}`;

const activityFeedCode = `import { ActivityFeedItem } from '@/components/mobileapp/ActivityFeedItem';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

export function Demo() {
  return (
    <div className="max-w-xs border rounded-xl overflow-hidden divide-y">
      <ActivityFeedItem
        avatarFallback="SA"
        title="Sarah Anderson liked your post"
        description="\"Just shipped the new onboarding flow — super proud of the team!\""
        time="2m ago"
        badge="New"
      />
      <ActivityFeedItem
        avatarFallback="MT"
        title="Marcus Torres commented on your photo"
        description="This looks absolutely amazing! Can't wait to try it out."
        time="14m ago"
        actions={
          <>
            <button className="flex items-center gap-1 text-xs text-muted-foreground"><Heart className="h-3 w-3" /> Like</button>
            <button className="flex items-center gap-1 text-xs text-muted-foreground"><MessageCircle className="h-3 w-3" /> Reply</button>
          </>
        }
      />
      <ActivityFeedItem
        avatarIcon={<Share2 />}
        title="Your post was shared 8 times"
        time="1h ago"
        badge="Trending"
        badgeVariant="default"
      />
    </div>
  );
}`;

const notificationCode = `import { NotificationItem } from '@/components/mobileapp/NotificationItem';
import { Bell } from 'lucide-react';

export function Demo() {
  return (
    <div className="max-w-xs border rounded-xl overflow-hidden divide-y">
      <NotificationItem
        title="New follower"
        body="Jordan Kim started following you. Check out their profile."
        time="just now"
        avatarFallback="JK"
        unread
      />
      <NotificationItem
        title="Payment received"
        body="You received a payment of \$149.00 from Acme Corp."
        time="2h ago"
        icon={<DollarSign />}
        unread
      />
      <NotificationItem
        title="Weekly summary"
        body="You had 42 profile views and 8 new connections this week."
        time="Yesterday"
        icon={<Bell />}
      />
    </div>
  );
}`;

const mobileCardCode = `import { MobileCard } from '@/components/mobileapp/MobileCard';
import { Badge } from '@/components/ui/badge';

export function Demo() {
  return (
    <div className="max-w-xs space-y-3">
      <MobileCard>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary">Design</Badge>
          <span className="text-xs text-muted-foreground">Due Jun 30</span>
        </div>
        <h3 className="text-sm font-semibold">Redesign onboarding flow</h3>
        <p className="text-xs text-muted-foreground mt-1">Update the 4-step onboarding to match the new brand guidelines.</p>
      </MobileCard>
      <MobileCard padding="sm" onClick={() => {}}>
        <p className="text-xs font-medium">Compact clickable card</p>
        <p className="text-xs text-muted-foreground mt-0.5">Tap to open</p>
      </MobileCard>
    </div>
  );
}`;

const statCardCode = `import { MobileStatCard } from '@/components/mobileapp/MobileCard';
import { TrendingUp, TrendingDown, DollarSign, Users } from 'lucide-react';

export function Demo() {
  return (
    <div className="max-w-xs grid grid-cols-2 gap-3">
      <MobileStatCard label="Revenue" value="\$12.4k" change="+8.2% this week" changeType="increase" icon={<DollarSign />} />
      <MobileStatCard label="Users" value="3,291" change="+124 today" changeType="increase" icon={<Users />} />
      <MobileStatCard label="Churn" value="2.4%" change="+0.3%" changeType="decrease" icon={<TrendingDown />} />
      <MobileStatCard label="Sessions" value="18,540" change="No change" changeType="neutral" icon={<TrendingUp />} />
    </div>
  );
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — Content & Data Display"
      description="Components for displaying content, activity feeds, notifications, cards, and statistics in mobile layouts."
    >
      <DocSection title="ListItem + ListSection">
        <ComponentPreview code={listItemCode} previewClassName="p-4 items-start">
          <div className="max-w-xs w-full border rounded-xl overflow-hidden">
            <ListSection title="Account">
              <ListItem leading={<User />} title="Personal Info" subtitle="Name, email, photo" showChevron onClick={() => {}} />
              <ListItem leading={<CreditCard />} title="Payment Methods" trailing={<Badge variant="secondary">2 cards</Badge>} showChevron onClick={() => {}} />
              <ListItem leading={<Bell />} title="Notifications" showChevron onClick={() => {}} />
            </ListSection>
            <ListSection title="Security" footer="Two-factor authentication adds an extra layer of protection.">
              <ListItem leading={<Lock />} title="Change Password" showChevron onClick={() => {}} />
              <ListItem leading={<Settings />} title="Two-Factor Auth" trailing={<span className="text-xs text-emerald-600 font-medium">On</span>} showChevron onClick={() => {}} />
            </ListSection>
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="ActivityFeedItem">
        <ComponentPreview code={activityFeedCode} previewClassName="p-4 items-start">
          <div className="max-w-xs w-full border rounded-xl overflow-hidden divide-y">
            <ActivityFeedItem
              avatarFallback="SA"
              title="Sarah Anderson liked your post"
              description={'"Just shipped the new onboarding flow \u2014 super proud of the team!"'}
              time="2m ago"
              badge="New"
            />
            <ActivityFeedItem
              avatarFallback="MT"
              title="Marcus Torres commented on your photo"
              description="This looks absolutely amazing! Can't wait to try it out."
              time="14m ago"
              actions={
                <>
                  <button className="flex items-center gap-1 text-xs text-muted-foreground"><Heart className="h-3 w-3" /> Like</button>
                  <button className="flex items-center gap-1 text-xs text-muted-foreground"><MessageCircle className="h-3 w-3" /> Reply</button>
                </>
              }
            />
            <ActivityFeedItem
              avatarIcon={<Share2 />}
              title="Your post was shared 8 times"
              time="1h ago"
              badge="Trending"
              badgeVariant="default"
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="NotificationItem — Unread &amp; Read States">
        <ComponentPreview code={notificationCode} previewClassName="p-4 items-start">
          <div className="max-w-xs w-full border rounded-xl overflow-hidden divide-y">
            <NotificationItem
              title="New follower"
              body="Jordan Kim started following you. Check out their profile."
              time="just now"
              avatarFallback="JK"
              unread
            />
            <NotificationItem
              title="Payment received"
              body="You received a payment of $149.00 from Acme Corp."
              time="2h ago"
              icon={<DollarSign />}
              unread
            />
            <NotificationItem
              title="Weekly summary"
              body="You had 42 profile views and 8 new connections this week."
              time="Yesterday"
              icon={<Bell />}
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="MobileCard — Variants">
        <ComponentPreview code={mobileCardCode} previewClassName="p-6 items-start">
          <div className="max-w-xs w-full space-y-3">
            <MobileCard>
              <div className="flex items-start justify-between mb-2">
                <Badge variant="secondary">Design</Badge>
                <span className="text-xs text-muted-foreground">Due Jun 30</span>
              </div>
              <h3 className="text-sm font-semibold">Redesign onboarding flow</h3>
              <p className="text-xs text-muted-foreground mt-1">Update the 4-step onboarding to match the new brand guidelines.</p>
            </MobileCard>
            <MobileCard padding="sm" onClick={() => {}}>
              <p className="text-xs font-medium">Compact clickable card</p>
              <p className="text-xs text-muted-foreground mt-0.5">Tap to open</p>
            </MobileCard>
            <MobileCard padding="none" className="overflow-hidden">
              <div className="h-20 bg-gradient-to-r from-primary/20 to-primary/5" />
              <div className="p-4">
                <p className="text-xs font-medium">Card with no padding + media area</p>
              </div>
            </MobileCard>
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="MobileStatCard — Grid Layout">
        <ComponentPreview code={statCardCode} previewClassName="p-6 items-start">
          <div className="max-w-xs w-full grid grid-cols-2 gap-3">
            <MobileStatCard label="Revenue" value="$12.4k" change="+8.2% this week" changeType="increase" icon={<DollarSign />} />
            <MobileStatCard label="Users" value="3,291" change="+124 today" changeType="increase" icon={<Users />} />
            <MobileStatCard label="Churn" value="2.4%" change="+0.3%" changeType="decrease" icon={<TrendingDown />} />
            <MobileStatCard label="Sessions" value="18,540" change="No change" changeType="neutral" icon={<TrendingUp />} />
          </div>
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
