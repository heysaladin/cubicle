import Link from 'next/link'
import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'

interface ServiceItem {
  icon?: React.ReactNode
  title: string
  description: string
  href?: string
}

interface ServicesGridProps {
  label?: string
  title?: string
  description?: string
  services?: ServiceItem[]
  cta?: { label: string; href: string }
  layout?: 'list' | 'grid'
}

const defaultServices: ServiceItem[] = [
  {
    title: 'Strategic Direction',
    description: 'We guide businesses in setting priorities and establishing a long-term vision.',
    href: '/solutions',
  },
  {
    title: 'Operational Execution',
    description: 'Our team actively transforms strategic plans into tangible results.',
    href: '/solutions',
  },
  {
    title: 'Growth Optimization',
    description: 'We continuously analyze performance to identify opportunities for improvement.',
    href: '/solutions',
  },
  {
    title: 'Change Management',
    description: 'Facilitating transformation for leaders and teams with strategic direction.',
    href: '/solutions',
  },
  {
    title: 'Process Improvement',
    description: 'Streamlining processes by identifying inefficiencies for consistent execution.',
    href: '/solutions',
  },
  {
    title: 'Leadership Advisory',
    description: 'Delivering expert guidance to executives managing complex growth and change.',
    href: '/leadership-advisory',
  },
]

export function ServicesGrid({
  label = 'What we do',
  title = 'Our services are built around clarity, execution, and measurable impact',
  description,
  services = defaultServices,
  cta = { label: 'Learn more', href: '/solutions' },
  layout = 'list',
}: ServicesGridProps) {
  return (
    <section className="section">
      <div className="base-container">

        <div className="flex flex-col md:flex-row justify-between items-start gap-[4xl] mb-[5xl]">
          <div className="flex flex-col gap-[2xl] max-w-[570px]">
            {label && <Label variant="bordered">{label}</Label>}
            <h2 className="text-h2 font-medium tracking-tightest leading-[1.1em]">{title}</h2>
            {description && <p className="text-text-body text-primary">{description}</p>}
          </div>
          {cta && <Button href={cta.href} variant="primary">{cta.label}</Button>}
        </div>

        {layout === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[ml]">
            {services.map((service, i) => (
              <div key={i} className="flex flex-col gap-[2xl] p-[3xl] border border-dark-grey rounded-m bg-soft-white">
                {service.icon && <div className="icon-wrapper">{service.icon}</div>}
                <div className="flex flex-col gap-s">
                  <h3 className="text-h5 font-medium tracking-tightest">{service.title}</h3>
                  <p className="text-text-body text-primary max-w-[284px]">{service.description}</p>
                </div>
                {service.href && (
                  <Link href={service.href} className="text-text-body text-primary font-medium hover:text-near-black transition-colors duration-350">
                    Learn more →
                  </Link>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col pt-[5xl]">
            {services.map((service, i) => (
              <div key={i} className="flex items-start py-[3xl] border-b border-dark-grey last:border-b-0 gap-[3xl]">
                <span className="text-text-sm text-primary font-medium w-[30px] shrink-0 mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col md:flex-row justify-between items-start gap-[3xl] flex-1">
                  <div className="pl-[15px] border-l border-dark-grey flex flex-col gap-s max-w-[570px]">
                    <h3 className="text-h5 font-medium tracking-tightest">{service.title}</h3>
                    <p className="text-text-body text-primary max-w-[284px]">{service.description}</p>
                  </div>
                  {service.href && (
                    <Link href={service.href} className="text-text-body text-primary font-medium hover:text-near-black transition-colors duration-350 shrink-0">
                      Explore →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
