/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    domains: [],
  },
  compress: true,
  poweredByHeader: false,
}

export default nextConfig;
