'use client';

import * as React from 'react';
import { DocPage, DocSection } from '../../components/DocPage';
import { ComponentPreview } from '../../components/ComponentPreview';
import { SegmentedControl } from '@/components/mobileapp/SegmentedControl';
import { RatingStars } from '@/components/mobileapp/RatingStars';
import { PinInput } from '@/components/mobileapp/PinInput';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const segmentedCode = `import { SegmentedControl } from '@/components/mobileapp/SegmentedControl';
import { useState } from 'react';

export function Demo() {
  const [sort, setSort] = useState('Recent');
  const [period, setPeriod] = useState('7d');
  return (
    <div className="max-w-xs space-y-4">
      <SegmentedControl
        segments={['Recent', 'Popular', 'Trending']}
        value={sort}
        onChange={setSort}
      />
      <SegmentedControl
        segments={['7d', '30d', '90d', '1y']}
        value={period}
        onChange={setPeriod}
      />
    </div>
  );
}`;

const ratingStarsCode = `import { RatingStars } from '@/components/mobileapp/RatingStars';
import { useState } from 'react';

export function Demo() {
  const [rating, setRating] = useState(0);
  return (
    <div className="space-y-4 max-w-xs">
      <RatingStars value={3} label="3 out of 5 (display)" />
      <RatingStars value={4} size="sm" label="Compact size (4 stars)" />
      <RatingStars value={5} size="lg" label="Large size (5 stars)" />
      <RatingStars
        value={rating}
        interactive
        onChange={setRating}
        label={\`Rate this: \${rating === 0 ? 'tap a star' : \`\${rating}/5\`}\`}
      />
    </div>
  );
}`;

const pinInputCode = `import { PinInput } from '@/components/mobileapp/PinInput';
import { useState } from 'react';

export function Demo() {
  const [otp, setOtp] = useState('');
  return (
    <div className="max-w-xs space-y-8">
      <div>
        <p className="text-xs text-muted-foreground mb-3 text-center">Unmasked OTP</p>
        <PinInput length={6} value={otp} onChange={setOtp} />
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-3 text-center">Masked PIN (4 digits)</p>
        <PinInput length={4} value="12" masked />
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-3 text-center">Error state</p>
        <PinInput length={4} value="9999" error />
        <p className="text-xs text-destructive text-center mt-2">Incorrect PIN. 2 attempts remaining.</p>
      </div>
    </div>
  );
}`;

const nativeControlsCode = `import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export function Demo() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [volume, setVolume] = useState([60]);
  const [agreed, setAgreed] = useState(false);
  return (
    <div className="max-w-xs space-y-6 p-4 border rounded-xl">
      <div className="space-y-3">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Switches</p>
        <div className="flex items-center justify-between">
          <Label htmlFor="notif" className="text-sm font-medium">Push Notifications</Label>
          <Switch id="notif" checked={notifications} onCheckedChange={setNotifications} />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="dark" className="text-sm font-medium">Dark Mode</Label>
          <Switch id="dark" checked={darkMode} onCheckedChange={setDarkMode} />
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Slider</p>
        <div className="space-y-2">
          <Label className="text-sm font-medium">Volume — {volume[0]}%</Label>
          <Slider value={volume} onValueChange={setVolume} max={100} step={1} />
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Checkboxes</p>
        <div className="flex items-center gap-2">
          <Checkbox id="terms" checked={agreed} onCheckedChange={(v) => setAgreed(!!v)} />
          <Label htmlFor="terms" className="text-sm">I agree to the Terms of Service</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="marketing" defaultChecked />
          <Label htmlFor="marketing" className="text-sm">Send me product updates</Label>
        </div>
      </div>
    </div>
  );
}`;

export default function Page() {
  const [sort, setSort] = React.useState('Recent');
  const [period, setPeriod] = React.useState('7d');
  const [rating, setRating] = React.useState(0);
  const [otp, setOtp] = React.useState('');
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [volume, setVolume] = React.useState([60]);
  const [agreed, setAgreed] = React.useState(false);

  return (
    <DocPage
      title="MobileApp — Controls"
      description="Interactive control components for mobile interfaces: segmented controls, rating stars, PIN input, and native-style form controls."
    >
      <DocSection title="SegmentedControl — Multiple Examples">
        <ComponentPreview code={segmentedCode}>
          <div className="max-w-xs w-full space-y-4">
            <SegmentedControl
              segments={['Recent', 'Popular', 'Trending']}
              value={sort}
              onChange={setSort}
            />
            <SegmentedControl
              segments={['7d', '30d', '90d', '1y']}
              value={period}
              onChange={setPeriod}
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="RatingStars — Display Sizes &amp; Interactive">
        <ComponentPreview code={ratingStarsCode} previewClassName="p-6 items-start">
          <div className="space-y-4 max-w-xs w-full">
            <RatingStars value={3} label="3 out of 5 (display)" />
            <RatingStars value={4} size="sm" label="Compact size (4 stars)" />
            <RatingStars value={5} size="lg" label="Large size (5 stars)" />
            <RatingStars
              value={rating}
              interactive
              onChange={setRating}
              label={`Interactive: ${rating === 0 ? 'tap a star' : `${rating}/5`}`}
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="PinInput — Unmasked, Masked, and Error State">
        <ComponentPreview code={pinInputCode} previewClassName="p-6 items-start">
          <div className="max-w-xs w-full space-y-8">
            <div>
              <p className="text-xs text-muted-foreground mb-3 text-center">Unmasked OTP</p>
              <PinInput length={6} value={otp} onChange={setOtp} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3 text-center">Masked PIN (4 digits)</p>
              <PinInput length={4} value="12" masked />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3 text-center">Error state</p>
              <PinInput length={4} value="9999" error />
              <p className="text-xs text-destructive text-center mt-2">Incorrect PIN. 2 attempts remaining.</p>
            </div>
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="Native Controls — Switch, Slider, Checkbox">
        <ComponentPreview code={nativeControlsCode} previewClassName="p-6 items-start">
          <div className="max-w-xs w-full space-y-6 p-4 border rounded-xl">
            <div className="space-y-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Switches</p>
              <div className="flex items-center justify-between">
                <Label htmlFor="notif" className="text-sm font-medium">Push Notifications</Label>
                <Switch id="notif" checked={notifications} onCheckedChange={setNotifications} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="dark" className="text-sm font-medium">Dark Mode</Label>
                <Switch id="dark" checked={darkMode} onCheckedChange={setDarkMode} />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Slider</p>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Volume — {volume[0]}%</Label>
                <Slider value={volume} onValueChange={setVolume} max={100} step={1} />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Checkboxes</p>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" checked={agreed} onCheckedChange={(v) => setAgreed(!!v)} />
                <Label htmlFor="terms" className="text-sm">I agree to the Terms of Service</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="marketing" defaultChecked />
                <Label htmlFor="marketing" className="text-sm">Send me product updates</Label>
              </div>
            </div>
          </div>
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
