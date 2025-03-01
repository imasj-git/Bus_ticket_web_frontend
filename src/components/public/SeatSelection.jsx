import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LifeBuoy } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Import for navigation

const API_BASE_URL = "http://localhost:3000/api/v1";

function SeatSelection({ busId }) {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const seatFare = 500;
    const [boardingPoint, setBoardingPoint] = useState("");
    const [seatLayout, setSeatLayout] = useState([]);
    const navigate = useNavigate();

    // ✅ Fetch seat data from the backend
    const { data: seats, isLoading, isError } = useQuery({
        queryKey: ["seatData", busId],
        queryFn: async () => {
            const response = await axios.get(`${API_BASE_URL}/bus/${busId}/seats`);
            return response.data.seats;
        },
        enabled: !!busId,
    });

    // ✅ Update seat layout dynamically when seats data is available
    useEffect(() => {
        if (seats) {
            setSeatLayout(generateLayout(seats));
        }
    }, [seats]);

    // ✅ Toggle seat selection
    const toggleSeatSelection = (seat) => {
        setSelectedSeats((prev) =>
            prev.includes(seat)
                ? prev.filter((s) => s !== seat) // Remove if already selected
                : [...prev, seat] // Add if not selected
        );
    };

    // ✅ Calculate total fare
    const totalFare = selectedSeats.length * seatFare;

    // ✅ Function to generate the seat layout with a proper gap
    const generateLayout = (seats) => {
        if (!seats || seats.length === 0) return [];

        const layout = [];
        const leftSide = [];
        const rightSide = [];

        // ✅ Sort seats into left and right sections
        seats.forEach((seat) => {
            if (seat.number.startsWith("A")) {
                leftSide.push(seat);
            } else if (seat.number.startsWith("B")) {
                rightSide.push(seat);
            }
        });

        // ✅ Arrange seats in rows with a gap in the middle
        const rows = Math.max(leftSide.length, rightSide.length) / 2; // Two seats per side per row
        for (let i = 0; i < rows; i++) {
            const leftSeat1 = leftSide[i * 2] || null;
            const leftSeat2 = leftSide[i * 2 + 1] || null;
            const rightSeat1 = rightSide[i * 2] || null;
            const rightSeat2 = rightSide[i * 2 + 1] || null;

            layout.push([leftSeat1, leftSeat2, null, rightSeat1, rightSeat2]);
        }

        return layout;
    };

    // ✅ Handle checkout
    const handleCheckout = () => {
        if (!boardingPoint || selectedSeats.length === 0) {
            alert("Please select a boarding point and at least one seat.");
            return;
        }
        navigate("/checkout", {
            state: {
                busId,
                boardingPoint,
                selectedSeats,
                totalFare,
            },
        });
    };

    return (
        <div className="p-4 bg-gray-50 rounded-lg mt-4 flex justify-center">
            {/* ✅ Left Section: Seat Layout */}
            <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg">
                <div className="w-40 h-10 bg-gray-300 flex justify-center items-center rounded-lg mb-2">
                    <LifeBuoy className="w-6 h-6 text-gray-700" />
                </div>

                {/* ✅ Render the dynamically generated seat layout */}
                {isLoading ? (
                    <p className="text-center">Loading seats...</p>
                ) : isError ? (
                    <p className="text-center text-red-500">Error loading seats</p>
                ) : (
                    <div className="flex flex-col items-center">
                        {seatLayout.map((row, rowIndex) => (
                            <div key={rowIndex} className="flex justify-center space-x-4 mb-2">
                                {row.map((seat, colIndex) =>
                                    seat === null ? (
                                        <div key={`gap-${rowIndex}-${colIndex}`} className="w-8"></div> // ✅ Space between left & right seats
                                    ) : (
                                        <button
                                            key={seat.number}
                                            className={`p-2 w-10 h-10 text-white font-bold rounded ${
                                                seat.booked
                                                    ? "bg-gray-400 cursor-not-allowed"
                                                    : selectedSeats.includes(seat.number)
                                                    ? "bg-orange-500"
                                                    : "bg-blue-500"
                                            }`}
                                            onClick={() => seat && !seat.booked && toggleSeatSelection(seat.number)}
                                            disabled={seat.booked}
                                        >
                                            {seat.number}
                                        </button>
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* ✅ Seat Legend */}
                <div className="flex justify-center mt-4 space-x-4">
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-gray-400 rounded mr-2"></div>
                        <p className="text-sm">Booked</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                        <p className="text-sm">Available</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
                        <p className="text-sm">Selected</p>
                    </div>
                </div>
            </div>

            {/* ✅ Right Section: Booking Details */}
            <div className="ml-6 bg-white p-4 shadow-lg rounded-lg w-64">
                {/* ✅ Boarding Point Dropdown */}
                <label className="block text-gray-700 font-semibold mb-2">Boarding Point</label>
                <select
                    className="w-full p-2 border rounded-lg mb-4"
                    value={boardingPoint}
                    onChange={(e) => setBoardingPoint(e.target.value)}
                >
                    <option value="">Select Boarding Points</option>
                    <option value="Kathmandu">New Bus Park</option>
                    <option value="Pokhara">Kalanki</option>
                    <option value="Chitwan">Balaju</option>
                </select>

                {/* ✅ Selected Seat Details */}
                <div className="mb-4">
                    <p className="text-gray-700 font-semibold">Seat(s):</p>
                    <p className="text-lg">{selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</p>
                </div>

                {/* ✅ Fare Details */}
                <div className="mb-4">
                    <p className="text-gray-700 font-semibold">Fare:</p>
                    <p className="text-lg">{seatFare} per seat</p>
                </div>

                {/* ✅ Total Amount */}
                <div className="mb-4">
                    <p className="text-gray-700 font-semibold">Total Amount:</p>
                    <p className="text-lg font-bold">Rs. {totalFare}</p>
                </div>

                {/* ✅ Confirm Booking Button */}
                <button
                    onClick={handleCheckout}
                    className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600"
                    disabled={selectedSeats.length === 0 || !boardingPoint}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}

export default SeatSelection;
