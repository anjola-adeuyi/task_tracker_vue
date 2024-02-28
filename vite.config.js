import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        logLevel: 'debug',
        rewrite: (path) => path.replace(/^\/api/, '/'),
      },
    },
  },
});
