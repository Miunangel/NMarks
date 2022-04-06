import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
        src: 'manifest.json',
        dest: '',
        },
        {
         src: 'assets',
          dest: '',
        }
      ]
    })
  ],
  build: {
    rollupOptions: {
      input:{
        background: resolve(__dirname, 'html/background.html'),
        options: resolve(__dirname, 'html/options.html')
      }
    }
  },
})
