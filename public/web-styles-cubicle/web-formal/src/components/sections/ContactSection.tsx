'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface ContactLink {
  label: string
  value: string
  href: string
}

interface ContactSectionProps {
  links?: ContactLink[]
}

const defaultLinks: ContactLink[] = [
  { label: 'Email', value: 'info@example.com', href: 'mailto:info@example.com' },
  { label: 'Phone', value: '+1 (234) 567-890', href: 'tel:+12345678900' },
  { label: 'Address', value: '499-433 N Columbia St, Greenup, IL 62428, USA', href: '#' },
  { label: 'Hours', value: 'We are open Monday through Friday from 9 am to 6 pm. Feel free to contact us.', href: '#' },
]

export function ContactSection({ links = defaultLinks }: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section">
      <div className="base-container">
        <div className="flex flex-col lg:flex-row gap-[8xl]">

          {/* Form */}
          <div className="flex-1">
            {submitted ? (
              <div className="flex flex-col gap-[2xl] py-[7xl]">
                <h2 className="text-h2 font-medium tracking-tightest">Thank you.</h2>
                <p className="text-text-body text-primary">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[ml]">
                  <div className="flex flex-col gap-m">
                    <label className="text-text-body font-medium text-near-black" htmlFor="firstName">First name</label>
                    <input id="firstName" type="text" required placeholder="James"
                      className="h-auto px-5 py-3 border border-divider-gray rounded-s text-text-body text-near-black placeholder:text-primary/50 focus:outline-none focus:border-primary transition-colors duration-350" />
                  </div>
                  <div className="flex flex-col gap-m">
                    <label className="text-text-body font-medium text-near-black" htmlFor="lastName">Last name</label>
                    <input id="lastName" type="text" required placeholder="Whitfield"
                      className="h-auto px-5 py-3 border border-divider-gray rounded-s text-text-body text-near-black placeholder:text-primary/50 focus:outline-none focus:border-primary transition-colors duration-350" />
                  </div>
                </div>
                <div className="flex flex-col gap-m">
                  <label className="text-text-body font-medium text-near-black" htmlFor="email">Work email</label>
                  <input id="email" type="email" required placeholder="james@company.com"
                    className="h-auto px-5 py-3 border border-divider-gray rounded-s text-text-body text-near-black placeholder:text-primary/50 focus:outline-none focus:border-primary transition-colors duration-350" />
                </div>
                <div className="flex flex-col gap-m">
                  <label className="text-text-body font-medium text-near-black" htmlFor="company">Company</label>
                  <input id="company" type="text" placeholder="Company name"
                    className="h-auto px-5 py-3 border border-divider-gray rounded-s text-text-body text-near-black placeholder:text-primary/50 focus:outline-none focus:border-primary transition-colors duration-350" />
                </div>
                <div className="flex flex-col gap-m">
                  <label className="text-text-body font-medium text-near-black" htmlFor="message">What's on your mind?</label>
                  <textarea id="message" required rows={5} placeholder="Tell us about your challenge..."
                    className="px-5 py-3 border border-divider-gray rounded-s text-text-body text-near-black placeholder:text-primary/50 focus:outline-none focus:border-primary transition-colors duration-350 resize-none" />
                </div>
                <Button type="submit" variant="primary" className="self-start">Send message</Button>
              </form>
            )}
          </div>

          {/* Contact info card */}
          <div className="lg:max-w-[450px]">
            <div className="bg-black rounded-m p-[3xl] flex flex-col gap-[3xl]">
              <p className="text-white text-h5 font-medium leading-[1.3em]">
                Not ready for a full conversation yet? We're happy to answer any questions over email.
              </p>
              <div className="line-grey opacity-20" />
              <div className="flex flex-col gap-[3xl]">
                {links.map((link, i) => (
                  <div key={i} className="flex flex-col gap-m">
                    <span className="text-white/50 text-text-sm font-medium uppercase tracking-m">{link.label}</span>
                    <a href={link.href} className="text-soft-white text-text-body font-normal hover:text-white transition-colors duration-350">
                      {link.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
