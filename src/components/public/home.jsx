import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/customer/Header";
import Navbar from "../../components/common/customer/Navbar";
import Hero from "../../components/common/customer/Hero";
import Footer from "../../components/common/customer/Footer";
import { FaBus, FaExchangeAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/v1";

// Fetch routes from the route table
const fetchRoutes = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/route`);
    return data.data; // Assuming the backend returns { data: [ ...routes ] }
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch routes");
  }
};

function Home() {
  const navigate = useNavigate();

  // State for search criteria
  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [searchDate, setSearchDate] = useState("2025-02-18");

  // Fetch routes using React Query
  const {
    data: routes,
    isLoading: routesLoading,
    isError: routesError,
    error: routesFetchError,
  } = useQuery({
    queryKey: ["routes"],
    queryFn: fetchRoutes,
  });

  // Compute unique start/end points
  const uniqueStartPoints = routes ? [...new Set(routes.map((r) => r.startPoint))] : [];
  const uniqueEndPoints = routes ? [...new Set(routes.map((r) => r.endPoint))] : [];

  // When the user clicks "Search"
  const handleSearch = (e) => {
    e.preventDefault();
    if (startLocation && destination && searchDate) {
      // Navigate to /search with query parameters
      navigate(
        `/search?start=${encodeURIComponent(startLocation)}&end=${encodeURIComponent(
          destination
        )}&date=${encodeURIComponent(searchDate)}`
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Common components (header, navbar, hero, etc.) */}
      <Header />
      <Navbar />
      <Hero />

      <div className="flex-grow bg-gray-100">
        {/* Hero Section */}
        <div className="relative">
          {/* Background Image */}
          <div
            className="w-full h-60 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
          >
            {/* Transparent Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white to-transparent"></div>
          </div>

          {/* Search Form */}
          <div
            className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full bg-white shadow-lg rounded-lg p-5"
            style={{ height: "150px" }}
          >
            <form
              className="grid grid-cols-12 gap-8 items-center justify-center"
              onSubmit={handleSearch}
            >
              {/* Start Location Dropdown */}
              <div className="col-span-12 md:col-span-3 flex items-center space-x-2 border rounded-lg px-3 py-2">
                <FaBus className="text-gray-500" />
                {routesLoading ? (
                  <p className="text-gray-500">Loading routes...</p>
                ) : routesError ? (
                  <p className="text-red-500">{routesFetchError?.message || "Error"}</p>
                ) : (
                  <select
                    className="w-full text-sm focus:outline-none"
                    value={startLocation}
                    onChange={(e) => setStartLocation(e.target.value)}
                    required
                  >
                    <option value="">Select Start Location</option>
                    {uniqueStartPoints.map((start, index) => (
                      <option key={index} value={start}>
                        {start}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Destination Dropdown */}
              <div className="col-span-12 md:col-span-3 flex items-center space-x-2 border rounded-lg px-3 py-2">
                <FaExchangeAlt className="text-gray-500" />
                {routesLoading ? (
                  <p className="text-gray-500">Loading routes...</p>
                ) : routesError ? (
                  <p className="text-red-500">{routesFetchError?.message || "Error"}</p>
                ) : (
                  <select
                    className="w-full text-sm focus:outline-none"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  >
                    <option value="">Select Destination</option>
                    {uniqueEndPoints.map((end, index) => (
                      <option key={index} value={end}>
                        {end}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Date Picker */}
              <div className="col-span-12 md:col-span-2 flex items-center border rounded-lg px-3 py-2">
                <input
                  type="date"
                  className="w-full text-sm focus:outline-none text-gray-500"
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                  required
                />
              </div>

              {/* (Optional) Date Navigation or other features */}
              <div className="col-span-12 md:col-span-3 flex space-x-10">
                {/* Example for 5 days from now, just to show something */}
                {Array.from({ length: 5 }).map((_, index) => {
                  const date = new Date();
                  date.setDate(date.getDate() + index);
                  date.setFullYear(2025);
                  const day = date.toLocaleString("en-US", { weekday: "short" });
                  const dayNumber = date.getDate();
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center px-2 py-1 border rounded-md"
                    >
                      <span className="text-sm font-bold text-blue-600">{dayNumber}</span>
                      <span className="text-xs text-gray-500">{day}</span>
                    </div>
                  );
                })}
              </div>

              {/* Search Button */}
              <div className="col-span-12 md:col-span-1 flex justify-start">
                <button
                  type="submit"
                  className="bg-purple-600 text-white py-2 px-5 rounded-lg hover:bg-purple-700"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bus Image Section (Optional) */}
        <div className="relative mt-1">
          <img
            src="src/assets/images/bus.png" // Replace with the correct path to your image
            alt="Bus"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
