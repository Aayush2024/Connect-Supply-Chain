import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

const fulfilment = [
  { month: "Jan", value: 88 },
  { month: "Feb", value: 92 },
  { month: "Mar", value: 90 },
  { month: "Apr", value: 95 },
  { month: "May", value: 93 },
  { month: "Jun", value: 96 },
];

const orderVolume = [
  { month: "Jan", count: 32 },
  { month: "Feb", count: 40 },
  { month: "Mar", count: 27 },
  { month: "Apr", count: 45 },
  { month: "May", count: 52 },
  { month: "Jun", count: 49 },
];

const SupplierAnalytics = () => {
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-semibold">Supplier Analytics</h1>

      {/* Fulfilment Line Chart */}
      <div className="bg-white rounded-xl shadow p-6 h-80">
        <h2 className="text-lg font-semibold mb-4">Monthly Fulfilment Rate</h2>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={fulfilment}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line dataKey="value" stroke="#2563eb" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Order volume bar chart */}
      <div className="bg-white rounded-xl shadow p-6 h-80">
        <h2 className="text-lg font-semibold mb-4">Order Volume</h2>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={orderVolume}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#10b981" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SupplierAnalytics;
