/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/cocktail-menu-shirleys-barrington',
        destination: '/menu',
        permanent: true,
      },
      {
        source: '/live-music-barrington-il',
        destination: '/live-music',
        permanent: true,
      },
      {
        source: '/private-parties-barrington-il',
        destination: '/parties',
        permanent: true,
      },
      {
        source: '/about-shirleys-piano-bar',
        destination: '/story',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'framerusercontent.com' },
      { protocol: 'https', hostname: 'images.squarespace-cdn.com' },
    ],
  },
};
export default nextConfig;
