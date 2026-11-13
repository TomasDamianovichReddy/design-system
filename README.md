# @tdamianovich/design-system

An atomic design system for React, built with TypeScript and Sass. It ships accessible
atoms, molecules and organisms, design tokens as CSS custom properties, and a Storybook
catalogue that can be published as a static site.

- **Atoms** — Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, Label,
  Badge, Avatar, Divider, Link, Text, Icon, Spinner, Skeleton.
- **Molecules** — FormField, SearchInput, Alert, Breadcrumbs, Pagination, Tooltip, Card,
  AvatarGroup, EmptyState, Stat.
- **Organisms** — Header, Footer, Sidebar, DataTable, Modal, Accordion, Tabs.

## Requirements

- Node.js `>= 20`
- React and React DOM `>= 18` (peer dependencies)
- A bundler that understands CSS imports (Vite, webpack, Next.js, etc.)

## Install

```bash
pnpm add @tdamianovich/design-system
# or
npm install @tdamianovich/design-system
# or
yarn add @tdamianovich/design-system
```

## Usage

Import the stylesheet once at your app entry point:

```tsx
import '@tdamianovich/design-system/styles.css'
```

Then use the components:

```tsx
import { Button, Card, FormField, Input, Text } from '@tdamianovich/design-system'

export function SignupCard() {
  return (
    <Card header="Create an account" footer={<Button type="submit">Sign up</Button>}>
      <FormField id="email" label="Email address" required hint="We never share your email.">
        <Input id="email" type="email" aria-describedby="email-hint" autoComplete="email" />
      </FormField>
      <Text tone="muted" size="sm">
        By signing up you agree to the terms of service.
      </Text>
    </Card>
  )
}
```

Every component forwards refs where it renders a single element, accepts native HTML
attributes, and merges `className` instead of replacing it.

## Theming

All visual decisions are CSS custom properties in the `--ds-*` namespace. Override them
globally or scoped to a subtree:

```css
:root {
  --ds-brand-500: #0f766e;
  --ds-brand-600: #0d9488;
  --ds-brand-700: #0f766e;
  --ds-radius-md: 0.25rem;
  --ds-font-sans: 'IBM Plex Sans', system-ui, sans-serif;
}
```

Dark mode is available through the `data-theme` attribute:

```html
<body data-theme="dark">
  <!-- the whole app now uses the dark token set -->
</body>
```

For a scoped theme, put the attribute on any container:

```tsx
<div data-theme="dark">
  <Card header="Dark card">…</Card>
</div>
```

See `src/styles/_tokens.scss` for the complete token list.

## Storybook

```bash
pnpm install
pnpm dev
```

Open <http://localhost:6006>. Use the paintbrush toolbar to switch between light and dark
themes. To produce a static catalogue:

```bash
pnpm build:storybook
```

The output lands in `storybook-static/` and can be deployed to GitHub Pages, Netlify,
Vercel or any static host.

## Development

| Command | Description |
| --- | --- |
| `pnpm dev` | Start Storybook on port 6006 |
| `pnpm typecheck` | Run TypeScript without emitting |
| `pnpm test` | Run the Vitest suite once |
| `pnpm test:watch` | Vitest in watch mode |
| `pnpm build` | Build ESM, CJS, `styles.css` and `.d.ts` files |
| `pnpm publint` | Validate package exports and file layout |
| `pnpm pack:check` | Build, run publint and dry-run `npm pack` |
| `pnpm build:storybook` | Static Storybook build |

### Project layout

```
src/
  atoms/        # single-purpose primitives
  molecules/    # small groups of atoms
  organisms/    # larger composed sections
  foundations/  # token documentation stories
  styles/       # tokens, mixins and global styles
  utils/        # cx() and shared types
  __tests__/    # smoke tests
.storybook/     # Storybook configuration and theme toolbar
```

Each component lives in its own folder with three files:

```
Button/
  Button.tsx
  Button.scss
  Button.stories.tsx
```

## Publishing

The package is configured for public scoped publishing:

```json
{
  "name": "@tdamianovich/design-system",
  "publishConfig": { "access": "public" }
}
```

1. Log in to npm: `npm login` (or set `NPM_TOKEN` in CI).
2. Bump the version: `npm version patch|minor|major`.
3. Verify the tarball contents: `pnpm pack:check`.
4. Publish: `npm publish`.

`prepublishOnly` runs the build and `publint` automatically. The published package only
contains `dist/`, and its `exports` map exposes:

- `@tdamianovich/design-system` → ESM (`index.js`) and CJS (`index.cjs`) with types.
- `@tdamianovich/design-system/styles.css` → compiled stylesheet.
- `@tdamianovich/design-system/package.json`.

## Accessibility notes

- Interactive elements are native controls, so form submission and keyboard behavior work.
- Focus rings use `--ds-color-focus` and are never removed.
- `Modal` traps focus, closes on Escape, locks body scroll and restores focus on unmount.
- `Tabs` implement roving tabindex with `ArrowLeft`, `ArrowRight`, `Home` and `End`.
- `DataTable` exposes `aria-sort` on sortable headers and supports Enter/Space row activation.
- Animations respect `prefers-reduced-motion`.

## License

MIT © Tomas Damianovich
