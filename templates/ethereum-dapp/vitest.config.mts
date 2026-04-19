import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    css: true,
    root: './src',
    coverage: {
      reporter: ['text'],
      exclude: [
        'coverage/**',
        '**/node_modules/**',
        '**/[.]**',
        '**/__mocks__/**',
        '**/vitest.config.*',
        '**/*.d.ts',
        'app/**/error.*',
        'app/**/layout.*',
        'app/**/not-found.*',
        '**/assets/**/*',
        '**/providers/**/*',
        'lib/config.ts',
        'components/updater.tsx',
        'components/layout/container.tsx',
        'hooks/use-interval.ts',
        'hooks/use-launch.ts',
        'hooks/use-time.ts',
      ],
      reportsDirectory: '../coverage',
    },
  },
  cacheDir: '../node_modules/.vite/',
});
