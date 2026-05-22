import Image from 'next/image'
import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'

interface Outcome {
  number: string
  label: string
  description: string
}

interface OutcomesSectionProps {
  label?: string
  title?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  outcomes?: Outcome[]
  cta?: { label: string; href: string }
  variant?: 'default' | 'dark'
}

const defaultOutcomes: Outcome[] = [
  { number: '01', label: 'Challenge', description: 'Productivity suffers due to costly inefficiencies and delayed decisions.' },
  { number: '02', label: 'Opportunity', description: 'Boost performance by synchronizing strategy, execution, and insights.' },
  { number: '03', label: 'Impact', description: 'Transparency and control enable informed decisions and growth.' },
]

export function OutcomesSection({
  label = 'Outcomes',
  title = 'Modern businesses face predictable patterns of growth and slowdown',
  description,
  imageSrc,
  imageAlt = 'Outcomes',
  outcomes = defaultOutcomes,
  cta,
  variant = 'default',
}: OutcomesSectionProps) {
  const isDark = variant === 'dark'

  return (
    <section className={`section ${isDark ? 'dark-bg' : ''}`}>
      <div className="base-container">

        <div className="flex flex-col gap-[5xl]">

          {/* Header */}
          <div className="flex flex-col md:flex-row gap-[8xl]">
            {imageSrc && (
              <div className="relative rounded-m overflow-hidden w-full md:w-1/2 min-h-[360px]">
                <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
              </div>
            )}
            <div className="flex flex-col gap-[3xl] justify-center">
              {label && <Label variant={isDark ? 'white' : 'bordered'}>{label}</Label>}
              <h2 className={`text-h2 font-medium tracking-tightest leading-[1.1em] max-w-[500px] ${isDark ? 'text-white' : ''}`}>
                {title}
              </h2>
              {description && (
                <p className={`text-text-body max-w-[400px] ${isDark ? 'text-white/70' : 'text-primary'}`}>
                  {description}
                </p>
              )}
              {cta && (
                <Button href={cta.href} variant={isDark ? 'white' : 'primary'}>{cta.label}</Button>
              )}
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {outcomes.map((item, i) => (
              <div key={i} className={`flex flex-col gap-[3xl] p-[2xl] rounded-m border ${isDark ? 'border-white/20 bg-white/5' : 'border-dark-grey bg-soft-white'}`}>
                <span className={`text-h2 font-medium leading-[1em] ${isDark ? 'text-white' : ''}`}>
                  {item.number}
                </span>
                <div className={`pt-[2xl] border-t ${isDark ? 'border-white/20' : 'border-soft-grey-30'} flex flex-col gap-s`}>
                  <span className={`text-text-body font-medium ${isDark ? 'text-white' : ''}`}>
                    {item.label}
                  </span>
                  <p className={`text-text-body ${isDark ? 'text-white/70' : 'text-primary'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
