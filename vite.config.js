import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

import { postcss } from './postcss.config';

export default defineConfig({
    plugins: [react()],
    root: 'src',
    
    resolve: {
        alias: {
          '@screens': path.resolve(__dirname, 'src/screens'),
          '@helpers': path.resolve(__dirname, 'src/helpers'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@network': path.resolve(__dirname, 'src/network'),
          '@contexts': path.resolve(__dirname, 'src/contexts'),
        },
    },
    css: { postcss },
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    }
})
