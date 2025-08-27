"use client";

import { useState, useEffect } from "react";
import {
  Wallet,
  User,
  LayoutGrid,
  History,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const navLinks = [
    { href: "#", label: "Home", icon: LayoutGrid },
    { href: "#", label: "Wallet", icon: Wallet },
    { href: "#", label: "History", icon: History },
    { href: "#", label: "Profile", icon: User },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-50 w-full p-4 transition-all duration-300">
      <div 
        className={cn(
          "max-w-screen-2xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 rounded-2xl border-white/40 transition-all duration-300",
          scrolled ? "bg-card/80 backdrop-blur-xl" : "bg-transparent border-transparent"
        )}
        style={{
          boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="flex items-center gap-2">
          <Wallet className="h-7 w-7 text-primary" />
          <h1 className="text-xl font-bold text-foreground">Raptile</h1>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
                <Button variant="ghost" asChild key={link.label}>
                    <Link href={link.href}>
                        <link.icon className="mr-2 h-4 w-4" />
                        {link.label}
                    </Link>
                </Button>
            ))}
        </nav>
        
        <div className="hidden md:flex items-center">
            <Button onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
            </Button>
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
                        {navLinks.map((link) => (
                            <Button variant="ghost" asChild key={link.label}>
                                <Link href={link.href} className="text-white">
                                    <link.icon className="mr-2 h-4 w-4" />
                                    {link.label}
                                </Link>
                            </Button>
                        ))}
                        <Button onClick={handleLogout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
