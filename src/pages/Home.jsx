import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-extrabold text-purple-700 mb-6">
        Welcome to MediTrack 💊
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl">
        A modern way to manage bills, patients, and healthcare data with
        advanced dashboards and secure access.
      </p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow hover:bg-purple-700"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-6 py-3 bg-white border border-purple-600 text-purple-600 font-semibold rounded-xl shadow hover:bg-purple-50"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
