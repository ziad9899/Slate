# Slate

A premium, frontend-only landing page builder. Compose pages from polished sections, edit copy and color in place, and ship without ever opening a code editor.

> Mini Landing Page Builder MVP — built as a focused, professional alternative to heavyweight visual editors.

## Highlights

- **Three pages** — Home, Builder, Preview
- **Seven section templates** — Hero, Features, Pricing, Testimonials, FAQ, Contact, CTA
- **Live editing** — title, description, button, primary color, background color
- **Drag & drop reordering** — `@dnd-kit` with keyboard accessibility
- **Local-first** — autosaves to `localStorage` via Zustand `persist`; no backend
- **Bilingual** — English & Arabic with full RTL support, switchable from the topbar with no reload
- **Anti-flicker direction** — the saved language is applied before React mounts

## Tech stack

| Concern         | Choice                                            |
| --------------- | ------------------------------------------------- |
| Framework       | React 18 + TypeScript                             |
| Build           | Vite                                              |
| Styling         | Tailwind CSS (logical utilities for RTL)          |
| State           | Zustand (with `persist` middleware)               |
| Drag & drop     | `@dnd-kit/core` + `@dnd-kit/sortable`             |
| Motion          | `framer-motion`                                   |
| Icons           | `lucide-react`                                    |
| Persistence     | LocalStorage                                      |

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

### Scripts

| Command            | What it does                  |
| ------------------ | ----------------------------- |
| `npm run dev`      | Start the Vite dev server     |
| `npm run build`    | Produce a production build    |
| `npm run preview`  | Preview the production build  |
| `npm run typecheck`| Type-check without emitting   |

## Project layout

```
src/
├── pages/                  Home · Builder · Preview
├── components/
│   ├── landing/            Navbar · Hero · BuilderMock · FeaturesGrid · …
│   ├── builder/            Topbar · Sidebar · Canvas · Inspector · SectionFrame
│   ├── sections/           7 section templates + SectionRenderer
│   └── common/             LanguageToggle
├── data/                   sectionRegistry
├── i18n/                   translations · i18nStore · useTranslation
├── lib/                    utils · timeAgo
├── state/                  builderStore · useSaveStatus
└── types/                  section
```

## Design notes

The aesthetic is deliberate: a single accent (indigo `#6366F1`) on a zinc-tinted dark base, restrained motion (150–220ms ease-out), and Inter Variable for Latin paired with system Arabic fallbacks (IBM Plex Sans Arabic / Cairo / Tajawal). No gradients, no glassmorphism, no decorative arrows — every visual element is in service of legibility.

## What's deferred

This is intentionally a small MVP. The following are **not** in scope for v0.1:

- HTML/CSS export
- Undo/redo history
- Multi-project workspace
- Responsive editor (mobile/tablet breakpoints)
- Authentication or backend sync

## License

No license declared — all rights reserved by the author.
