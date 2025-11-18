import React from "react";
import { ShoppingBag, ListOrdered, MapPin, HelpCircle, Star } from "lucide-react";

const UserDashboard = () => {
  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-semibold text-gray-800">
        Customer Dashboard
      </h1>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="p-5 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
          <ShoppingBag className="text-blue-500" size={40} />
          <p className="mt-2 font-semibold">Browse Products</p>
        </div>

        <div className="p-5 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
          <ListOrdered className="text-green-500" size={40} />
          <p className="mt-2 font-semibold">Your Orders</p>
        </div>

        <div className="p-5 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
          <MapPin className="text-orange-500" size={40} />
          <p className="mt-2 font-semibold">Track Order</p>
        </div>

        <div className="p-5 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
          <HelpCircle className="text-red-500" size={40} />
          <p className="mt-2 font-semibold">Support</p>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;
