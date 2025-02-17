import React from "react";

const ViewRoute = () => {
  return (
    <div className="p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">View Routes</h1>
      </div>
      <div className="mt-4">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Route ID</th>
              <th className="border border-gray-300 px-4 py-2">Source</th>
              <th className="border border-gray-300 px-4 py-2">Destination</th>
              <th className="border border-gray-300 px-4 py-2">Distance</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">City A</td>
              <td className="border border-gray-300 px-4 py-2">City B</td>
              <td className="border border-gray-300 px-4 py-2">120 km</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
            <tr className="text-center hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">City C</td>
              <td className="border border-gray-300 px-4 py-2">City D</td>
              <td className="border border-gray-300 px-4 py-2">200 km</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewRoute;
