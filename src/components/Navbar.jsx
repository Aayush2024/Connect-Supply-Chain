import React from "react";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const userRole = localStorage.getItem("scms_role");

  const handleLogout = () => {
    localStorage.removeItem("scms_auth");
    localStorage.removeItem("scms_role");
    window.location.href = "/"; // redirect to Landing Page
  };

  return (
    <div className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left side text */}
      <h2 className="text-xl font-semibold text-gray-700">
        Welcome, <span className="capitalize text-blue-600">{userRole}</span>
      </h2>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
};

export default Navbar;
