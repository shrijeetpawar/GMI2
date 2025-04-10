import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactUsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="container mx-auto py-16 px-4 lg:px-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h1>
        </div>
      </section>

      {/* Address Tabs Section */}
      <section className="w-full bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <button
                className="w-full py-4 px-6 bg-red-500 text-white text-left font-bold"
              >
                Head Office Address
              </button>
            </div>
            <div className="flex-1">
              <button
                className="w-full py-4 px-6 bg-white text-gray-700 text-left font-bold border-b border-gray-200"
              >
                Plant Address
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact Info Section */}
      <section className="w-full bg-white py-10">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Details */}
            <div className="lg:w-1/3">
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-red-500 mt-1 mr-3" size={20} />
                  <div>
                    <h3 className="text-red-500 font-medium text-lg">Ganpati Metal Industries</h3>
                    <p className="text-gray-700">
                      G-24,<br />
                      MIDC waluj, Chh sambhajinagar - 431001,<br />
                      Maharashtra, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaPhone className="text-red-500 mr-3" size={18} />
                  <a href="tel:+912228614546" className="text-gray-700 hover:text-red-500">
                    +91 1234567890
                  </a>
                </div>

                <div className="flex items-center">
                  <FaPhone className="text-red-500 mr-3" size={18} />
                  <a href="tel:+912228614547" className="text-gray-700 hover:text-red-500">
                    +91 1234567890
                  </a>
                </div>

                <div className="flex items-center">
                  <FaEnvelope className="text-red-500 mr-3" size={18} />
                  <a href="mailto:info@ganpatimetalindustries.com" className="text-gray-700 hover:text-red-500">
                    info@ganpatimetalindustries.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:w-2/3">
              <div className="relative h-[400px] w-full border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.6978430370536!2d72.84099731489765!3d19.20503408701854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7e56c77f23f%3A0xef8adfbeb5a0c359!2sJyoti%20Plaza%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra%20400067!5e0!3m2!1sen!2sin!4v1649271682789!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
