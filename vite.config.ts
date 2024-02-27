import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@shell': path.resolve(__dirname, './src/shell'),
      '@core': path.resolve(__dirname, './src/core'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@tests': path.resolve(__dirname, './src/tests'),
      "@locales": path.resolve(__dirname, './src/locales'),
    },
  },
});
