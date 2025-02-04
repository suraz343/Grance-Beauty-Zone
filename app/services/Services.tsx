import React from "react";

const services = [
    {
      title: "Hair Styling",
      description: "Expert hair styling for any occasion",
      price: "Starting from $50",
      duration: "1 hour",
      image: "/hair-styling.jpg",
      gallery: ["/hair-1.jpg", "/hair-2.jpg", "/hair-3.jpg", "/hair-4.jpg"],
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
export default function Services(){
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-4xl font-bold">Our Services</h1>


        </div>
    );
}