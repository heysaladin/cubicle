import Image from 'next/image'
import { Label } from '@/components/ui/Label'

interface TeamMember {
  name: string
  title: string
  description?: string
  imageSrc?: string
  linkedIn?: string
}

interface TeamGridProps {
  label?: string
  title?: string
  description?: string
  members?: TeamMember[]
}

const defaultMembers: TeamMember[] = [
  { name: 'Alexander Hayes', title: 'Chief Executive Officer' },
  { name: 'Laura Bennett', title: 'Client Engagement Manager' },
  { name: 'Isabella Moore', title: 'Consulting Associate' },
  { name: 'Ethan Collins', title: 'Data & Insights Lead' },
  { name: 'Daniel Wright', title: 'Managing Partner' },
  { name: 'Natalie Brooks', title: 'Organizational Design Consultant' },
]

export function TeamGrid({
  label = 'Our people',
  title = 'Experienced professionals behind every decision',
  description,
  members = defaultMembers,
}: TeamGridProps) {
  return (
    <section className="section">
      <div className="base-container">

        <div className="flex flex-col gap-[2xl] mb-[5xl]">
          {label && <Label variant="bordered">{label}</Label>}
          <h2 className="text-h2 font-medium tracking-tightest leading-[1.1em] max-w-[500px]">{title}</h2>
          {description && <p className="text-text-body text-primary max-w-[500px]">{description}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[ml] gap-y-[4xl]">
          {members.map((member, i) => (
            <div key={i} className="flex flex-col gap-5">
              <div className="relative rounded-m overflow-hidden bg-light-gray" style={{ aspectRatio: '3/4', maxHeight: '320px' }}>
                {member.imageSrc ? (
                  <Image src={member.imageSrc} alt={member.name} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-b from-light-gray to-bestra-gray" />
                )}
              </div>
              <div className="flex flex-col gap-s">
                <span className="text-text-body font-medium text-near-black">{member.name}</span>
                <span className="text-text-body text-primary">{member.title}</span>
                {member.description && (
                  <p className="text-text-body text-primary max-w-[500px]">{member.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
