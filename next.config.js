/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.mwtassistant.com',
      'mwt-assistant-92593.web.app',
      'mwt-assistant-92593.firebaseapp.com',
      'firebasestorage.googleapis.com',
      'lh3.googleusercontent.com',
      'i.ytimg.com',
      'yt3.ggpht.com',
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { 
      exclude: ['error'] 
    } : false,
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()',
        },
      ],
    },
  ],
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/your-discord-invite',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/mwtassistant',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
