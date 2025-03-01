import React, { useState } from "react";
import { FaBus, FaClock } from "react-icons/fa";
import Navbar from "../../components/common/customer/Navbar";
import Header from "../../components/common/customer//Header";
import Footer from "../../components/common/customer/Footer";


const busData = [
    { name: "Sanjog Travels", type: "2×2 Sofa Seater", departure: "07:15 AM", duration: "8 Hours", arrival: "15:15 PM", price: 1200, busNumber: "BA 1 PA 1282" },
    { name: "Happy Harry Travels", type: "AC with air suspension", departure: "07:00 AM", duration: "8 Hours", arrival: "15:00 PM", price: 1100, seatsAvailable: 7, busNumber: "BA 1 PA 1026" },
];

const seatLayout = [
    ["A1", "A2", "", "A3", "A4"],
    ["A5", "A6", "", "A7", "A8"],
    ["A9", "A10", "", "A11", "A12"],
    ["A13", "A14", "", "B13", "B14"],
    ["A15", "A16", "", "B17", "B18"],
];

const bookedSeats = ["A3", "A7", "B13", "B17"];

const busNames = [
    "Everest Express",
    "Greenline Travels",
    "Blue Sky Express",
    "Himalaya Deluxe",
    "Rapid Go Tours",
    "City Comfort Bus",
    "Mountain Express"
];

const amenities = [
    "WiFi",
    "Charging Point",
    "Reclining Seats",
    "Air Conditioning",
    "Entertainment System",
    "Blankets",
    "Snacks & Beverages"
];

function BusSearchResults() {
    const [selectedBus, setSelectedBus] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatSelection = (seat) => {
        if (!seat || bookedSeats.includes(seat)) return;
        setSelectedSeats((prev) =>
            prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
        );
    };

    return (<><><div>
        <Header />
        <Navbar />

    </div><div className="container mx-auto p-4 md:p-5 flex flex-col md:flex-row">
            {/* Sidebar Filters */}
            <div className="w-full md:w-1/4 bg-white shadow-lg p-4 md:p-5 rounded-lg md:mr-5 mb-5 md:mb-0">
                <h3 className="text-lg font-semibold mb-2 text-purple-700">Filters</h3>

                {/* Departure Time */}
                <div className="mb-4">
                    <h4 className="font-medium mb-2 text-purple-700">Departure Time</h4>
                    <div className="grid gap-2">
                        <button className="border px-4 py-2 rounded-lg w-full hover:bg-purple-100">Before 10 AM</button>
                        <button className="border px-4 py-2 rounded-lg w-full hover:bg-purple-100">10 AM - 5 PM</button>
                        <button className="border px-4 py-2 rounded-lg w-full hover:bg-purple-100">5 PM - 11 PM</button>
                    </div>
                </div>

                {/* Bus Type */}
                <div className="mb-4">
                    <h4 className="font-medium mb-2 text-purple-700">Bus Type</h4>
                    <div className="grid gap-2">
                        <button className="border px-4 py-2 rounded-lg w-full hover:bg-purple-100">AC</button>
                        <button className="border px-4 py-2 rounded-lg w-full hover:bg-purple-100">Sofa Seater</button>
                        <button className="border px-4 py-2 rounded-lg w-full hover:bg-purple-100">Deluxe</button>
                        <button className="border px-4 py-2 rounded-lg w-full hover:bg-purple-100">Tourist</button>
                    </div>
                </div>

                {/* Bus Names */}
                <div className="mb-4">
                    <h4 className="font-medium mb-2 text-purple-700">Bus Names</h4>
                    <input type="text" placeholder="Search Bus Names" className="w-full border p-2 rounded-lg mb-2" />
                    <div className="grid gap-2">
                        {busNames.map((bus, index) => (
                            <button key={index} className="border px-4 py-2 rounded-lg w-full hover:bg-purple-100">
                                {bus}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Amenities */}
                <div>
                    <h4 className="font-medium mb-2 text-purple-700">Amenities</h4>
                    <input type="text" placeholder="Search Amenities" className="w-full border p-2 rounded-lg mb-2" />
                    <div className="grid gap-2">
                        {amenities.map((amenity, index) => (
                            <button key={index} className="border px-4 py-2 rounded-lg w-full hover:bg-purple-100">
                                {amenity}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bus Search Results */}
            <div className="w-full md:w-3/4 grid gap-4">
                {busData.map((bus, index) => (
                    <div key={index} className="bg-white shadow-lg p-5 rounded-lg">
                        <h3 className="text-lg font-semibold text-purple-700">{bus.name}</h3>
                        <p className="text-sm text-gray-500">{bus.type}</p>
                        <p className="text-sm text-gray-600">
                            <FaClock className="inline-block mr-1" /> {bus.departure} - {bus.arrival} ({bus.duration})
                        </p>
                        <div className="flex items-center text-gray-600 mt-2">
                            <FaBus className="mr-2" />
                            <span>{bus.busNumber}</span>
                        </div>
                        <button
                            className="bg-purple-600 text-white px-4 py-2 rounded-lg mt-2 w-full hover:bg-purple-700"
                            onClick={() => setSelectedBus(selectedBus === index ? null : index)}
                        >
                            View Seats
                        </button>

                        {selectedBus === index && (
                            <div className="mt-4 border p-4 rounded-lg">
                                <h4 className="font-medium mb-2 text-purple-700 text-center text-xl">Select Your Seat</h4>

                                {/* Bus Seat Layout */}
                                <div className="bg-gray-100 p-6 rounded-lg shadow-md w-fit mx-auto border border-gray-300">
                                    <div className="flex justify-center mb-3">
                                        <div className="bg-gray-800 text-white px-4 py-2 rounded-lg text-center shadow-md font-bold">
                                            Driver
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-5 gap-3">
                                        {seatLayout.flat().map((seat, index) => (
                                            <button
                                                key={index}
                                                className={`w-14 h-14 border rounded-lg text-sm font-semibold shadow-md transition
                                                    ${selectedSeats.includes(seat) ? "bg-purple-500 text-white border-purple-700 scale-105" : "bg-white hover:bg-purple-200"} 
                                                    ${bookedSeats.includes(seat) ? "bg-gray-400 cursor-not-allowed opacity-75" : ""}`}
                                                onClick={() => handleSeatSelection(seat)}
                                                disabled={bookedSeats.includes(seat)}
                                            >
                                                {seat}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
                                        <div className="text-center sm:text-left mb-4 sm:mb-0">
                                            <h4 className="font-medium text-purple-700">Total Seats: {selectedSeats.length}</h4>
                                            <h4 className="font-medium text-purple-700">Total Price: Rs. {selectedSeats.length * bus.price}</h4>
                                        </div>
                                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto hover:bg-purple-700">
                                            Continue
                                        </button>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div></><Footer /></>
    );
}

export default BusSearchResults;
