import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-12">
        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src="src/assets/images/logo.png" // Replace with your logo path
            alt="BusSewa Logo"
            className="w-20 h-20 mx-auto"
          />
          <h1 className="text-3xl font-bold text-purple-700">TicketSewa</h1>
          <p className="text-sm text-gray-500">Trusted Ticketing Platform</p>
        </div>

        {/* Registration Form */}
        <div className="w-full max-w-sm">
          {/* Name */}
          <div className="mb-3">
            <label className="block text-gray-600 text-sm mb-1">Your Name</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-3 text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <label className="block text-gray-600 text-sm mb-1">Your Last Name</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                placeholder="Your Last Name"
                className="w-full pl-3 text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div className="mb-3">
            <label className="block text-gray-600 text-sm mb-1">Your Mobile</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1">
              <FaEnvelope className="text-gray-400" />
              <input
                type="text"
                placeholder="Your Mobile"
                className="w-full pl-3 text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="block text-gray-600 text-sm mb-1">Your Password</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Your Password"
                className="w-full pl-3 text-sm focus:outline-none"
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
                placeholder="Confirm Password"
                className="w-full pl-3 text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Register Button */}
          <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
            Register
          </button>
        </div>

        {/* Already have an account */}
        <p className="text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-purple-700 font-medium hover:underline">
            Sign In
          </a>
        </p>

        {/* Footer */}
        <div className="text-sm text-gray-400 mt-6">© 2023 TicketSewa</div>
      </div>

      {/* Right Section */}
      <div
        className="w-1/2 bg-purple-700 text-white flex flex-col justify-start items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('src/assets/images/bus2.png')", // Replace with your image path
        }}
      >
        {/* Text Section */}
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
