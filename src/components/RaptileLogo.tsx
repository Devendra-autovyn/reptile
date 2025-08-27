// src/components/RaptileLogo.tsx
import { cn } from "@/lib/utils";
import './RaptileLogo.css';

export default function RaptileLogo({ className }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8", className)}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#3b82f6" }} />
          <stop offset="100%" style={{ stopColor: "#8b5cf6" }} />
        </linearGradient>
      </defs>
      
      {/* Main Body/Head */}
      <path
        d="M50 10 C 30 20, 30 40, 50 50 C 70 40, 70 20, 50 10 Z"
        fill="url(#logo-gradient)"
      />
      
      {/* Wings */}
      <path
        d="M50 45 C 20 30, 10 50, 30 70 L 50 55 Z"
        fill="url(#logo-gradient)"
        opacity="0.8"
      />
      <path
        d="M50 45 C 80 30, 90 50, 70 70 L 50 55 Z"
        fill="url(#logo-gradient)"
        opacity="0.8"
      />

      {/* Tail / Stinger */}
      <g className="tail-group">
        <path
          d="M50 50 Q 50 80, 55 95"
          stroke="url(#logo-gradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
