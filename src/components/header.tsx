"use client";

import { useState, useEffect, useRef } from "react";
import { Wallet, User, LayoutGrid, History, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import RaptileLogo from "./RaptileLogo";
import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";

const navLinks = [
  { href: "#", label: "Home", icon: LayoutGrid },
  { href: "#", label: "Wallet", icon: Wallet },
  { href: "#", label: "History", icon: History },
  { href: "#", label: "Profile", icon: User },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeLink = navRef.current?.querySelector(
      `[data-label="${activeTab}"]`
    ) as HTMLElement;
    if (activeLink) {
      setIndicatorStyle({
        left: `${activeLink.offsetLeft}px`,
        width: `${activeLink.offsetWidth}px`,
      });
    }
  }, [activeTab]);

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full p-4 transition-all duration-300">
      <div
        className={cn(
          "max-w-screen-2xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 rounded-2xl border-white/40 transition-all duration-300",
          scrolled
            ? "bg-card/80 backdrop-blur-xl"
            : "bg-transparent border-transparent"
        )}
        style={{
          boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="flex items-center gap-2">
          <RaptileLogo />
          <h1 className="text-xl font-bold text-foreground">
            <ColourfulText text="Reptile" />
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-2 relative"
          ref={navRef}
        >
          {navLinks.map((link) => (
            <Button
              variant="ghost"
              asChild
              key={link.label}
              data-label={link.label}
              onClick={() => setActiveTab(link.label)}
              className={cn(
                "transition-colors duration-300 relative z-10 px-4 py-2 hover:bg-transparent",
                activeTab === link.label
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              )}
            >
              <Link href={link.href} className="relative flex items-center">
                <link.icon className="mr-2 h-4 w-4" />
                {link.label}
                {activeTab === link.label && (
                  <span className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
                    <SparklesCore
                      background="transparent"
                      minSize={0.4}
                      maxSize={1}
                      particleDensity={120}
                      className="w-full h-full"
                      particleColor="#FFFFFF"
                    />
                  </span>
                )}
              </Link>
            </Button>
          ))}
          {activeTab && (
            <motion.div
              className="absolute h-full rounded-full -z-10"
              layoutId="active-nav-indicator"
              initial={false}
              animate={indicatorStyle}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <div className="absolute inset-auto z-30 h-12 w-full rounded-full bg-[#e43f5a] blur-xl"></div>
              <div className="absolute inset-auto z-50 h-0.5 w-full bg-[#e43f5a]"></div>
            </motion.div>
          )}
        </nav>

        <div className="hidden md:flex items-center">
          <HoverBorderGradient
            as="button"
            onClick={handleLogout}
            containerClassName="rounded-full"
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#e43f5a] to-[#e43f5a] text-white dark:bg-black dark:text-white"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </HoverBorderGradient>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card/80 backdrop-blur-xl">
              <div className="flex flex-col gap-4 py-8">
                {/* Logo and colourful text at the top, aligned with close icon */}
                <div className="flex items-center justify-between mb-6 px-2">
                  <div className="flex items-center gap-2">
                    <RaptileLogo className="h-8 w-8" />
                    <span className="text-xl font-bold">
                      <ColourfulText text="Reptile" />
                    </span>
                  </div>
                  {/* The close icon is handled by SheetContent internally */}
                </div>
                {/* Nav links */}
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <div key={link.label} className="relative">
                      {activeTab === link.label && (
                        <>
                          {/* Lamp effect (blurred) */}
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-32 rounded-l-full bg-[#e43f5a] blur-2xl opacity-60 transition-all duration-300" style={{ zIndex: 0 }} />
                          {/* Vertical line */}
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-1 rounded-full bg-[#e43f5a] opacity-90 transition-all duration-300" style={{ zIndex: 1 }} />
                        </>
                      )}
                      <Button
                        variant="ghost"
                        asChild
                        data-label={link.label}
                        onClick={() => setActiveTab(link.label)}
                        className={cn(
                          "relative flex flex-row items-center justify-start py-3 px-2 text-lg w-full",
                          activeTab === link.label ? "text-white font-bold" : "text-white/80 hover:text-white"
                        )}
                      >
                        <Link href={link.href} className="flex items-center w-full">
                          <link.icon className="mr-2 h-5 w-5" />
                          {link.label}
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
                {/* Removed bar lamp effect under all tabs; now lamp is under active tab only */}
                <HoverBorderGradient
                  as="button"
                  onClick={handleLogout}
                  containerClassName="rounded-full"
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#e43f5a] to-[#e43f5a] text-white dark:bg-black dark:text-white"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </HoverBorderGradient>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
