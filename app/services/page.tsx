"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    img: "/services/hair-1.jpg",
    title: "Hair Styling",
    description: "Expert hair styling for any occasion",
    price: "Starting from $50",
    duration: "1 hour",
    gallery: ["/services/hair-1.jpg", "/services/hair-2.jpg", "/services/hair-3.jpg", "/services/hair-4.jpg"],
  },
  {
    id: 2,
    img: "/services/makeup.jpg",
    title: "Makeup",
    description: "Professional makeup application",
    price: "Starting from $60",
    duration: "45 minutes",
    gallery: ["/services/makeup-1.jpeg", "/services/makeup-2.jpg", "/services/makeup-3.jpg", "/services/makeup-4.jpg"],
  },
  {
    id: 3,
    img: "/services/nail-care.jpg",
    title: "Nail Care",
    description: "Manicure and pedicure services",
    price: "Starting from $40",
    duration: "1 hour",
    gallery: ["/services/nail-care-1.jpg", "/services/nail-care-2.jpg", "/services/nail-care-3.jpg", "/services/nail-care-4.jpg"],
  },
  {
    id: 4,
    img: "/services/facial.jpg",
    title: "Facial Treatment",
    description: "Relaxing facials for glowing skin",
    price: "Starting from $70",
    duration: "1 hour 30 minutes",
    gallery: ["/services/facial-1.jpg", "/services/facial-2.jpg", "/services/facial-3.jpg", "/services/facial-4.jpg"],
  },
  {
    id: 5,
    img: "/services/massage.jpg",
    title: "Body Massage",
    description: "Full-body relaxation therapy",
    price: "Starting from $90",
    duration: "1 hour 15 minutes",
    gallery: ["/services/massage-1.jpg", "/services/massage-2.jpg", "/services/massage-3.jpg", "/services/massage-4.jpg"],
  },
  {
    id: 6,
    img: "/services/eyelash.jpg",
    title: "Eyelash Extensions",
    description: "Enhance your natural lashes",
    price: "Starting from $80",
    duration: "1 hour",
    gallery: ["/services/eyelash-1.jpg", "/services/eyelash-2.jpg", "/services/eyelash-3.jpg", "/services/eyelash-4.jpg"],
  },
  {
    id: 7,
    img: "/services/waxing.jpg",
    title: "Waxing",
    description: "Smooth and hair-free skin",
    price: "Starting from $30",
    duration: "30 minutes - 1 hour",
    gallery: ["/services/waxing-1.jpg", "/services/waxing-2.jpg", "/services/waxing-3.jpg", "/services/waxing-4.jpg"],
  },
  {
    id: 8,
    img: "/services/bridal-makeup.jpg",
    title: "Bridal Makeup",
    description: "Perfect makeup for your big day",
    price: "Starting from $150",
    duration: "2 hours",
    gallery: ["/services/bridal-makeup-1.jpg", "/services/bridal-makeup-2.jpg", "/services/bridal-makeup-3.jpg", "/services/bridal-makeup-4.jpg"],
  },
  {
    id: 9,
    img: "/services/hair-treatment.jpg",
    title: "Hair Treatment",
    description: "Nourishing hair treatments",
    price: "Starting from $100",
    duration: "1 hour 30 minutes",
    gallery: ["/services/hair-treatment-1.jpg", "/services/hair-treatment-2.jpg", "/services/hair-treatment-3.jpg", "/services/hair-treatment-4.jpg"],
  },
  {
    id: 10,
    img: "/services/henna.jpg",
    title: "Henna Design",
    description: "Beautiful henna art for any occasion",
    price: "Starting from $20",
    duration: "30 minutes - 1 hour",
    gallery: ["/services/henna-1.jpg", "/services/henna-2.jpg", "/services/henna-3.jpg", "/services/henna-4.jpg"],
  },
];


export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0].id); // Default to first service
  const [showAll, setShowAll] = useState(false); // Control visibility of services

  const displayedServices = showAll ? services : services.slice(0, 3); // Show only 3 services initially

  return (
    <div id="services" className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>

      {/* Tab Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {displayedServices.map((service) => (
          <button
            key={service.id}
            onClick={() => setActiveTab(service.id)}
            className={`relative w-full h-40 rounded-lg overflow-hidden group ${
              activeTab === service.id ? "ring-2 ring-green-500" : ""
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
          activeTab === service.id && (
            <div key={service.id} className="border p-6 rounded-lg shadow-lg space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl text-blue-600 font-semibold mb-2">{service.title}</h2>
                  <p>{service.description}</p>
                  <p className="mt-4"><strong>Price:</strong> {service.price}</p>
                  <p><strong>Duration:</strong> {service.duration}</p>
                  <Link href="/book" className="mt-4 inline-block px-4 py-2 bg-yellow-400 text-white rounded-lg">
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

      
      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold transition duration-300 hover:bg-green-700"
        >
          {showAll ? "Show Less" : "View All Services"}
        </button>
      </div>
    </div>
  );
}
