import React from 'react';
import { BackgroundLines } from './ui/background-lines';

export default function Footer() {
  return (
    <footer className="w-full relative">
      <BackgroundLines
        className="flex items-center justify-center flex-col text-center"
      >
        <div className="py-8">
            <p className="text-lg font-bold tracking-wider text-foreground">Raptile</p>
            <p className="text-sm text-muted-foreground">Fast. Secure. Limitless.</p>
            <p className="text-xs text-muted-foreground/80 mt-4">
            © {new Date().getFullYear()} Raptile. All rights reserved.
            </p>
        </div>
      </BackgroundLines>
    </footer>
  );
}
