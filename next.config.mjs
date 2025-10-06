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
  },
  // Enable static export for Firebase Hosting
  output: 'export',
  // Optional: Set the output directory (default is 'out')
  // distDir: 'out',
}

export default nextConfig
