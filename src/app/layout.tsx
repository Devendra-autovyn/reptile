import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'NovaPay - Modern Finance',
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
        className="font-body antialiased dark"
      >
        <BackgroundGradientAnimation
          gradientBackgroundStart="hsl(var(--background))"
          gradientBackgroundEnd="hsl(240, 50%, 85%)" // Light sky blue tone
          firstColor="255, 230, 230" // Lavender tone
          secondColor="204, 204, 255" // Periwinkle tone
          thirdColor="173, 216, 230" // Light sky blue
          fourthColor="230, 230, 250" // Lavender
          fifthColor="204, 204, 255" // Periwinkle
          pointerColor="230, 230, 250" // Lavender
          containerClassName="fixed top-0 left-0 w-screen h-screen -z-10"
        >
        </BackgroundGradientAnimation>
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
