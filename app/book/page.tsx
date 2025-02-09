import React from "react";

export default function Book() {
  return (
    <div id="book" className="mt-10 max-w-3xl mx-auto p-8 border rounded-lg shadow-md">
      <h1 className="font-bold text-3xl text-gray-800 text-center">Book an Appointment</h1>
      <p className="text-sm text-gray-500 text-center mt-2">
        Fill out the form below to schedule your beauty treatment at Grance Beauty Zone.
      </p>
      <form className="mt-8 space-y-6">

        <div className="flex space-x-6">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>
        </div>

        
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        
        <div>
          <label className="block text-sm font-medium text-gray-700">Select a Service</label>
          <select
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="hair-styling">Hair Styling</option>
            <option value="makeup">Makeup</option>
            <option value="nail-care">Nail Care</option>
            <option value="facial-treatment">Facial Treatment</option>
            <option value="waxing">Waxing</option>
            <option value="massage">Massage</option>
            <option value="others">Others</option>
          </select>
        </div>

        
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
            <input
              type="date"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
            <input
              type="time"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

    
        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
          <textarea
            placeholder="Any special requests or information we should know?"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            rows={3}
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
