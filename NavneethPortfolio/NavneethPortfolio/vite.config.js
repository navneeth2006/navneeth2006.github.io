import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages under user repo, set base to '/repo-name/' if needed.
export default defineConfig({
  plugins: [react()],
  base: './'
})
