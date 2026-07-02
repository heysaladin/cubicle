import { Calculator, Calendar, Settings, Smile, User } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Calculator, Calendar, Settings, Smile, User } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

export function CommandDemo() {
  return (
    <Command className="max-w-md rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem><Calendar /> Calendar</CommandItem>
          <CommandItem><Smile /> Search Emoji</CommandItem>
          <CommandItem><Calculator /> Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem><User /> Profile</CommandItem>
          <CommandItem><Settings /> Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="command">
      <ComponentPreview code={code}>
        <Command className="max-w-md rounded-lg border shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar /> Calendar
              </CommandItem>
              <CommandItem>
                <Smile /> Search Emoji
              </CommandItem>
              <CommandItem>
                <Calculator /> Calculator
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User /> Profile
              </CommandItem>
              <CommandItem>
                <Settings /> Settings
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </ComponentPreview>
    </ComponentDoc>
  );
}
