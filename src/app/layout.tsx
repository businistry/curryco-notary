import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Curry & Co Services LLC - Professional Document Authentication & Business Solutions',
  description: 'From expert notary services to strategic consulting and operational optimization, we deliver comprehensive solutions that drive your business forward.',
  keywords: ['notary services', 'apostille', 'loan signing', 'business consulting', 'St. Louis', 'Missouri'],
  authors: [{ name: 'Curry & Co Services LLC' }],
  openGraph: {
    title: 'Curry & Co Services LLC',
    description: 'Professional notary and business consulting services',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GA_ID,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}