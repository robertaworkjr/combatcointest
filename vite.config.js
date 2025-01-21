import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hmr: {
      overlay: true,
      port: 5173
    },
    watch: {
      usePolling: true
    }
  },
  base: '/',
  clearScreen: false,
  build: {
    sourcemap: true,
    minify: false
  },
  optimizeDeps: {
    force: true
  }
})