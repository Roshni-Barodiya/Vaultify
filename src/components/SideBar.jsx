import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { logout } = useAuth();

  return (
    <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-purple-700 mb-8">MediTrack</h1>
        <nav className="space-y-4">
          <Link to="/dashboard" className="block text-gray-600 hover:text-purple-600">
            Dashboard
          </Link>
          <Link to="/upload-bill" className="block text-gray-600 hover:text-purple-600">
            Upload Bill
          </Link>
        </nav>
      </div>
      <button
        onClick={logout}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
