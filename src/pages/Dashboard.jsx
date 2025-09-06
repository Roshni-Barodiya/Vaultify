import React from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-purple-700 mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-700">Total Patients</h2>
            <p className="text-3xl font-bold text-purple-700 mt-2">3,256</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-700">Available Staff</h2>
            <p className="text-3xl font-bold text-purple-700 mt-2">394</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-700">Avg. Costs</h2>
            <p className="text-3xl font-bold text-purple-700 mt-2">$2,536</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
