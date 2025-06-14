import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Adjust if your src folder is located elsewhere
      components: path.resolve(__dirname, 'src/components'),
      lib: path.resolve(__dirname, 'src/lib'),
      utils: path.resolve(__dirname, 'src/lib/utils'),
      ui: path.resolve(__dirname, 'src/components/ui'),
      hooks: path.resolve(__dirname, 'src/hooks'),
    },
  },
});
