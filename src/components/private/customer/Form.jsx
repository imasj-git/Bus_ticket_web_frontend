import React, { useState, useEffect } from "react";

const Settings = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  // Simulate fetching user data
  useEffect(() => {
    // Replace with API call to fetch user data
    const fetchData = async () => {
      const fakeUserData = {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "********",
      };
      setUserData(fakeUserData);
    };
    fetchData();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Saving changes...");

    // Simulate an API call to save changes
    setTimeout(() => {
      setMessage("Profile updated successfully!");
      setIsEditing(false);
    }, 2000);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl text-center text-purple-600 font-bold mb-4">Settings</h1>

      {message && (
        <div className="mb-4 p-2 text-green-700 bg-green-200 rounded">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full p-2 border rounded ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full p-2 border rounded ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full p-2 border rounded ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          {!isEditing ? (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800"
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-400"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Settings;
