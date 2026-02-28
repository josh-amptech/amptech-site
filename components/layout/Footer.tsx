import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo + tagline */}
          <div>
            <p className="text-xl font-bold tracking-tight">AMPTECH</p>
            <p className="text-sm text-gray-400 mt-1">Your idea, engineered.</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            <Link
              href="/services"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/work"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AmpTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
