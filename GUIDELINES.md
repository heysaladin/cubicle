# Cubicle DS — Do/Don't Guidelines

Usage guidelines for the Cubicle design system. These rules exist to keep the system coherent, accessible, and maintainable across products.

---

## Tokens

### Colors

**Do** — use semantic tokens for all UI colors.
```tsx
// ✅
<div className="bg-background text-foreground border border-border" />
<div className="bg-destructive text-destructive-foreground" />
```

**Don't** — use raw hex values or primitive tokens in components.
```tsx
// ❌
<div style={{ background: '#171717', color: '#fff' }} />
<div className="bg-[var(--color-neutral-900)]" />
```

> Semantic tokens (`--background`, `--primary`, `--destructive`) automatically switch between light and dark mode. Primitives (`--color-neutral-900`) don't.

---

### Spacing

**Do** — use spacing tokens via Tailwind classes.
```tsx
// ✅
<div className="p-4 gap-2 mt-6" />       // maps to --spacing-md, --spacing-2xs, --spacing-xl
```

**Don't** — use arbitrary pixel values.
```tsx
// ❌
<div style={{ padding: '14px', gap: '7px' }} />
<div className="p-[14px]" />
```

---

### Dark Mode

**Do** — test every new component in both light and dark mode via the Storybook toolbar.

**Don't** — hardcode colors that only look right in one mode.
```tsx
// ❌ — invisible in dark mode
<span className="text-[#333]">Label</span>

// ✅
<span className="text-foreground">Label</span>
```

---

## Components

### Button

**Do** — use the correct `variant` for the action's intent.

| Action type | Variant |
|-------------|---------|
| Primary CTA | `default` |
| Destructive action (delete, remove) | `destructive` |
| Secondary action | `outline` or `secondary` |
| Inline / low-emphasis | `ghost` or `link` |

**Don't** — use `default` (primary) for every button on a page. One primary action per view.

```tsx
// ❌ — two competing primary buttons
<Button>Save</Button>
<Button>Cancel</Button>

// ✅
<Button>Save</Button>
<Button variant="outline">Cancel</Button>
```

**Don't** — use `size="icon"` without an accessible label.
```tsx
// ❌
<Button size="icon"><TrashIcon /></Button>

// ✅
<Button size="icon" aria-label="Delete item"><TrashIcon /></Button>
```

---

### Input & Textarea

**Do** — always pair with a `<Label>` using `htmlFor` / `id`.
```tsx
// ✅
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="you@example.com" />
```

**Don't** — use placeholder text as a substitute for a label.
```tsx
// ❌ — placeholder disappears when user types; screen readers may not announce it
<Input placeholder="Email address" />
```

**Do** — show error state with visible feedback, not just color.
```tsx
// ✅
<Input aria-invalid="true" aria-describedby="email-error" />
<p id="email-error" className="text-destructive text-sm">Invalid email address</p>
```

---

### Dialog & Sheet

**Do** — use `Dialog` for confirmations and focused tasks. Use `Sheet` for panels that slide in from a side (filters, settings, detail views).

**Don't** — nest dialogs. If a flow requires a second dialog, reconsider the UX or consolidate into steps within one dialog.

**Do** — always include a close mechanism (close button or `Escape` key, which Radix handles automatically).

---

### Alert & Toast (Sonner)

**Do** — use `Alert` for inline, persistent feedback directly related to page content.  
**Do** — use `Sonner` (toast) for transient feedback after an action (save, copy, delete).

**Don't** — use toast for errors that require the user to take action — they disappear too fast. Use `Alert` or an error state on the field instead.

```tsx
// ❌ — user may miss this
toast.error("Form has validation errors");

// ✅
<Alert variant="destructive">
  <AlertTitle>Please fix the errors below before submitting.</AlertTitle>
</Alert>
```

---

### Badge

**Do** — use badges for status, counts, or short labels (1–3 words max).

**Don't** — use badges as buttons or interactive elements. For clickable tags, use `Toggle` or a custom component.

---

### Skeleton

**Do** — match the skeleton shape to the real content it's replacing (same height, same width range).

**Don't** — show a skeleton for less than ~300ms — a brief flash of skeleton is more disorienting than no skeleton. Gate on a loading state that only activates after a short delay.

---

### Tooltip

**Do** — use tooltips to clarify icon-only buttons and non-obvious controls.

**Don't** — put essential information only in a tooltip — it's invisible on touch devices and to screen readers by default.

```tsx
// ❌ — mobile users never see this
<Tooltip><TooltipTrigger><Button>?</Button></TooltipTrigger>
  <TooltipContent>This field is required</TooltipContent>
</Tooltip>

// ✅ — tooltip supplements, doesn't replace
<Label htmlFor="slug">
  URL Slug <span className="text-muted-foreground text-xs">(auto-generated)</span>
</Label>
```

---

### Tabs

**Do** — use tabs for parallel content at the same level of hierarchy.

**Don't** — use tabs as navigation between different pages or routes — use links/navigation instead.

**Don't** — have more than ~6 tabs in a single `Tabs` group. Consider a `Select` for long lists.

---

## Accessibility

**Do** — ensure every interactive element is reachable and operable by keyboard (Tab, Enter, Space, Escape, arrow keys).

**Don't** — suppress focus outlines.
```tsx
// ❌
<button className="outline-none focus:outline-none">Click me</button>

// ✅ — Cubicle components use focus-visible, which hides ring for mouse, shows for keyboard
<Button>Click me</Button>
```

**Do** — provide `aria-label` on any icon-only interactive element.

**Do** — maintain a reading order that makes sense without CSS (don't rely on `order` or `position: absolute` to restructure content visually in a way that breaks DOM order for screen readers).

---

## Composition

**Do** — compose components using the provided primitives; don't reach into their internals with CSS overrides.
```tsx
// ✅ — use className to add layout/spacing, not to override design tokens
<Card className="max-w-md">
  <CardHeader>...</CardHeader>
  <CardContent>...</CardContent>
</Card>

// ❌ — breaks theming
<Card style={{ background: '#f5f5f5', borderRadius: '3px' }}>
```

**Don't** — fork a component just to change its color. Add a variant to the design system instead and open a PR.

---

## Adding to the System

Before adding a net-new component, ask:

1. Does a Radix primitive exist for this? → wrap it, don't re-implement.
2. Is this reused in 3+ places? → if not, keep it local to the product.
3. Does it use only semantic tokens? → if not, propose the missing token first.
4. Does it have a story with all variants and a disabled state? → required before merge.
