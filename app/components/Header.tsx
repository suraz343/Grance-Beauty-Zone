"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";



const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/offers", label: "Offers" },
  { href: "/blog", label: "Blog" },
  { href: "/tour", label: "Virtual Tour" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white border-b top-0 z-50 relative">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center shadow">
        <Link href="/" className="text-sm md:text-2xl font-bold text-pink-500">
          Grance Beauty Zone
          <p className="text-sm md:text-xs text-pink-400">Parasi-3 NawalParasi</p>
        </Link>
        

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-blue-600 transition ${
                pathname === item.href ? "text-blue-600 font-semibold" : "text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/book" className="px-4 py-2 bg-yellow-400 text-white rounded-lg">
            Book Now
          </Link>
          <Link href="/register" className="px-4 py-2 bg-green-400 text-white rounded-lg">
            Register
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden px-4 py-2 bg-white border-t">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-2 hover:text-blue-600 transition ${
                pathname === item.href ? "text-blue-600 font-semibold" : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="block text-center py-2 mt-2 bg-yellow-400 text-white rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
        </nav>
      )}
    </header>
  );
}
