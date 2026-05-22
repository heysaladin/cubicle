import Image from 'next/image'
import Link from 'next/link'
import { DiscoverItem } from '@/types'

interface DiscoverCardProps {
  item: DiscoverItem
}

export default function DiscoverCard({ item }: DiscoverCardProps) {
  return (
    <Link href={`/discover/${item.slug}`} className="single-discover-card">
      <div className="card-image">
        <Image
          src={item.image}
          alt={item.title}
          fill
          style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="overlay overlay-gradient"></div>
        <div className="overlay overlay-dark"></div>
      </div>
      <div className="card-content">
        <div className="card-row card-row-info">
          <div className="col">
            {item.location && (
              <div className="location">
                <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M5.5 0C2.467 0 0 2.467 0 5.5C0 9.14 5.5 13 5.5 13C5.5 13 11 9.14 11 5.5C11 2.467 8.533 0 5.5 0ZM5.5 7.5C4.395 7.5 3.5 6.605 3.5 5.5C3.5 4.395 4.395 3.5 5.5 3.5C6.605 3.5 7.5 4.395 7.5 5.5C7.5 6.605 6.605 7.5 5.5 7.5Z" fill="currentColor" />
                </svg>
                <span>{item.location}</span>
              </div>
            )}
            <h3 style={{ color: 'var(--color-white)' }}>{item.title}</h3>
          </div>
        </div>
      </div>
    </Link>
  )
}
