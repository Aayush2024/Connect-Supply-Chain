import React from "react";
import { Search, Bell, User } from "lucide-react";

const Topbar = () => {
  return (
    <header className="bg-white shadow-md flex justify-between items-center px-6 py-3 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <Search size={20} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="border-none outline-none bg-gray-50 rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell size={22} className="text-gray-600 cursor-pointer hover:text-blue-600" />
        <div className="flex items-center gap-2">
          <User size={22} className="text-gray-600" />
          <span className="font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
