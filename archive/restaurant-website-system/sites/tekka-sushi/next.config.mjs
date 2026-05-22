/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Allow Framer CDN as a placeholder source for the catalog reference.
      // Forks should self-host their own restaurant photos in /public.
      { protocol: 'https', hostname: 'framerusercontent.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};
export default nextConfig;
