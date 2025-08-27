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
        d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4Z"
        stroke="url(#logo-gradient)"
        strokeWidth="4"
      />
      <path
        d="M21 16H31L23 24L31 32H21L13 24L21 16Z"
        fill="url(#logo-gradient)"
      />
    </svg>
  );
}
