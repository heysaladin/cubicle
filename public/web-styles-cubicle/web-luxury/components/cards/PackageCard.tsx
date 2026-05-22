import Image from 'next/image'
import Link from 'next/link'
import { PackageItem } from '@/types'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'

interface PackageCardProps {
  pkg: PackageItem
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <Link href={`/packages/${pkg.slug}`} className="single-packages-card">
      <div className="card-image">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="overlay overlay-gradient"></div>
        <div className="overlay overlay-dark"></div>
      </div>
      <div className="card-content">
        <div className="card-row card-row-eyebrow">
          <Eyebrow>{pkg.eyebrow}</Eyebrow>
        </div>
        <div className="card-row card-row-info">
          <div className="col">
            <h3>{pkg.title}</h3>
            <p className="medium">{pkg.description}</p>
            {pkg.duration && (
              <div className="col-row-btn" style={{ paddingTop: '0.5em' }}>
                <Button variant="blur" size="small">
                  {pkg.duration}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
