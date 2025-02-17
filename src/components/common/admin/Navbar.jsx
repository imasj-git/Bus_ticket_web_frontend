import React from "react";
import { Input } from "@/components/ui/input";
import { Bell } from "lucide-react";

// Import images
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avtar.jpg";

const Navbar = () => {
    return (
        <div className="flex fixed top-0 left-0 w-full  items-center justify-between bg-purple-700 text-white px-6 py-3 shadow-md">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
                {/* Logo Container */}
                <div className="w-10 h-10 bg-purple-600 rounded-full overflow-hidden flex items-center justify-center">
                    <img
                        src={logo} // Use the imported logo
                        alt="Logo"
                        className="w-full h-full object-cover" // Ensures the image fits the container
                    />
                </div>
                {/* Title */}
                <h1 className="text-lg font-bold">BusSewa</h1>
            </div>






            {/* Search Section */}
            <div className="flex-1 mx-4 max-w-md">
                <Input
                    type="text"
                    placeholder="Search here"
                    className="w-full border-white bg-white-600 text-white placeholder-gray-800"
                />
            </div>


            {/* User and Notification Section */}
            <div className="flex items-center space-x-4">
                {/* Notification Icon */}
                <div className="relative">
                    <Bell className="text-white hover:text-gray-300 cursor-pointer" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-white border"></div>
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-2">
                    <img
                        src={avatar} // Use the imported avatar
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                    />
                    <div>
                        <p className="text-sm font-medium">Pichart</p>
                        <p className="text-xs text-gray-200">Saurav@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
