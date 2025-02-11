import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const notoSansKr = Noto_Sans_KR({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" className="overflow-y-scroll scrollbar-hide">
      <body className={`${notoSansKr.className} bg-white dark:bg-black3`}>
        <Header />
        <main className="flex w-full flex-col items-center justify-start pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
