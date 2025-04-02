import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
    hmr: true, // Hot Module Replacement for a better dev experience
  },
  build: {
    outDir: "dist",
  },
});