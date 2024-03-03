import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'lifify',
      fileName: 'lifify',
      formats: ['es', 'cjs', 'umd', 'iife']
    }
  }
})
