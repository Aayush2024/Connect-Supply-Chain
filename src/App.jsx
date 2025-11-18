import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import UserNavbar from "./components/UserNavbar";
import SplashScreen from "./components/SplashScreen";

/* PUBLIC PAGES */
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

/* ADMIN PAGES */
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Suppliers from "./pages/Suppliers";
import Reports from "./pages/Reports";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

/* USER PAGES */
import UserDashboard from "./pages/User/Userdashboard";
import BrowseProducts from "./pages/User/BrowseProducts";
import ProductDetails from "./pages/User/ProductDetails";
import Cart from "./pages/User/Cart";
import UserOrders from "./pages/User/UserOrders";
import TrackOrder from "./pages/User/TrackOrder";
import Support from "./pages/User/Support";
import Reviews from "./pages/User/Reviews";
import Profile from "./pages/User/Profile";
import Checkout from "./pages/User/Checkout";

/* SUPPLIER PAGES */
import SupplierDashboard from "./pages/Supplier/SupplierDashboard";
import SupplierOrders from "./pages/Supplier/SupplierOrders";
import SupplierProducts from "./pages/Supplier/SupplierProducts";
import SupplierShipments from "./pages/Supplier/SupplierShipments";
import SupplierProfile from "./pages/Supplier/SupplierProfile";
import SupplierAnalytics from "./pages/Supplier/SupplierAnalytics";

/* DELIVERY PAGES */
import MyDeliveries from "./pages/Delivery/MyDeliveries";
import DeliveryProfile from "./pages/Delivery/DeliveryProfile";
import DeliveryAnalytics from "./pages/Delivery/DeliveryAnalytics";
import DeliveryRouteMap from "./pages/Delivery/DeliveryRouteMap";
import DeliveryTimeline from "./pages/Delivery/DeliveryTimeline";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("scms_auth") === "true"
  );

  const role = localStorage.getItem("scms_role") || "admin";

  return (
    <Router>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : !isAuthenticated ? (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/login"
            element={<Login onLogin={() => setIsAuthenticated(true)} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      ) : (
        // Authenticated layout
        <div className="bg-gray-100 min-h-screen">

          {/* Sidebar for Admin / Supplier / Delivery */}
          {role === "user" ? null : <Sidebar />}

          <div
            className={`flex flex-col min-h-screen transition-all ${
              role === "user" ? "" : "ml-20 sm:ml-64"
            }`}
          >
            {role === "user" ? <UserNavbar /> : <Navbar />}

            <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
              <Routes>
                
                {/* Default Redirect */}
                <Route
                  path="/"
                  element={
                    <Navigate
                      to={role === "user" ? "/browse" : "/dashboard"}
                      replace
                    />
                  }
                />

                {/* Dashboard Logic */}
                <Route
                  path="/dashboard"
                  element={
                    role === "admin" ? (
                      <Dashboard />
                    ) : role === "supplier" ? (
                      <SupplierDashboard />
                    ) : role === "delivery" ? (
                      <MyDeliveries />
                    ) : (
                      <UserDashboard />
                    )
                  }
                />

                {/* ADMIN */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/products" element={<Products />} />
                <Route path="/suppliers" element={<Suppliers />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/settings" element={<Settings />} />

                {/* SUPPLIER */}
                <Route path="/supplier-orders" element={<SupplierOrders />} />
                <Route path="/supplier-products" element={<SupplierProducts />} />
                <Route path="/supplier-shipments" element={<SupplierShipments />} />
                <Route path="/supplier-profile" element={<SupplierProfile />} />
                <Route path="/supplier-analytics" element={<SupplierAnalytics />} />

                {/* DELIVERY */}
                <Route path="/delivery-deliveries" element={<MyDeliveries />} />
                <Route path="/delivery-profile" element={<DeliveryProfile />} />
                <Route path="/delivery-analytics" element={<DeliveryAnalytics />} />
                <Route path="/delivery-route" element={<DeliveryRouteMap />} />
                <Route path="/delivery-timeline" element={<DeliveryTimeline />} />

                {/* USER */}
                <Route path="/browse" element={<BrowseProducts />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/user-orders" element={<UserOrders />} />

                {/* FULL FIXED TRACK ROUTES */}
                <Route path="/track" element={<TrackOrder />} />
                <Route path="/track/:id" element={<TrackOrder />} />

                <Route path="/support" element={<Support />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/checkout" element={<Checkout />} />

                {/* 404 fallback */}
                <Route
                  path="*"
                  element={
                    <Navigate
                      to={role === "user" ? "/browse" : "/dashboard"}
                      replace
                    />
                  }
                />
              </Routes>
            </main>
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
