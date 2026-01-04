/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  images: {
    unoptimized: true,
    domains: [
      'pagead2.googlesyndication.com',
      'googleads.g.doubleclick.net',
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",

              // Scripts
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://encouragementglutton.com https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com",

              // Styles
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",

              // Images
              "img-src 'self' data: https:",

              // Network / API calls
              "connect-src 'self' https://firebase.googleapis.com https://*.google-analytics.com https://*.google.com https://*.gstatic.com",

              // Iframes (ads)
              "frame-src https://encouragementglutton.com https://googleads.g.doubleclick.net https://tpc.googlesyndication.com",

              // Fonts
              "font-src 'self' https://fonts.gstatic.com data:",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

// ads.txt redirect stays unchanged
const nextConfigWithRedirects = {
  ...nextConfig,
  async redirects() {
    return [
      {
        source: '/ads.txt',
        destination: 'https://srv.adstxtmanager.com/19390/mwtassistant.com',
        permanent: true,
      },
    ];
  },
};

export default nextConfigWithRedirects;
