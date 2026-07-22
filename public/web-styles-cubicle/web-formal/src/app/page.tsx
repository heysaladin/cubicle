import type { Metadata } from 'next'
import { HomeBanner } from '@/components/sections/HomeBanner'
import { RationaleCards } from '@/components/sections/RationaleCards'
import { HomeOutcomesAndBlog } from '@/components/sections/HomeOutcomesAndBlog'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CtaSection } from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: '[Company]',
  description: '[Company] streamlines operations and drives business growth.',
}

export default function Home() {
  return (
    <>
      <HomeBanner />

      <RationaleCards
        label="Why we build [Company]"
        title="Because good intentions aren't enough"
        cards={[
          {
            imageSrc: 'https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69764dd7c66ce2ceada59cda_Photo%20in%20motion%20Green.webp',
            imageAlt: 'The reality',
            title: 'Progress slows without clarity',
            description: 'When priorities compete and decisions stack up, teams lose consistency. Growth becomes reactive instead of intentional, and opportunities are missed before they\'re recognized.',
            cta: { label: 'Learn more', href: '/case-studies' },
          },
          {
            imageSrc: 'https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/697652f0f32d48fb79c38190_Photo%20in%20motion%20Red.webp',
            imageAlt: 'Our response',
            title: 'We built [Company] to restore focus',
            description: '[Company] helps businesses turn strategy into steady progress. By simplifying complexity and creating clear direction, we help teams stay aligned, move with confidence, and build momentum that lasts.',
            cta: { label: 'Learn more', href: '/our-values' },
          },
        ]}
      />

      <HomeOutcomesAndBlog />

      <AboutPreview />

      <ServicesGrid
        label="Our solutions"
        title="Our services are built around clarity, execution, and measurable impact"
        layout="grid"
        services={[
          {
            icon: <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/6977741ad97f45c14e56d6da_Strategic%20Direction%20Icon.svg" alt="Icon" className="icon-image" />,
            title: 'Strategic Direction',
            description: 'We guide businesses in setting priorities and establishing a long-term vision.',
            href: '/solutions/strategic-direction',
          },
          {
            icon: <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/697773fe346038aa58945cc1_Operational%20Execution%20Icon.svg" alt="Icon" className="icon-image" />,
            title: 'Operational Execution',
            description: 'Our team actively transforms strategic plans into tangible results.',
            href: '/solutions/operational-execution',
          },
          {
            icon: <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/697773d1c9029e5988e442c1_Performance%20Optimization%20Icon.svg" alt="Icon" className="icon-image" />,
            title: 'Growth Optimization',
            description: 'We continuously analyze performance to identify opportunities for improvement.',
            href: '/solutions/growth-optimization',
          },
        ]}
        cta={undefined}
      />

      <TestimonialsSection
        testimonials={[
          {
            quote: 'Partnering with [Company] illuminated the path we needed. Their organized approach allowed us to set priorities, make rapid decisions, and proceed with certainty.',
            name: 'Daniel',
            title: 'Head of Operations',
            company: 'Growth Company',
            imageSrc: 'https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69778871110ad658770f16af_Daniel%2C%20Head%20of%20Operations%2C.png',
          },
          {
            quote: '[Company] worked closely with our team at every stage. Their hands-on support and practical thinking made a real difference in how we execute and measure results.',
            name: 'Mark',
            title: 'Managing Director',
            company: 'Mid-Market Business',
            imageSrc: 'https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69778866b0cdccc4588fce87_Mark%2C%20Managing%20Director%2C.png',
          },
          {
            quote: 'The improvements we saw were tangible. From streamlined processes to clearer reporting, [Company] helped us build a stronger, more scalable foundation.',
            name: 'Sofia',
            title: 'CEO',
            company: 'Technology Company',
            imageSrc: 'https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/6977883e31a67334b12b8a58_Sofia%2C%20CEO%2C.png',
          },
        ]}
      />

      <CtaSection
        title="Discuss your business and aspirations with us."
        primaryCta={{ label: "Let's grow up your business", href: '/contact-us' }}
        imageSrc="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6977938313beb4127c2e40c2_6247e7d907ceb1a76c9ca032c81508bb_CTA%20Image.webp"
      />
    </>
  )
}
