import * as React from 'react';
import { SiteHeader } from '@/components/website/SiteHeader';
import { SiteFooter } from '@/components/website/SiteFooter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type AuthMode = 'signin' | 'signup' | 'forgot';

function GithubIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

interface AuthFormProps {
  mode: AuthMode;
  onModeChange: (mode: AuthMode) => void;
}

function AuthForm({ mode, onModeChange }: AuthFormProps) {
  if (mode === 'forgot') {
    return (
      <div className="space-y-5">
        <div className="text-center space-y-1">
          <h1 className="text-xl font-semibold">Reset your password</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and we'll send a reset link.
          </p>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@company.com" />
        </div>
        <Button className="w-full">Send reset link</Button>
        <button
          onClick={() => onModeChange('signin')}
          className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Back to sign in
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="text-center space-y-1">
        <h1 className="text-xl font-semibold">
          {mode === 'signin' ? 'Welcome back' : 'Create your account'}
        </h1>
        <p className="text-sm text-muted-foreground">
          {mode === 'signin'
            ? 'Sign in to continue to Cubicle.'
            : 'Start building for free — no credit card required.'}
        </p>
      </div>

      {/* OAuth */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="gap-2">
          <GithubIcon />
          GitHub
        </Button>
        <Button variant="outline" className="gap-2">
          <GoogleIcon />
          Google
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground">or</span>
        <Separator className="flex-1" />
      </div>

      <div className="space-y-3">
        {mode === 'signup' && (
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="first">First name</Label>
              <Input id="first" placeholder="Aria" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="last">Last name</Label>
              <Input id="last" placeholder="Chen" />
            </div>
          </div>
        )}
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@company.com" />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            {mode === 'signin' && (
              <button
                onClick={() => onModeChange('forgot')}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Forgot password?
              </button>
            )}
          </div>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        {mode === 'signup' && (
          <div className="space-y-1.5">
            <Label htmlFor="confirm">Confirm password</Label>
            <Input id="confirm" type="password" placeholder="••••••••" />
          </div>
        )}
      </div>

      <Button className="w-full">
        {mode === 'signin' ? 'Sign in' : 'Create account'}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
        <button
          onClick={() => onModeChange(mode === 'signin' ? 'signup' : 'signin')}
          className="text-primary font-medium hover:underline"
        >
          {mode === 'signin' ? 'Sign up for free' : 'Sign in'}
        </button>
      </p>

      {mode === 'signup' && (
        <p className="text-center text-xs text-muted-foreground">
          By creating an account, you agree to our{' '}
          <a href="#" className="underline hover:text-foreground">Terms</a> and{' '}
          <a href="#" className="underline hover:text-foreground">Privacy Policy</a>.
        </p>
      )}
    </div>
  );
}

export function AuthPage() {
  const [mode, setMode] = React.useState<AuthMode>('signin');

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader ctaLabel="Sign up free" />

      <div className="flex min-h-[calc(100vh-65px-1px)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground text-lg font-bold">
              C
            </div>
          </div>

          <AuthForm mode={mode} onModeChange={setMode} />
        </div>
      </div>
    </div>
  );
}

export function AuthPageSplit() {
  const [mode, setMode] = React.useState<AuthMode>('signin');

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-between p-10 text-primary-foreground">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary-foreground/20 text-xs font-bold">
            C
          </div>
          <span className="text-sm font-semibold">Cubicle</span>
        </div>
        <div className="space-y-4">
          <blockquote className="text-lg font-medium leading-relaxed">
            "Cubicle completely transformed how our team ships. We went from weekly deploys to multiple times per day."
          </blockquote>
          <div>
            <p className="text-sm font-semibold">Sarah Kim</p>
            <p className="text-sm text-primary-foreground/70">CTO at Finova</p>
          </div>
        </div>
        <p className="text-xs text-primary-foreground/50">© 2026 Cubicle Inc.</p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm space-y-6">
          <div className="flex lg:hidden justify-center mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
              C
            </div>
          </div>
          <AuthForm mode={mode} onModeChange={setMode} />
        </div>
      </div>
    </div>
  );
}
