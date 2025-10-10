import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ❌ static export 제거
  // output: 'export',
  // distDir: 'out',  ← Vercel이 자동 관리
  trailingSlash: false,
  images: {
    unoptimized: false, // ✅ Vercel의 이미지 최적화 기능 사용
  },
  reactStrictMode: true,
};

export default nextConfig;
