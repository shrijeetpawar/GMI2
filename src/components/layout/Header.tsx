"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Contact Us", href: "/contact-us" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 lg:px-0">
        {/* Logo + Company Name */}
        <Link href="/" className="flex flex-col items-start leading-tight">
          <Image
            src="/images/logo.png"
            alt="Ganpati Metal Industries"
            width={120}
            height={35}
            className="h-auto"
          />
          <span className="text-xs text-gray-600 font-medium">
            Ganpati Metal Industries
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          <ul className="flex space-x-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-3 py-2 text-gray-700 font-medium hover:text-red-500 relative group text-sm"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4">
          <ul className="flex flex-col space-y-2 px-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
