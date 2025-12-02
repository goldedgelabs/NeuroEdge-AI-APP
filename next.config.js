/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
})
