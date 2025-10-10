import type { NextConfig } from 'next';

const repo = 'hyundice-cheklist';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
