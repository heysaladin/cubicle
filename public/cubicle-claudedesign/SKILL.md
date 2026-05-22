---
name: cubicle-design
description: Use this skill to generate well-branded interfaces and assets for Cubicle, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `README.md` — brand, content, visual, iconography fundamentals.
- `colors_and_type.css` — drop-in token sheet (CSS custom properties + semantic utilities like `.type-h1`, `.type-p`, `.type-caption`).
- `src/styles/tokens.css` — verbatim repo source of truth.
- `src/components/ui/*.tsx` — original shadcn TypeScript primitives (reference only, can be re-inlined).
- `ui_kits/cubicle/` — live JSX recreation of the kit (Primitives, Chrome, Pages) against `kit.css`.
- `assets/` — `favicon.svg` + `icons.svg` sprite (github, x, discord, bluesky, documentation, social).
- `preview/` — per-token HTML specimens.

## Ground rules
- Geist Sans + Geist Mono only. Weights 400/500/600/700.
- Neutrals first (`#FAFAFA` → `#0A0A0A`). Blue is an accent, never the primary CTA.
- Pure white light bg / pure black dark bg.
- No emoji. Lucide icons preferred (`iconLibrary: lucide` in `components.json`); the local sprite is for social + section icons.
- Hover = opacity reduction (/90 /80) or swap to `accent`; never a bright tint.
- Shadows are tuned to 10% black. `shadow-sm` on cards, `shadow-lg+` on dialogs.
- Default radius is 10px (`--radius`); buttons use 6px; pills use `full`.
