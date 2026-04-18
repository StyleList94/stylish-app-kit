/// <reference types="vitest/config" />

import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sexyDeclareType from 'vite-plugin-sexy-declare-type';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sexyDeclareType()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
  },
  build: {
    cssMinify: 'esbuild',
    lib: {
      entry: {
        main: resolve(__dirname, 'lib/main.ts'),
      },
      name: 'StylisUiKit',
      formats: ['es', 'umd'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      cssFileName: 'style',
    },
    rolldownOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        chunkFileNames: () => `bundle/[name]-[hash].js`,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
    copyPublicDir: false,
  },
  resolve: {
    alias: [
      { find: 'lib', replacement: resolve(__dirname, './lib') },
      { find: 'src', replacement: resolve(__dirname, './src') },
    ],
  },
});
