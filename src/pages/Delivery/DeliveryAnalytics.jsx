import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const deliveriesPerDay = [
  { day: "Mon", count: 12 },
  { day: "Tue", count: 18 },
  { day: "Wed", count: 15 },
  { day: "Thu", count: 20 },
  { day: "Fri", count: 22 },
  { day: "Sat", count: 14 },
  { day: "Sun", count: 10 },
];

const onTimeRates = [
  { day: "Mon", rate: 92 },
  { day: "Tue", rate: 95 },
  { day: "Wed", rate: 88 },
  { day: "Thu", rate: 94 },
  { day: "Fri", rate: 90 },
  { day: "Sat", rate: 96 },
  { day: "Sun", rate: 89 },
];

const DeliveryAnalytics = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-semibold text-gray-800">
        Delivery Analytics
      </h1>

      {/* Deliveries count */}
      <div className="bg-white rounded-2xl shadow p-6 h-80">
        <h2 className="text-lg font-semibold mb-4">Deliveries per Day</h2>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={deliveriesPerDay}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* On-time rates */}
      <div className="bg-white rounded-2xl shadow p-6 h-80">
        <h2 className="text-lg font-semibold mb-4">On-time Delivery Rate (%)</h2>
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={onTimeRates}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line dataKey="rate" stroke="#10b981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DeliveryAnalytics;
