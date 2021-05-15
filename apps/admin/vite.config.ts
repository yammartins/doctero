import refresh from '@vitejs/plugin-react-refresh';
import visualizer from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr(),
    refresh(),
    visualizer(),
  ],

  optimizeDeps: {
    include: [
      '@uxoctopus/helpers',
    ],
  },
});
