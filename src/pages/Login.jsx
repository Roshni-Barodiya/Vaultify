import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, Lock } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Welcome Back 👋</h2>
        {error && <p className="text-red-300 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm text-white mb-1">Email</label>
            <div className="flex items-center bg-white/30 rounded-lg px-3 py-2">
              <Mail className="text-white mr-2" size={18} />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="bg-transparent w-full focus:outline-none text-white placeholder-gray-200"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-white mb-1">Password</label>
            <div className="flex items-center bg-white/30 rounded-lg px-3 py-2">
              <Lock className="text-white mr-2" size={18} />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="bg-transparent w-full focus:outline-none text-white placeholder-gray-200"
                required
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-[1.02] transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-sm text-center text-white">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="cursor-pointer font-semibold hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
