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

const navLinks = [
    { href: "#", label: "Home", icon: LayoutGrid },
    { href: "#", label: "Wallet", icon: Wallet },
    { href: "#", label: "History", icon: History },
    { href: "#", label: "Profile", icon: User },
];


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full p-4">
      <div 
        className="max-w-screen-2xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 rounded-2xl border-white/40"
        style={{
            background: "rgba(255, 255, 255, 0.22)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(1.5px)",
          }}
      >
        <div className="flex items-center gap-2">
          <Wallet className="h-7 w-7 text-primary" />
          <h1 className="text-xl font-bold text-foreground">NovaPay</h1>
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
            <Button>
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
                <SheetContent side="right">
                    <div className="flex flex-col gap-4 py-8">
                        {navLinks.map((link) => (
                            <Button variant="ghost" asChild key={link.label}>
                                <Link href={link.href}>
                                    <link.icon className="mr-2 h-4 w-4" />
                                    {link.label}
                                </Link>
                            </Button>
                        ))}
                        <Button>
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