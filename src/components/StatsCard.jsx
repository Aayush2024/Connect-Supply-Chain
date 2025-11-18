import React from "react";

export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white shadow rounded-2xl p-5 flex flex-col items-start">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-semibold text-gray-800 mt-2">{value}</p>
    </div>
  );
}
