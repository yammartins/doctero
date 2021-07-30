import refresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  define: {
    'process.env': process.env,
  },

  server: {
    port: 5000,
  },

  plugins: [
    svgr(),
    refresh(),
  ],
});
