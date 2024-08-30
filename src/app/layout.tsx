import '@/styles/globals.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react';
import { AOSInit } from '@/lib/utils/aos';

import '@/styles/tailwind.css';
import '../styles/index.css';
import '../styles/font.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });

export const metadata: Metadata = {
  title: 'Inicio | Ministerio Acacia',
  description: '',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#000000' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <AOSInit />
      <body className={cn(inter.variable, 'font-primary')} suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
