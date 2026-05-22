# Cubicle Website UI Kit

A clickable high-fidelity recreation of Cubicle's **marketing website surface** — the public-facing companion to the dashboard kit in `../cubicle/`.

This kit uses Cubicle's design tokens verbatim (via `../../colors_and_type.css`), the same Geist typography, and the same primitive vocabulary (Button, Input, Card, Badge). The component styles live in `site.css` and the components are split into small, reusable JSX files.

## Files

| File | What's in it |
| --- | --- |
| `index.html` | The clickable site — navigate between Home, Features, Pricing, Blog, Contact, and drill into a blog post. |
| `site.css` | Layout + section styles on top of the shared token layer. |
| `Chrome.jsx` | `Navbar`, `MobileSheet`, `Footer`, plus the inline-Lucide `Icon` set. |
| `Sections.jsx` | `Hero`, `LogosRow`, `Features`, `Pricing`, `Testimonials`, `FAQ`, `CtaBand`, `ContactSection`. |
| `Blog.jsx` | `BlogList` and `BlogDetail` (with sample posts). |

## Pages covered

- **Home** — Hero + logos row + ticks separator + feature grid + testimonials + CTA band
- **Features** — Feature grid + testimonials + FAQ + CTA band
- **Pricing** — Three-tier pricing table + FAQ
- **Blog** — Grid of posts → click into a detail view
- **Contact** — Form (name/email/company/topic chips/message) + contact-info column

## Interactive behavior

- Sticky blurred navbar with mobile hamburger → sheet
- Dark-mode toggle in the header (persisted in `localStorage` as `cubicle-site`)
- Live FAQ accordion (one open at a time)
- Contact form shows a success state on submit
- Blog list → detail navigation with a Back action

## What's left out on purpose

This is a UI kit, not a product. No routing, no analytics, no real form submission, no auth, no real blog CMS. The intent is pixel-level fidelity on the visual and interaction layer so a designer can lift sections wholesale into new mocks.

## Omitted sections (no source in repo)

The following were not in the Cubicle codebase and are left blank on purpose — don't invent them from scratch; ask for source material:

- **About / Team** — no bios or photos in the repo
- **Careers / Job listings** — no openings in the repo
- **Case studies** — no customer content in the repo
- **Legal pages** — placeholder links in the footer only
- **404 / Maintenance** — not yet designed
