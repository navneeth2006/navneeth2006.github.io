import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '', // or './' — both work for root GitHub pages
  build: {
    outDir: 'dist',
  },
})
