import React from "react";

const steps = [
  {
    label: "Assigned",
    time: "09:00 AM",
    desc: "Delivery assigned to you.",
    done: true,
  },
  {
    label: "Picked from Warehouse",
    time: "09:20 AM",
    desc: "Parcel picked from SCMS hub.",
    done: true,
  },
  {
    label: "Out for Delivery",
    time: "10:00 AM",
    desc: "On the way to customer.",
    done: true,
  },
  {
    label: "Delivered",
    time: "10:30 AM",
    desc: "Delivered to customer.",
    done: false, // last one pending
  },
];

const DeliveryTimeline = () => {
  return (
    <div className="p-6 space-y-6 max-w-2xl">
      <h1 className="text-2xl font-semibold text-gray-800">
        Sample Delivery Timeline
      </h1>
      <p className="text-sm text-gray-500">
        Represents the usual lifecycle of a delivery. Later can be linked to
        real order data.
      </p>

      <div className="bg-white rounded-2xl shadow p-6">
        <ol className="relative border-l border-gray-200 pl-4 space-y-4">
          {steps.map((s, i) => (
            <li key={i} className="relative">
              <span
                className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 ${
                  s.done
                    ? "bg-green-500 border-green-500"
                    : "bg-white border-gray-300"
                }`}
              />
              <div className="ml-2">
                <p className="text-sm font-semibold text-gray-800">
                  {s.label}
                  <span className="ml-2 text-xs text-gray-400">{s.time}</span>
                </p>
                <p className="text-xs text-gray-500">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default DeliveryTimeline;
