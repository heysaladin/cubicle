# Contributing to Cubicle DS

Day-to-day workflows for adding tokens, components, and screens.

## Adding or changing a token

### Option A — From Figma (designer flow)
1. Open the Cubicle Figma file
2. Open the **Tokens Studio** plugin
3. Edit the token (or create a new one) under the appropriate set: `core`, `semantic/light`, or `semantic/dark`
4. Click **Push to GitHub** → the plugin opens a PR against this repo with your changes to `tokens/*.json`
5. Wait for CI green + review → merge

### Option B — From code (engineer flow)
1. Edit the relevant `tokens/*.json` file directly. Use DTCG format:
   ```json
   {
     "color": {
       "neutral": {
         "50": { "$value": "#FAFAFA", "$type": "color" }
       }
     }
   }
   ```
2. Run `npm run tokens:build` locally to verify outputs look right
3. Visually verify in Storybook: `npm run storybook`
4. Open PR → CI runs Chromatic visual regression → review → merge

### Naming rules
- **Core tokens** describe *what they are*: `color.neutral.500`, `spacing.md`, `radius.lg`
- **Semantic tokens** describe *what they're for*: `primary`, `background`, `border`, `card.foreground`
- Components should *only* reference semantic tokens. If you find yourself reaching for `color.blue.600` in a component, that's a missing semantic token.

## Adding a new component

Components live in `cubicle-storybook/src/components/ui/<name>.tsx`.

1. **Generate via shadcn CLI when possible:**
   ```bash
   cd cubicle-storybook
   npx shadcn@latest add accordion
   ```
   Then customize.
2. **Replace any hard-coded colors/spacing with token vars.** Never `#fff` or `16px`. Always `var(--background)` or `var(--spacing-md)`.
3. **Write a story** at `src/stories/<Name>.stories.tsx`. Cover:
   - Default state
   - All major variants (size, intent, etc.)
   - Disabled / loading / error states
   - Dark mode (Storybook dark mode addon handles this automatically)
4. **Add accessible defaults** — Radix primitives handle most of this; add ARIA labels for any custom interactive elements.
5. **Open PR** — Chromatic captures the visual diff for review.

## Updating a component

Same flow, but pay attention to:
- Stories must still cover all the listed states
- If you change a prop API, update the JSDoc + bump the npm package version (Changesets)
- Any visual change auto-flagged by Chromatic must be approved by a designer

## Releasing

We use [Changesets](https://github.com/changesets/changesets) for versioning.

```bash
npx changeset       # describe your change
npx changeset version  # bump versions + update changelog
git commit -am "Release"
git push
```

CI publishes to npm on merge to `main` if there's a pending version bump.

## Branching

- `main` — always shippable
- `feat/<short-name>` — feature branches
- `tokens/<short-name>` — token-only PRs (auto-labeled by Tokens Studio)
- `fix/<short-name>` — bug fixes

Squash merge into `main`. Keep PRs small — one component or one logical token group at a time.

## Reviewing checklist

Before approving a PR, verify:
- [ ] All colors/spacing/radius reference token vars (no raw values)
- [ ] Storybook stories cover variants + dark mode
- [ ] Chromatic diff is intentional and signed off by design
- [ ] Component is keyboard-accessible (Tab, Enter, Esc work as expected)
- [ ] No new dependencies without discussion
- [ ] Changeset added if behavior or API changed
