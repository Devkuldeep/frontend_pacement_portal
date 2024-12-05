import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias @ to the src folder
      '@components': path.resolve(__dirname, './src/components'), // Alias for components
      '@assets': path.resolve(__dirname, './src/assets'), // Alias for assets
    },
  },
})



