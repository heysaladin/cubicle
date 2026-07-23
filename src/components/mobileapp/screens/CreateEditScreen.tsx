import * as React from 'react';
import { PhoneFrame, PhoneScreen } from '@/components/mobileapp/PhoneFrame';
import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { MobileFormField } from '@/components/mobileapp/MobileFormField';
import { MobileToast } from '@/components/mobileapp/MobileToast';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function CreateScreen() {
  return (
    <PhoneFrame>
      <PhoneScreen>
        <MobileTopBar
          title="New Task"
          showBack
          bordered
          rightAction={
            <Button size="sm" variant="ghost" className="h-8 px-2 text-xs font-semibold text-primary">
              Save
            </Button>
          }
        />

        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
          <MobileFormField
            label="Title"
            placeholder="Enter task title…"
            required
          />
          <MobileFormField
            label="Description"
            placeholder="Add details about this task…"
            multiline
            rows={4}
          />

          {/* Category picker mockup */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Project</label>
            <div className="flex items-center gap-2 rounded-xl border bg-background px-4 h-12">
              <p className="flex-1 text-sm text-muted-foreground">Select a project…</p>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Priority picker mockup */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Priority</label>
            <div className="flex gap-2">
              {['Low', 'Medium', 'High'].map((p) => (
                <button
                  key={p}
                  className={`flex-1 h-10 rounded-xl border text-xs font-medium transition-colors ${p === 'Medium' ? 'bg-primary text-primary-foreground border-primary' : 'bg-background text-muted-foreground'}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <MobileFormField label="Due Date" type="date" placeholder="Pick a date" />

          <MobileFormField label="Assignee" placeholder="Search team members…" />
        </div>
      </PhoneScreen>
    </PhoneFrame>
  );
}

export function EditScreen() {
  return (
    <PhoneFrame>
      <PhoneScreen>
        <MobileTopBar
          title="Edit Task"
          showBack
          bordered
          rightAction={
            <Button size="sm" variant="ghost" className="h-8 px-2 text-xs font-semibold text-primary">
              Save
            </Button>
          }
        />

        {/* Success toast */}
        <div className="pt-3">
          <MobileToast message="Changes saved successfully!" variant="success" visible />
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
          <MobileFormField
            label="Title"
            value="Finalize homepage mockup"
            required
          />
          <MobileFormField
            label="Description"
            value="Update the hero section per stakeholder feedback. Adjust CTA button color and typography sizing."
            multiline
            rows={4}
          />

          {/* Category picker */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Project</label>
            <div className="flex items-center gap-2 rounded-xl border bg-background px-4 h-12">
              <p className="flex-1 text-sm">Website Redesign</p>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Priority picker */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Priority</label>
            <div className="flex gap-2">
              {['Low', 'Medium', 'High'].map((p) => (
                <button
                  key={p}
                  className={`flex-1 h-10 rounded-xl border text-xs font-medium transition-colors ${p === 'High' ? 'bg-primary text-primary-foreground border-primary' : 'bg-background text-muted-foreground'}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <MobileFormField label="Due Date" value="2026-07-25" type="date" />

          <MobileFormField label="Assignee" value="Aria Chen" />
        </div>
      </PhoneScreen>
    </PhoneFrame>
  );
}

export function CreateEditScreen() {
  return <CreateScreen />;
}
