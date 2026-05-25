import type { Metadata } from 'next'
import { InnerBanner } from '@/components/sections/InnerBanner'
import { BlogSection } from '@/components/sections/BlogSection'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on strategy, leadership, and organizational performance from the [Company] team.',
}

export default function BlogPage() {
  return (
    <>
      <InnerBanner
        label="Blog"
        title="Insights & Perspectives"
        description="Innovative approaches and tactics to assist organizations in managing complexity and enhancing performance."
      />
      <BlogSection label="Latest news" title="Explore our most recent insights" />
    </>
  )
}
