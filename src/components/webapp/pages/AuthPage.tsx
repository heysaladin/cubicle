'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { FormField } from '@/components/webapp/FormField';

export function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader className="space-y-3 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-bold">
              C
            </div>
            <span className="text-base font-semibold">Cubicle</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Sign in to your account</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Enter your credentials to continue.
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <FormField label="Email" htmlFor="auth-email" required>
            <Input
              id="auth-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </FormField>

          <FormField label="Password" htmlFor="auth-password" required>
            <Input
              id="auth-password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </FormField>

          <div className="flex justify-end">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <Button className="w-full">Sign In</Button>
        </CardContent>

        <CardFooter className="justify-center pt-0">
          <p className="text-xs text-muted-foreground">
            Don&apos;t have an account?{' '}
            <a
              href="#"
              className="text-foreground font-medium underline-offset-4 hover:underline"
            >
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
