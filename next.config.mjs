import { defineConfig } from 'next'
import runtimeCaching from 'next-pwa/cache'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  experimental: { appDir: true },
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
    disable: !isProd,
    runtimeCaching,
  }
})
