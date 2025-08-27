import React from 'react';
import { BackgroundLines } from './ui/background-lines';
import { cn } from '@/lib/utils';
import { Spotlight } from './ui/spotlight';

export default function Footer() {
  return (
    <footer 
      className="w-full relative h-[20rem] mt-12"
    >
      <div className={cn(
        "w-full h-full bg-card/80 backdrop-blur-xl border-t border-white/20",
         "absolute inset-0"
      )} style={{
        boxShadow: "0 -4px 30px rgba(0, 0, 0, 0.1)",
      }}>
      </div>
      <BackgroundLines
        className="flex items-center justify-center flex-col text-center h-full"
      >
        <div className="py-8 relative">
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20"
              fill="white"
            />
            <p className="text-4xl md:text-5xl font-bold tracking-wider text-foreground">Raptile</p>
            <p className="text-xl md:text-2xl text-muted-foreground">Fast. Secure. Limitless.</p>
            <p className="text-lg md:text-xl text-muted-foreground/80 mt-4">
            © {new Date().getFullYear()} Raptile. All rights reserved.
            </p>
        </div>
      </BackgroundLines>
    </footer>
  );
}
