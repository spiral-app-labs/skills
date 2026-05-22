/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'framerusercontent.com' },
      { protocol: 'https', hostname: 'portedward.com' },
      { protocol: 'https', hostname: 'www.portedward.com' },
      { protocol: 'https', hostname: 'i0.wp.com' },
    ],
  },
};
export default nextConfig;
