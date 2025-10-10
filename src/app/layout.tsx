import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HD현대건설기계 장비 체크리스트',
  description: '장비를 점검하고 관리하는 체크리스트 애플리케이션입니다.',
  icons: [
    { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    { url: '/hdce-logo.png', sizes: '192x192', type: 'image/png' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="bg-gray-100">
      <body className="antialiased max-w-2xl mx-auto">{children}</body>
    </html>
  );
}
