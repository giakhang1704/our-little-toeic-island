import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          dexie: ['dexie', 'dexie-react-hooks'],
          'study-content': ['./src/data/seed/grammarTopics.ts', './src/data/seed/reading191026.ts'],
        },
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
