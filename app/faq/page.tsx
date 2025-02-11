"use client";
import React, { useState } from "react";


const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of beauty services including hair styling, makeup, nail care, facial treatments, waxing, and massage therapy.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment through our online booking system, by calling our salon, or by visiting us in person.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We are open Monday to Friday from 9:00 AM to 8:00 PM, Saturday from 10:00 AM to 6:00 PM, and closed on Sundays.",
  },
  {
    question: "Do you offer gift cards?",
    answer:
      "Yes, we offer gift cards that can be purchased in-store or online. They make great presents for any occasion!",
  },
  {
    question: "What brands do you use for your services?",
    answer:
      "We use high-quality, professional-grade products from renowned brands in the beauty industry. Our staff can provide more specific information about the brands used for each service.",
  },
  {
    question: "Is there a cancellation policy?",
    answer:
      "Yes, we require at least 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a fee.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h1>
      <div className="w-full max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-300">
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left font-semibold py-3 px-4 bg-gray-100 hover:bg-gray-200 hover:underline"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="px-4 py-2 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
