import React from "react";
import Image from "next/image";

export default function AboutUsPage() {
  const qualities = [
    {
      title: "Quality Products",
      description: "We maintain strict quality control procedures to meet the highest standards."
    },
    {
      title: "Experienced Team",
      description: "Our team has decades of experience in the aluminium industry."
    },
    {
      title: "Customer Focus",
      description: "We work closely with our customers to meet their specific requirements."
    },
    {
      title: "ISO Certified",
      description: "We are an ISO 9001-2015 certified company committed to quality management."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="container mx-auto py-16 px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold text-gray-800 mb-8">About Us</h1>
              <h2 className="text-xl text-gray-600 mb-4">Aluminium For The Future Generations</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ganpati Metal Industries was incorporated in the year 2010 under the strong leadership
                of Shri. N.D. Savant. He laid the foundation of our business and played a crucial part
                in helping us grow. We produce varied grades of Aluminium Alloy Ingots and Aluminium
                De-Oxidants to meet the requirements of different industries.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our commitment to quality, innovation and customer satisfaction has helped us establish
                a strong presence in the industry. We continuously invest in advanced technology and
                processes to deliver products that meet the highest quality standards.
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/images/MD.jpg"
                  alt="Ganpati Metal Industries Facility"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MD's Message Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3 order-2 lg:order-1">
              <div className="relative h-[400px] w-full">
                <Image
                  src="../public/images/MD.jpg"
                  alt="Shree N.D. Savant - Founder"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="lg:w-2/3 order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">MD's Message</h2>
              <h3 className="text-xl text-red-500 mb-6">Shree N.D. Savant</h3>
              <h4 className="text-lg text-gray-600 mb-4">Founder of Ganpati Metal Industries</h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I thank you for visiting our website which must have given you a broad insight
                into our organisations salient features, product profile, our accomplishments
                and our Mission & Vision. I am proud to say that our organization has been consistently
                investing in Technology and resources to enhance the efficiency of our operational levels.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With the continued patronage of our valued customers, we have been able to grow
                consistently since our inception. We are committed to providing high-quality products
                and excellent service to our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4 lg:px-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-12 text-center">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualities.map((item, index) => (
              <div
                key={`quality-${index}`}
                className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-red-500 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">40+ varied industry clients</h3>
                <p>
                  We serve a number of clients from various industrial sectors like Auto,
                  Non-auto, Railways, Defence, Electrical, General Engineering and many more.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <h3 className="text-xl font-bold mb-2">1500 M. Tons monthly capacity</h3>
                <p>
                  Currently our manufacturing capacity is 1500 M. Tons per month. Our annual
                  growth has been between 15% to 22% since the last five years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
