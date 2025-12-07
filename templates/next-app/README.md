# Stylish Next App

Create stylish NEXT app

<img src="https://github.com/user-attachments/assets/6ce5d9d0-0352-48dd-a302-a212acb674d2" width="720px" alt="create-stylish-next-app" />

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FStyleList94%2Fstylish-next-app)

## Feature

### NEXT

- `src/` Directory
- import alias: `@/`
- Turbopack
- Support TypeScript
- Typed Routes (Type-safe navigation)

### Testing

- Vitest
- DOM Testing with React Testing Library

### Code Formatter

- ESLint
  - Support flat config (ESLint 9)
  - Include [Stylish config](https://github.com/StyleList94/eslint-config-stylish)
  - Support `lint-staged`
- Prettier

### Styling

- Tailwind CSS

### Workflow

- Git Hooks via `husky`
  - `pre-commit`: run `lint-staged`
  - `pre-push`: run `tsc`, test script

## How to use

```bash
pnpm create next-app --example https://github.com/StyleList94/stylish-next-app
```
