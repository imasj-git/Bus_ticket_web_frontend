import React from "react";

const ViewBuses = () => {
  // Dummy data for buses
  const busesData = [
    {
      id: 1,
      busNumber: "BUS-101",
      driverName: "John Doe",
      route: "City A - City B",
      capacity: 50,
      busType: "AC",
    },
    {
      id: 2,
      busNumber: "BUS-202",
      driverName: "Jane Smith",
      route: "City B - City C",
      capacity: 40,
      busType: "Non-AC",
    },
    {
      id: 3,
      busNumber: "BUS-303",
      driverName: "Alice Johnson",
      route: "City A - City D",
      capacity: 55,
      busType: "Luxury",
    },
    {
      id: 4,
      busNumber: "BUS-404",
      driverName: "Bob Brown",
      route: "City C - City A",
      capacity: 60,
      busType: "Sleeper",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">View Buses</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">#</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Bus Number</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Driver Name</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Route</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Capacity</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Bus Type</th>
              </tr>
            </thead>
            <tbody>
              {busesData.map((bus, index) => (
                <tr
                  key={bus.id}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{bus.id}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{bus.busNumber}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{bus.driverName}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{bus.route}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{bus.capacity}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{bus.busType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewBuses;
