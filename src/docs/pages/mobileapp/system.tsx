'use client';

import { DocPage, DocSection } from '../../components/DocPage';
import { ComponentPreview } from '../../components/ComponentPreview';
import { MobileEmptyState } from '@/components/mobileapp/MobileEmptyState';
import { SwipeableRow } from '@/components/mobileapp/SwipeableRow';
import { ListItem } from '@/components/mobileapp/ListItem';
import {
  Inbox, Search, ShoppingBag, Bell,
  MessageCircle, User,
} from 'lucide-react';

const emptyStateIconCode = `import { MobileEmptyState } from '@/components/mobileapp/MobileEmptyState';
import { Inbox } from 'lucide-react';

export function Demo() {
  return (
    <div className="max-w-xs border rounded-xl overflow-hidden">
      <MobileEmptyState
        icon={<Inbox />}
        title="No messages yet"
        description="When someone sends you a message it will appear here. Start a conversation to get going."
        primaryAction={{ label: 'Start a conversation', onClick: () => {} }}
      />
    </div>
  );
}`;

const emptyStateIllustrationCode = `import { MobileEmptyState } from '@/components/mobileapp/MobileEmptyState';
import { ShoppingBag } from 'lucide-react';

export function Demo() {
  return (
    <div className="max-w-xs border rounded-xl overflow-hidden">
      <MobileEmptyState
        illustration={
          <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
            <ShoppingBag className="h-10 w-10 text-primary/60" />
          </div>
        }
        title="Your cart is empty"
        description="Looks like you haven't added anything yet. Browse our catalog to find something you'll love."
        primaryAction={{ label: 'Browse products', onClick: () => {} }}
        secondaryAction={{ label: 'View wishlist', onClick: () => {} }}
      />
    </div>
  );
}`;

const emptyStateNoResultsCode = `import { MobileEmptyState } from '@/components/mobileapp/MobileEmptyState';
import { Search } from 'lucide-react';

export function Demo() {
  return (
    <div className="max-w-xs border rounded-xl overflow-hidden">
      <MobileEmptyState
        icon={<Search />}
        title="No results for \\"unicorn\\""
        description="Try checking your spelling or searching for something else."
        primaryAction={{ label: 'Clear search', onClick: () => {} }}
      />
    </div>
  );
}`;

const swipeableRowCode = `import { SwipeableRow } from '@/components/mobileapp/SwipeableRow';
import { ListItem } from '@/components/mobileapp/ListItem';
import { Bell, MessageCircle, User } from 'lucide-react';

export function Demo() {
  return (
    <div className="max-w-xs border rounded-xl overflow-hidden divide-y">
      {/* Row with both archive + delete */}
      <SwipeableRow onArchive={() => {}} onDelete={() => {}}>
        <ListItem
          leading={<Bell />}
          title="Price drop alert"
          subtitle="AirPods Pro dropped to $189"
        />
      </SwipeableRow>

      {/* Row with only delete */}
      <SwipeableRow onDelete={() => {}}>
        <ListItem
          leading={<MessageCircle />}
          title="Support request #1042"
          subtitle="Your ticket has been resolved"
        />
      </SwipeableRow>

      {/* Row with only archive */}
      <SwipeableRow onArchive={() => {}}>
        <ListItem
          leading={<User />}
          title="Jordan Kim followed you"
          subtitle="2 minutes ago"
        />
      </SwipeableRow>
    </div>
  );
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — System &amp; Advanced Patterns"
      description="System-level components for mobile: empty states with icons and illustrations, and swipeable rows revealing contextual actions."
    >
      <DocSection title="MobileEmptyState — With Icon">
        <ComponentPreview code={emptyStateIconCode} previewClassName="p-6 items-start">
          <div className="max-w-xs w-full border rounded-xl overflow-hidden">
            <MobileEmptyState
              icon={<Inbox />}
              title="No messages yet"
              description="When someone sends you a message it will appear here. Start a conversation to get going."
              primaryAction={{ label: 'Start a conversation', onClick: () => {} }}
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="MobileEmptyState — With Illustration Placeholder &amp; Two Actions">
        <ComponentPreview code={emptyStateIllustrationCode} previewClassName="p-6 items-start">
          <div className="max-w-xs w-full border rounded-xl overflow-hidden">
            <MobileEmptyState
              illustration={
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
                  <ShoppingBag className="h-10 w-10 text-primary/60" />
                </div>
              }
              title="Your cart is empty"
              description="Looks like you haven't added anything yet. Browse our catalog to find something you'll love."
              primaryAction={{ label: 'Browse products', onClick: () => {} }}
              secondaryAction={{ label: 'View wishlist', onClick: () => {} }}
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="MobileEmptyState — No Search Results">
        <ComponentPreview code={emptyStateNoResultsCode} previewClassName="p-6 items-start">
          <div className="max-w-xs w-full border rounded-xl overflow-hidden">
            <MobileEmptyState
              icon={<Search />}
              title='No results for "unicorn"'
              description="Try checking your spelling or searching for something else."
              primaryAction={{ label: 'Clear search', onClick: () => {} }}
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="SwipeableRow — Revealed Delete &amp; Archive Actions">
        <ComponentPreview code={swipeableRowCode} previewClassName="p-6 items-start">
          <div className="max-w-xs w-full border rounded-xl overflow-hidden divide-y">
            <SwipeableRow onArchive={() => {}} onDelete={() => {}}>
              <ListItem
                leading={<Bell />}
                title="Price drop alert"
                subtitle="AirPods Pro dropped to $189"
              />
            </SwipeableRow>
            <SwipeableRow onDelete={() => {}}>
              <ListItem
                leading={<MessageCircle />}
                title="Support request #1042"
                subtitle="Your ticket has been resolved"
              />
            </SwipeableRow>
            <SwipeableRow onArchive={() => {}}>
              <ListItem
                leading={<User />}
                title="Jordan Kim followed you"
                subtitle="2 minutes ago"
              />
            </SwipeableRow>
          </div>
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
