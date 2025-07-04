import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'AI 요약기',
  description: '입력된 글을 AI가 자동 요약해줍니다.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}