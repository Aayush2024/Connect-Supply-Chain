import React from "react";

const DeliveryRouteMap = () => {
  const todayStops = [
    {
      id: 1,
      label: "Warehouse",
      type: "Start",
      address: "SCMS Central Hub, Nagpur",
      time: "09:00 AM",
    },
    {
      id: 2,
      label: "Stop 1",
      type: "Drop",
      address: "Aayush Umrey, Nagpur",
      time: "09:45 AM",
    },
    {
      id: 3,
      label: "Stop 2",
      type: "Drop",
      address: "Priya Mehta, Nagpur",
      time: "10:30 AM",
    },
    {
      id: 4,
      label: "Stop 3",
      type: "Drop",
      address: "Metro Retail Store, Nagpur",
      time: "11:15 AM",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Today&apos;s Route
      </h1>

      {/* Fake map block */}
      <div className="bg-linear-to-r from-blue-100 via-sky-100 to-emerald-100 rounded-2xl shadow-inner h-64 mb-4 flex items-center justify-center">
        <p className="text-gray-500 text-sm">
          Map view placeholder – will connect to real map in backend.
        </p>
      </div>

      {/* Stops list */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Stops</h2>
        <ol className="space-y-3">
          {todayStops.map((stop, index) => (
            <li
              key={stop.id}
              className="flex items-start gap-3 border-l-2 border-blue-400 pl-3"
            >
              <span className="mt-1 h-3 w-3 rounded-full bg-blue-500" />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {index + 1}. {stop.label}{" "}
                  <span className="text-xs text-gray-400">
                    ({stop.type})
                  </span>
                </p>
                <p className="text-xs text-gray-500">{stop.address}</p>
                <p className="text-xs text-gray-400">ETA: {stop.time}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default DeliveryRouteMap;
