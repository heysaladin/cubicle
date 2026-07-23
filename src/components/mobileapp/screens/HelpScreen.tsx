import * as React from 'react';
import { PhoneFrame, PhoneScreen } from '@/components/mobileapp/PhoneFrame';
import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { MobileSearchBar } from '@/components/mobileapp/MobileSearchBar';
import { ListItem, ListSection } from '@/components/mobileapp/ListItem';
import { MobileCard } from '@/components/mobileapp/MobileCard';
import { RatingStars } from '@/components/mobileapp/RatingStars';
import { MessageCircle, Mail, FileText, Zap, Users, Bell, CreditCard, ChevronRight } from 'lucide-react';

export function HelpScreen() {
  return (
    <PhoneFrame>
      <PhoneScreen>
        <MobileTopBar title="Help & Support" showBack bordered />

        <div className="flex-1 overflow-y-auto">
          <MobileSearchBar placeholder="Search help articles…" />

          {/* Popular topics */}
          <ListSection title="Popular Topics">
            <ListItem
              leading={<Zap className="text-amber-500" />}
              title="Getting started with Cubicle"
              subtitle="Set up your workspace in 5 minutes"
              showChevron
              onClick={() => {}}
            />
            <ListItem
              leading={<Users className="text-blue-500" />}
              title="Inviting team members"
              subtitle="Add collaborators to your workspace"
              showChevron
              onClick={() => {}}
            />
            <ListItem
              leading={<Bell className="text-purple-500" />}
              title="Notification settings"
              subtitle="Customize what you're notified about"
              showChevron
              onClick={() => {}}
            />
            <ListItem
              leading={<CreditCard className="text-emerald-500" />}
              title="Billing & plans"
              subtitle="Upgrade, downgrade, or cancel your plan"
              showChevron
              onClick={() => {}}
            />
          </ListSection>

          {/* Contact options */}
          <div className="px-4 mb-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Contact Us</p>
            <div className="space-y-3">
              <MobileCard onClick={() => {}}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Live Chat</p>
                    <p className="text-xs text-muted-foreground">Average wait: &lt; 2 min</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                </div>
              </MobileCard>

              <MobileCard onClick={() => {}}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Email Support</p>
                    <p className="text-xs text-muted-foreground">support@cubicle.io</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                </div>
              </MobileCard>

              <MobileCard onClick={() => {}}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Documentation</p>
                    <p className="text-xs text-muted-foreground">docs.cubicle.io</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                </div>
              </MobileCard>
            </div>
          </div>

          {/* Rating */}
          <div className="mx-4 mt-5 mb-8 rounded-xl border p-4 space-y-3">
            <p className="text-sm font-semibold">Rate your experience</p>
            <p className="text-xs text-muted-foreground">How satisfied are you with Cubicle&apos;s support?</p>
            <RatingStars value={4} size="lg" interactive />
          </div>
        </div>
      </PhoneScreen>
    </PhoneFrame>
  );
}
