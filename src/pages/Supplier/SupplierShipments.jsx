import React, { useState } from "react";

const SupplierShipments = () => {
  const [shipments, setShipments] = useState([
    { id: "SHP1001", order: "PO-1023", status: "Packed", date: "2025-06-02" },
    { id: "SHP1000", order: "PO-1022", status: "In Transit", date: "2025-05-29" },
    { id: "SHP0999", order: "PO-1021", status: "Delivered", date: "2025-05-27" },
  ]);

  const next = {
    Packed: "In Transit",
    "In Transit": "Delivered",
    Delivered: "Delivered",
  };

  const updateStatus = (index) => {
    const updated = [...shipments];
    updated[index].status = next[updated[index].status];
    setShipments(updated);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Shipments</h1>

      <div className="bg-white rounded-xl shadow p-6">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
            <tr>
              <th className="px-4 py-3 text-left">Shipment ID</th>
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {shipments.map((s, i) => (
              <tr key={s.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{s.id}</td>
                <td className="px-4 py-3 text-center">{s.order}</td>
                <td className="px-4 py-3 text-center">{s.date}</td>
                <td className="px-4 py-3 text-center">{s.status}</td>
                <td className="px-4 py-3 text-center">
                  {s.status !== "Delivered" && (
                    <button
                      onClick={() => updateStatus(i)}
                      className="px-3 py-1 bg-blue-600 text-white rounded-lg text-xs"
                    >
                      Mark {next[s.status]}
                    </button>
                  )}

                  {s.status === "Delivered" && (
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

export default SupplierShipments;
