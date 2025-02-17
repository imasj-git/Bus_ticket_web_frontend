import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaBook } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What Is BusSewa?",
      answer: "BusSewa is an online platform that helps users book bus tickets conveniently from anywhere.",
    },
    {
      question: "Do I Need To Register To Use BusSewa?",
      answer: "No, you can book tickets without registration. However, creating an account provides additional features like booking history and notifications.",
    },
    {
      question: "Does BusSewa Own The Buses?",
      answer: "No, BusSewa partners with bus operators to provide ticket booking services. It does not own or operate buses.",
    },
    {
      question: "How Can I Make Payments?",
      answer: "You can make payments using debit/credit cards, mobile wallets, or other online payment methods supported by BusSewa.",
    },
    {
      question: "How Will I Get Confirmation That My Ticket Purchased?",
      answer: "You will receive a confirmation email or SMS with your ticket details immediately after the payment is successful.",
    },
    {
      question: "What Details Do I Need To Give At The Time Of Booking/Buying?",
      answer: "You need to provide your name, mobile number, email address, and travel details like departure and destination points.",
    },
    {
      question: "I entered the wrong mobile number while booking. Can I get my mTicket on a different number?",
      answer: "Yes, you can contact our customer service team to update your mobile number and resend the mTicket.",
    },
    {
      question: "What is an mTicket?",
      answer: "An mTicket is a mobile ticket that is sent to your phone via SMS or email. It can be used to board the bus without needing a printed ticket.",
    },
    {
      question: "How do I contact customer service?",
      answer: "You can contact our customer service team via email at support@bussewa.com or call us at +123-456-7890.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-8">
        {/* Title Section */}
        <div className="flex items-center mb-6">
          <FaBook className="text-purple-600 text-2xl mr-2" />
          <h2 className="text-2xl font-bold text-gray-700">Booking</h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg shadow-sm p-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">{faq.question}</span>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="text-purple-600 focus:outline-none"
                >
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
              {/* Answer Section */}
              {activeIndex === index && (
                <div className="mt-4 text-gray-600 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
