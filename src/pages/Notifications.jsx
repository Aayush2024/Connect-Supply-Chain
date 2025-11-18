import React, { useState } from "react";
import {
  Bell,
  CheckCircle,
  AlertTriangle,
  Package,
  Truck,
  X,
} from "lucide-react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "order",
      message: "New order #ORD005 received from Neha Sharma.",
      time: "5 mins ago",
      details:
        "Customer Neha Sharma placed an order for 2 items worth ₹6,800. Expected delivery: 6 Nov 2025.",
      icon: <Package className="text-blue-500" size={20} />,
      read: false,
    },
    {
      id: 2,
      type: "stock",
      message: "Low stock alert: 'Wireless Mouse' below threshold (5 items left).",
      time: "20 mins ago",
      details:
        "Product ID: P001 — Wireless Mouse. Current stock: 5 units. Recommended reorder quantity: 25.",
      icon: <AlertTriangle className="text-yellow-500" size={20} />,
      read: false,
    },
    {
      id: 3,
      type: "delivery",
      message: "Shipment for order #ORD003 has been delivered successfully.",
      time: "2 hours ago",
      details:
        "Order #ORD003 delivered to Rohan Singh, Indore. Payment completed via UPI.",
      icon: <Truck className="text-green-500" size={20} />,
      read: true,
    },
    {
      id: 4,
      type: "supplier",
      message: "New supplier 'TechTrade Pvt. Ltd.' added to the system.",
      time: "Yesterday",
      details:
        "Supplier Name: TechTrade Pvt. Ltd. — Provides electronics components. Contact: techtrade@gmail.com",
      icon: <CheckCircle className="text-purple-500" size={20} />,
      read: true,
    },
  ]);

  const [selectedNotification, setSelectedNotification] = useState(null);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleClick = (note) => {
    setSelectedNotification(note);
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === note.id ? { ...n, read: true } : n
      )
    );
  };

  return (
    <div className="p-6 space-y-6 relative">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <Bell className="text-blue-600" size={24} /> Notifications
        </h1>
        <button
          onClick={markAllRead}
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Mark All as Read
        </button>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-2xl shadow-md divide-y">
        {notifications.map((note) => (
          <div
            key={note.id}
            onClick={() => handleClick(note)}
            className={`flex items-start gap-4 p-4 cursor-pointer hover:bg-gray-50 transition ${
              note.read ? "opacity-70" : "bg-blue-50"
            }`}
          >
            <div className="shrink-0 mt-1">{note.icon}</div>
            <div className="flex-1">
              <p className="text-gray-800 text-sm font-medium">{note.message}</p>
              <span className="text-xs text-gray-500">{note.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Panel */}
      {selectedNotification && (
        <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white shadow-2xl p-6 transition-all z-50">
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Notification Details
            </h2>
            <button
              onClick={() => setSelectedNotification(null)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              {selectedNotification.icon}
              <p className="font-medium text-gray-800">
                {selectedNotification.message}
              </p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {selectedNotification.details}
            </p>
            <p className="text-xs text-gray-400">
              {selectedNotification.time}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
