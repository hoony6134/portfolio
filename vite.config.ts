import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api/reddit': {
        target: 'https://www.reddit.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/reddit/, ''),
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        },
      },
      '/api/solvedac': {
        target: 'https://solved.ac',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/solvedac/, ''),
        headers: {
          'User-Agent': 'portfolio-app/1.0',
        },
      },
      '/api/boj': {
        target: 'https://www.acmicpc.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/boj/, ''),
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Sec-Fetch-Dest': 'document',
        },
      },
      '/api/stackexchange': {
        target: 'https://api.stackexchange.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/stackexchange/, ''),
        headers: {
          'User-Agent': 'portfolio-app/1.0',
        },
      },
    },
  },
})
