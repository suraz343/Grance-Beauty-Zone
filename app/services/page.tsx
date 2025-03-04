"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1, // Added a unique ID for better key management
    img: "/services/hair-1.jpg",
    title: "Hair Styling",
    description: "Expert hair styling for any occasion",
    price: "Starting from $50",
    duration: "1 hour",
    gallery: ["/services/hair-1.jpg", "/services/hair-2.jpg"],
  },
  {
    id: 2,
    img: "/services/makeup.jpg",
    title: "Makeup",
    description: "Professional makeup application",
    price: "Starting from $60",
    duration: "45 minutes",
    gallery: ["/services/makeup-1.jpeg", "/services/makeup-2.jpg"],
  },
  {
    id: 3,
    img: "/services/nail-care.jpg",
    title: "Nail Care",
    description: "Manicure and pedicure services",
    price: "Starting from $40",
    duration: "1 hour",
    gallery: ["/services/nail-care-1.jpg", "/services/nail-care-2.jpg"],
  },
  // Add more services as needed
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0].id); // Use `id` instead of title for uniqueness

  return (
    <div id="services" className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>

      {/* Tab Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {services.map((service) => (
          <button
            key={service.id} // Use `id` as the key
            onClick={() => setActiveTab(service.id)} // Set `id` as activeTab
            className={`relative w-full h-40 rounded-lg overflow-hidden group ${
              activeTab === service.id ? "ring-2 ring-blue-500" : ""
            }`}
            style={{
              backgroundImage: `url(${service.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span
              className={`absolute inset-0 flex items-center justify-center z-10 font-bold text-lg transition-colors duration-300 ${
                activeTab === service.id
                  ? "text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              {service.title}
            </span>
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-300 z-5"></div>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {services.map(
        (service) =>
          activeTab === service.id && ( // Ensure content matches activeTab by ID
            <div
              key={service.id} // Unique key for tab content
              className="border p-6 rounded-lg shadow-lg space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl text-blue-600 font-semibold mb-2">{service.title}</h2>
                  <p>{service.description}</p>
                  <p className="mt-4">
                    <strong>Price:</strong> {service.price}
                  </p>
                  <p>
                    <strong>Duration:</strong> {service.duration}
                  </p>
                  <Link
                    href="/book"
                    className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg"
                  >
                    Book Now
                  </Link>
                </div>
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover rounded-lg"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Gallery</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {service.gallery.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`${service.title} ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-52 object-cover rounded-lg"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}
