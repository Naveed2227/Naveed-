/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['pagead2.googlesyndication.com', 'googleads.g.doubleclick.net'],
  },
  // Enable static export for Firebase Hosting
  output: 'export',
  // Optional: Set the output directory (default is 'out')
  // distDir: 'out',
  
  // Add Content Security Policy for AdSense
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https://*.google.com https://*.gstatic.com https://*.google-analytics.com https://*.googletagmanager.com https://*.googleapis.com https://*.doubleclick.net https://*.googleadservices.com https://pagead2.googlesyndication.com",
              "connect-src 'self' https://*.google-analytics.com https://*.google.com https://*.gstatic.com https://pagead2.googlesyndication.com https://*.doubleclick.net",
              "frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://pagead2.googlesyndication.com https://www.google.com",
              "font-src 'self' https://fonts.gstatic.com data:",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
