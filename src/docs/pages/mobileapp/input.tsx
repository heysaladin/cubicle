'use client';

import * as React from 'react';
import { DocPage, DocSection } from '../../components/DocPage';
import { ComponentPreview } from '../../components/ComponentPreview';
import { MobileSearchBar } from '@/components/mobileapp/MobileSearchBar';
import { MobileFormField } from '@/components/mobileapp/MobileFormField';
import { PinInput } from '@/components/mobileapp/PinInput';
import { Eye, EyeOff } from 'lucide-react';

const searchBarCode = `import { MobileSearchBar } from '@/components/mobileapp/MobileSearchBar';
import { useState } from 'react';

export function Demo() {
  const [query, setQuery] = useState('');
  return (
    <div className="max-w-xs space-y-2 border rounded-xl overflow-hidden">
      {/* Default empty state */}
      <MobileSearchBar placeholder="Search messages..." />
      {/* With active value */}
      <MobileSearchBar
        placeholder="Search"
        value={query}
        onChange={setQuery}
        showCancel
        onCancel={() => setQuery('')}
      />
    </div>
  );
}`;

const formFieldCode = `import { MobileFormField } from '@/components/mobileapp/MobileFormField';
import { useState } from 'react';

export function Demo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  return (
    <div className="max-w-xs space-y-4 p-4">
      <MobileFormField label="Full Name" value={name} onChange={setName} placeholder="Jane Doe" required />
      <MobileFormField label="Email" type="email" value={email} onChange={setEmail} placeholder="jane@example.com" />
      <MobileFormField label="Password" type="password" value={password} onChange={setPassword} placeholder="••••••••" />
      <MobileFormField label="Bio" multiline rows={3} value={bio} onChange={setBio} placeholder="Tell us about yourself..." helperText="Max 200 characters" />
      <MobileFormField label="Username" value="" placeholder="@handle" error="This username is already taken." />
    </div>
  );
}`;

const pinInputCode = `import { PinInput } from '@/components/mobileapp/PinInput';
import { useState } from 'react';

export function Demo() {
  const [code, setCode] = useState('');
  const [masked, setMasked] = useState('123');
  return (
    <div className="max-w-xs space-y-8 p-4">
      <div>
        <p className="text-xs text-muted-foreground mb-3 text-center">Empty — waiting for input</p>
        <PinInput length={6} value={code} onChange={setCode} />
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-3 text-center">Partial — 3 of 6 entered</p>
        <PinInput length={6} value="394" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-3 text-center">Masked (passcode entry)</p>
        <PinInput length={6} value="1234" masked />
      </div>
    </div>
  );
}`;

export default function Page() {
  const [query, setQuery] = React.useState('react native');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [bio, setBio] = React.useState('');
  const [pin, setPin] = React.useState('');

  return (
    <DocPage
      title="MobileApp — Input"
      description="Input components and form patterns optimized for mobile interfaces, including search bars, form fields, and PIN entry."
    >
      <DocSection title="MobileSearchBar — Default &amp; With Value">
        <ComponentPreview code={searchBarCode} previewClassName="p-0 items-start flex-col">
          <div className="max-w-xs w-full border rounded-xl overflow-hidden divide-y">
            <MobileSearchBar placeholder="Search messages..." />
            <MobileSearchBar
              placeholder="Search"
              value={query}
              onChange={setQuery}
              showCancel
              onCancel={() => setQuery('')}
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="MobileFormField — Text, Email, Password, Multiline, Error">
        <ComponentPreview code={formFieldCode} previewClassName="p-0 items-start">
          <div className="max-w-xs w-full space-y-4 p-4 border rounded-xl">
            <MobileFormField
              label="Full Name"
              value={name}
              onChange={setName}
              placeholder="Jane Doe"
              required
            />
            <MobileFormField
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="jane@example.com"
            />
            <MobileFormField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={setPassword}
              placeholder="••••••••"
              trailing={
                <button onClick={() => setShowPassword((v) => !v)}>
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              }
            />
            <MobileFormField
              label="Bio"
              multiline
              rows={3}
              value={bio}
              onChange={setBio}
              placeholder="Tell us about yourself..."
              helperText="Max 200 characters"
            />
            <MobileFormField
              label="Username"
              value="@cubicle_user"
              placeholder="@handle"
              error="This username is already taken."
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="PinInput — Empty, Partial, and Masked">
        <ComponentPreview code={pinInputCode} previewClassName="p-6 items-start">
          <div className="max-w-xs w-full space-y-8">
            <div>
              <p className="text-xs text-muted-foreground mb-3 text-center">Empty — waiting for input</p>
              <PinInput length={6} value={pin} onChange={setPin} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3 text-center">Partial — 3 of 6 entered</p>
              <PinInput length={6} value="394" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3 text-center">Masked passcode entry</p>
              <PinInput length={6} value="1234" masked />
            </div>
          </div>
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
