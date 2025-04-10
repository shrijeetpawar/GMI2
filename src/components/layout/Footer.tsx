import React from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFileAlt
} from "react-icons/fa";

const productLinks = [
  { name: "Aluminium Alloy Ingots", href: "/products/aluminium-alloy-ingots" },
  { name: "Aluminium De-Oxidants", href: "/products/aluminium-de-oxidants" },
];

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white text-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Address */}
        <div>
          <h3 className="text-base font-semibold text-red-500 mb-2">Ganpati Metal Industries</h3>
          <div className="flex items-start text-gray-400">
            <FaMapMarkerAlt className="mt-1 text-red-500 mr-2" />
            <p className="leading-snug">
              Ganpati metal Industries G-24,<br />
              MIDC waluj,<br />
              Chh sambhajinagar - 431001, Maharashtra, India.
            </p>
          </div>
        </div>

        {/* Phone & Email - Aligned lower */}
        <div className="flex flex-col justify-center pt-4 space-y-2 text-gray-400">
          <div className="flex items-center">
            <FaPhone className="text-red-500 mr-2" />
            <a href="tel:+911234567890" className="hover:text-white">+91 1234567890</a>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-red-500 mr-2" />
            <a href="mailto:info@ganpatimetalindustries.com" className="hover:text-white">
              info@ganpatimetalindustries.com
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-base font-semibold text-red-500 mb-2">Products</h3>
          <ul className="space-y-1">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-400 hover:text-white">
                  • {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Downloads / Enquiry */}
        <div className="space-y-3">
          <a
            href="/brochure.pdf"
            download
            className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
          >
            <FaFileAlt className="mr-2" />
            Download Brochure
          </a>
          <Link
            href="/contact-us#enquiry"
            className="block text-red-400 hover:text-white underline"
          >
            Enquire Now
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-700 py-3 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ganpati Metal Industries. All rights reserved.
      </div>
    </footer>
  );
}
