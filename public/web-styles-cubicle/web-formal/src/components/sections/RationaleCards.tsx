import Image from 'next/image'
import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'

interface RationaleCard {
  imageSrc?: string
  imageAlt?: string
  title: string
  description: string
  bullets?: string[]
  cta?: { label: string; href: string }
}

interface RationaleCardsProps {
  label?: string
  title?: string
  cards?: RationaleCard[]
}

const defaultCards: RationaleCard[] = [
  {
    title: 'Progress slows without clarity',
    description: 'When priorities compete and decisions stack up, teams lose consistency. Growth becomes reactive instead of intentional, and opportunities are missed before they\'re recognized.',
    cta: { label: 'Learn more', href: '/about' },
  },
  {
    title: 'We built Bestra to restore focus',
    description: 'Bestra helps businesses turn strategy into steady progress. By simplifying complexity and creating clear direction, we help teams stay aligned, move with confidence, and build momentum that lasts.',
    cta: { label: 'Learn more', href: '/solutions' },
  },
]

export function RationaleCards({
  label = 'Why Bestra',
  title = 'Because good intentions aren\'t enough',
  cards = defaultCards,
}: RationaleCardsProps) {
  return (
    <section className="section">
      <div className="base-container">

        <div className="flex flex-col gap-[2xl] mb-[5xl]">
          {label && <Label variant="bordered">{label}</Label>}
          {title && (
            <h2 className="text-h2 font-medium tracking-tightest leading-[1.1em] max-w-[500px]">
              {title}
            </h2>
          )}
        </div>

        <div className="flex flex-col gap-[7xl] pt-[5xl]">
          {cards.map((card, i) => (
            <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-5 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              {card.imageSrc && (
                <div className="relative rounded-m overflow-hidden max-h-[290px] min-h-[220px]">
                  <Image src={card.imageSrc} alt={card.imageAlt ?? ''} fill className="object-cover" />
                </div>
              )}
              <div className={`flex flex-col gap-[3xl] ${card.imageSrc ? 'pl-0 md:pl-[5xl]' : ''}`}>
                <h3 className="text-h3 font-medium tracking-tightest leading-[1.1em]">{card.title}</h3>
                <div className="flex flex-col gap-[ml]">
                  <p className="text-text-body text-primary max-w-[420px]">{card.description}</p>
                  {card.bullets && (
                    <ul className="flex flex-col gap-s">
                      {card.bullets.map((b, j) => (
                        <li key={j} className="flex items-center gap-s text-text-body text-primary">
                          <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {card.cta && (
                  <Button href={card.cta.href} variant="primary">{card.cta.label}</Button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
