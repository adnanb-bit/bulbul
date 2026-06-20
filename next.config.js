/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bulbul',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
