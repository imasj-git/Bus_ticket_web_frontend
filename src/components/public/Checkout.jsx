import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // ✅ Get selected booking details
import axios from "axios";
import Header from "../../components/common/customer/Header";
import Navbar from "../../components/common/customer/Navbar";
import Footer from "../../components/common/customer/Footer";

const API_BASE_URL = "http://localhost:3000/api/v1";

const Checkout = () => {
    const location = useLocation();
    const { boardingPoint, selectedSeats, totalFare, busId } = location.state || {}; // ✅ Get data from Seat Selection

    const [busDetails, setBusDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState("Khalti");

    // ✅ User details state
    const [userDetails, setUserDetails] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });

    // ✅ Fetch bus details dynamically from backend
    useEffect(() => {
        if (busId) {
            axios.get(`${API_BASE_URL}/bus/${busId}`)
                .then(response => {
                    setBusDetails(response.data.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError("Failed to fetch bus details.");
                    setLoading(false);
                });
        }
    }, [busId]);

    // ✅ Handle input change for user details
    const handleInputChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    // ✅ Handle form submission
    const handleConfirmBooking = () => {
        if (!userDetails.name || !userDetails.phone || !userDetails.email || !userDetails.address) {
            alert("Please fill in all details before confirming.");
            return;
        }

        const bookingData = {
            busId,
            boardingPoint,
            selectedSeats,
            totalFare,
            userDetails,
            paymentMethod,
        };

        console.log("Booking Data:", bookingData); // ✅ Replace this with an API call to save the booking

        alert("Booking Confirmed!");
    };

    return (
        <>
            <Header />
            <Navbar />

            <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg min-h-[100px]">
                {loading ? (
                    <p className="text-center text-gray-600">Loading bus details...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <>
                        {/* ✅ Travel Information Section */}
                        <section>
                            <h2 className="text-lg font-semibold text-purple-700">
                                {busDetails?.route.startPoint} ➝ {busDetails?.route.endPoint}, {new Date(busDetails?.date).toLocaleDateString()}
                            </h2>
                            <div className="bg-purple-100 p-4 rounded-md mt-2">
                                <p className="text-sm font-medium">{busDetails?.busType} Bus</p>
                                <p className="text-sm text-center mt-2">{busDetails?.route.routeName}</p>
                            </div>
                        </section>

                        {/* ✅ Display Selected Details */}
                        <section className="mt-6">
                            <h3 className="text-lg font-semibold text-purple-700">Booking Details</h3>
                            <p><strong>Boarding Point:</strong> {boardingPoint || "Not Selected"}</p>
                            <p><strong>Selected Seats:</strong> {selectedSeats?.join(", ") || "None"}</p>
                            <p><strong>Total Fare:</strong> Rs. {totalFare || "0"}</p>
                        </section>

                        {/* ✅ User Details Section */}
                        <section className="mt-6">
                            <h3 className="text-lg font-semibold text-purple-700">Your Details</h3>
                            <input
                                type="text"
                                name="name"
                                value={userDetails.name}
                                onChange={handleInputChange}
                                placeholder="Full Name"
                                className="w-full border p-2 rounded mt-2"
                            />
                            <input
                                type="text"
                                name="phone"
                                value={userDetails.phone}
                                onChange={handleInputChange}
                                placeholder="Mobile Number"
                                className="w-full border p-2 rounded mt-2"
                            />
                            <input
                                type="email"
                                name="email"
                                value={userDetails.email}
                                onChange={handleInputChange}
                                placeholder="Email Address"
                                className="w-full border p-2 rounded mt-2"
                            />
                            <input
                                type="text"
                                name="address"
                                value={userDetails.address}
                                onChange={handleInputChange}
                                placeholder="Address"
                                className="w-full border p-2 rounded mt-2"
                            />
                        </section>

                        {/* ✅ Payment Method Section */}
                        <section className="mt-6">
                            <h3 className="text-lg font-semibold text-purple-700">Payment Method</h3>
                            <div className="flex gap-4 mt-2">
                                {["Khalti", "Esewa", "Cash"].map((method) => (
                                    <button
                                        key={method}
                                        onClick={() => setPaymentMethod(method)}
                                        className={`border px-4 py-2 rounded ${
                                            paymentMethod === method ? "bg-purple-500 text-white" : "bg-gray-200"
                                        }`}
                                    >
                                        {method}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* ✅ Travel and Payment Details Section */}
                        <section className="mt-6 flex gap-4">
                            <div className="w-1/2 bg-purple-100 p-4 rounded-md">
                                <h3 className="text-lg font-semibold text-purple-700">Travel Details</h3>
                                <p>Route: {busDetails?.route.startPoint} - {busDetails?.route.endPoint}</p>
                                <p>Date: {new Date(busDetails?.date).toLocaleDateString()}</p>
                                <p>Seats: {selectedSeats?.length} ({selectedSeats?.join(", ")})</p>
                                <p>Bus Type: {busDetails?.busType}</p>
                            </div>

                            <div className="w-1/2 bg-purple-100 p-4 rounded-md">
                                <h3 className="text-lg font-semibold text-purple-700">Payment Details</h3>
                                <p>Total Cost: NPR {totalFare}</p>
                                <p>Cashback: NPR {Math.floor(totalFare * 0.1)}</p>
                                <p className="font-bold">To Pay Amount: NPR {totalFare - Math.floor(totalFare * 0.1)}</p>
                            </div>
                        </section>

                        {/* ✅ Action Buttons */}
                        <section className="mt-6 flex gap-4">
                            <button onClick={handleConfirmBooking} className="bg-purple-600 text-white py-2 px-6 rounded">
                                Confirm Booking
                            </button>
                            <button className="bg-gray-600 text-white py-2 px-6 rounded">
                                Go Back
                            </button>
                        </section>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Checkout;
