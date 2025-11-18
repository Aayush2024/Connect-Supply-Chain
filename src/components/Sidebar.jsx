import React, { useState } from "react";
import {
  Menu,
  Home,
  Package,
  ShoppingBag,
  Users,
  BarChart2,
  Bell,
  Settings,
  Truck,
  ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const role = localStorage.getItem("scms_role") || "admin";

  let menuItems = [];

  /* ---------------- ADMIN MENU ---------------- */
  if (role === "admin") {
    menuItems = [
      { icon: <Home size={20} />, label: "Dashboard", to: "/dashboard" },
      { icon: <Package size={20} />, label: "Products", to: "/products" },
      { icon: <ShoppingBag size={20} />, label: "Orders", to: "/orders" },
      { icon: <Users size={20} />, label: "Suppliers", to: "/suppliers" },
      { icon: <BarChart2 size={20} />, label: "Reports", to: "/reports" },
      { icon: <Bell size={20} />, label: "Notifications", to: "/notifications" },
    ];
  }

  /* ---------------- SUPPLIER MENU ---------------- */
  else if (role === "supplier") {
    menuItems = [
      { icon: <Home size={20} />, label: "Dashboard", to: "/dashboard" },
      { icon: <ClipboardList size={20} />, label: "Orders", to: "/supplier-orders" },
      { icon: <Package size={20} />, label: "Products", to: "/supplier-products" },
      { icon: <Truck size={20} />, label: "Shipments", to: "/supplier-shipments" },
      { icon: <BarChart2 size={20} />, label: "Analytics", to: "/supplier-analytics" },
      { icon: <Settings size={20} />, label: "Profile", to: "/supplier-profile" },
    ];
  }

  /* ---------------- DELIVERY MENU ---------------- */
  else if (role === "delivery") {
    menuItems = [
      { icon: <Truck size={20} />, label: "My Deliveries", to: "/delivery-deliveries" },
      { icon: <ClipboardList size={20} />, label: "Timeline", to: "/delivery-timeline" },
      { icon: <BarChart2 size={20} />, label: "Analytics", to: "/delivery-analytics" },
      { icon: <Package size={20} />, label: "Route Map", to: "/delivery-route" },
      { icon: <Settings size={20} />, label: "Profile", to: "/delivery-profile" },
    ];
  }

  return (
    <div
      className={`
        ${collapsed ? "w-20" : "w-64"}
        bg-white shadow-xl
        h-screen fixed left-0 top-0 z-50
        flex flex-col transition-all duration-300
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        {!collapsed && <h2 className="text-xl font-bold text-blue-600">CSC</h2>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded hover:bg-blue-50"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-5 space-y-2 overflow-y-auto">
        {menuItems.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition"
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Settings option for non-user */}
      {role !== "user" && (
        <div className="p-4 border-t">
          <Link
            to="/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
          >
            <Settings size={20} />
            {!collapsed && <span>Settings</span>}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
