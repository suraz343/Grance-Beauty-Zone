"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
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
    <header className="bg-gray-900 shadow-lg top-0 w-full z-50 fixed">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Grance Beauty Zone Logo" width={50} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-yellow-400 transition ${
                pathname === item.href ? "text-yellow-400 font-semibold" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/book" className="px-4 py-2 bg-yellow-500 text-white rounded-lg">
            Book Now
          </Link>
          <Link href="/register" className="px-4 py-2 bg-green-500 text-white rounded-lg">
            Register
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden px-4 py-2 bg-gray-900 border-t">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-2 hover:text-yellow-400 transition ${
                pathname === item.href ? "text-yellow-400 font-semibold" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="block text-center py-2 mt-2 bg-yellow-500 text-white rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
          <Link
            href="/register"
            className="block text-center py-2 mt-2 bg-green-500 text-white rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Register
          </Link>
        </nav>
      )}
    </header>
  );
}
