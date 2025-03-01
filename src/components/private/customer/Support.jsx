import React from "react";

const Support = () => {
  // Dummy data for feedback
  const feedbackData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 234 567 890",
      message: "The booking process was seamless! Thank you.",
      date: "2025-02-14",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1 987 654 321",
      message: "I had some issues with seat selection. Please look into it.",
      date: "2025-02-15",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.j@example.com",
      phone: "+1 456 789 012",
      message: "Great service, but please add more payment options.",
      date: "2025-02-16",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">Customer Feedback</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">#</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Name</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Email</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Phone</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Message</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {feedbackData.map((feedback, index) => (
                <tr
                  key={feedback.id}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{feedback.id}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{feedback.name}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{feedback.email}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{feedback.phone}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{feedback.message}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{feedback.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Support;
