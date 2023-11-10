import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'src',

  resolve: {
    alias: {
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@network': path.resolve(__dirname, 'src/network'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
});
