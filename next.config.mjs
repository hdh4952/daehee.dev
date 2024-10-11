/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/absproxy/3000',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
