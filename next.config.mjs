/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/all',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
