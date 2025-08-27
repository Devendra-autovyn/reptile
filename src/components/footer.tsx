"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export default function Footer() {
  return (
    <footer className="relative mt-12">
      <WavyBackground
        className="w-full"
        containerClassName="h-48"
        colors={["#3b82f6", "#8b5cf6", "#e11d48", "#fde047"]}
        backgroundFill="transparent"
        blur={5}
        speed="slow"
        waveOpacity={0.8}
        waveWidth={30}
      >
        <p className="text-xl md:text-2xl lg:text-3xl text-white font-bold text-center">
          NovaPay
        </p>
        <p className="text-sm md:text-base mt-4 text-white font-normal text-center">
          © {new Date().getFullYear()} NovaPay. All rights reserved.
        </p>
      </WavyBackground>
    </footer>
  );
}
