import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/brian-s-portfolio/',
  plugins: [react()],
});
