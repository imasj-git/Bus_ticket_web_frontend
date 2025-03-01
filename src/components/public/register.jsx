import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

// API call function for user registration
const registerUser = async (userData) => {
  const { data } = await axios.post("http://localhost:3000/api/v1/auth/register", userData);
  return data;
};

const Register = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Mutation Hook for registration
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      alert("Registration successful!");
      console.log("User registered:", data);
    },
    onError: (error) => {
      alert(error.response?.data?.message || "Registration failed");
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    mutation.mutate({
      fname: formData.fname,
      lname: formData.lname,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-12">
        {/* Logo Section */}
        <div className="text-center mb-6">
          <img src="src/assets/images/logo.png" alt="BusSewa Logo" className="w-20 h-20 mx-auto" />
          <h1 className="text-3xl font-bold text-purple-700">TicketSewa</h1>
          <p className="text-sm text-gray-500">Trusted Ticketing Platform</p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          {/* First Name */}
          <div className="mb-3">
            <label className="block text-gray-600 text-sm mb-1">First Name</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full pl-3 text-sm focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <label className="block text-gray-600 text-sm mb-1">Last Name</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full pl-3 text-sm focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-3">
            <label className="block text-gray-600 text-sm mb-1">Mobile Number</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1">
              <FaEnvelope className="text-gray-400" />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full pl-3 text-sm focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full pl-3 text-sm focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full pl-3 text-sm focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="block text-gray-600 text-sm mb-1">Confirm Password</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full pl-3 text-sm focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Registering..." : "Register"}
          </button>

          {/* Error & Success Messages */}
          {mutation.isError && <p className="text-red-500 text-sm mt-2">{mutation.error.message}</p>}
          {mutation.isSuccess && <p className="text-green-500 text-sm mt-2">Registration successful!</p>}
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-purple-700 font-medium hover:underline">
            Sign In
          </a>
        </p>

        <div className="text-sm text-gray-400 mt-6">© 2023 TicketSewa</div>
      </div>

      {/* Right Section */}
      <div
        className="w-1/2 bg-purple-700 text-white flex flex-col justify-start items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('src/assets/images/bus2.png')",
        }}
      >
        <div className="text-center max-w-md px-8 mt-10">
          <h1 className="text-4xl font-bold mb-4">Unlock your journey with TicketSewa!</h1>
          <p className="text-sm">
            Sign in to your account to access exclusive features, manage your bookings,
            and explore a world of seamless travel experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
