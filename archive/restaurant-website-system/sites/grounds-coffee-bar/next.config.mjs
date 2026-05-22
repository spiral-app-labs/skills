/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'framerusercontent.com' },
      { protocol: 'https', hostname: 'static.wixstatic.com' },
      { protocol: 'https', hostname: 'cdn10.localdatacdn.com' },
    ],
  },
};
export default nextConfig;
