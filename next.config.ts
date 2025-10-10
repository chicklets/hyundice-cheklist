import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repo = 'hyundice-cheklist';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
};

export default nextConfig;
