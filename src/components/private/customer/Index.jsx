import React from "react";

const Users = () => {
  // Dummy data for logged-in users
  const usersData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      lastLogin: "2025-02-15 10:30 AM",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Customer",
      lastLogin: "2025-02-14 8:45 PM",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.j@example.com",
      role: "Customer",
      lastLogin: "2025-02-16 6:10 PM",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      role: "Admin",
      lastLogin: "2025-02-13 9:00 AM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">Logged-In Users</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">#</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Name</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Email</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Role</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Last Login</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{user.id}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{user.name}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{user.email}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{user.role}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">{user.lastLogin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
