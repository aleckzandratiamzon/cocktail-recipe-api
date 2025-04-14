import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,  // Disable source maps for production builds
  },
  css: {
    devSourcemap: false,  // Disable source maps in development too
  },
  server: {
    host: '0.0.0.0',  // Bind to all network interfaces
    port: 5173,        // Make sure the port is 5173
  },
})
