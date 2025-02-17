import React, { useState } from "react";

const AddBusses = () => {
  const [formData, setFormData] = useState({
    busNumber: "",
    driverName: "",
    route: "",
    capacity: "",
    busType: "",
  });

  const routes = [
    "City A - City B",
    "City B - City C",
    "City C - City D",
    "City D - City E",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform API call or action to add the bus
    console.log("Bus added successfully:", formData);
    alert("Bus added successfully!");
    setFormData({
      busNumber: "",
      driverName: "",
      route: "",
      capacity: "",
      busType: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">Add New Bus</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Bus Number */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Bus Number
            </label>
            <input
              type="text"
              name="busNumber"
              value={formData.busNumber}
              onChange={handleChange}
              placeholder="Enter bus number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Driver Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Driver Name
            </label>
            <input
              type="text"
              name="driverName"
              value={formData.driverName}
              onChange={handleChange}
              placeholder="Enter driver's name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Route */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Route
            </label>
            <select
              name="route"
              value={formData.route}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            >
              <option value="">Select route</option>
              {routes.map((route, index) => (
                <option key={index} value={route}>
                  {route}
                </option>
              ))}
            </select>
          </div>

          {/* Capacity */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Capacity
            </label>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              placeholder="Enter bus capacity"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Bus Type */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Bus Type
            </label>
            <select
              name="busType"
              value={formData.busType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            >
              <option value="">Select bus type</option>
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
              <option value="Luxury">Luxury</option>
              <option value="Sleeper">Sleeper</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Add Bus
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBusses;
