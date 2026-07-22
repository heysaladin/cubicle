# Changelog

All notable changes to Cubicle DS are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

### Added
- `GUIDELINES.md` — Do/Don't usage guidelines for tokens, components, and accessibility
- `CHANGELOG.md` — this file

---

## [0.3.0] — 2026-05-26

### Added
- Formal and Luxury theme tokens (`semantic.light.json`, `semantic.dark.json`)
- Extended border variants: `--border-4`, `--border-5`
- Extended alpha tokens: `--white-alpha-*`, `--black-alpha-*`
- Chart dark mode tokens (`--chart-fill-*`, `--chart-stroke-*`)
- Extended semantic tokens: `--foreground-alt`, `--body-background`, `--ghost`, `--outline`, `--outline-hover`, `--outline-active`, `--destructive-border`, `--destructive-text`

### Changed
- Dark mode semantic palette refined for Formal/Luxury product themes

---

## [0.2.0] — 2026-05-14

### Added
- Claude AI integration for design-to-code workflows (`public/cubicle-claudedesign/`)
- AI skill file (`SKILL.md`) for Cubicle-branded mock generation
- Static preview assets and color/type reference (`colors_and_type.css`)

---

## [0.1.0] — 2026-04-20

### Added
- Initial design system scaffold
- Token pipeline: `tokens/*.json` (DTCG format) → Style Dictionary → `src/styles/tokens.css`
- Full primitive color palette: Neutral, Red, Blue, Orange, Amber, Emerald, Teal, Violet, Pink, Rose, Green
- Typography tokens: `--font-size-*`, `--font-weight-*`, `--line-height-*`, `--letter-spacing-*` (Geist + Geist Mono)
- Spacing scale: `--spacing-3xs` through `--spacing-10xl`
- Border radius scale: `--radius-none` through `--radius-full`
- Shadow/elevation scale: `--shadow-2xs` through `--shadow-2xl`
- Semantic color tokens for light and dark mode (`.dark {}` class)
- 45 UI components via shadcn/ui: Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Command, Context Menu, Dialog, Drawer, Dropdown Menu, Hover Card, Input, Input OTP, Label, Menubar, Navigation Menu, Pagination, Popover, Progress, Radio Group, Resizable, Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Switch, Table, Tabs, Textarea, Toggle, Toggle Group, Tooltip
- Storybook with stories for 20 components: Accordion, Alert, Avatar, Badge, Button, Card, Checkbox, Dialog, Input, Label, Progress, Select, Separator, Skeleton, Slider, Switch, Tabs, Textarea, Toggle, Tooltip
- Token showcase stories: Colors, Typography, Spacing, Border Radii, Shadows
- `ARCHITECTURE.md` — system architecture and token pipeline documentation
- `CONTRIBUTING.md` — day-to-day workflows for designers and engineers
- Vercel deployment for Storybook
- Chromatic integration for visual regression testing
