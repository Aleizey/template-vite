import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    build: {
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
    },
    server: {
        open: true,
    },
    optimizeDeps: {
        exclude: ['phaser'],
    }
});
