import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import MillionLint from '@million/lint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), MillionLint.vite()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
