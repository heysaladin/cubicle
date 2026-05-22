# Cubicle Design System

Cubicle is a **shadcn/ui-style React + TypeScript component library** built on Vite, Tailwind v4, Radix primitives, and Geist typography. It's the design system distilled from the `heysaladin/cubicle` repository — a minimal, neutral-first kit in the shadcn tradition, shipped with a full Storybook and ~45 UI primitives (accordion → toggle) styled through CSS variables and a strict semantic-token layer.

The brand has no loud visual identity. Its personality is **"quiet infrastructure"**: neutral grays, a subtle blue accent, Geist everywhere, generous whitespace, soft shadows, and restrained motion. Think Vercel / Linear / shadcn aesthetic — deliberately unopinionated so product teams can drop it in and layer their own brand on top.

## Sources
- **Repo:** [heysaladin/cubicle](https://github.com/heysaladin/cubicle) — `main` branch
- **Key files read from repo:**
  - `src/styles/tokens.css` — full token export (colors, type, spacing, radii, shadows)
  - `src/index.css` — Tailwind v4 `@theme` mapping
  - `src/App.tsx` + `src/App.css` — the reference landing page
  - `src/components/ui/*.tsx` — shadcn primitives (button, card, input, badge, avatar, alert, checkbox, switch, tabs, separator)
  - `components.json` — confirms shadcn style `default`, baseColor `neutral`, `iconLibrary: lucide`
  - `public/icons.svg` — the repo's own SVG sprite (GitHub, Discord, X, Bluesky, Documentation, Social)
  - `public/favicon.svg`

## Index

| File | What's in it |
| --- | --- |
| `README.md` | This file. Fundamentals + pointers. |
| `colors_and_type.css` | All tokens as CSS vars + semantic utilities (`.type-h1`, `.type-p`, etc). |
| `SKILL.md` | Agent Skills / Claude Code compatible front-matter entry point. |
| `assets/` | Logos, favicon, icon sprite copied from the repo. |
| `src/components/ui/` | shadcn component source (TypeScript) — 10 original + 17 added (accordion, breadcrumb, collapsible, dialog, dropdown-menu, label, pagination, popover, progress, radio-group, select, skeleton, slider, table, textarea, toggle, tooltip). |
| `src/styles/tokens.css` | Original token file imported verbatim (source of truth). |
| `preview/` | Per-card HTML specimens — buttons, forms, alerts, badges, avatars, cards, type, spacing, colors + accordion/toggle/collapsible, data display (table/progress/skeleton), extended inputs (textarea/select/radio/slider), navigation (breadcrumb/pagination/steps), overlays (tooltip/dialog/dropdown/popover). |
| `ui_kits/cubicle/` | React (JSX, babel-in-browser) recreation of the kit and a demo app. |

---

## CONTENT FUNDAMENTALS

The repo ships minimal product copy — Cubicle is a tools/system, not a consumer product — but a consistent voice emerges across the landing page, component docs, and sample CTAs.

**Tone.** Direct, infrastructural, low-ego. No exclamation marks, no "let's", no "magic ✨". Copy states what a thing *is* or what a button *does*, and stops there. Examples pulled verbatim from the codebase:
- `"Your questions, answered"` (a section tagline — four words, period optional)
- `"Explore Vite"`, `"Learn more"` (link-buttons — imperative verb + one noun)
- `"Connect with us"`, `"Join the Vite community"` (same imperative pattern)
- `"Get started"`, `"Count is {n}"` (functional, almost developer-terminal in register)

**Casing.**
- **Title Case** for H1/H2/section headers: `Get started`, `Documentation`, `Connect with us` — sentence case is used, with only the first word capitalized. Nouns that are product names retain their casing (`Vite`, `React`).
- **Sentence case** for body copy, descriptions, menu items, form labels.
- **ALL CAPS** is reserved for the `.caption` type role only (eyebrows, label chips); letter-spacing `1.5px`, 14px.
- Button labels are sentence case, single verb or verb-noun: `Submit`, `Create project`, `Delete`.

**Pronouns.** Uses **"you"** and **"we/us"** freely (`"Connect with us"`, `"Your questions, answered"`). Never `I`. Second-person direct address.

**Emoji.** Not used in the codebase. The repo uses SVG icons (Lucide + a local sprite) exclusively. Don't add emoji.

**Punctuation.** Periods optional on short taglines; used in full sentences. No em-dashes mid-sentence, no ellipses except in loading states (`"Saving..."`). Oxford comma not enforced either way.

**Numbers & dates.** Numerals always (`"Count is 4"`, not `"Count is four"`). Dates via `date-fns` — sentence case month names (`Jan 14, 2026`).

**The vibe.** Developer-facing, Vercel-adjacent. Utilitarian but considered. If a line of copy *could* be on a CLI tool's help screen, it fits Cubicle. If it sounds like onboarding marketing, rewrite.

---

## VISUAL FOUNDATIONS

Cubicle's visual identity is **the absence of flourish**. Every choice is the quiet, shadcn-default version of itself, calibrated to carry product content without competing with it.

### Colors
- **Neutral-first.** The entire grayscale runs from `#FAFAFA` (neutral-50) to `#0A0A0A` (neutral-950), mapped as "Brand Neutrals". Backgrounds, borders, text, and surfaces are all drawn from this ramp. In light mode background is pure white (`#FFFFFF`); in dark mode it's pure black (`#000000`).
- **Blue is the accent** (the "Brand Shades" ramp, `#EFF6FF` → `#172554`), but the app itself **does not use it for primary actions** — the primary button is neutral-900 on neutral-50 text. Blue is reserved for focus rings on specific contexts, charts (fill 1/2), and opt-in link styling.
- **Destructive** is red-600 (`#FA5252` in the palette → surfaced as `#FF6B6B` in some contexts); it's the ONLY semantically colored state token besides chart and accent.
- **Charts** in light mode lean warm (`#F54A00`, `#FFB900`, `#FE9A00`) + teal (`#009689`). In dark mode the palette swaps to blue-driven (`#1447E6`, `#00BC7D`, `#AD46FF`).
- **Dark mode is first-class** — every semantic token has a `.dark` counterpart. Inversion is sharp (black background, not "very dark gray") to match the shadcn default.

### Typography
- **Geist + Geist Mono, everywhere.** Sans, serif fallback, and mono all resolve to Geist family — this is intentional. No display face, no alternate for marketing vs product. Weights 100–900 available; the system uses 400/500/600/700.
- Type scale anchored at 48/30/24/20 for H1–H4 and 18/16/14/12 for body. Tight tracking on headlines (`-1.5px` on H1), neutral on body, positive `1.5px` on UPPERCASE captions.
- Line heights are *tight* for display (48/48, 30/30 — 1:1 ratio on H1/H2) and loose for reading copy (16/24, ratio 1.5).

### Spacing
- A 16-step scale from 2px → 144px, but clustered around **4/8/12/16/24/32** for everything day-to-day. The `xl` (24px) is the default card padding and section gap; `2xl` (32px) the default block-to-block rhythm.

### Backgrounds
- **Solid.** Pure white in light, pure black in dark. No gradients, no patterns, no images behind content. The one landing-page hero image (`src/assets/hero.png`) is a stacked logo composition, not a backdrop. Full-bleed imagery is rare; when used, imagery is desaturated/warm-neutral, not vivid.

### Animation
- **Transitions only, short and linear.** `transition-colors`, `transition: border-color 0.3s`, `transition: box-shadow 0.3s`. No bounces, no springs, no orchestration. Radix handles modal/popover transitions with its own defaults — accepted as-is.
- Hover on primary = opacity to 0.9 (`hover:bg-primary/90`). Hover on secondary = opacity to 0.8.

### Hover / press states
- **Hover** = same surface, reduced opacity (`/90` or `/80`) OR swap to `accent` token. Never a brighter color. Never a scale/lift.
- **Press** = implicit; no dedicated `:active` treatment beyond browser default.
- **Focus** = visible 2px `ring-ring` offset by 2px from the element — the ring color is `neutral-950` in light / `neutral-400` in dark.

### Borders
- **1px solid `--border`** on nearly every surface that needs separation — cards, inputs, separators, sidebar edges. Border color is neutral-200 (light) / neutral-800 (dark).
- The `.ticks` motif in `App.css` is a pair of 5px colored triangles at the edges of a horizontal rule — a small typographic flourish borrowed from the Vite starter; use sparingly as a section marker if needed.

### Shadows
- Seven-step scale (`2xs` → `2xl`), all tuned at **10% black** opacity (not the Tailwind default 15%). Cards default to `shadow-sm`. Popovers/dropdowns jump to `shadow-md`. Dialogs/overlays use `shadow-lg` or `shadow-xl`.
- **No inner shadows.** No colored shadows. No glow. Elevation is read from a subtle darker drop only.

### Transparency & blur
- Alpha overlays used for **dim backdrops** (modal scrim = `black-alpha-60`) and for outline/hover states (`white-alpha-10`, `black-alpha-5`). Backdrop blur is NOT used.

### Corner radii
- Default `--radius` is **10px**. Cards use `lg` (8px), buttons default to `md` (6px), pills/avatars use `full`. The 2xl (16px) and 3xl (24px) sizes exist but are rarely used — mostly for hero/marketing cards.

### Card anatomy
- Border 1px `--border`, radius `lg` (8px), background `--card`, `shadow-sm`, internal padding `p-6` (24px). Header/Footer share the same 24px padding; Content drops top padding (`pt-0`) to let the title seat tight.
- Cards rarely have ornamental headers — just a `CardTitle` (text-2xl semibold, tight tracking) + `CardDescription` (text-sm muted).

### Layout rules
- **Max content width** not declared globally — the landing page centers via flex. Dashboards should cap at 1280–1440px and center.
- Sidebar is a fixed 256px (the shadcn default), collapses to icon rail.
- Fixed elements (toasts via Sonner, dialogs via Radix) use Radix portals — they render outside the component tree.

### Imagery vibe
- Almost none shipped. The single reference image is a flat composite logo. When adding imagery: prefer high-contrast, slightly cool neutrals; no heavy grain; no saturated color casts.

---

## ICONOGRAPHY

Cubicle's iconography is **dual-sourced** and both sources ship in the repo:

1. **Lucide React** is the declared icon library (`components.json` → `"iconLibrary": "lucide"`). This is the primary set used by every shadcn primitive (checkboxes, dropdowns, menus). Stroke-based, 24×24 grid, 1.5–2px stroke weight, rounded caps/joins.
2. **A local SVG sprite** at `public/icons.svg` (copied into `assets/icons.svg`) with six symbols: `bluesky-icon`, `discord-icon`, `documentation-icon`, `github-icon`, `social-icon`, `x-icon`. Two use an accent purple (`#aa3bff`) for outline strokes (`documentation-icon`, `social-icon`); the rest are solid `#08060d` (near-black). Consumed via `<svg><use href="/icons.svg#github-icon" /></svg>`.

**Icon sizing rules.**
- Inside buttons: `[&_svg]:size-4` (16px) — enforced by the button component's CVA.
- Stand-alone / section headers: 22×22px (per `App.css` `.icon`).
- In rows / list items: 18×18px.

**Stroke & style.** Lucide's default weight (`stroke-width: 2`) is the house standard; stroke-width `1.35` appears on the local purple icons. Don't mix filled + outline styles in the same UI — pick one.

**Emoji / unicode icons.** Not used anywhere in the repo. Don't introduce them.

**CDN link for Lucide** (use when recreating in plain HTML prototypes):
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<script>lucide.createIcons();</script>
```

Or per-icon SVGs via `https://unpkg.com/lucide-static@latest/icons/<name>.svg`.

---

## Font substitution note
Geist is served from Google Fonts via `fonts.googleapis.com` (the same import the repo uses). **No local `.ttf` files are shipped in this design system** — the stylesheet imports Geist at runtime. If you need offline use, download Geist from https://vercel.com/font and drop the files into a `fonts/` folder + add `@font-face` rules.

## UI Kit viewing
Open `ui_kits/cubicle/index.html` to see the live kit in action — sidebar nav, dashboard, projects table with filter, inbox read/unread, team grid, settings form, a dialog, and a dark-mode toggle.

