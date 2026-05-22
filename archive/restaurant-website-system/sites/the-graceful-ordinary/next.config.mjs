/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Unsplash remains allowed for template fallback photography.
      { protocol: 'https', hostname: 'images.unsplash.com' },
      // The Graceful Ordinary official Webflow/CDN assets captured from the public site.
      { protocol: 'https', hostname: 'cdn.prod.website-files.com' },
    ],
  },
};
export default nextConfig;
