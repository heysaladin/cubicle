import StayCard from '@/components/cards/StayCard'
import PackageCard from '@/components/cards/PackageCard'
import DiscoverCard from '@/components/cards/DiscoverCard'
import Eyebrow from '@/components/ui/Eyebrow'
import { stays } from '@/lib/data/stays'
import { packages } from '@/lib/data/packages'
import { discoverItems } from '@/lib/data/discover'

interface CardsGridProps {
  type: 'stay' | 'packages' | 'discover'
  columns?: 2 | 3
  title?: string
  eyebrow?: string
}

const gridMeta = {
  stay: {
    defaultEyebrow: 'Accommodation',
    defaultTitle: 'Our Private Villas',
  },
  packages: {
    defaultEyebrow: 'Experiences',
    defaultTitle: 'Curated Packages',
  },
  discover: {
    defaultEyebrow: 'Explore',
    defaultTitle: 'Discover North Bali',
  },
}

export default function CardsGrid({ type, columns = 3, title, eyebrow }: CardsGridProps) {
  const meta = gridMeta[type]
  const displayEyebrow = eyebrow ?? meta.defaultEyebrow
  const displayTitle = title ?? meta.defaultTitle

  const colVars = { '--columns': String(columns) } as React.CSSProperties

  return (
    <div className="section">
      <div className="container">
        {/* Section heading */}
        <div className="row centered" style={{ paddingBottom: 'var(--gap)' }}>
          <div className="styled-col">
            <div className="col-row-eyebrow">
              <Eyebrow>{displayEyebrow}</Eyebrow>
            </div>
            <div className="col-row-title">
              <h2>{displayTitle}</h2>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="row grid" style={colVars}>
          {type === 'stay' &&
            stays.map((stay) => (
              <div key={stay.id} className="col">
                <StayCard stay={stay} />
              </div>
            ))}

          {type === 'packages' &&
            packages.map((pkg) => (
              <div key={pkg.id} className="col">
                <PackageCard pkg={pkg} />
              </div>
            ))}

          {type === 'discover' &&
            discoverItems.map((item) => (
              <div key={item.id} className="col">
                <DiscoverCard item={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
