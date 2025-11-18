import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userOrders") || "[]");
    setOrders(saved);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">My Orders</h1>
        <p className="text-gray-600 text-sm">You have no recent orders.</p>
      </div>
    );
  }

  const handleViewTracking = (orderId) => {
    navigate(`/track/${orderId}`);
  };

  return (
    <div className="p-6 space-y-5">
      <h1 className="text-2xl font-semibold mb-4">My Orders</h1>

      {orders.map((order, index) => (
        <div
          key={index}
          onClick={() => handleViewTracking(order.id)}
          className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200 p-5 cursor-pointer transition-all"
        >
          {/* Top Row */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">
                Order ID: {order.id}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Date: {order.date}
              </p>
            </div>

            <span className="px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-600 rounded-full">
              {order.status || "Placed"}
            </span>
          </div>

          {/* Order Items */}
          <div className="mt-4 space-y-1 text-sm">
            {order.items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between text-gray-700"
              >
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-3 font-semibold text-gray-900">
            Total Amount: ₹{order.total}
          </div>

          <p className="mt-2 text-xs text-blue-500">
            Tap to view tracking details →
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserOrders;
