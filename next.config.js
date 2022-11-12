/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/games/free',
        permanent: false,
      }
    ]
  }
}

module.exports = nextConfig
