import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-8 text-center">
      <div className="container mx-auto">
        <p className="text-lg font-bold tracking-wider text-foreground">Raptile</p>
        <p className="text-sm text-muted-foreground">Fast. Secure. Limitless.</p>
        <p className="text-xs text-muted-foreground/80 mt-4">
          © {new Date().getFullYear()} Raptile. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
