import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    lib: {
      name: 'ilw-video',
      entry: 'ilw-video.js',
      fileName: 'ilw-video',
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') return 'ilw-video.css';
        }
      }
    },
  },
  server: {
    hmr: false
  }
})
