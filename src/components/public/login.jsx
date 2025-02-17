import React from "react";
import { FaFacebook, FaGoogle, FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {
    return (
        <div className="flex min-h-screen">
            {/* Left Section */}
            <div className="w-1/2 bg-white flex flex-col justify-center items-center px-12">
                {/* Logo */}
                <div className="text-center mb-8">
                    <img
                        src="src/assets/images/logo.png" // Replace with your logo path

                        alt="BusSewa Logo"
                        className="w-20 h-20 mx-auto"
                    />
                    <h1 className="text-3xl font-bold text-purple-700">TicketSewa</h1>
                    <p className="text-sm text-gray-500">Trusted Ticketing Platform</p>
                </div>

                {/* Social Login Buttons */}
                <div className="w-full max-w-sm">
                    <button className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-md mb-4 hover:bg-blue-700">
                        <FaFacebook className="mr-2" />
                        Login with Facebook
                    </button>
                    <button className="w-full flex items-center justify-center bg-red-600 text-white py-2 rounded-md hover:bg-red-700">
                        <FaGoogle className="mr-2" />
                        Login with Google
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center my-3">
                    <div className="border-b w-1/4 border-gray-300"></div>
                    <span className="text-sm text-gray-400 px-2">Or</span>
                    <div className="border-b w-1/4 border-gray-300"></div>
                </div>

                {/* Form */}
                <div className="w-full max-w-sm">
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-2">Mobile Number</label>
                        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                            <FaEnvelope className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Mobile Number"
                                className="w-full pl-3 text-sm focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-2">Password</label>
                        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                            <FaLock className="text-gray-400" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-3 text-sm focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Remember Me and Forgot Password */}
                <div className="flex justify-between w-full max-w-sm text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Remember me
                    </div>
                    <a href="#" className="hover:underline">
                        Forgot Password?
                    </a>
                </div>

                {/* Login Button */}
                <button className="w-full max-w-sm bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
                    Login to BusSewa
                </button>

                {/* Signup Link */}
                <p className="text-sm text-gray-500 mt-6">
                    New to BusSewa?{" "}
                    <a href="/Register" className="text-purple-700 font-medium hover:underline">
                        Sign up!
                    </a>
                </p>

                {/* Footer */}
                <div className="text-sm text-gray-400 mt-8">
                    © 2024 BusSewa
                </div>
            </div>

            {/* Right Section */}
            <div
                className="w-1/2 bg-purple-700 text-white flex flex-col justify-start items-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('src/assets/images/bus2.png')", // Replace with your image path
                }}
            >
                {/* Text Section */}
                <div className="text-center max-w-md px-8 mt-10">
                    <h1 className="text-4xl font-bold mb-4">Unlock your journey with TicketSewa!</h1>
                    <p className="text-sm">
                        Sign in to your account to access exclusive features, manage your bookings,
                        and explore a world of seamless travel experiences.
                    </p>
                </div>
            </div>




        </div>
    );
};

export default Login;
