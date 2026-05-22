import { Button } from '@/components/ui/Button'
import { Label } from '@/components/ui/Label'

interface StatCard {
  number: string
  label: string
  description?: string
}

interface HeroBannerProps {
  label?: string
  title?: string
  description?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  stats?: StatCard[]
}

export function HeroBanner({
  label = 'Business Consulting',
  title = 'Business, the bestra way',
  description = 'Bestra streamlines operations and drives business growth.',
  primaryCta = { label: 'Discover our solutions', href: '/solutions' },
  secondaryCta = { label: 'Learn more', href: '/about' },
  stats = [
    { number: '12+', label: 'Years', description: 'of strategic consulting experience' },
    { number: '200+', label: 'Clients', description: 'across industries and markets' },
    { number: '94%', label: 'Retention', description: 'client satisfaction rate' },
  ],
}: HeroBannerProps) {
  return (
    <section className="section pt-[160px]">
      <div className="base-container">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-[5xl] mb-[5xl]">
          <div className="flex flex-col gap-[3xl] max-w-[360px]">
            {label && <Label variant="bordered">{label}</Label>}
            <h1 className="text-hero font-medium tracking-tightest leading-[1.1em]">{title}</h1>
          </div>
          <div className="flex flex-col justify-end gap-[3xl] max-w-[270px]">
            <p className="text-text-l text-primary leading-[1.5em]">{description}</p>
            <div className="flex flex-wrap gap-m">
              <Button href={primaryCta.href} variant="primary">{primaryCta.label}</Button>
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="white" showArrow={false}>
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="line-grey my-[3xl]" />

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-light-gray rounded-m p-ml flex flex-col gap-l min-h-[200px] justify-between"
            >
              <div className="flex justify-between items-end">
                <span className="text-display-01 font-medium leading-[1em]">{stat.number}</span>
                <span className="text-text-body text-primary font-medium leading-[1.2em]">
                  {stat.label}
                </span>
              </div>
              {stat.description && (
                <p className="text-text-body text-primary max-w-[220px]">{stat.description}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
