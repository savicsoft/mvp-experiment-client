import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8100,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
