import * as React from 'react';
import { PhoneFrame, PhoneScreen } from '@/components/mobileapp/PhoneFrame';
import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { SkeletonListItem, SkeletonCard, SkeletonText, SkeletonBox } from '@/components/mobileapp/SkeletonLoader';
import { Button } from '@/components/ui/button';
import { WifiOff, AlertOctagon, Download } from 'lucide-react';

export function LoadingScreen() {
  return (
    <PhoneFrame>
      <PhoneScreen>
        {/* Splash / loading state */}
        <div className="flex flex-col items-center justify-center py-8 px-4">
          <SkeletonBox className="h-8 w-28 mb-1" />
          <SkeletonBox className="h-3 w-20 mb-6" />
        </div>

        <div className="px-4 space-y-4">
          <SkeletonCard />
          <div className="space-y-0 divide-y border rounded-xl overflow-hidden">
            <SkeletonListItem />
            <SkeletonListItem />
            <SkeletonListItem />
          </div>
          <SkeletonText lines={3} />
        </div>
      </PhoneScreen>
    </PhoneFrame>
  );
}

export function AppErrorScreen() {
  return (
    <PhoneFrame>
      <PhoneScreen>
        <MobileTopBar title="Cubicle" bordered />
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-5">
          <div className="h-20 w-20 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center">
            <AlertOctagon className="h-9 w-9" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Unexpected Error</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Something went wrong on our end. Our team has been notified and is working on a fix.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Button className="w-full h-11 font-semibold">Reload App</Button>
            <Button variant="outline" className="w-full h-11">Contact Support</Button>
          </div>
          <p className="text-[10px] text-muted-foreground">Error code: ERR_RUNTIME_0x4A2</p>
        </div>
      </PhoneScreen>
    </PhoneFrame>
  );
}

export function OfflineScreen() {
  return (
    <PhoneFrame>
      <PhoneScreen>
        <MobileTopBar title="Cubicle" bordered />
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-5">
          <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
            <WifiOff className="h-9 w-9 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">No Internet Connection</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cubicle needs an internet connection to sync your data. Check your Wi-Fi or mobile data and try again.
            </p>
          </div>
          <Button className="w-full h-11 font-semibold">Retry</Button>
          <button className="text-sm text-primary font-medium">Work Offline</button>
        </div>
      </PhoneScreen>
    </PhoneFrame>
  );
}

export function ForceUpdateScreen() {
  return (
    <PhoneFrame statusBar homeIndicator>
      <PhoneScreen>
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-6">
          <div className="h-20 w-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <Download className="h-9 w-9" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Update Required</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A new version of Cubicle is available. Please update to continue using the app — version 2.4.1 includes important security fixes.
            </p>
          </div>
          <div className="w-full space-y-3">
            <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
              <span>Current: v2.3.0</span>
              <span>Latest: v2.4.1</span>
            </div>
            <Button className="w-full h-11 font-semibold">
              Update Now
            </Button>
          </div>
          <div className="bg-muted rounded-xl p-4 w-full text-left space-y-1">
            <p className="text-xs font-semibold">What&apos;s new in 2.4.1</p>
            <ul className="text-xs text-muted-foreground space-y-0.5">
              <li>· Security patches and performance improvements</li>
              <li>· New dashboard analytics widgets</li>
              <li>· Improved offline mode support</li>
            </ul>
          </div>
        </div>
      </PhoneScreen>
    </PhoneFrame>
  );
}

export function SystemScreensScreen() {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      <LoadingScreen />
      <AppErrorScreen />
      <OfflineScreen />
      <ForceUpdateScreen />
    </div>
  );
}
