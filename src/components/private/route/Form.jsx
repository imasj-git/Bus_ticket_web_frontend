import React, { useState } from "react";

const AddRoute = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    start: "",
    end: "",
    distance: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (!formData.name || !formData.start || !formData.end || !formData.distance) {
      alert("Please fill in all fields.");
      return;
    }

    // Call the onAdd function passed as a prop (optional, for adding to a parent state)
    if (onAdd) {
      onAdd(formData);
    }

    // Reset form after submission
    setFormData({
      name: "",
      start: "",
      end: "",
      distance: "",
    });

    alert("Route added successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="p-6 bg-white shadow-lg rounded-lg w-full" style={{ maxWidth: "600px" }}>
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Route</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Route Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter route name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="start">
              Start Point
            </label>
            <input
              type="text"
              id="start"
              name="start"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter start point"
              value={formData.start}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="end">
              End Point
            </label>
            <input
              type="text"
              id="end"
              name="end"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter end point"
              value={formData.end}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="distance">
              Distance
            </label>
            <input
              type="text"
              id="distance"
              name="distance"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter distance (e.g., 100 km)"
              value={formData.distance}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add Route
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoute;
