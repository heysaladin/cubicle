'use client'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  return (
    <>
      <section className="section default-header">
        <div className="container small">
          <div className="styled-col" style={{ alignItems: 'center', textAlign: 'center' }}>
            <div className="col-row-eyebrow">
              <Eyebrow>Contact Us</Eyebrow>
            </div>
            <div className="col-row-title">
              <h1>Reservations & Enquiries</h1>
            </div>
            <div className="col-row-text">
              <p>
                Our team is on hand to help you plan your perfect stay. Reach out and we will
                respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container small">
          <div
            className="row grid"
            style={{ '--columns': '2' } as React.CSSProperties}
          >
            {/* Contact details */}
            <div className="col">
              <div className="styled-col">
                <Eyebrow>Direct Contact</Eyebrow>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                  <div>
                    <p style={{ fontSize: 'var(--copy-size-s)', opacity: 0.5, marginBottom: '0.25em' }}>
                      Address
                    </p>
                    <p style={{ fontSize: 'var(--copy-size-m)' }}>
                      Jl. Damai No. 1, Kayuputih
                      <br />
                      Lovina, North Bali
                      <br />
                      Indonesia
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: 'var(--copy-size-s)', opacity: 0.5, marginBottom: '0.25em' }}>
                      Phone
                    </p>
                    <a
                      href="tel:+62123456789"
                      style={{
                        fontSize: 'var(--copy-size-m)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      +62 123 456 789
                    </a>
                  </div>
                  <div>
                    <p style={{ fontSize: 'var(--copy-size-s)', opacity: 0.5, marginBottom: '0.25em' }}>
                      Email
                    </p>
                    <a
                      href="mailto:info@thedamai.com"
                      style={{
                        fontSize: 'var(--copy-size-m)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      info@thedamai.com
                    </a>
                  </div>
                  <div>
                    <p style={{ fontSize: 'var(--copy-size-s)', opacity: 0.5, marginBottom: '0.25em' }}>
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/62123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 'var(--copy-size-m)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple form */}
            <div className="col">
              <div className="styled-col">
                <Eyebrow>Send an Enquiry</Eyebrow>
                <form
                  style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}
                  onSubmit={(e) => e.preventDefault()}
                >
                  {[
                    { label: 'Full Name', type: 'text', name: 'name' },
                    { label: 'Email', type: 'email', name: 'email' },
                    { label: 'Phone', type: 'tel', name: 'phone' },
                  ].map((field) => (
                    <div key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.35em' }}>
                      <label
                        htmlFor={field.name}
                        style={{ fontSize: 'var(--copy-size-s)', opacity: 0.55 }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        type={field.type}
                        name={field.name}
                        style={{
                          height: 'var(--btn-height)',
                          border: '1px solid var(--color-border)',
                          borderRadius: '0.5em',
                          padding: '0 1em',
                          fontSize: 'var(--copy-size-m)',
                          background: 'transparent',
                          color: 'var(--color-dark)',
                          outline: 'none',
                          transition: 'border-color var(--animation-fast)',
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>
                  ))}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35em' }}>
                    <label
                      htmlFor="message"
                      style={{ fontSize: 'var(--copy-size-s)', opacity: 0.55 }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      style={{
                        border: '1px solid var(--color-border)',
                        borderRadius: '0.5em',
                        padding: '0.75em 1em',
                        fontSize: 'var(--copy-size-m)',
                        background: 'transparent',
                        color: 'var(--color-dark)',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                        lineHeight: 1.5,
                      }}
                    />
                  </div>
                  <Button onClick={() => {}}>
                    Send Enquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
