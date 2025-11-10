import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Use /blog/ base path for production builds (GitHub Pages)
  // Use / for development
  const base = command === 'build' ? '/blog/' : '/'
  
  return {
    plugins: [react()],
    server: {
      port: 5173,
      strictPort: false,
    },
    base,
  }
})

