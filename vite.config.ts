import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import unocss from 'unocss/vite';
import legacy from '@vitejs/plugin-legacy';

// https://vite.dev/config/
export default defineConfig(() => ({
  base: '/blog/',
  plugins: [vue(), unocss(), legacy({ targets: ['defaults', 'not IE 11'] })],
  resolve: {
    alias: {
      '/blog/posts': path.join(__dirname, './posts'),
    },
  },
}));
