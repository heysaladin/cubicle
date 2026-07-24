import { PhoneFrame } from '@/components/mobileapp/PhoneFrame';
import { Button } from '@/components/ui/button';

const steps = [
  {
    color: 'bg-primary/10',
    accentColor: 'bg-primary/20',
    headline: 'Ship projects faster',
    subheadline: 'Plan, track, and collaborate on all your work in one beautiful space.',
  },
  {
    color: 'bg-emerald-500/10',
    accentColor: 'bg-emerald-500/20',
    headline: 'Stay in the loop',
    subheadline: 'Real-time notifications keep your team aligned, wherever they are.',
  },
  {
    color: 'bg-amber-500/10',
    accentColor: 'bg-amber-500/20',
    headline: 'Measure what matters',
    subheadline: 'Beautiful dashboards and reports that surface insights automatically.',
  },
];

export function OnboardingScreen() {
  const step = steps[0];

  return (
    <PhoneFrame statusBar={false} homeIndicator>
      <div className="flex flex-col h-full min-h-[700px] bg-background">
        {/* Skip */}
        <div className="flex justify-end px-6 pt-10 pb-2">
          <button className="text-sm text-muted-foreground font-medium">Skip</button>
        </div>

        {/* Illustration */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 gap-6">
          <div className={`relative w-64 h-52 rounded-3xl ${step.color} flex items-center justify-center overflow-hidden`}>
            <div className={`absolute top-4 right-4 w-20 h-20 rounded-2xl ${step.accentColor}`} />
            <div className={`absolute bottom-6 left-6 w-28 h-10 rounded-xl ${step.accentColor}`} />
            <div className={`absolute bottom-16 right-10 w-10 h-10 rounded-full ${step.accentColor}`} />
            <div className="relative z-10 flex flex-col gap-2 items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/30 flex items-center justify-center">
                <div className="w-8 h-8 rounded-xl bg-primary/60" />
              </div>
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-1.5 w-8 rounded-full bg-primary/40" />
                ))}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{step.headline}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[260px]">{step.subheadline}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-10 space-y-5">
          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${i === 0 ? 'w-6 bg-primary' : 'w-2 bg-muted-foreground/25'}`}
              />
            ))}
          </div>

          {/* Next button */}
          <Button className="w-full h-12 text-sm font-semibold" size="lg">
            Get Started
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Already have an account?{' '}
            <span className="text-primary font-medium">Sign in</span>
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}
