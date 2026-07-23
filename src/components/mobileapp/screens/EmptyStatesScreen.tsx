import * as React from 'react';
import { PhoneFrame, PhoneScreen } from '@/components/mobileapp/PhoneFrame';
import { MobileTopBar } from '@/components/mobileapp/MobileTopBar';
import { MobileEmptyState } from '@/components/mobileapp/MobileEmptyState';
import { Search, Bell, CreditCard, AlertCircle, WifiOff } from 'lucide-react';

export function EmptyStatesScreen() {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {/* No results */}
      <PhoneFrame>
        <PhoneScreen>
          <MobileTopBar title="Search" bordered />
          <div className="flex-1 flex items-center">
            <MobileEmptyState
              icon={<Search />}
              title="No results found"
              description={'We couldn\'t find anything matching "homepage redesign v4". Try a different keyword.'}
              primaryAction={{ label: 'Clear search', onClick: () => {} }}
            />
          </div>
        </PhoneScreen>
      </PhoneFrame>

      {/* No notifications */}
      <PhoneFrame>
        <PhoneScreen>
          <MobileTopBar title="Notifications" large bordered />
          <div className="flex-1 flex items-center">
            <MobileEmptyState
              icon={<Bell />}
              title="All caught up!"
              description="You have no new notifications. We'll let you know when something needs your attention."
            />
          </div>
        </PhoneScreen>
      </PhoneFrame>

      {/* No transactions */}
      <PhoneFrame>
        <PhoneScreen>
          <MobileTopBar title="Transactions" bordered />
          <div className="flex-1 flex items-center">
            <MobileEmptyState
              icon={<CreditCard />}
              title="No transactions yet"
              description="Your income and expenses will appear here once you connect a payment provider."
              primaryAction={{ label: 'Connect Stripe', onClick: () => {} }}
              secondaryAction={{ label: 'Learn more', onClick: () => {} }}
            />
          </div>
        </PhoneScreen>
      </PhoneFrame>

      {/* Error state */}
      <PhoneFrame>
        <PhoneScreen>
          <MobileTopBar title="Projects" bordered />
          <div className="flex-1 flex items-center">
            <MobileEmptyState
              icon={<AlertCircle />}
              title="Something went wrong"
              description="We couldn't load your projects. Please check your connection and try again."
              primaryAction={{ label: 'Try Again', onClick: () => {} }}
            />
          </div>
        </PhoneScreen>
      </PhoneFrame>

      {/* Offline state */}
      <PhoneFrame>
        <PhoneScreen>
          <MobileTopBar title="Cubicle" bordered />
          <div className="flex-1 flex items-center">
            <MobileEmptyState
              icon={<WifiOff />}
              title="You're offline"
              description="Connect to the internet to sync your data and continue working with your team."
              primaryAction={{ label: 'Retry Connection', onClick: () => {} }}
            />
          </div>
        </PhoneScreen>
      </PhoneFrame>
    </div>
  );
}
