import Image from 'next/image'
import { Label } from '@/components/ui/Label'

interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
  imageSrc?: string
}

interface TestimonialsSectionProps {
  label?: string
  title?: string
  totalCount?: number
  testimonials?: Testimonial[]
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: 'Partnering with [Company] illuminated the path we needed. Their organized approach allowed us to set priorities, make rapid decisions, and proceed with certainty.',
    name: 'Daniel',
    title: 'Head of Operations',
    company: 'Growth Company',
  },
  {
    quote: '[Company] worked closely with our team at every stage. Their hands-on support and practical thinking made a real difference in how we execute and measure results.',
    name: 'Mark',
    title: 'Managing Director',
    company: 'Mid-Market Business',
  },
  {
    quote: 'The improvements we saw were tangible. From streamlined processes to clearer reporting, [Company] helped us build a stronger, more scalable foundation.',
    name: 'Sofia',
    title: 'CEO',
    company: 'Technology Company',
  },
]

export function TestimonialsSection({
  label = 'Testimonials',
  title = 'What our clients say about working with us',
  totalCount = 48,
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="section">
      <div className="base-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-[3xl] mb-[5xl]">
          <div className="flex flex-col gap-[2xl]">
            {label && <Label variant="bordered">{label}</Label>}
            <h2 className="text-h2 font-medium tracking-tightest leading-[1.1em]">{title}</h2>
          </div>
          <span className="text-h3 font-medium tracking-tightest text-primary leading-[1.1em]">
            {totalCount}+
          </span>
        </div>

        {/* List */}
        <div className="border-t border-divider-gray flex flex-col">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-[4xl] py-[3xl] border-b border-divider-gray">
              {t.imageSrc && (
                <div className="relative w-full md:w-[270px] md:max-w-[270px] min-h-[200px] rounded-m overflow-hidden shrink-0">
                  <Image src={t.imageSrc} alt={t.name} fill className="object-cover" />
                </div>
              )}
              <div className="flex flex-col justify-between gap-[3xl] flex-1">
                <blockquote className="text-h3 font-medium tracking-tightest leading-[1.1em] max-w-[560px]">
                  "{t.quote}"
                </blockquote>
                <div className="flex flex-col gap-xs">
                  <span className="text-text-body font-medium text-near-black">{t.name}</span>
                  <span className="text-text-body text-primary">{t.title}, {t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
