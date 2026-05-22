import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingTier {
  name: string
  price: string
  period?: string
  description: string
  features: PricingFeature[]
  cta: { label: string; href: string }
  highlight?: boolean
}

interface PricingCardsProps {
  label?: string
  title?: string
  description?: string
  tiers?: PricingTier[]
}

const defaultTiers: PricingTier[] = [
  {
    name: 'Foundation',
    price: '$900',
    period: '/ single phase',
    description: 'A concise beginning to gauge your current status and prioritize actions.',
    features: [
      { text: 'Business assessment', included: true },
      { text: 'Strategic clarity', included: true },
      { text: 'Key focus areas', included: true },
      { text: 'Next-step roadmap', included: true },
    ],
    cta: { label: 'Buy Now', href: '/contact' },
  },
  {
    name: 'Advisory',
    price: '$1,800',
    period: '/ month',
    description: 'Consistent strategic support for making informed decisions and achieving goals.',
    highlight: true,
    features: [
      { text: 'Regular strategy sessions', included: true },
      { text: 'Decision-making support', included: true },
      { text: 'Priority alignment', included: true },
      { text: 'Progress tracking', included: true },
    ],
    cta: { label: 'Buy Now', href: '/contact' },
  },
  {
    name: 'Momentum',
    price: '$3,200',
    period: '/ month',
    description: 'Active collaboration aimed at achieving optimized and measurable success.',
    features: [
      { text: 'Strategy & execution', included: true },
      { text: 'Process optimization', included: true },
      { text: 'Leadership alignment', included: true },
      { text: 'Performance improvement', included: true },
    ],
    cta: { label: 'Buy Now', href: '/contact' },
  },
]

export function PricingCards({
  label = 'Pricing',
  title = 'Flexible engagement models',
  description,
  tiers = defaultTiers,
}: PricingCardsProps) {
  return (
    <section className="section">
      <div className="base-container">

        <div className="flex flex-col md:flex-row justify-between items-start gap-[4xl] mb-[5xl]">
          <div className="flex flex-col gap-[2xl]">
            {label && <Label variant="bordered">{label}</Label>}
            <h2 className="text-h2 font-medium tracking-tightest leading-[1.1em] max-w-[630px]">{title}</h2>
            {description && <p className="text-text-body text-primary max-w-[510px]">{description}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[ml]">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={cn(
                'flex flex-col gap-[4xl] p-[3xl] rounded-m border',
                tier.highlight
                  ? 'bg-black border-black text-white'
                  : 'bg-soft-white border-bestra-gray',
              )}
            >
              <div className="flex flex-col gap-[2xl]">
                <div className="flex justify-between items-start">
                  <h3 className={cn('text-h3 font-medium tracking-tightest', tier.highlight ? 'text-white' : '')}>{tier.name}</h3>
                  <div className="flex flex-col items-end">
                    <span className={cn('text-h3 font-medium', tier.highlight ? 'text-white' : '')}>{tier.price}</span>
                    {tier.period && <span className={cn('text-text-sm', tier.highlight ? 'text-white/60' : 'text-primary')}>{tier.period}</span>}
                  </div>
                </div>
                <p className={cn('text-text-body', tier.highlight ? 'text-white/70' : 'text-primary')}>
                  {tier.description}
                </p>
              </div>

              <div className="flex flex-col gap-[l] flex-1">
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-s">
                    <span className={cn('w-4 h-4 rounded-full flex items-center justify-center text-[10px] shrink-0',
                      feature.included
                        ? tier.highlight ? 'bg-white text-black' : 'bg-primary text-white'
                        : tier.highlight ? 'bg-white/20 text-white/50' : 'bg-dark-grey text-primary/50',
                    )}>
                      {feature.included ? '✓' : '–'}
                    </span>
                    <span className={cn('text-text-body', feature.included
                      ? tier.highlight ? 'text-white' : 'text-near-black'
                      : tier.highlight ? 'text-white/50' : 'text-primary/60',
                    )}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                href={tier.cta.href}
                variant={tier.highlight ? 'white' : 'primary'}
                className="w-full justify-center"
              >
                {tier.cta.label}
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
