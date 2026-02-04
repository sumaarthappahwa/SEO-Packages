import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Do Digital Marketing | Specialized SEO, AEO & GEO Packages for SMEs',
  description: 'High-performance SEO, AO, and GO packages for SMEs, manufacturers, and exporters. Boost local and global visibility with tailored marketing strategies.',
  keywords: 'SEO Packages for SMEs, Manufacturing SEO, Exporter Marketing, Local Business SEO, AEO Services, GEO Strategy, Do Digital Marketing',
  openGraph: {
    title: 'Do Digital Marketing | Professional SEO, AO & GO Packages',
    description: 'Dominate search results with specialized packages for Manufacturers and Exporters.',
    url: 'https://www.dodigital.marketing',
    siteName: 'Do Digital Marketing',
    images: [
      {
        url: 'https://www.dodigital.marketing/images/home/dodigital.marketing-logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    brand: {
                      DEFAULT: '#23a39a',
                      light: '#e9f6f5',
                      dark: '#1c827b',
                    }
                  }
                }
              }
            }
          `
        }} />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
