import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="container mx-auto px-4 py-8">
      {/* Contact Us Heading */}
      <div>
        <h1 className="mt-6 text-3xl font-bold text-center">Contact Us</h1>
      </div>

      {/* Contact Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Get in Touch Form */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you. Fill out the form and we'll get back to
            you shortly.
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Your Phone Number
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Our Information Section */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Our Information</h2>
          <p className="text-gray-600 mb-6">
            Here's how you can reach us and our working hours.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <i className="bi bi-geo-alt-fill text-red-500 mr-4 text-xl"></i>
              <span>123 Beauty Street, Glamour City</span>
            </li>
            <li className="flex items-start">
              <i className="bi bi-telephone-fill text-red-500 mr-4 text-xl"></i>
              <span>(123) 456-7890</span>
            </li>
            <li className="flex items-start">
              <i className="bi bi-envelope-fill text-red-500 mr-4 text-xl"></i>
              <span>info@gracebeauty.com</span>
            </li>
            <li className="flex items-start">
              <i className="bi bi-clock-fill text-red-500 mr-4 text-xl"></i>
              <span>
                <strong>Opening Hours:</strong>
                <br />
                Monday - Friday: 9:00 AM - 8:00 PM <br />
                Saturday: 10:00 AM - 6:00 PM <br />
                Sunday: Closed
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
