# Cubicle UI Kit

Interactive React recreation of the Cubicle design system as a single dashboard app. Uses Babel-in-browser — no build step.

## Files
- `index.html` — app shell + routes. Open this.
- `Primitives.jsx` — Button, Input, Card, Badge, Avatar, Checkbox, Switch, Tabs, Alert, Dialog, Separator, Label, Textarea.
- `Chrome.jsx` — Sidebar, Topbar, Icon set (12 Lucide-style inline icons).
- `Pages.jsx` — Dashboard, Projects, Inbox, Team, Settings — each a click-through surface.
- `kit.css` — styles wired to the root `colors_and_type.css`.

## What's interactive
- Sidebar nav swaps pages.
- Topbar dark-mode toggle. Theme and current page persist via `localStorage`.
- Dashboard → "New report" opens a modal Dialog with input.
- Projects filter input + row-level delete via trash button.
- Inbox select-a-thread toggles read state and swaps the right pane.
- Settings form: switches + checkbox are live; inputs are uncontrolled but editable.

## Faithfulness notes
- Tokens lifted verbatim from the repo's `src/styles/tokens.css`.
- Component API mirrors the shadcn source (`button.tsx`, `card.tsx`, `badge.tsx`) in variant names, sizes, and hover behavior (opacity-90 / 80).
- The chart is a minimal in-house bar specimen because Recharts' full stack would add meaningful weight; Cubicle ships Recharts via `src/components/ui/chart.tsx` which is what you'd use in production.
