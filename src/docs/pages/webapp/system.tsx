'use client';

import * as React from 'react';
import { DocPage, DocSection } from '../../components/DocPage';
import { ComponentPreview } from '../../components/ComponentPreview';
import { CommandPalette } from '@/components/webapp/CommandPalette';
import { KeyboardShortcut } from '@/components/webapp/KeyboardShortcut';
import { Button } from '@/components/ui/button';

const commandPaletteCode = `import { CommandPalette } from '@/components/webapp/CommandPalette';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open Command Palette
      </Button>
      <CommandPalette open={open} onOpenChange={setOpen} />
    </>
  );
}`;

const keyboardShortcutCode = `import { KeyboardShortcut } from '@/components/webapp/KeyboardShortcut';

export function Demo() {
  return (
    <div className="space-y-3">
      <KeyboardShortcut keys={['⌘', 'K']} label="Command palette" />
      <KeyboardShortcut keys={['⌘', 'S']} label="Save" />
      <KeyboardShortcut keys={['⌘', 'Shift', 'P']} label="Quick actions" />
      <KeyboardShortcut keys={['Esc']} label="Close" />
    </div>
  );
}`;

function CommandPaletteDemo() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open Command Palette
        </Button>
        <KeyboardShortcut keys={['⌘', 'K']} label="or press" />
      </div>
      <CommandPalette open={open} onOpenChange={setOpen} />
    </>
  );
}

export default function Page() {
  return (
    <DocPage
      title="WebApp - System / Advanced Patterns"
      description="System-level and advanced component patterns for web applications."
    >
      <DocSection title="CommandPalette">
        <ComponentPreview code={commandPaletteCode}>
          <CommandPaletteDemo />
        </ComponentPreview>
      </DocSection>

      <DocSection title="KeyboardShortcut">
        <ComponentPreview code={keyboardShortcutCode}>
          <div className="space-y-3">
            <KeyboardShortcut keys={['⌘', 'K']} label="Command palette" />
            <KeyboardShortcut keys={['⌘', 'S']} label="Save" />
            <KeyboardShortcut keys={['⌘', 'Shift', 'P']} label="Quick actions" />
            <KeyboardShortcut keys={['Esc']} label="Close" />
          </div>
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
