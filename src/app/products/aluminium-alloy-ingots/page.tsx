import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function AluminiumAlloyIngotsPage() {
  const specifications = [
    {
      name: "Composition",
      value: "Various grades conforming to BS, IS, JIS, DIN and ASTM standards"
    },
    {
      name: "Shape",
      value: "Rectangular Ingots"
    },
    {
      name: "Weight",
      value: "5-10 kg per ingot"
    },
    {
      name: "Purity",
      value: "99.5% - 99.9% depending on grade"
    },
    {
      name: "Quality Standards",
      value: "ISO 9001-2015 certified"
    }
  ];

  const applications = [
    "Automotive Components",
    "General Engineering",
    "Electrical Components",
    "Railways",
    "Defence Applications",
    "Construction"
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="container mx-auto py-16 px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Aluminium Alloy Ingots</h1>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are an ISO 9001-2015 certified company manufacturing Aluminium Alloy Ingots as per
                the national and international standards. We manufacture Aluminium Alloys conforming to
                BS, IS, JIS, DIN and ASTM standards. We also manufacture Aluminium Alloys conforming to
                customer specific compositions.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our Aluminium Alloy Ingots are known for their high quality, consistency, and adherence
                to international standards. They are used in various industries including automotive,
                general engineering, electrical, and more.
              </p>
              <Link
                href="/contact-us#enquiry"
                className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition-colors"
              >
                Request Quote <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 relative">
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://ext.same-assets.com/3934841085/2278619290.jpeg"
                  alt="Aluminium Alloy Ingots"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Product Specifications</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-red-500 text-white">
                  <th className="border p-4 text-left">Specification</th>
                  <th className="border p-4 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <tr key={`spec-${index}`} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="border p-4 font-medium">{spec.name}</td>
                    <td className="border p-4">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Applications</h2>
              <ul className="space-y-3">
                {applications.map((app, index) => (
                  <li key={`app-${index}`} className="flex items-center">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Benefits</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold text-gray-800 mb-2">High Quality</h3>
                  <p className="text-gray-600">Our ingots are made using high-quality raw materials and undergo strict quality control processes.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold text-gray-800 mb-2">Consistency</h3>
                  <p className="text-gray-600">We ensure consistent composition and quality across all batches.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold text-gray-800 mb-2">Customization</h3>
                  <p className="text-gray-600">We can produce aluminium alloys as per customer-specific compositions.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold text-gray-800 mb-2">International Standards</h3>
                  <p className="text-gray-600">Our products conform to BS, IS, JIS, DIN and ASTM standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-red-500 text-white py-12">
        <div className="container mx-auto px-4 lg:px-0 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in our Aluminium Alloy Ingots?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements or request a quote.
            Our team is ready to assist you with all your aluminium alloy needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us"
              className="bg-white text-red-500 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/contact-us#enquiry"
              className="bg-transparent border border-white text-white px-6 py-3 rounded font-medium hover:bg-white hover:text-red-500 transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
