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
  title: 'Reptile',
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
          gradientBackgroundStart="rgb(27, 27, 47)"
          gradientBackgroundEnd="rgb(31, 64, 104)"
          firstColor="31, 64, 104"
          secondColor="228, 63, 90"
          thirdColor="233, 69, 96"
          fourthColor="27, 27, 47"
          fifthColor="31, 64, 104"
          pointerColor="228, 63, 90"
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
