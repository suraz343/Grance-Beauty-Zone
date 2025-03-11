"use client";
import React, { useState } from "react";

export default function Book() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const appointmentData = {
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      serviceID: formData.service,
      appointmentDate: formData.date,
      appointmentTime: formData.time,
      notes: formData.notes,
      status: "Pending",
    };

    try {
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        alert("Appointment booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          notes: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Failed to book appointment: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error booking appointment. Please try again.");
    }
  };

  return (
    <div id="book" className="mt-10 max-w-3xl mx-auto p-8 border rounded-lg shadow-md">
      <h1 className="font-bold text-3xl text-gray-800 text-center">Book an Appointment</h1>
      <p className="text-sm text-gray-500 text-center mt-2">
        Fill out the form below to schedule your beauty treatment at Grance Beauty Zone.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="flex space-x-6">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Your Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Select a Service</label>
          <select
            name="service"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
            value={formData.service}
            onChange={handleChange}
          >
            <option value="" disabled>Select a service</option>
            <option value="1">Hair Styling</option>
            <option value="2">Makeup</option>
            <option value="3">Nail Care</option>
            <option value="4">Facial Treatment</option>
            <option value="5">Waxing</option>
            <option value="6">Massage</option>
            <option value="7">Others</option>
          </select>
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
            <input
              type="date"
              name="date"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
            <input
              type="time"
              name="time"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
              value={formData.time}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
          <textarea
            name="notes"
            placeholder="Any special requests or information we should know?"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-yellow-400 text-white text-lg font-medium rounded-md hover:bg-yellow-600 transition-colors"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}
