import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      {/* Title */}
      <h1 className="text-4xl font-bold text-purple-700 mb-8">Contact Us</h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Contact Information</h2>
          <ul className="space-y-4">
            {/* Phone Number */}
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-purple-700" />
              <span className="text-gray-700">+1 234 567 890</span>
            </li>

            {/* Email */}
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-purple-700" />
              <span className="text-gray-700">info@bussewa.com</span>
            </li>

            {/* Address */}
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-purple-700" />
              <span className="text-gray-700">123 Bus Street, Travel City, Country</span>
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="flex items-center space-x-4 mt-6">
            <a href="#" className="text-purple-700 hover:text-purple-900">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-purple-700 hover:text-purple-900">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-purple-700 hover:text-purple-900">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-600 text-sm mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-600 text-sm mb-1">Phone Number</label>
              <input
                type="text"
                placeholder="Your Phone Number"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-600 text-sm mb-1">Message</label>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full mt-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Find Us on the Map</h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094747!2d144.9537353156802!3d-37.81627974202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771b0a6b4b3f67!2s123%20Bus%20Street%2C%20Travel%20City!5e0!3m2!1sen!2s!4v1613615628888!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
