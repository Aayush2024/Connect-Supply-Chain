import React, { useState } from "react";

const MyDeliveries = () => {
  const [deliveries, setDeliveries] = useState([
    {
      id: "DLV-1001",
      orderId: "ORD001",
      customer: "Aayush Umrey",
      address: "Nagpur, Maharashtra",
      scheduledDate: "2025-11-17",
      status: "Assigned",
    },
    {
      id: "DLV-1002",
      orderId: "ORD002",
      customer: "Priya Mehta",
      address: "Pune, Maharashtra",
      scheduledDate: "2025-11-17",
      status: "Picked",
    },
    {
      id: "DLV-1003",
      orderId: "ORD003",
      customer: "Rohan Singh",
      address: "Mumbai, Maharashtra",
      scheduledDate: "2025-11-18",
      status: "Out for Delivery",
    },
    {
      id: "DLV-1004",
      orderId: "ORD004",
      customer: "Neha Sharma",
      address: "Bhopal, MP",
      scheduledDate: "2025-11-18",
      status: "Delivered",
    },
  ]);

  const statusFlow = {
    Assigned: "Picked",
    Picked: "Out for Delivery",
    "Out for Delivery": "Delivered",
    Delivered: "Delivered",
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Assigned":
        return "bg-gray-100 text-gray-700";
      case "Picked":
        return "bg-blue-100 text-blue-700";
      case "Out for Delivery":
        return "bg-yellow-100 text-yellow-700";
      case "Delivered":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const advanceStatus = (index) => {
    const updated = [...deliveries];
    updated[index].status = statusFlow[updated[index].status];
    setDeliveries(updated);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h1 className="text-2xl font-semibold text-gray-800">
          My Deliveries
        </h1>
        <p className="text-sm text-gray-500">
          View assigned deliveries and update their status.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
            <tr>
              <th className="px-4 py-3 text-left">Delivery ID</th>
              <th className="px-4 py-3 text-left">Order ID</th>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3 text-center">Scheduled Date</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {deliveries.map((d, i) => (
              <tr key={d.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{d.id}</td>
                <td className="px-4 py-3">{d.orderId}</td>
                <td className="px-4 py-3">{d.customer}</td>
                <td className="px-4 py-3">{d.address}</td>
                <td className="px-4 py-3 text-center">{d.scheduledDate}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      d.status
                    )}`}
                  >
                    {d.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  {d.status !== "Delivered" ? (
                    <button
                      onClick={() => advanceStatus(i)}
                      className="px-4 py-1.5 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700"
                    >
                      Mark as {statusFlow[d.status]}
                    </button>
                  ) : (
                    <span className="text-xs text-gray-400">Completed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDeliveries;
