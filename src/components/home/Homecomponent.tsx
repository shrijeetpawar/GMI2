"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false
    });
  }, []);

  // Hero Section Data
  const heroSlides = [
    {
      id: 1,
      image: "/images/hero-slide-1.jpg",
      title: "Aluminium For The Future Generations",
      subtitle: "Quality & Innovation"
    },
    {
      id: 2,
      image: "/images/hero-slide-2.jpg",
      title: "ISO 9001-2015 Certified",
      subtitle: "Quality Assured Products"
    }
  ];

  // Products Data
  const products = [
    {
      id: "aluminium-alloy-ingots",
      name: "Aluminium Alloy Ingots",
      image: "/images/facility-2.jpg",
      description: "We are an ISO 9001-2015 certified company manufacturing Aluminium Alloy Ingots as per the national and international standards.",
      link: "/products/aluminium-alloy-ingots",
    },
    {
      id: "aluminium-de-oxidants",
      name: "Aluminium De-Oxidants",
      image: "/images/facility-1.jpg",
      description: "We produce Aluminium De-Oxidants in various shapes and sizes as per the demand and specification of our customers.",
      link: "/products/aluminium-de-oxidants",
    },
  ];

  // Facilities Data
  const facilities = [
    "Purchase & Imports",
    "Inward R.M. QC",
    "Production",
    "Quality Control",
    "Maintenance",
    "Stores, Logistics & Utilities"
  ];

  // Quality Features Data
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

  // Clients Data
  const clients = [
    { id: 1, name: "Client 1", logo: "/images/clients/client1.png" },
    { id: 2, name: "Client 2", logo: "/images/clients/client2.png" },
    { id: 3, name: "Client 3", logo: "/images/clients/client3.png" },
    { id: 4, name: "Client 4", logo: "/images/clients/client4.png" },
    { id: 5, name: "Client 5", logo: "/images/clients/client5.png" },
    { id: 6, name: "Client 6", logo: "/images/clients/client6.png" },
  ];

  // State for product carousel
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // State for quality/why choose us toggle
  const [activeTab, setActiveTab] = useState('whyChoose');

  // Auto-rotate products
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentProductIndex((prevIndex) => 
          prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500); // Match this with your CSS transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full relative bg-gray-100 overflow-hidden" data-aos="fade">
        <div className="relative h-[500px] w-full">
          <Image
            src="/images/facility-4.jpg"
            alt="GMI"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container mx-auto px-4 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
                Aluminium For The Future Generations
              </h1>
              <p className="text-xl mb-8 max-w-xl">
                ISO 9001-2015 Certified Company Manufacturing Aluminium Alloy Ingots
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded transition-colors"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Contact Us <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full bg-white py-16" data-aos="fade-up">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Products</h2>
            <Link
              href="/products"
              className="inline-flex items-center text-red-500 hover:text-red-600"
            >
              View All <FiArrowRight className="ml-2" />
            </Link>
          </div>

          {/* Animated Product Carousel */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`absolute inset-0 transition-opacity duration-500 ${index === currentProductIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white p-8 max-w-2xl">
                      <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
                      <p className="text-xl mb-6">{product.description}</p>
                      <Link
                        href={product.link}
                        className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded transition-colors"
                      >
                        Learn More <FiArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {products.map((_, index) => (
                <button
                  key={`indicator-${index}`}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentProductIndex(index);
                      setIsTransitioning(false);
                    }, 100);
                  }}
                  className={`w-3 h-3 rounded-full ${index === currentProductIndex ? 'bg-red-500' : 'bg-white bg-opacity-50'}`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row" data-aos="fade-up">
            {/* Text Content */}
            <div className="lg:w-1/2 pr-0 lg:pr-12 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Infrastructure</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                In the year 2012, we relocated our manufacturing facilities to Wada, which is an
                industrial hub with all infrastructural facilities about 70 kms. from Mumbai, the Industrial
                Capital of India. Our facilities are spread over an area of approx 20,500 Sq. Mtrs. with
                adequate covered sheds for manufacturing facilities, raw material and finished goods
                storage, quality control, maintenance, stores, utilities and office area.
              </p>
              <Link
                href="/infrastructure"
                className="inline-flex items-center text-red-500 hover:text-red-600 font-medium"
              >
                Learn More <FiArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Image Container */}
            <div className="lg:w-1/2 relative" data-aos="fade-left">
              <div className="relative w-full h-[350px] bg-red-500 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/infrastructure.jpg"
                  alt="Ganpati Metal Industries Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4 lg:px-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center" data-aos="fade-up">
            Our Facilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={`facility-${index}`}
                className="p-6 bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
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

      {/* About Us Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto py-16 px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">About Us</h2>
              <h3 className="text-xl text-gray-600 mb-4">Aluminium For The Future Generations</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ganpati Metal Industries was incorporated in the year 2010 under the strong leadership
                of Shri. N.D. Savant. He laid the foundation of our business and played a crucial part
                in helping us grow. We produce varied grades of Aluminium Alloy Ingots and Aluminium
                De-Oxidants to meet the requirements of different industries.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our commitment to quality, innovation and customer satisfaction has helped us establish
                a strong presence in the industry. We continuously invest in advanced technology and
                processes to deliver products that meet the highest quality standards.
              </p>
              <Link
                href="/about-us"
                className="inline-flex items-center text-red-500 hover:text-red-600 font-medium"
              >
                Learn More <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="lg:w-1/2 relative" data-aos="fade-left">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/MD.jpg"
                  alt="Ganpati Metal Industries Facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MD's Message Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3 order-2 lg:order-1" data-aos="fade-right">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/MD.jpg"
                  alt="Shree N.D. Savant - Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3 order-1 lg:order-2" data-aos="fade-left">
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

      {/* Combined Why Choose Us and Quality Policy Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                onClick={() => setActiveTab('whyChoose')}
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${activeTab === 'whyChoose' ? 'bg-red-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                Why Choose Us
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('qualityPolicy')}
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${activeTab === 'qualityPolicy' ? 'bg-red-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                Quality Policy
              </button>
            </div>
          </div>

          <div className="relative min-h-[400px]">
            {/* Why Choose Us Content */}
            <div 
              className={`transition-all duration-500 ${activeTab === 'whyChoose' ? 'opacity-100 visible' : 'opacity-0 invisible absolute'}`}
              data-aos="fade-up"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {qualities.map((item, index) => (
                  <div
                    key={`quality-${index}`}
                    className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-red-500 text-white rounded-lg shadow-lg" data-aos="fade-up">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">40+ varied industry clients</h3>
                    <p>
                      We serve a number of clients from various industrial sectors like Auto,
                      Non-auto, Railways, Defence, Electrical, General Engineering and many more.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">1500 M. Tons monthly capacity</h3>
                    <p>
                      Currently our manufacturing capacity is 1500 M. Tons per month. Our annual
                      growth has been between 15% to 22% since the last five years.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Policy Content */}
            <div 
              className={`transition-all duration-500 ${activeTab === 'qualityPolicy' ? 'opacity-100 visible' : 'opacity-0 invisible absolute'}`}
              data-aos="fade-up"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Quality Policy</h2>
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
                  <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/quality-control.jpg"
                      alt="Quality Control at Ganpati Metal Industries"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="w-full bg-gray-50 py-16 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center" data-aos="fade-up">
            Our Clients
          </h2>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
            
            <div className="flex py-4 animate-marquee whitespace-nowrap">
              {[...clients, ...clients].map((client, index) => (
                <div 
                  key={`${client.id}-${index}`} 
                  className="flex-shrink-0 mx-8 w-40 h-20 bg-white p-4 flex items-center justify-center rounded-lg shadow-sm"
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src={client.logo} 
                      alt={client.name} 
                      fill
                      className="object-contain" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="w-full bg-red-500 text-white py-12" data-aos="fade-up">
        <div className="container mx-auto px-4 lg:px-0 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in our Products?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements or request a quote.
            Our team is ready to assist you with all your aluminium alloy needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us"
              className="bg-white text-red-500 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Contact Us
            </Link>
            <Link
              href="/contact-us#enquiry"
              className="bg-transparent border border-white text-white px-6 py-3 rounded font-medium hover:bg-white hover:text-red-500 transition-colors"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Add custom animations in global CSS */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </>
  );
}