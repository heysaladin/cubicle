import Image from 'next/image'
import { Label } from '@/components/ui/Label'
import { cn } from '@/lib/utils'

interface InnerBannerProps {
  label?: string
  title: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  variant?: 'dark' | 'primary'
  className?: string
}

export function InnerBanner({
  label,
  title,
  description,
  imageSrc,
  imageAlt = '',
  variant = 'dark',
  className,
}: InnerBannerProps) {
  const bgClass = variant === 'primary' ? 'bg-primary' : 'bg-black'

  return (
    <div
      className={cn(
        'relative flex items-end min-h-[400px] pt-[120px] pb-[5xl]',
        bgClass,
        className,
      )}
    >
      {imageSrc && (
        <>
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover object-center" />
          <div className="overlay-dark" />
        </>
      )}

      <div className="base-container z-[1] relative">
        <div className="flex flex-col md:flex-row justify-between items-start gap-[4xl]">
          <div className="flex flex-col gap-l max-w-[630px]">
            {label && <Label variant="white">{label}</Label>}
            <h1 className="text-white text-hero font-medium tracking-tightest leading-[1.1em]">
              {title}
            </h1>
          </div>
          {description && (
            <p className="text-white text-text-m max-w-[310px] md:text-right md:mt-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
