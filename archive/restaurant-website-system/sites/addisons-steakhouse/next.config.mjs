/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Unsplash hotlinks for placeholder photography. Forks should self-host
      // restaurant-supplied photos in /public.
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};
export default nextConfig;
