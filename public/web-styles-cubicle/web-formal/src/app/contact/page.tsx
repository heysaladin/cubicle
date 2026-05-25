import type { Metadata } from 'next'
import { InnerBanner } from '@/components/sections/InnerBanner'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with [Company] to start a conversation about your strategic challenges.',
}

export default function ContactPage() {
  return (
    <>
      <InnerBanner
        label="Contact"
        title="Let's start a conversation"
        description="Reach out to start a conversation about how we can support your strategy, operations, and growth."
      />
      <ContactSection />
    </>
  )
}
