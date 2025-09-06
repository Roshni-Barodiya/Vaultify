import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full fixed top-0 left-0 bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Vaultify
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/upload" className="text-gray-700 hover:text-blue-600 transition">
            Upload
          </Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition">
            Dashboard
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600 transition">
            Login
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
