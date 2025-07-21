import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  server: {
    posr: 3000,
    opem: true,
  },
  build: {
    outDir: '../dist',
  },
});
