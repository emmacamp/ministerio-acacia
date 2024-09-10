import '@/styles/globals.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react';
import { AOSInit } from '@/lib/utils/aos';

import '@/styles/tailwind.css';
import '../styles/index.css';
import '../styles/font.css';
import { cn } from '@/lib/utils';
import { Footer, Header } from '@/components';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });

export const metadata: Metadata = {
  title: 'Ministerio Acacia',
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
        <div className='w-full bg-white-a700'>
          <Header />
          <div className='flex flex-col gap-11 bg-white-a700'>
            <main>{children}</main>
          </div>
          <div className='mt-24 px-4'>
            <div className='flex justify-center bg-white-a700'>
              <div className='container-xs mb-2.5 flex justify-center md:px-5'>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
