import { DM_Sans, Inter, Plus_Jakarta_Sans, Work_Sans } from 'next/font/google';

export const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const inter = Inter({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-primary',
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const workSans = Work_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});
