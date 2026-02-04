import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Do Digital Marketing | Precision SEO, AEO & GEO for Manufacturers & SMEs',
  description: 'Specialized SEO packages for manufacturers, exporters, and local businesses. Dominate search with Answer Engine & Generative Optimization.',
  viewport: 'width=device-width, initial-scale=1',
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
      <body className="bg-slate-50 text-slate-900 antialiased selection:bg-brand/10 selection:text-brand-dark">
        {children}
      </body>
    </html>
  );
}
