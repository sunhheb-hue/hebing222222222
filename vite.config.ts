import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/hebing222222222/',
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist'
  }
})
