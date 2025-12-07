# Stylish Astro App

Create stylish app with Astro

## Features

- 🚀 Astro v5
- 🌙 Dark/Light theme support
- 💅 Code formatting with ESLint, Prettier
- 🧪 Unit test with Vitest

## Project Structure

```text
└── src/
    ├── components/
    │   └── head.astro          # Meta tags
    │   └── theme-script.astro  # Dark/Light theme script
    ├── layouts/
    │   └── root.astro          # Root layout
    ├── pages/
    │   └── 404.astro           # 404 page
    │   └── 500.astro           # 500 page
    │   └── index.astro         # Main page
    │   └── index.test.ts       # Main page test
    └── styles/
        └── globals.css         # Global styles
```

## Use this template

```bash
# PNPM
pnpm create astro@latest --template StyleList94/stylish-astro-app
```

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Development

```bash
# Run the development server
pnpm run dev
# Run the tests
pnpm run test
# Run the tests in watch mode
pnpm run test:watch
# Run the linting
pnpm run lint
# Run the build
pnpm run build
# Run the preview
pnpm run preview
```
