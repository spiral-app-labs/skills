/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'http', hostname: 'www.mackeyshideout.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'framerusercontent.com' },
    ],
  },
};
export default nextConfig;
