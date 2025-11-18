import React from "react";
import { ShoppingCart, Home, User, PackageSearch } from "lucide-react";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="bg-white shadow-md px-6 py-3 flex items-center justify-between sticky top-0 z-50">

      <Link to="/browse" className="text-2xl font-bold text-blue-600">
        Connect Supply Chain 
      </Link>

      <input
        type="text"
        placeholder="Search for products..."
        className="px-4 py-2 border rounded-lg w-1/3"
      />

      <div className="flex items-center gap-6 text-gray-700">

        <Link to="/browse" className="flex items-center gap-1 hover:text-blue-600">
          <Home size={20} /> Home
        </Link>

        <Link to="/user-orders" className="flex items-center gap-1 hover:text-blue-600">
          <PackageSearch size={20} /> My Orders
        </Link>

        <Link to="/cart" className="flex items-center gap-1 hover:text-blue-600">
          <ShoppingCart size={20} /> Cart
        </Link>
<Link
  to="/profile"
  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm"
>
  <User size={16} />
  <span>Profile</span>
</Link>

<button
  onClick={handleLogout}
  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-red-100 hover:bg-red-200 text-red-600 text-xs sm:text-sm"
>
  <span>Logout</span>
</button>


      </div>
    </div>
  );
};

export default UserNavbar;
