import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="src/assets/images/logo.png" // Replace with your logo path
            alt="BusSewa Logo"
            className="w-16 h-16"
          />
          <div>
            <h1 className="text-xl font-bold text-purple-700">TicketSewa</h1>
            <p className="text-sm text-gray-500">Trusted Ticketing Platform</p>
          </div>
        </div>

        {/* Right Section - FAQ, Contact Us, Login, and Sign Up */}
        <div className="flex items-center space-x-6">
          <a href="/faq" className="text-sm font-medium text-gray-800 hover:text-purple-700">
            FAQ
          </a>
          <a href="/ContactUs" className="text-sm font-medium text-gray-800 hover:text-purple-700">
            Contact Us
          </a>
          <a
            href="/login"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Log In
          </a>
          <a
            href="/Register"
            className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition duration-300"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
