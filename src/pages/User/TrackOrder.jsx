import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const steps = [
  "Order Placed",
  "Approved",
  "Packed",
  "Shipped",
  "Delivered",
];

const TrackOrder = () => {
  const { id } = useParams();               // 🔹 get order id from URL (if any)
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const allOrders = JSON.parse(localStorage.getItem("userOrders") || "[]");
    let found = null;

    if (id) {
      found = allOrders.find((o) => o.id === id) || null;
    }

    // fallback: use lastOrder if no id or not found
    if (!found) {
      const last = localStorage.getItem("lastOrder");
      if (last) {
        found = JSON.parse(last);
      }
    }

    setOrder(found);
  }, [id]);

  if (!order) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-2">Track Order</h1>
        <p className="text-sm text-gray-600">
          No order found. Place an order or go to My Orders.
        </p>
      </div>
    );
  }

  // You can later map this from order.timeline; for now static demo
  const currentStepIndex = 2; // Packed

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Track Order</h1>

      {/* Order info */}
      <div className="bg-white rounded-xl shadow p-4 text-sm space-y-1">
        <p>
          <span className="font-semibold">Order ID:</span> {order.id}
        </p>
        <p>
          <span className="font-semibold">Date:</span> {order.date}
        </p>
        <p>
          <span className="font-semibold">Amount:</span> ₹{order.amount}
        </p>
        <p>
          <span className="font-semibold">Payment:</span> Cash on Delivery
        </p>
        <p>
          <span className="font-semibold">Delivery Address:</span>{" "}
          {order.address}
        </p>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-3">Status Timeline</h2>
        <div className="space-y-4">
          {steps.map((step, index) => {
            const isCompleted = index <= currentStepIndex;
            return (
              <div key={step} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      isCompleted ? "bg-green-500" : "bg-gray-300"
                    }`}
                  />
                  {index !== steps.length - 1 && (
                    <div className="w-px h-8 bg-gray-300" />
                  )}
                </div>
                <div>
                  <p
                    className={`text-sm font-medium ${
                      isCompleted ? "text-green-700" : "text-gray-500"
                    }`}
                  >
                    {step}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
