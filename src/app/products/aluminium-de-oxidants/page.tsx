import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function AluminiumDeOxidantsPage() {
  const specifications = [
    {
      name: "Composition",
      value: "Aluminium based compounds"
    },
    {
      name: "Shape",
      value: "Various shapes and sizes as per customer requirements"
    },
    {
      name: "Weight",
      value: "Customizable as per requirement"
    },
    {
      name: "Quality Standards",
      value: "ISO 9001-2015 certified"
    }
  ];

  const applications = [
    "Steel Manufacturing",
    "Metal Casting",
    "Foundry Applications",
    "Metal Refining",
    "Slag Deoxidation"
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="container mx-auto py-16 px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Aluminium De-Oxidants</h1>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We produce Aluminium De-Oxidants in various shapes and sizes as per the demand
                and specification of our customers. Our Aluminium De-Oxidants are widely used
                in steel manufacturing and other industrial processes for removing oxygen
                from molten metals.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                With our state-of-the-art manufacturing facility and quality control processes,
                we ensure that our Aluminium De-Oxidants meet the highest standards of quality
                and performance.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition-colors"
              >
                Contact Us <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 relative">
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://ext.same-assets.com/3934841085/4082592059.jpeg"
                  alt="Aluminium De-Oxidants"
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
                  <h3 className="font-semibold text-gray-800 mb-2">Efficient Deoxidation</h3>
                  <p className="text-gray-600">Our de-oxidants provide effective removal of oxygen from molten metals.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold text-gray-800 mb-2">Customizable Shapes</h3>
                  <p className="text-gray-600">We offer customized shapes and sizes as per specific requirements.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold text-gray-800 mb-2">High Quality</h3>
                  <p className="text-gray-600">Our products undergo rigorous quality control to ensure consistent performance.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold text-gray-800 mb-2">Consistent Results</h3>
                  <p className="text-gray-600">Achieve consistent and reliable deoxidation results in metal processing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Manufacturing Process
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative h-[350px] w-full">
                <Image
                  src="https://ext.same-assets.com/3934841085/590280325.jpeg"
                  alt="Manufacturing Process"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <span>1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Raw Material Selection</h3>
                    <p className="text-gray-600">Careful selection of high-quality raw materials.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <span>2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Processing</h3>
                    <p className="text-gray-600">Advanced processing techniques to ensure proper composition.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <span>3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Forming</h3>
                    <p className="text-gray-600">Shaping the material into required forms and sizes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <span>4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Quality Control</h3>
                    <p className="text-gray-600">Rigorous quality checks to ensure product consistency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-red-500 text-white py-12">
        <div className="container mx-auto px-4 lg:px-0 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in our Aluminium De-Oxidants?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements or request a quote.
            Our team is ready to assist you with all your de-oxidant needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us"
              className="bg-white text-red-500 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/contact-us"
              className="bg-transparent border border-white text-white px-6 py-3 rounded font-medium hover:bg-white hover:text-red-500 transition-colors"
            >
              Get More Information
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
