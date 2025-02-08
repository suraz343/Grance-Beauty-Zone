"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    img: "/images/hair-1.jpg",
    title: "Hair Styling",
    description: "Expert hair styling for any occasion",
    price: "Starting from $50",
    duration: "1 hour",
    image: "/images/hair-1.jpg",
    gallery: ["/images/hair-1.jpg", "/images/hair-2.jpg", "/images/hair-3.jpg", "/images/hair-4.jpg"],
  },
  {
    img: "/images/makeup.jpg",
    title: "Makeup",
    description: "Professional makeup application",
    price: "Starting from $60",
    duration: "45 minutes",
    image: "/images/makeup.jpg",
    gallery: ["/images/makeup-1.jpeg", "/images/makeup-2.jpg", "/images/makeup-3.jpg", "/images/makeup-4.jpg"],
  },
  {
    img: "/images/nail-care.jpg",
    title: "Nail Care",
    description: "Manicure and pedicure services",
    price: "Starting from $40",
    duration: "1 hour",
    image: "/images/nail-care.jpg",
    gallery: ["/images/nail-care-1.jpg", "/images/nail-care-2.jpg", "/images/nail-care-3.jpg", "/images/nail-care-4.jpg"],
  },
  {
    img: "/facial.jpg",
    title: "Facial Treatments",
    description: "Rejuvenating facial treatments",
    price: "Starting from $70",
    duration: "1 hour",
    image: "/facial.jpg",
    gallery: ["/facial-1.jpg", "/facial-2.jpg", "/facial-3.jpg", "/facial-4.jpg"],
  },
  {
    img: "/waxing.jpg",
    title: "Waxing",
    description: "Full body waxing services",
    price: "Starting from $30",
    duration: "30 minutes",
    image: "/waxing.jpg",
    gallery: ["/waxing-1.jpg", "/waxing-2.jpg", "/waxing-3.jpg", "/waxing-4.jpg"],
  },
  {
    img: "/massage.jpg",
    title: "Massage",
    description: "Relaxing massage therapies",
    price: "Starting from $80",
    duration: "1 hour",
    image: "/massage.jpg",
    gallery: ["/massage-1.jpg", "/massage-2.jpg", "/massage-3.jpg", "/massage-4.jpg"],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0].title);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
      {/* Tab Buttons */}
      <div className="grid w-full grid-cols-2 lg:grid-cols-3 mb-8 gap-4">
        {services.map((service) => (
          <button
            key={service.title}
            onClick={() => setActiveTab(service.title)}
            className={`relative w-full h-40 rounded-lg overflow-hidden group ${
              activeTab === service.title ? "ring-2 ring-blue-500" : ""
            }`}
          >
            {/* Image */}
            <Image
              src={service.img || "/placeholder.svg"}
              alt={service.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
            />
            {/* Title Overlay */}
            <span
              className={`absolute inset-0 flex items-center justify-center z-10 font-semibold text-lg transition-colors duration-300 ${
                activeTab === service.title ? "text-white" : "text-black group-hover:text-white"
              }`}
            >
              {service.title}
            </span>
            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-300 z-5"></div>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {services.map(
        (service) =>
          activeTab === service.title && (
            <div
              key={service.title}
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
                  src={service.image || "/placeholder.svg"}
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
                      src={img || "/placeholder.svg"}
                      alt={`${service.title} ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-52 object-cover rounded-lg"
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
