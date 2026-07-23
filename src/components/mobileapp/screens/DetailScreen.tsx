import * as React from 'react';
import { PhoneFrame, PhoneScreen } from '@/components/mobileapp/PhoneFrame';
import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { RatingStars } from '@/components/mobileapp/RatingStars';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Share2 } from 'lucide-react';

export function DetailScreen() {
  return (
    <PhoneFrame>
      <PhoneScreen>
        <MobileTopBar
          title="Task Detail"
          showBack
          rightAction={
            <button className="p-1.5 text-muted-foreground">
              <Share2 className="h-4 w-4" />
            </button>
          }
        />

        <div className="flex-1 overflow-y-auto">
          {/* Hero image placeholder */}
          <div className="aspect-video bg-muted flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
              <div className="h-12 w-12 rounded-xl bg-muted-foreground/20" />
              <div className="h-2 w-20 rounded bg-muted-foreground/20" />
            </div>
          </div>

          <div className="px-4 py-4 space-y-4">
            {/* Title */}
            <div>
              <h1 className="text-lg font-bold tracking-tight leading-snug">
                Website Redesign — Homepage Mockup
              </h1>
              <p className="text-xs text-muted-foreground mt-1">Project: Website Redesign</p>
            </div>

            {/* Metadata */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                <span>Due Jul 25, 2026</span>
              </div>
              <Badge variant="default" className="text-[10px]">In Progress</Badge>
              <Badge variant="secondary" className="text-[10px]">Design</Badge>
            </div>

            {/* Author */}
            <div className="flex items-center gap-2">
              <Avatar className="h-7 w-7">
                <AvatarFallback className="text-[10px]">AC</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-xs font-medium">Aria Chen</p>
                <p className="text-[10px] text-muted-foreground">Lead Designer</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Body */}
            <div className="space-y-3 text-sm text-foreground/80 leading-relaxed">
              <p>
                This task covers the complete redesign of the Cubicle marketing homepage. The goal is to modernize the visual design, improve conversion rates, and align the page with our updated brand identity and product messaging.
              </p>
              <p>
                Key deliverables include a high-fidelity Figma mockup covering desktop, tablet, and mobile breakpoints. The design should follow the Cubicle design system tokens established in Q2, using the new primary palette and typography scale.
              </p>
              <p>
                Stakeholder sign-off is required before handoff to engineering. Schedule a review session with the product team by end of week and collect feedback via the design review Slack channel.
              </p>
            </div>

            {/* Rating */}
            <div className="pt-1">
              <p className="text-xs font-medium mb-2">Task Complexity</p>
              <RatingStars value={4} size="md" />
            </div>
          </div>
        </div>

        {/* Bottom sticky action bar */}
        <div className="border-t bg-background px-4 py-3 flex gap-2">
          <Button variant="outline" className="flex-1 h-10 text-sm">Reassign</Button>
          <Button className="flex-1 h-10 text-sm font-semibold">Mark Complete</Button>
        </div>
      </PhoneScreen>
    </PhoneFrame>
  );
}
