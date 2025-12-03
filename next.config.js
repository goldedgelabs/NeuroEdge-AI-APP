/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },

  // Add this so that API route handlers & server files work predictably
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
  },
};

module.exports = nextConfig;
