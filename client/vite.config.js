import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://reactjs-project-am7g.onrender.com', // Заменете с вашето реално URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Ако е нужно да премахнете /api от пътя
      },
    },
  },
})
