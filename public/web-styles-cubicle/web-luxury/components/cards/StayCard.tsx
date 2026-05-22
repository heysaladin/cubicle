import Image from 'next/image'
import Link from 'next/link'
import { StayItem } from '@/types'
import Eyebrow from '@/components/ui/Eyebrow'

interface StayCardProps {
  stay: StayItem
}

export default function StayCard({ stay }: StayCardProps) {
  return (
    <Link href={`/stay/${stay.slug}`} className="single-stay-card">
      <div className="card-row card-row-image">
        <div className="card-image">
          <Image
            src={stay.images[0]}
            alt={stay.name}
            fill
            style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
          />
          <div className="overlay overlay-hover overlay-dark"></div>
        </div>
      </div>
      <div className="card-row">
        <div className="col">
          <div className="col-row-eyebrow">
            <Eyebrow>
              {stay.bedrooms} Bedroom{stay.bedrooms > 1 ? 's' : ''} &bull; {stay.area}
            </Eyebrow>
          </div>
          <div className="col-row-title">
            <h3>{stay.name}</h3>
          </div>
          <div className="col-row-text">
            <p className="medium">{stay.shortDescription}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
