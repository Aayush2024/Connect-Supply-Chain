import React, { useState } from "react";
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
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Dashboard = () => {
  const stats = [
    { label: "Total Orders", value: 1280, color: "bg-blue-500" },
    { label: "Active Suppliers", value: 85, color: "bg-green-500" },
    { label: "Pending Deliveries", value: 23, color: "bg-yellow-500" },
    { label: "Revenue (₹)", value: "4.8L", color: "bg-purple-500" },
  ];

  const dataSets = {
    Weekly: {
      "Total Orders": [
        { name: "Mon", value: 120 },
        { name: "Tue", value: 200 },
        { name: "Wed", value: 150 },
        { name: "Thu", value: 220 },
        { name: "Fri", value: 180 },
        { name: "Sat", value: 250 },
        { name: "Sun", value: 170 },
      ],
      "Active Suppliers": [
        { name: "Reliable", value: 40 },
        { name: "Moderate", value: 25 },
        { name: "New", value: 20 },
      ],
      "Pending Deliveries": [
        { name: "W1", value: 6 },
        { name: "W2", value: 8 },
        { name: "W3", value: 10 },
        { name: "W4", value: 5 },
      ],
      "Revenue (₹)": [
        { name: "Mon", value: 10000 },
        { name: "Tue", value: 12000 },
        { name: "Wed", value: 9000 },
        { name: "Thu", value: 15000 },
        { name: "Fri", value: 13000 },
        { name: "Sat", value: 17000 },
        { name: "Sun", value: 14000 },
      ],
    },
    Monthly: {
      "Total Orders": [
        { name: "Jan", value: 400 },
        { name: "Feb", value: 650 },
        { name: "Mar", value: 700 },
        { name: "Apr", value: 850 },
        { name: "May", value: 950 },
        { name: "Jun", value: 1000 },
        { name: "July", value: 1100 },
        { name: "Aug", value: 1150 },
        { name: "Sep", value: 1300 },
        { name: "Oct", value: 1500 },
        { name: "Nov", value: 1950 },
        { name: "Dec", value: 2050 },
      ],
      "Active Suppliers": [
        { name: "Reliable", value: 40 },
        { name: "Moderate", value: 25 },
        { name: "New", value: 20 },
      ],
      "Pending Deliveries": [
        { name: "W1", value: 10 },
        { name: "W2", value: 12 },
        { name: "W3", value: 15 },
        { name: "W4", value: 8 },
      ],
      "Revenue (₹)": [
        { name: "Jan", value: 12000 },
        { name: "Feb", value: 18000 },
        { name: "Mar", value: 15000 },
        { name: "Apr", value: 22000 },
        { name: "May", value: 30000 },
        { name: "Jun", value: 28000 },
        { name: "July", value: 35000 },
        { name: "Aug", value: 40000 },
        { name: "Sep", value: 45000 },
        { name: "Oct", value: 50000 },
        { name: "Nov", value: 60000 },
        { name: "Dec", value: 65000 },

      ],
    },
    Yearly: {
      "Total Orders": [
        { name: "2020", value: 4800 },
        { name: "2021", value: 5800 },
        { name: "2022", value: 7200 },
        { name: "2023", value: 9500 },
        { name: "2024", value: 11000 },
      ],
      "Active Suppliers": [
        { name: "Reliable", value: 40 },
        { name: "Moderate", value: 25 },
        { name: "New", value: 20 },
      ],
      "Pending Deliveries": [
        { name: "Q1", value: 30 },
        { name: "Q2", value: 40 },
        { name: "Q3", value: 35 },
        { name: "Q4", value: 50 },
      ],
      "Revenue (₹)": [
        { name: "2020", value: 250000 },
        { name: "2021", value: 320000 },
        { name: "2022", value: 410000 },
        { name: "2023", value: 480000 },
        { name: "2024", value: 530000 },
      ],
    },
  };

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"];

  const [selectedStat, setSelectedStat] = useState("Total Orders");
  const [timeFrame, setTimeFrame] = useState("Monthly");

  const renderChart = () => {
    const chartData = dataSets[timeFrame][selectedStat];

    switch (selectedStat) {
      case "Total Orders":
        return (
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 5, fill: "#3b82f6" }}
              activeDot={{ r: 8 }}
              isAnimationActive
            />
          </LineChart>
        );

      case "Revenue (₹)":
        return (
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#8b5cf6"
              barSize={40}
              radius={[10, 10, 0, 0]}
              isAnimationActive
            />
          </BarChart>
        );

      case "Pending Deliveries":
        return (
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorDelivery" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#f59e0b"
              fillOpacity={1}
              fill="url(#colorDelivery)"
              isAnimationActive
            />
          </AreaChart>
        );

      case "Active Suppliers":
        return (
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
              isAnimationActive
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-semibold text-gray-800"
      >
        Dashboard Overview
      </motion.h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <motion.div
            key={item.label}
            onClick={() => setSelectedStat(item.label)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className={`cursor-pointer bg-white shadow-md rounded-2xl p-5 flex flex-col items-start transition ${
              selectedStat === item.label ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <div className={`w-10 h-10 ${item.color} rounded-lg mb-3`} />
            <h3 className="text-sm text-gray-500">{item.label}</h3>
            <p className="text-2xl font-bold">{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 h-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{selectedStat} Overview</h2>

          {/* Time Frame Buttons */}
          <div className="space-x-2">
            {["Weekly", "Monthly", "Yearly"].map((period) => (
              <button
                key={period}
                onClick={() => setTimeFrame(period)}
                className={`px-4 py-1 rounded-full text-sm ${
                  timeFrame === period
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <ResponsiveContainer width="100%" height="90%">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedStat}-${timeFrame}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {renderChart()}
            </motion.div>
          </AnimatePresence>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
