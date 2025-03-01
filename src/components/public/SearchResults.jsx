import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SeatSelection from "../public/SeatSelection"; // Import the SeatSelection component

const API_BASE_URL = "http://localhost:3000/api/v1";

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const startLocation = queryParams.get("start");
  const destination = queryParams.get("end");
  const searchDate = queryParams.get("date");

  // State to store the selected bus for seat selection
  const [selectedBus, setSelectedBus] = useState(null);

  // Fetch buses
  const { data: buses, isLoading, isError, error } = useQuery({
    queryKey: ["busSearch", startLocation, destination, searchDate],
    queryFn: async () => {
      const response = await axios.get(`${API_BASE_URL}/bus/bus-search/search`, {
        params: {
          startPoint: startLocation,
          endPoint: destination,
          date: searchDate,
        },
      });
      return response.data.buses;
    },
    enabled: !!(startLocation && destination && searchDate),
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Search Results</h1>
      {isLoading ? (
        <p className="text-center">Loading search results...</p>
      ) : isError ? (
        <p className="text-center text-red-500">{error.message}</p>
      ) : buses && buses.length > 0 ? (
        buses.map((bus) => (
          <div key={bus._id} className="bg-white rounded-lg shadow-lg p-4 mb-4">
            {/* Bus Details */}
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-bold">
                  {bus.busNumber} - {bus.driverName}
                </h3>
                <p className="text-sm text-gray-600">{bus.busType} Bus</p>
              </div>
              <div className="text-right">
                <p className="text-sm">Date: {new Date(bus.date).toLocaleDateString()}</p>
                <p className="text-sm text-gray-600">{bus.route?.routeName}</p>
              </div>
            </div>

            {/* Route Information */}
            {bus.route && (
              <div className="mt-2">
                <p className="text-sm text-gray-600">
                  {bus.route.startPoint} to {bus.route.endPoint}
                </p>
              </div>
            )}

            {/* View Seats Button */}
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => setSelectedBus(bus._id === selectedBus ? null : bus._id)}
              >
                {selectedBus === bus._id ? "Hide Seats" : "View Seats"}
              </button>
            </div>

            {/* Seat Layout Component */}
            {selectedBus === bus._id && <SeatSelection busId={bus._id} />}
          </div>
        ))
      ) : (
        <p className="text-center">No buses found for the selected criteria.</p>
      )}
    </div>
  );
}

export default SearchResults;
