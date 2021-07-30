import refresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/',

  server: {
    port: 5000,
  },

  plugins: [
    svgr(),
    refresh(),
  ],

  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
});
