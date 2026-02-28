"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-brand-black"
          >
            AMPTECH
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/services"
              className="text-sm font-medium text-brand-gray hover:text-brand-black transition-colors"
            >
              Services
            </Link>
            <Link
              href="/work"
              className="text-sm font-medium text-brand-gray hover:text-brand-black transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-brand-gray hover:text-brand-black transition-colors"
            >
              About
            </Link>
            <Button
              href="/contact"
              variant="primary"
              data-umami-event="nav-cta-click"
            >
              Book a Discovery Call
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-brand-black"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div
              className={`w-5 h-0.5 bg-brand-black transition-transform duration-200 ${menuOpen ? "translate-y-1.5 rotate-45" : "mb-1.5"}`}
            />
            <div
              className={`w-5 h-0.5 bg-brand-black transition-opacity duration-200 ${menuOpen ? "opacity-0" : "mb-1.5"}`}
            />
            <div
              className={`w-5 h-0.5 bg-brand-black transition-transform duration-200 ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100">
            <nav className="flex flex-col gap-5">
              <Link
                href="/services"
                className="text-sm font-medium text-brand-gray"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/work"
                className="text-sm font-medium text-brand-gray"
                onClick={() => setMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-brand-gray"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <div>
                <Button
                  href="/contact"
                  variant="primary"
                  onClick={() => setMenuOpen(false)}
                >
                  Book a Discovery Call
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
