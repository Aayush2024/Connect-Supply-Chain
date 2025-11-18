import React, { useState } from "react";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: "ORD001",
      customer: "Aayush Umrey",
      date: "2025-11-01",
      amount: "₹12,000",
      status: "Delivered",
      address: "123, MG Road, Pune, India",
      contact: "+91 9876543210",
      items: [
        { name: "Wireless Mouse", qty: 2, price: "₹599" },
        { name: "Bluetooth Headphones", qty: 1, price: "₹1,499" },
      ],
    },
    {
      id: "ORD002",
      customer: "Priya Mehta",
      date: "2025-11-03",
      amount: "₹8,500",
      status: "Pending",
      address: "221B Baker Street, Delhi, India",
      contact: "+91 9988776655",
      items: [
        { name: "Office Chair", qty: 1, price: "₹3,200" },
        { name: "Desk Lamp", qty: 2, price: "₹899" },
      ],
    },
    {
      id: "ORD003",
      customer: "Rohan Singh",
      date: "2025-11-04",
      amount: "₹15,200",
      status: "Shipped",
      address: "456, Park Avenue, Mumbai, India",
      contact: "+91 9123456789",
      items: [
        { name: "Bluetooth Headphones", qty: 3, price: "₹1,499" },
        { name: "Wireless Mouse", qty: 2, price: "₹599" },
      ],
    },
    {
      id: "ORD004",
      customer: "Neha Sharma",
      date: "2025-11-05",
      amount: "₹6,800",
      status: "Cancelled",
      address: "12, Civil Lines, Bhopal, India",
      contact: "+91 9012345678",
      items: [
        { name: "Desk Lamp", qty: 4, price: "₹899" },
      ],
    },
  ];

  const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "text-green-600 bg-green-100";
      case "Pending":
        return "text-yellow-600 bg-yellow-100";
      case "Shipped":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-red-600 bg-red-100";
    }
  };

  const handleBack = () => setSelectedOrder(null);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      {!selectedOrder && (
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Orders</h1>
          <input
            type="text"
            placeholder="Search by customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring focus:ring-blue-200"
          />
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Orders Table */}
        <div
          className={`bg-white rounded-2xl shadow-md overflow-x-auto flex-1 transition-all duration-300 ${
            selectedOrder ? "hidden lg:block" : "block"
          }`}
        >
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Customer</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, i) => (
                <tr
                  key={i}
                  onClick={() => setSelectedOrder(order)}
                  className="border-b hover:bg-gray-50 transition cursor-pointer"
                >
                  <td className="px-6 py-3 font-medium">{order.id}</td>
                  <td className="px-6 py-3">{order.customer}</td>
                  <td className="px-6 py-3">{order.date}</td>
                  <td className="px-6 py-3 font-semibold">{order.amount}</td>
                  <td className="px-6 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Order Details Panel */}
        {selectedOrder && (
          <div className="lg:w-1/3 bg-white p-6 rounded-2xl shadow-md animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Order Details
              </h2>
              <button
                onClick={handleBack}
                className="lg:hidden text-blue-600 text-sm font-medium hover:underline"
              >
                ← Back
              </button>
            </div>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-medium">Order ID:</span>{" "}
                {selectedOrder.id}
              </p>
              <p>
                <span className="font-medium">Customer:</span>{" "}
                {selectedOrder.customer}
              </p>
              <p>
                <span className="font-medium">Date:</span> {selectedOrder.date}
              </p>
              <p>
                <span className="font-medium">Amount:</span>{" "}
                {selectedOrder.amount}
              </p>
              <p>
                <span className="font-medium">Status:</span>{" "}
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    selectedOrder.status
                  )}`}
                >
                  {selectedOrder.status}
                </span>
              </p>
              <p>
                <span className="font-medium">Address:</span>{" "}
                {selectedOrder.address}
              </p>
              <p>
                <span className="font-medium">Contact:</span>{" "}
                {selectedOrder.contact}
              </p>

              <div className="mt-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Ordered Items
                </h3>
                <ul className="list-disc ml-5 text-sm space-y-1">
                  {selectedOrder.items.map((item, index) => (
                    <li key={index}>
                      {item.name} — {item.qty} × {item.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => setSelectedOrder(null)}
              className="hidden lg:block mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
