"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Shield, Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Writing", href: "/writing" },
    // { name: "Learning", href: "/learning" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/85 border-b border-border/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary border border-primary/20 flex items-center justify-center font-mono font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
            FM
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-foreground group-hover:text-primary transition-colors">
              Fabian Muoghalu
            </span>
            <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline-block">
              Software Engineer · Builder
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 font-medium text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-md transition-all duration-150 ${
                isActive(link.href)
                  ? "bg-secondary text-foreground font-semibold border border-border/60"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Section Actions */}
        <div className="flex items-center gap-2">
          {/* Admin Dashboard Quick Access
          <Link
            href="/admin"
            title="Admin Content Manager"
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-xs font-mono flex items-center gap-1 border border-border/50"
          >
            <Shield className="w-3.5 h-3.5 text-blue-500" />
            <span className="hidden lg:inline text-[11px]">CMS</span>
          </Link> */}

          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle visual theme"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary border border-border/50 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary border border-border/50"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-secondary text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-border flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span>Fabian Muoghalu Platform</span>
            <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="text-primary hover:underline flex items-center gap-1">
              Admin Login <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
