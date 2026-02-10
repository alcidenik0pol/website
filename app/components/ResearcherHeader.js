"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "Investments", path: "/investments" },
  { title: "Engineering", path: "/engineering" },
  { title: "Art", path: "https://art-gallery-ext.vercel.app/", external: true },
  { title: "Publications", path: "/publications" },
];

export default function ResearcherHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border sticky top-0 bg-background z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-lg font-light tracking-tight">
            Victor Tenneroni
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 text-sm">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.title}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  key={link.title}
                  href={link.path}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.title}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-4">
            <div className="flex flex-col gap-4 text-sm">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.title}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </a>
                ) : (
                  <Link
                    key={link.title}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
