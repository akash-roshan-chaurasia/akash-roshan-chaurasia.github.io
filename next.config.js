/** @type {import('next').NextConfig} */
const basePath = '/Resume';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: `${basePath}/`,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
