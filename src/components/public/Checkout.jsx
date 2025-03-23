import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import KhaltiCheckout from "khalti-checkout-web"; // ✅ Import Khalti
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../components/common/customer/Header";
import Navbar from "../../components/common/customer/Navbar";
import Footer from "../../components/common/customer/Footer";

const API_BASE_URL = "http://localhost:3000/api/v1"; // ✅ Backend API URL

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate(); // ✅ Navigation for success redirect

    // ✅ Extract booking details from state
    const { boardingPoint, selectedSeats, totalFare, busId } = location.state || {};

    // ✅ Component state
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
                .catch(() => {
                    setError("Failed to fetch bus details.");
                    setLoading(false);
                });
        }
    }, [busId]);

    // ✅ Handle input change for user details
    const handleInputChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    // ✅ Handle payment method change
    const handlePaymentChange = (method) => {
        setPaymentMethod(method);
    };

    // ✅ Khalti Configuration
    const khaltiConfig = {
        publicKey: "test_public_key_617c4c6fe77c441d88451ec1408a0c0e",
        productIdentity: busId,
        productName: "Bus Ticket",
        productUrl: "http://localhost:3000",
        eventHandler: {
            async onSuccess(payload) {
                console.log("Khalti Payment Successful:", payload);

                // ✅ Verify payment with backend
                try {
                    const verifyResponse = await axios.post(`${API_BASE_URL}/khalti/verify`, {
                        token: payload.token,
                        amount: totalFare * 100, // Khalti expects amount in paisa
                    });

                    if (verifyResponse.data.success) {
                        toast.success("Payment verified successfully!");

                        // ✅ Submit booking to backend
                        await submitBooking("Khalti");
                    } else {
                        toast.error("Payment verification failed!");
                    }
                } catch (error) {
                    console.error("Payment Verification Error:", error);
                    toast.error("Error verifying payment. Please try again.");
                }
            },
            onError(error) {
                console.error("Khalti Payment Error:", error);
                toast.error("Khalti Payment Failed!");
            },
        },
    };

    // ✅ Handle booking API call
    const submitBooking = async (paymentMode) => {
        if (!userDetails.name || !userDetails.phone || !userDetails.email || !userDetails.address) {
            toast.error("Please fill in all details before confirming.");
            return;
        }

        const bookingData = {
            busId,
            boardingPoint,
            selectedSeats,
            totalFare,
            userDetails,
            paymentMethod: paymentMode, // ✅ Store chosen payment method
        };

        try {
            const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);

            if (response.data.success) {
                toast.success("Booking Confirmed!");

                setTimeout(() => {
                    navigate("/booking-success"); // ✅ Redirect after success
                }, 3000);
            } else {
                toast.error("Booking failed. Please try again.");
            }
        } catch (error) {
            console.error("Booking Error:", error);
            toast.error("Failed to confirm booking. Please try again later.");
        }
    };

    // ✅ Handle order submission
    const handleConfirmBooking = () => {
        if (paymentMethod === "Khalti") {
            const khalti = new KhaltiCheckout(khaltiConfig);
            khalti.show({ amount: totalFare * 100 });
        } else {
            submitBooking("Cash");
        }
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

                        {/* ✅ Payment Method Section */}
                        <section className="mt-6">
                            <h3 className="text-lg font-semibold text-purple-700">Payment Method</h3>
                            <div className="flex gap-4 mt-2">
                                {["Khalti", "Cash"].map((method) => (
                                    <button
                                        key={method}
                                        onClick={() => handlePaymentChange(method)}
                                        className={`border px-4 py-2 rounded ${
                                            paymentMethod === method ? "bg-purple-500 text-white" : "bg-gray-200"
                                        }`}
                                    >
                                        {method}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* ✅ Action Buttons */}
                        <section className="mt-6 flex gap-4">
                            <button onClick={handleConfirmBooking} className="bg-purple-600 text-white py-2 px-6 rounded">
                                {paymentMethod === "Khalti" ? "Pay with Khalti" : "Confirm Booking"}
                            </button>
                            <button className="bg-gray-600 text-white py-2 px-6 rounded" onClick={() => navigate(-1)}>
                                Go Back
                            </button>
                        </section>
                    </>
                )}
            </div>

            <Footer />
            <ToastContainer />
        </>
    );
};

export default Checkout;
