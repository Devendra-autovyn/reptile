import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Raptile - Fast, Secure, Limitless',
  description: 'Your modern solution for instant payments, bill splitting, and secure savings.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body 
        className="font-body antialiased bg-cover bg-center bg-fixed dark"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1538438253625-50a9d7188703?q=80&w=2070&auto=format&fit=crop')" }}
        data-ai-hint="abstract background"
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
