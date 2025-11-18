import React, { useState } from "react";

const SupplierOrders = () => {
  // DUMMY PO LIST — will connect to backend later
  const [orders, setOrders] = useState([
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
  ]);

  const nextStatus = {
    Pending: "Confirmed",
    Confirmed: "Dispatched",
    Dispatched: "Delivered",
    Delivered: "Delivered",
  };

  const getStatusColor = (status) => {
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

  const updateStatus = (index) => {
    const updated = [...orders];
    updated[index].status = nextStatus[updated[index].status];
    setOrders(updated);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Purchase Orders</h1>
      <p className="text-sm text-gray-500">
        Manage orders received from Admin or Retailers.
      </p>

      <div className="bg-white shadow-md rounded-2xl p-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700 text-xs uppercase">
            <tr>
              <th className="px-4 py-3 text-left">PO ID</th>
              <th className="px-4 py-3 text-left">Buyer</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3">Items</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, i) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">{order.buyer}</td>
                <td className="px-4 py-3">{order.date}</td>
                <td className="px-4 py-3 text-center">{order.items}</td>
                <td className="px-4 py-3 font-semibold">{order.amount}</td>

                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="px-4 py-3 text-center">
                  {order.status !== "Delivered" && (
                    <button
                      onClick={() => updateStatus(i)}
                      className="px-4 py-1.5 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700"
                    >
                      Mark as {nextStatus[order.status]}
                    </button>
                  )}

                  {order.status === "Delivered" && (
                    <span className="text-gray-400 text-xs">Completed</span>
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

export default SupplierOrders;
