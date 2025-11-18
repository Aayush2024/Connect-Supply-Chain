import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Reports = () => {
  const [filter, setFilter] = useState("Monthly");

  const dataSets = {
    Weekly: [
      { label: "Week 1", sales: 4000, orders: 25, stock: 80 },
      { label: "Week 2", sales: 5200, orders: 32, stock: 75 },
      { label: "Week 3", sales: 6100, orders: 40, stock: 68 },
      { label: "Week 4", sales: 7000, orders: 46, stock: 60 },
    ],
    Monthly: [
      { label: "Jan", sales: 12000, orders: 90, stock: 65 },
      { label: "Feb", sales: 15000, orders: 110, stock: 63 },
      { label: "Mar", sales: 18000, orders: 130, stock: 70 },
      { label: "Apr", sales: 20000, orders: 145, stock: 60 },
      { label: "May", sales: 25000, orders: 170, stock: 50 },
      { label: "Jun", sales: 30000, orders: 190, stock: 40 },
    ],
    Yearly: [
      { label: "2020", sales: 120000, orders: 900, stock: 65 },
      { label: "2021", sales: 160000, orders: 1100, stock: 58 },
      { label: "2022", sales: 200000, orders: 1300, stock: 50 },
      { label: "2023", sales: 240000, orders: 1600, stock: 45 },
      { label: "2024", sales: 300000, orders: 1900, stock: 42 },
    ],
  };

  const data = dataSets[filter];

  // 📄 Download CSV
  const handleDownloadCSV = () => {
    const csvRows = [
      ["Label", "Sales", "Orders", "Stock"],
      ...data.map((d) => [d.label, d.sales, d.orders, `${d.stock}%`]),
    ];
    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvRows.map((row) => row.join(",")).join("\n");
    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = `SCMS_${filter}_Report.csv`;
    link.click();
  };

  // 📑 Download PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Supply Chain ${filter} Report`, 14, 15);
    doc.autoTable({
      head: [["Label", "Sales (₹)", "Orders", "Stock (%)"]],
      body: data.map((d) => [d.label, d.sales, d.orders, d.stock]),
      startY: 25,
    });
    doc.save(`SCMS_${filter}_Report.pdf`);
  };

  return (
    <div className="p-6 space-y-8">
      <div className="flex flex-wrap justify-between items-center gap-3">
        <h1 className="text-2xl font-semibold text-gray-800">Reports & Analytics</h1>

        <div className="flex gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring focus:ring-blue-200"
          >
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>

          <button
            onClick={handleDownloadCSV}
            className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition"
          >
            Export CSV
          </button>
          <button
            onClick={handleDownloadPDF}
            className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition"
          >
            Export PDF
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-2xl p-5">
          <h3 className="text-sm text-gray-500">Total Sales</h3>
          <p className="text-2xl font-bold text-blue-600 mt-1">
            ₹{(data.reduce((sum, d) => sum + d.sales, 0) / 1000).toFixed(1)}K
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-5">
          <h3 className="text-sm text-gray-500">Total Orders</h3>
          <p className="text-2xl font-bold text-green-600 mt-1">
            {data.reduce((sum, d) => sum + d.orders, 0)}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-5">
          <h3 className="text-sm text-gray-500">Avg. Stock Level</h3>
          <p className="text-2xl font-bold text-yellow-600 mt-1">
            {Math.round(data.reduce((sum, d) => sum + d.stock, 0) / data.length)}%
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Chart */}
        <div className="bg-white rounded-2xl shadow-md p-6 h-80">
          <h2 className="text-lg font-semibold mb-4">Sales Trend</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="label" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Orders Chart */}
        <div className="bg-white rounded-2xl shadow-md p-6 h-80">
          <h2 className="text-lg font-semibold mb-4">Orders Overview</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="label" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="orders" fill="#22c55e" barSize={40} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Reports;
