import React, { useState } from "react";
import Sidebar from "../components/SideBar";


const UploadBill = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    if (file) {
      alert(`Uploaded: ${file.name}`);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar/>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-purple-700 mb-6">Upload Bill</h1>
        <form
          onSubmit={handleUpload}
          className="bg-white p-6 rounded-xl shadow w-full max-w-md"
        >
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full mb-4"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow hover:bg-purple-700"
          >
            Upload
          </button>
        </form>
      </main>
    </div>
  );
};

export default UploadBill;
