import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface CtaSectionProps {
  title?: string
  description?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  imageSrc?: string
  imageAlt?: string
}

export function CtaSection({
  title = 'Discuss your business and aspirations with us.',
  description,
  primaryCta = { label: 'Contact us', href: '/contact' },
  secondaryCta,
  imageSrc,
  imageAlt = '',
}: CtaSectionProps) {
  return (
    <section className="section relative flex items-end bg-black min-h-[530px] pb-[4xl]">
      {imageSrc && (
        <>
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover object-[50%_60%]" />
          <div className="overlay-dark" />
        </>
      )}
      <div className="base-container z-[2] relative flex flex-col items-start gap-[3xl]">
        <h2 className="text-h2 font-medium tracking-tightest leading-[1.1em] text-white max-w-[480px]">
          {title}
        </h2>
        {description && (
          <p className="text-text-body text-white/70 max-w-[380px]">{description}</p>
        )}
        <div className="flex flex-wrap gap-m pt-[l]">
          <Button href={primaryCta.href} variant="white">{primaryCta.label}</Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="dark" showArrow={false}>
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
