# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Stylish App Kit is a collection of opinionated starter templates for web applications. Each template lives in `templates/` as an independent project with its own dependencies and build system.

**Templates:**

- **next-app** - Next.js 16 + React 19 (App Router, Turbopack)
- **ethereum-dapp** - Next.js 16 + wagmi v3 + viem (EVM DApp with wallet integration, shadcn/ui)
- **react-app** - React 19 + Vite 7 SPA
- **ui-kit** - React component library (Vite library mode, Storybook 10, publishes UMD + ESM)
- **astro-app** - Astro 5 static site
- **extension** - Chrome MV3 extension (Webpack 5, separate popup/content/background entries)

## Requirements

- Node >= 20.19.0
- pnpm >= 9.0.0 (`packageManager` field in root package.json)

## Commands

Each template is an independent project. Always `cd` into the template directory first and run `pnpm install` before executing commands.

### Root level

```bash
pnpm lint          # Oxlint across all templates/
pnpm format        # Oxfmt across all templates/
```

### Per-template commands (run from `templates/<name>/`)

| Command           | next-app             | ethereum-dapp | react-app        | ui-kit                        | astro-app    | extension     |
| ----------------- | -------------------- | ------------- | ---------------- | ----------------------------- | ------------ | ------------- |
| `pnpm dev`        | Next dev (Turbopack) | Next dev      | Vite dev         | -                             | Astro dev    | Webpack watch |
| `pnpm build`      | Next build           | Next build    | tsc + Vite build | tsc --noEmit + Vite lib build | Astro build  | Webpack prod  |
| `pnpm lint`       | Oxlint               | Oxlint        | Oxlint           | Oxlint                        | Oxlint + ESLint | Oxlint     |
| `pnpm test`       | Vitest run           | Vitest run    | Vitest run       | Vitest run                    | Vitest run   | -             |
| `pnpm test:watch` | Vitest watch         | Vitest watch  | Vitest watch     | Vitest watch                  | Vitest watch | -             |
| `pnpm storybook`  | -                    | -             | -                | Storybook dev :6006           | -            | -             |

**ethereum-dapp extras:** `pnpm dev:prod` (run dev with production env), `pnpm test:coverage`

### Running a single test

```bash
pnpm vitest run path/to/test.test.tsx
```

## Architecture

### Template independence

Templates share no workspace linking or shared packages. Each has its own `node_modules`, `package.json`, and tooling configs. The root `package.json` only provides Oxlint/Oxfmt/Husky for the root-level templates/ directory.

### Shared conventions across templates

- **Import alias:** `@/*` maps to `./src/*` (or `./lib/*` in ui-kit)
- **Linting:** Oxlint with `.oxlintrc.json` (native + JS plugin rules). astro-app additionally uses ESLint for `.astro` files.
- **Formatting:** Oxfmt with `.oxfmtrc.json`. astro-app additionally uses Prettier for `.astro` files.
- **TypeScript:** Strict mode, `moduleResolution: "bundler"`, `skipLibCheck: true`
- **Testing:** Vitest with `globals: true` (no test imports needed) + React Testing Library + jsdom (or happy-dom for ethereum-dapp/astro-app)
- **Styling:** Tailwind CSS v4 via PostCSS (or `@tailwindcss/vite` plugin in ui-kit)
- **SVG:** `@svgr/webpack` for importing SVGs as React components (next-app, ethereum-dapp, extension)

### Git hooks (next-app, ethereum-dapp)

- **pre-commit:** lint-staged runs `oxlint --fix` + `oxfmt --write` on code files, `oxfmt --write` on json/md/yaml
- **pre-push:** `tsc --noEmit` + `vitest run`

### ethereum-dapp specifics

- State management: Zustand
- Data fetching: TanStack Query
- UI components: Radix UI primitives + class-variance-authority + tailwind-merge (shadcn/ui pattern)
- Wallet: wagmi v3 connectors
- RPC proxy: API routes at `app/rpc/[network]/route.ts`
- Env vars: `ALCHEMY_API_KEY`, `ETHERSCAN_API_KEY`, `ORIGIN`

### ui-kit specifics

- Library entry: `lib/main.ts`
- Build output: `dist/` with `main.es.js`, `main.umd.js`, `main.d.ts`, `style.css`
- Peer deps: react >= 18, react-dom >= 18, tailwindcss >= 4
- Stories in `src/stories/`, tests in `src/tests/`

### extension specifics

- Three entry points: `src/popup/index.tsx`, `src/scripts/content.ts`, `src/service-worker/background.ts`
- Manifest at `src/manifest.json`
- No test setup configured
- Uses Babel for production, ts-loader for development
