"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "How We Work" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      pathname === href
        ? "amp-bolt-bar text-white"
        : "text-white/72 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-amp-ink/80 text-white backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="AmpTech home">
            <Image
              src="/logo-light.png"
              alt="AmpTech"
              width={985}
              height={174}
              className="h-8 w-auto brightness-0 invert"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={linkClass(link.href)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href="/contact"
              variant="primary"
              className="px-5 py-2.5"
              data-umami-event="nav-cta-click"
            >
              Book A Call
            </Button>
          </nav>

          <button
            className="p-2 text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div
              className={`h-0.5 w-5 bg-white transition-transform duration-200 ${menuOpen ? "translate-y-1.5 rotate-45" : "mb-1.5"}`}
            />
            <div
              className={`h-0.5 w-5 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : "mb-1.5"}`}
            />
            <div
              className={`h-0.5 w-5 bg-white transition-transform duration-200 ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 py-6 md:hidden">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={linkClass(link.href)}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div>
                <Button
                  href="/contact"
                  variant="primary"
                  className="w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Book A Call
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
