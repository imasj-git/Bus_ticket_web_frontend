import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { FaBus, FaExchangeAlt } from "react-icons/fa";

function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <div>
                <Header />
                <Navbar />
                <Hero />
            </div>
            <div className="flex-grow bg-gray-100">
                {/* Hero Section */}
                <div className="relative">
                    {/* Background Image */}
                    <div
                        className="w-full h-60 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/hero.jpg')", // Replace with your image path
                        }}
                    >
                        {/* Transparent Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white to-transparent"></div>
                    </div>

                    {/* Search Form */}
                    <div
                        className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full bg-white shadow-lg rounded-lg p-5"
                        style={{ height: "150px" }} // Adjust height as needed
                    >


                        <div className="grid grid-cols-12 gap-4 items-center">
                            {/* Start Location */}
                            <div className="col-span-12 md:col-span-3 flex items-center space-x-2 border rounded-lg px-3 py-2">
                                <FaBus className="text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Start your adventure at?"
                                    className="w-full text-sm focus:outline-none"
                                />
                            </div>

                            {/* Destination Location */}
                            <div className="col-span-12 md:col-span-3 flex items-center space-x-2 border rounded-lg px-3 py-2">
                                <FaExchangeAlt className="text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Your destination awaits at?"
                                    className="w-full text-sm focus:outline-none"
                                />
                            </div>

                            {/* Date Picker */}
                            <div className="col-span-12 md:col-span-2 flex items-center border rounded-lg px-3 py-2">
                                <input
                                    type="date"
                                    className="w-full text-sm focus:outline-none text-gray-500"
                                    defaultValue="2081-10-27"
                                />
                            </div>

                            {/* Date Navigation */}
                            <div className="col-span-12 md:col-span-3 flex items-center justify-between space-x-1">
                                {Array.from({ length: 5 }).map((_, index) => {
                                    const date = new Date(); // Get the current date
                                    date.setDate(date.getDate() + index); // Increment the date by index days

                                    // Ensure the year is explicitly set to 2025
                                    date.setFullYear(2025);

                                    // Format the date using the Gregorian calendar
                                    const day = date.toLocaleString("en-US", { weekday: "short" }); // e.g., "Sun"
                                    const dayNumber = date.getDate(); // e.g., "11"

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
                            <div className="col-span-12 md:col-span-1">
                                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bus Image Section */}
                <div className="relative mt-1">
                    <img
                        src="src/assets/images/bus.png" // Replace with the correct path to your image inside the public folder
                        alt="Bus"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
