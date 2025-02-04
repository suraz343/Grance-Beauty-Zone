"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
      title: "Hair Styling",
      description: "Expert hair styling for any occasion",
      price: "Starting from $50",
      duration: "1 hour",
      image: "/images/hair-1.jpg",
      gallery: ["/images/hair-1.jpg", "/images/hair-2.jpg", "/images/hair-3.jpg", "/images/hair-4.jpg"],
    },
    {
      title: "Makeup",
      description: "Professional makeup application",
      price: "Starting from $60",
      duration: "45 minutes",
      image: "/makeup.jpg",
      gallery: ["/makeup-1.jpg", "/makeup-2.jpg", "/makeup-3.jpg", "/makeup-4.jpg"],
    },
    {
      title: "Nail Care",
      description: "Manicure and pedicure services",
      price: "Starting from $40",
      duration: "1 hour",
      image: "/nail-care.jpg",
      gallery: ["/nails-1.jpg", "/nails-2.jpg", "/nails-3.jpg", "/nails-4.jpg"],
    },
    {
      title: "Facial Treatments",
      description: "Rejuvenating facial treatments",
      price: "Starting from $70",
      duration: "1 hour",
      image: "/facial.jpg",
      gallery: ["/facial-1.jpg", "/facial-2.jpg", "/facial-3.jpg", "/facial-4.jpg"],
    },
    {
      title: "Waxing",
      description: "Full body waxing services",
      price: "Starting from $30",
      duration: "30 minutes",
      image: "/waxing.jpg",
      gallery: ["/waxing-1.jpg", "/waxing-2.jpg", "/waxing-3.jpg", "/waxing-4.jpg"],
    },
    {
      title: "Massage",
      description: "Relaxing massage therapies",
      price: "Starting from $80",
      duration: "1 hour",
      image: "/massage.jpg",
      gallery: ["/massage-1.jpg", "/massage-2.jpg", "/massage-3.jpg", "/massage-4.jpg"],
    },
  ]

export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0].title);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
      {/* Tab Buttons */}
      <div className="grid w-full grid-cols-2 lg:grid-cols-3 mb-8 gap-2">
        {services.map((service) => (
          <button
            key={service.title}
            onClick={() => setActiveTab(service.title)}
            className={`py-2 px-4 text-center rounded-lg ${
              activeTab === service.title ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {service.title}
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
                  <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
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
                  className="w-full h-48 object-cover rounded-lg"
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
                      className="w-full h-32 object-cover rounded-lg"
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
