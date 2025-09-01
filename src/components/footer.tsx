import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import { FlipWords } from "./ui/flip-words";
import { GlowingEffect } from "./ui/glowing-effect";
import RaptileLogo from "./RaptileLogo";
import ColourfulText from "./ui/colourful-text";

export default function Footer() {
  return (
    <footer className="w-full relative h-[20rem] ">
      <div
        className={cn(
          "w-full h-full bg-card/80 backdrop-blur-xl border-t border-white/20",
          "absolute inset-0"
        )}
        style={{
          boxShadow: "0 -4px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="absolute inset-0 p-3">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            borderWidth={2}
            inactiveZone={0.01}
          />
        </div>
      </div>

      <BackgroundLines className="flex items-center justify-center flex-col text-center h-full">
        <div className="py-8 relative">
          <Spotlight
            className="-top-20 -left-100 md:-left-100 md:-top-20"
            fill="white"
          />
          <div className="flex items-center justify-center gap-2 mb-2">
            <RaptileLogo />
            <h1 className="text-5xl font-bold text-foreground">
              <ColourfulText text="Reptile" />
            </h1>{" "}
          </div>
          <span className="text-xl md:text-2xl text-muted-foreground ml-5">
            <FlipWords
              words={["Fast.", "Secure.", "Limitless."]}
              duration={2000}
            />
          </span>
          <p className="text-lg md:text-xl text-muted-foreground/80 mt-4">
            © {new Date().getFullYear()} Raptile. All rights reserved.
          </p>
        </div>
      </BackgroundLines>
    </footer>
  );
}
