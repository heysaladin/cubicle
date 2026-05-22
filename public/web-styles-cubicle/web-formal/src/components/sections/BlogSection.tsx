import Image from 'next/image'
import Link from 'next/link'
import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'

interface BlogPost {
  title: string
  description?: string
  category?: string
  date?: string
  href: string
  imageSrc?: string
  imageAlt?: string
  featured?: boolean
}

interface BlogSectionProps {
  label?: string
  title?: string
  posts?: BlogPost[]
  cta?: { label: string; href: string }
}

const defaultPosts: BlogPost[] = [
  {
    title: 'Rethinking Decision-Making',
    description: 'Unclear decision-making structures lead to delays, confusion, and missed opportunities.',
    category: 'Blog Post',
    date: 'April 21, 2026',
    href: '/rethinking-decision-making',
    featured: true,
  },
  {
    title: 'The Hidden Cost of Inefficiency',
    description: 'Inefficiencies remain hidden until they significantly impact performance.',
    category: 'Blog Post',
    date: 'April 21, 2026',
    href: '/blog',
  },
  {
    title: 'Clarity Before Growth',
    description: 'Many companies focus on scaling too early, without establishing the structure needed to support it.',
    category: 'Blog Post',
    date: 'March 2026',
    href: '/blog',
  },
  {
    title: 'Market Expansion',
    description: 'Expand into new markets strategically to reduce risks and enhance success.',
    category: 'Blog Post',
    date: 'February 2026',
    href: '/blog',
  },
]

export function BlogSection({
  label = 'Insights',
  title = 'Practical guides to help your business grow',
  posts = defaultPosts,
  cta = { label: 'All resources', href: '/blog' },
}: BlogSectionProps) {
  const featured = posts.find((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  return (
    <section className="section">
      <div className="base-container">

        <div className="flex flex-col md:flex-row justify-between items-start gap-[3xl] mb-[5xl]">
          <div className="flex flex-col gap-[2xl]">
            {label && <Label variant="bordered">{label}</Label>}
            {title && <h2 className="text-h2 font-medium tracking-tightest leading-[1.1em]">{title}</h2>}
          </div>
          {cta && <Button href={cta.href} variant="primary">{cta.label}</Button>}
        </div>

        <div className="flex flex-col lg:flex-row gap-[5xl]">

          {/* Featured article */}
          {featured && (
            <Link href={featured.href} className="group flex flex-col gap-[2xl] lg:w-[40%] shrink-0">
              {featured.imageSrc ? (
                <div className="relative rounded-m overflow-hidden min-h-[400px]">
                  <Image src={featured.imageSrc} alt={featured.imageAlt ?? ''} fill className="object-cover" />
                  <div className="overlay" />
                  <div className="absolute inset-0 z-[1] p-[ml] flex flex-col justify-end gap-s">
                    {featured.category && <Tag>{featured.category}</Tag>}
                    <h3 className="text-white text-h5 font-medium tracking-tightest leading-[1.3em]">
                      {featured.title}
                    </h3>
                  </div>
                </div>
              ) : (
                <div className="bg-light-gray rounded-m p-[3xl] min-h-[400px] flex flex-col justify-end gap-s">
                  {featured.category && <Tag>{featured.category}</Tag>}
                  <h3 className="text-near-black text-h5 font-medium tracking-tightest leading-[1.3em] group-hover:text-primary transition-colors duration-350">
                    {featured.title}
                  </h3>
                  {featured.description && (
                    <p className="text-text-body text-primary max-w-[280px]">{featured.description}</p>
                  )}
                </div>
              )}
            </Link>
          )}

          {/* Article list */}
          <div className="flex flex-col gap-[4xl] flex-1">
            {rest.map((post, i) => (
              <Link key={i} href={post.href} className="group flex gap-[3xl] py-5 border-b border-bestra-gray last:border-b-0">
                {post.imageSrc && (
                  <div className="relative rounded-s overflow-hidden w-[35%] shrink-0">
                    <Image src={post.imageSrc} alt={post.imageAlt ?? ''} fill className="object-cover" />
                  </div>
                )}
                <div className="flex flex-col gap-[s] justify-center">
                  {post.category && <Tag>{post.category}</Tag>}
                  <h3 className="text-h5 font-medium tracking-tightest leading-[1.3em] group-hover:text-primary transition-colors duration-350">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="text-text-body text-primary line-clamp-2">{post.description}</p>
                  )}
                  {post.date && (
                    <span className="text-text-sm text-primary">{post.date}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
