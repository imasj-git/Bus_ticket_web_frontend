import React, { useState } from "react";
import { User, Calendar } from "lucide-react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="src/assets/images/logo.png" // Replace with your logo path
            alt="TicketSewa Logo"
            className="w-16 h-16"
          />
          <div>
            <h1 className="text-xl font-bold text-purple-700">TicketSewa</h1>
            <p className="text-sm text-gray-500">Trusted Ticketing Platform</p>
          </div>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="flex items-center space-x-6">
          <a href="/faq" className="text-sm font-medium text-gray-800 hover:text-purple-700">
            FAQ
          </a>
          <a href="/ContactUs" className="text-sm font-medium text-gray-800 hover:text-purple-700">
            Contact Us
          </a>

          {/* My Account Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
            >
              My Account
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border z-[1000]">
                <ul className="py-2 text-gray-700">
                  {/* Profile */}
                  <li>
                    <a href="/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                      <User size={18} /> Profile
                    </a>
                  </li>

                  {/* Booking History */}
                  <li>
                    <a href="/bookings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                      <Calendar size={18} /> Booking History
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Sign Out Button */}
          <a
            href="/Register"
            className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition duration-300"
          >
            Sign Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
