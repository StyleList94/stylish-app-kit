# Stylish UI Kit

Stylish UI kit for React applications

## Features

- Build React component via Vite
- Support TypeScript
- Styling with Tailwind CSS
- Storybook for component showcase
- Unit test with Vitest and React Testing Library
- Support ESLint and Prettier

## Get Started

### Install Dependencies

```bash
pnpm install
```

### Run Storybook

```bash
pnpm run storybook
```

### Build Library

```bash
pnpm run build
```

#### Build Storybook

```bash
pnpm run build-storybook
```

### Unit Test

```bash
pnpm run test

# Development mode
pnpm run test:watch
```

## Directory Structure

```text
lib/
├── components/
│ └── button.tsx          # sample component
├── main.ts
└── style.css             # style sheet for component
src/
├── stories/
│ └── Button.stories.tsx  # sample story
├── tests/
│ └── button.test.tsx     # sample component test
└── style.css             # styling for storybook
```
