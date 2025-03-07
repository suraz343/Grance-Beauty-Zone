"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";  // For redirecting after registration

export default function Register() {
  const [user, setUser] = useState({ name: "", email: "", phone: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialize router for redirection

  // Handle form input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:5000/api/users/register", user);

      // Store JWT token in localStorage
      localStorage.setItem("token", response.data.token);

      alert("Registration successful! Redirecting...");

      // Redirect to home page or dashboard
      router.push("/");

      // Clear form
      setUser({ name: "", email: "", phone: "", password: "" });
    } catch (error) {
      console.error("Registration failed", error);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Create an Account</h2>

        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-300 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-300 outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={user.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-300 outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-300 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition font-medium"
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-gray-800 font-medium hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
