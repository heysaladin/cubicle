'use client';

import * as React from 'react';
import { DocPage, DocSection } from '../../../components/DocPage';
import { ComponentPreview } from '../../../components/ComponentPreview';
import { SignInScreen, SignUpScreen } from '@/components/mobileapp/screens/AuthenticationScreen';

const signInCode = `import { SignInScreen } from '@/components/mobileapp/screens/AuthenticationScreen';

export default function Page() {
  return <SignInScreen />;
}`;

const signUpCode = `import { SignUpScreen } from '@/components/mobileapp/screens/AuthenticationScreen';

export default function Page() {
  return <SignUpScreen />;
}`;

export default function Page() {
  return (
    <DocPage
      title="MobileApp — Authentication"
      description="Sign in and sign up screens featuring OAuth buttons (GitHub, Google), email/password form fields, and navigation between modes. Logo-first layout with a clean, centered composition."
    >
      <DocSection title="Sign In">
        <ComponentPreview code={signInCode} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
          <SignInScreen />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Sign Up">
        <ComponentPreview code={signUpCode} previewClassName="min-h-[800px] items-start justify-center p-8 overflow-hidden">
          <SignUpScreen />
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
