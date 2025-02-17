import React from "react";

const Footer = () => {
    return (
        <div className="bg-purple-700 text-white py-8">
            <div className="container mx-auto grid grid-cols-4 gap-8"style={{ marginLeft: "30px" }}>
                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:underline">Bus</a></li>
                        <li><a href="/PrivacyPolicy" className="hover:underline">PrivacyPolicy</a></li>
                        <li><a href="/ManageTickets" className="hover:underline">ManageTickets</a></li>
                        <li><a href="/ContactUs" className="hover:underline">Contact us</a></li>
                        
                        <li><a href="/FAQ" className="hover:underline">FAQ</a></li>
                        
                    </ul>
                </div>

                {/* Top Routes */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Top Routes</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Kathmandu - Pokhara</a></li>
                        <li><a href="#" className="hover:underline">Pokhara - Kathmandu</a></li>
                        <li><a href="#" className="hover:underline">Kathmandu - Butwal</a></li>
                        <li><a href="#" className="hover:underline">Butwal - Kathmandu</a></li>
                        <li><a href="#" className="hover:underline">Kathmandu - Baglung</a></li>
                        <li><a href="#" className="hover:underline">Kathmandu - Chitwan</a></li>
                        <li><a href="#" className="hover:underline">Kathmandu - Kakadvitta</a></li>
                        <li><a href="#" className="hover:underline">Kathmandu - Nepalgunj</a></li>
                        <li><a href="#" className="hover:underline">Kathmandu - Biratnagar</a></li>
                        <li><a href="#" className="hover:underline">Kathmandu - Dang</a></li>
                    </ul>
                </div>

                {/* Top Operators */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Top Operators</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Pashchim Nepal Bus Byabasayi Pvt. Ltd.</a></li>
                        <li><a href="#" className="hover:underline">Baba Adventure Travels</a></li>
                        <li><a href="#" className="hover:underline">Dhaulagiri Gandaki Yatayat Sewa Pvt. Ltd.</a></li>
                        <li><a href="#" className="hover:underline">Lotus Adventure Travels & Tours Pvt. Ltd.</a></li>
                        <li><a href="#" className="hover:underline">Greyhound Tours & Travels Pvt. Ltd.</a></li>
                        <li><a href="#" className="hover:underline">Sajha Yatayat</a></li>
                        <li><a href="#" className="hover:underline">Tahalka Travels & Tours Pvt. Ltd.</a></li>
                        <li><a href="#" className="hover:underline">Namaste Kapilvastu Tours & Travels</a></li>
                        <li><a href="#" className="hover:underline">Shuva Jagadamba Travels</a></li>
                        <li><a href="#" className="hover:underline">MNS Tours & Travels Pvt. Ltd.</a></li>
                    </ul>
                </div>

                {/* Payment Partners */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Payment Partners</h3>
                    <ul className="space-y-2">

                        <li><a href="#" className="hover:underline">Khalti</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
