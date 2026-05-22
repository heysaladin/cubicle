import { Label } from '@/components/ui/Label'

interface Stat {
  number: string
  label: string
  description?: string
}

interface StatsSectionProps {
  label?: string
  title?: string
  stats?: Stat[]
  variant?: 'default' | 'dark' | 'primary'
}

const defaultStats: Stat[] = [
  { number: '12+', label: 'Years', description: 'of strategic consulting experience' },
  { number: '200+', label: 'Clients', description: 'across industries and markets' },
  { number: '94%', label: 'Retention', description: 'client satisfaction rate' },
]

export function StatsSection({
  label,
  title,
  stats = defaultStats,
  variant = 'default',
}: StatsSectionProps) {
  const bgClass = variant === 'dark' ? 'dark-bg' : variant === 'primary' ? 'primary-bg' : ''
  const isColored = variant !== 'default'

  return (
    <section className={`section ${bgClass}`}>
      <div className="base-container">

        {(label || title) && (
          <div className="flex flex-col gap-[2xl] mb-[5xl]">
            {label && <Label variant={isColored ? 'white' : 'bordered'}>{label}</Label>}
            {title && (
              <h2 className={`text-h2 font-medium tracking-tightest leading-[1.1em] max-w-[500px] ${isColored ? 'text-white' : ''}`}>
                {title}
              </h2>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-[2xl]">
              <span className={`text-h2 font-medium leading-[1em] ${isColored ? 'text-white' : ''}`}>
                {stat.number}
              </span>
              <div className={`pt-[2xl] border-t ${isColored ? 'border-white/20' : 'border-dark-grey'} flex flex-col gap-xs`}>
                <span className={`text-text-body font-medium ${isColored ? 'text-white' : 'text-near-black'}`}>
                  {stat.label}
                </span>
                {stat.description && (
                  <p className={`text-text-body ${isColored ? 'text-white/70' : 'text-primary'}`}>
                    {stat.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
