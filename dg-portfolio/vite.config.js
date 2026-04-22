import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteImageOptimizer from 'vite-plugin-image-optimizer'
import path from 'path'

export default defineConfig({
  plugins: [vue(), ViteImageOptimizer()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})