import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig(({ command }) => ({
  // Production builds are served under /Slate/ on GitHub Pages.
  // Local dev keeps the root path so URLs stay clean.
  base: command === 'build' ? '/Slate/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
}))
