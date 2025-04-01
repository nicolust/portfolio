import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Check if we're in production (on GitHub Pages)
export default defineConfig({
  plugins: [react()],
  base: '/portfolio',
});