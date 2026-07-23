import * as React from 'react';
import { SiteHeader } from '@/components/website/SiteHeader';
import { BlogCard } from '@/components/website/BlogCard';
import { NewsletterForm } from '@/components/website/NewsletterForm';
import { CTASection } from '@/components/website/CTASection';
import { SiteFooter } from '@/components/website/SiteFooter';
import { SectionWrapper, SectionHeading } from '@/components/website/SectionWrapper';
import { Badge } from '@/components/ui/badge';

const FEATURED = {
  title: 'How we reduced deploy times by 80% using Cubicle\'s pipeline tools',
  excerpt: 'A deep dive into the architectural changes that helped our team ship faster without sacrificing reliability or developer happiness. We walked through every step of the migration and measured the impact at each stage.',
  category: 'Engineering',
  publishedAt: 'Jul 18, 2026',
  readTime: '8 min',
  authorName: 'James Park',
};

const POSTS = [
  {
    title: 'Designing for scale: lessons from building our component system',
    excerpt: 'The decisions behind our design system and how a shared token library unlocked consistency across all our products.',
    category: 'Design',
    publishedAt: 'Jul 12, 2026',
    readTime: '7 min',
    authorName: 'Leila Torres',
  },
  {
    title: 'Customer spotlight: How Finova ships 3× faster with Cubicle',
    excerpt: 'We sat down with Finova\'s engineering team to understand how Cubicle fits into their daily workflow.',
    category: 'Customer stories',
    publishedAt: 'Jul 5, 2026',
    readTime: '4 min',
    authorName: 'Aria Chen',
  },
  {
    title: 'The case for async-first collaboration in distributed teams',
    excerpt: 'Why async communication leads to better decisions, more focus time, and a healthier team culture.',
    category: 'Culture',
    publishedAt: 'Jun 28, 2026',
    readTime: '6 min',
    authorName: 'Sam Wright',
  },
  {
    title: 'Building a zero-downtime deployment pipeline from scratch',
    excerpt: 'Step-by-step guide to setting up blue-green deployments with automatic rollback using Cubicle Pipelines.',
    category: 'Engineering',
    publishedAt: 'Jun 20, 2026',
    readTime: '10 min',
    authorName: 'Priya Okonkwo',
  },
  {
    title: 'Why we chose React Server Components for our dashboard',
    excerpt: 'The trade-offs we considered and what we learned after shipping RSC to 50K users.',
    category: 'Engineering',
    publishedAt: 'Jun 14, 2026',
    readTime: '9 min',
    authorName: 'James Park',
  },
  {
    title: 'Five habits of highly effective product teams',
    excerpt: 'After talking to 200+ teams, these are the patterns that consistently separate high performers from the rest.',
    category: 'Product',
    publishedAt: 'Jun 7, 2026',
    readTime: '5 min',
    authorName: 'Aria Chen',
  },
];

const CATEGORIES = ['All', 'Engineering', 'Design', 'Product', 'Culture', 'Customer stories'];

export function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <SectionWrapper background="default" size="sm">
        <div className="text-center space-y-3 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
          <p className="text-muted-foreground">Insights, stories, and updates from the Cubicle team.</p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat, i) => (
            <Badge
              key={cat}
              variant={i === 0 ? 'default' : 'secondary'}
              className="cursor-pointer text-xs px-3 py-1"
            >
              {cat}
            </Badge>
          ))}
        </div>

        {/* Featured post */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Featured</p>
          <div className="border rounded-xl p-6 sm:p-8 bg-muted/50 space-y-3">
            <Badge variant="secondary" className="text-xs">{FEATURED.category}</Badge>
            <h2 className="text-xl font-bold tracking-tight">{FEATURED.title}</h2>
            <p className="text-sm text-muted-foreground max-w-2xl">{FEATURED.excerpt}</p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1">
              <span>{FEATURED.authorName}</span>
              <span>·</span>
              <span>{FEATURED.publishedAt}</span>
              <span>·</span>
              <span>{FEATURED.readTime} read</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="default" size="sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="text-sm text-muted-foreground hover:text-foreground border rounded-lg px-5 py-2 transition-colors hover:bg-muted">
            Load more posts
          </button>
        </div>
      </SectionWrapper>

      {/* Newsletter */}
      <SectionWrapper background="muted">
        <div className="max-w-md mx-auto text-center space-y-4">
          <SectionHeading
            title="Get new posts in your inbox"
            description="No spam. One email per week, unsubscribe anytime."
          />
          <NewsletterForm headline="" description="" layout="stacked" />
        </div>
      </SectionWrapper>

      <SiteFooter />
    </div>
  );
}
