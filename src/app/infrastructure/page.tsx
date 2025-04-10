import React from "react";
import Image from "next/image";

export default function InfrastructurePage() {
  const facilities = [
    "Purchase & Imports",
    "Inward R.M. QC",
    "Production",
    "Quality Control",
    "Maintenance",
    "Stores, Logistics & Utilities",
    "Office Administration & Security"
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Infrastructure Hero Section */}
      <section className="w-full bg-white">
        <div className="container mx-auto py-16 px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row">
            {/* Text Content */}
            <div className="lg:w-1/2 pr-0 lg:pr-12 mb-8 lg:mb-0">
              <h1 className="text-3xl font-bold text-gray-800 mb-8">Infrastructure</h1>
              <p className="text-gray-700 mb-6 leading-relaxed">
                In the year 2012, we relocated our manufacturing facilities to Wada, which is an
                industrial hub with all infrastructural facilities about 70 kms. from Mumbai, the Industrial
                Capital of India. Our facilities are spread over an area of approx 20,500 Sq. Mtrs. with
                adequate covered sheds for manufacturing facilities, raw material and finished goods
                storage, quality control, maintenance, stores, utilities and office area.
              </p>
            </div>

            {/* Image Container */}
            <div className="lg:w-1/2 relative">
              <div className="relative w-full h-[400px] bg-red-500">
                <Image
                  src="https://ext.same-assets.com/3934841085/824881068.jpeg"
                  alt="Ganpati Metal Industries Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-red-500 w-5/12 h-32 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Our Facilities are Mainly Grouped as Under
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={`facility-${index}`}
                className="p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{facility}</h3>
                <p className="text-gray-600">
                  Our {facility.toLowerCase()} facility is equipped with state-of-the-art technology to ensure efficient operations and high-quality products.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4 lg:px-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Infrastructure Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={`gallery-image-${item}`}
                className="relative h-[220px] border border-gray-200 overflow-hidden group"
              >
                <Image
                  src={`https://ext.same-assets.com/3934841085/${item === 1 ? '824881068' : item === 2 ? '2278619290' : item === 3 ? '4082592059' : '590280325'}.jpeg`}
                  alt={`Ganpati Metal Industries Infrastructure ${item}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-red-500 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
