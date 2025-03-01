import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaWhatsapp,
  FaUser,
  FaTicketAlt,
} from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md"; // Import icons for toggle

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for light/dark mode

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode); // Toggle a 'dark' class on body
  };

  return (
    <div className={`py-3 ${isDarkMode ? "bg-purple-900 text-white" : "bg-purple-700 text-white"}`}>
      <div className="container mx-auto flex items-center justify-between text-base">
        {/* Left Section - Social Media Links */}
        <div className="flex items-center space-x-4" style={{ marginLeft: "30px" }}>
          <a href="https://www.facebook.com/profile.php?id=100012521027764" className="hover:opacity-80">
            <FaFacebook />
          </a>
          <a href="#" className="hover:opacity-80">
            <FaInstagram />
          </a>
          <a href="#" className="hover:opacity-80">
            <FaYoutube />
          </a>
          <a href="#" className="hover:opacity-80">
            <FaPhoneAlt />
          </a>
          <a href="#" className="hover:opacity-80">
            <FaWhatsapp />
          </a>
        </div>

        {/* Middle Section - Contact Info */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FaPhoneAlt />
            <span>01-5970798</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaPhoneAlt />
            <span>014115951</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaUser />
            <a href="mailto:info@bussewa.com" className="hover:opacity-80">
              info@bussewa.com
            </a>
          </div>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="flex items-center space-x-4" style={{ marginRight: "5px" }}>
          <a href="#" className="flex items-center space-x-1 hover:opacity-80">
            <FaTicketAlt />
            <span>Manage Tickets</span>
          </a>
          

          {/* Light/Dark Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-1 hover:opacity-80 focus:outline-none"
          >
            {isDarkMode ? (
              <MdLightMode className="text-yellow-400" />
            ) : (
              <MdDarkMode className="text-gray-400" />
            )}
            <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
