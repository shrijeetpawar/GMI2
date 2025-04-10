import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ProductsPage() {
  const products = [
    {
      id: "aluminium-alloy-ingots",
      name: "Aluminium Alloy Ingots",
      image: "https://ext.same-assets.com/3934841085/2278619290.jpeg",
      description: "We are an ISO 9001-2015 certified company manufacturing Aluminium Alloy Ingots as per the national and international standards, we manufacture Aluminium Alloys conforming to BS, IS, JIS, DIN and ASTM standards. We also manufacture Aluminium Alloys conforming to customer specific compositions.",
      link: "/products/aluminium-alloy-ingots",
    },
    {
      id: "aluminium-de-oxidants",
      name: "Aluminium De-Oxidants",
      image: "https://ext.same-assets.com/3934841085/4082592059.jpeg",
      description: "We produce Aluminium De-Oxidants in various shapes and sizes as per the demand and specification of our customers.",
      link: "/products/aluminium-de-oxidants",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="container mx-auto py-16 px-4 lg:px-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h1>
          <p className="text-gray-700 mb-6 leading-relaxed max-w-3xl">
            We manufacture Aluminium Alloy Ingots that match the stringent composition
            and specifications of the customers. Our products are used in various
            industries including automotive, general engineering, electrical and more.
          </p>
        </div>
      </section>

      {/* Products Display */}
      <section className="w-full bg-gray-50">
        <div className="container mx-auto py-16 px-4 lg:px-0">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 bg-white p-6 rounded-lg shadow-sm`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2 relative">
                  <div className="relative w-full h-[350px] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {product.name}
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div>
                    <Link
                      href={product.link}
                      className="inline-flex items-center text-white bg-red-500 hover:bg-red-600 px-6 py-3 rounded transition-colors"
                    >
                      Learn More <FiArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="w-full bg-white">
        <div className="container mx-auto py-16 px-4 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Quality Commitment</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Ganpati Metal Industries, quality is our top priority. We maintain strict quality control
                procedures throughout our manufacturing process to ensure that our products
                meet the highest standards. Our ISO 9001-2015 certification demonstrates our
                commitment to quality management and continuous improvement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our advanced testing facilities and experienced quality control team ensure
                that every product that leaves our facility meets the exact specifications
                required by our customers.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px]">
                <Image
                  src="https://ext.same-assets.com/3934841085/2884247127.png"
                  alt="Quality Control at Ganpati Metal Industries"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
