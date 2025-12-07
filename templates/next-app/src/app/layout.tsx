import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';

import { geistSans, geistMono } from '@/assets/fonts';

import AppProvider from '@/providers/app-provider';

import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Stylish Next App',
  description: 'Make your next app stylish',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
