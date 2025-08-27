// src/components/RaptileLogo.tsx
import { cn } from "@/lib/utils";

export default function RaptileLogo({ className }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8", className)}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#3b82f6" }} />
          <stop offset="100%" style={{ stopColor: "#8b5cf6" }} />
        </linearGradient>
      </defs>
      <path
        d="M39.6,8.4A22,22,0,0,0,24,2,22,22,0,0,0,8.4,39.6,22,22,0,0,0,39.6,8.4Z"
        fill="url(#logo-gradient)"
        opacity="0.2"
      />
      <path
        d="M38,10a20,20,0,1,0-28,28,20,20,0,0,0,28-28ZM24,36a12,12,0,1,1,12-12,12,12,0,0,1-12,12Z"
        fill="url(#logo-gradient)"
      />
      <path
        d="M26.5,20.5l-6,6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29,18l-9,9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
       <path
        d="M24,24l-3,3"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}