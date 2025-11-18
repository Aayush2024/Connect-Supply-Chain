import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SupplierDashboard = () => {
  // Top stat cards
  const stats = [
    { label: "Total Purchase Orders", value: 320, color: "bg-blue-500" },
    { label: "Pending Approvals", value: 14, color: "bg-yellow-500" },
    { label: "Shipments In Transit", value: 9, color: "bg-purple-500" },
    { label: "On-time Delivery Rate", value: "94%", color: "bg-green-500" },
  ];

  // Simple monthly fulfilment data
  const fulfilmentData = [
    { month: "Jan", fulfilment: 88 },
    { month: "Feb", fulfilment: 92 },
    { month: "Mar", fulfilment: 90 },
    { month: "Apr", fulfilment: 95 },
    { month: "May", fulfilment: 93 },
    { month: "Jun", fulfilment: 96 },
  ];

  // Recent purchase orders (dummy data)
  const recentOrders = [
    {
      id: "PO-1023",
      buyer: "SCMS Admin",
      date: "2025-06-01",
      items: 24,
      amount: "₹52,000",
      status: "Pending",
    },
    {
      id: "PO-1022",
      buyer: "SCMS Admin",
      date: "2025-05-29",
      items: 18,
      amount: "₹38,400",
      status: "Confirmed",
    },
    {
      id: "PO-1021",
      buyer: "Metro Retail",
      date: "2025-05-27",
      items: 32,
      amount: "₹71,200",
      status: "Dispatched",
    },
    {
      id: "PO-1020",
      buyer: "SCMS Admin",
      date: "2025-05-25",
      items: 12,
      amount: "₹24,600",
      status: "Delivered",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Confirmed":
        return "bg-blue-100 text-blue-700";
      case "Dispatched":
        return "bg-purple-100 text-purple-700";
      case "Delivered":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h1 className="text-2xl font-semibold text-gray-800">
          Supplier Overview
        </h1>
        <p className="text-sm text-gray-500">
          View your purchase orders, fulfilment performance and shipments.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl p-5 flex flex-col items-start hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            <div className={`w-10 h-10 ${item.color} rounded-lg mb-3`} />
            <h3 className="text-sm text-gray-500">{item.label}</h3>
            <p className="text-2xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Fulfilment chart */}
      <div className="bg-white rounded-2xl shadow-md p-6 h-80">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Monthly Fulfilment Rate
          </h2>
          <span className="text-xs text-gray-500">
            % of orders delivered on time
          </span>
        </div>

        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={fulfilmentData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="fulfilment"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 5, fill: "#2563eb" }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent purchase orders */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Purchase Orders
          </h2>
          <span className="text-xs text-gray-500">
            Demo data – will connect to backend later
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
              <tr>
                <th className="px-4 py-2">PO ID</th>
                <th className="px-4 py-2">Buyer</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Items</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((po) => (
                <tr key={po.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">{po.id}</td>
                  <td className="px-4 py-2">{po.buyer}</td>
                  <td className="px-4 py-2">{po.date}</td>
                  <td className="px-4 py-2">{po.items}</td>
                  <td className="px-4 py-2 font-semibold">{po.amount}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(
                        po.status
                      )}`}
                    >
                      {po.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupplierDashboard;
