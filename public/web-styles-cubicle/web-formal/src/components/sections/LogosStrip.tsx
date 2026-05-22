import Image from 'next/image'

interface Logo {
  src: string
  alt: string
  width?: number
  height?: number
}

interface LogosStripProps {
  label?: string
  logos?: Logo[]
}

const defaultLogos: Logo[] = [
  { src: '/images/logo-1.svg', alt: 'Client 1', width: 100, height: 30 },
  { src: '/images/logo-2.svg', alt: 'Client 2', width: 100, height: 30 },
  { src: '/images/logo-3.svg', alt: 'Client 3', width: 100, height: 30 },
  { src: '/images/logo-4.svg', alt: 'Client 4', width: 100, height: 30 },
  { src: '/images/logo-5.svg', alt: 'Client 5', width: 100, height: 30 },
]

export function LogosStrip({ label = 'Trusted by large businesses', logos = defaultLogos }: LogosStripProps) {
  return (
    <section className="py-[4xl]">
      <div className="base-container">
        <div className="line-grey mb-[3xl]" />
        <div className="flex flex-col items-center gap-[3xl]">
          {label && (
            <span className="text-text-body text-primary font-normal">{label}</span>
          )}
          <div className="flex flex-wrap justify-around items-center gap-[l] w-full max-w-[1090px]">
            {logos.map((logo, i) => (
              <div key={i} className="opacity-60 hover:opacity-100 transition-opacity duration-350">
                <Image src={logo.src} alt={logo.alt} width={logo.width ?? 100} height={logo.height ?? 30} className="h-[30px] w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="line-grey mt-[3xl]" />
      </div>
    </section>
  )
}
