import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FaFacebook, FaGoogle, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ Hook for navigation

// API function for login
const loginUser = async (userData) => {
  const { data } = await axios.post("http://localhost:3000/api/v1/auth/login", userData);
  return data; // ✅ Ensure API returns { token, role }
};

const Login = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation after login
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Mutation Hook for login
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // ✅ Store token and role in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      // ✅ Redirect users based on role
      if (data.role === "admin") {
       window.location.href = "/admin/dashboard"; // Redirect Admin
      } else {
        navigate("/"); // Redirect Customer
      }
    },
    onError: (error) => {
      alert(error.response?.data?.message || "Login failed. Please try again.");
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ email: formData.email, password: formData.password });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-12">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <img src="src/assets/images/logo.png" alt="BusSewa Logo" className="w-20 h-20 mx-auto" />
          <h1 className="text-3xl font-bold text-purple-700">TicketSewa</h1>
          <p className="text-sm text-gray-500">Trusted Ticketing Platform</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Email</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-3 text-sm focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-3 text-sm focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Logging in..." : "Login to BusSewa"}
          </button>

          {/* Error Message */}
          {mutation.isError && <p className="text-red-500 text-sm mt-2">{mutation.error.message}</p>}
        </form>

        {/* Footer */}
        <div className="text-sm text-gray-400 mt-8">© 2024 BusSewa</div>
      </div>

      {/* Right Section */}
      <div
        className="w-1/2 bg-purple-700 text-white flex flex-col justify-start items-center bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/images/bus2.png')" }}
      >
        {/* Text Section */}
        <div className="text-center max-w-md px-8 mt-10">
          <h1 className="text-4xl font-bold mb-4">Unlock your journey with TicketSewa!</h1>
          <p className="text-sm">
            Sign in to your account to access exclusive features, manage your bookings, and explore a world of seamless travel experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
