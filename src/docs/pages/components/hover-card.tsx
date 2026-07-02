import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@cubicle</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@cubicle</h4>
          <p className="text-sm">
            A design system built with React, Tailwind CSS, and Radix.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="hover-card">
      <ComponentPreview code={code}>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@cubicle</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-72">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@cubicle</h4>
              <p className="text-sm">A design system built with React, Tailwind CSS, and Radix.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ComponentPreview>
    </ComponentDoc>
  );
}
