import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Default config used by Storybook and Vitest.
export default defineConfig({
  plugins: [react()]
})
