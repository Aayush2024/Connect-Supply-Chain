import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const roleLabels = {
  admin: {
    title: "Admin",
    subtitle: "Full control over dashboards, products and reports.",
    color: "from-sky-400 to-blue-400",
  },
  supplier: {
    title: "Supplier",
    subtitle: "Manage purchase orders and stock updates.",
    color: "from-amber-400 to-orange-400",
  },
  user: {
    title: "Customer",
    subtitle: "Browse products, place orders and track deliveries.",
    color: "from-emerald-400 to-teal-400",
  },
  delivery: {
    title: "Delivery Partner",
    subtitle: "View assigned deliveries and update status in real-time.",
    color: "from-purple-400 to-fuchsia-400",
  },
};

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    // Auth flags
    localStorage.setItem("scms_auth", "true");
    localStorage.setItem("scms_role", role);

    // Save user profile
    localStorage.setItem(
      "scms_user",
      JSON.stringify({
        name: "SCMS User",
        email: email,
        phone: "9876543210",
        address: "India",
        role: role,
      })
    );

    // 🔹 Reset onboarding only for customer role
    if (role === "user") {
      localStorage.removeItem("scms_user_onboarded");
    }

    onLogin();
    navigate(role === "user" ? "/browse" : "/dashboard");
  };

  const currentRole = roleLabels[role];

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-sky-900 relative overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute -top-32 -left-20 w-96 h-96 bg-sky-500/25 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-8 text-white shadow-2xl shadow-black/40">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg shadow-sky-500/30">
            <span className="text-3xl font-extrabold tracking-widest">S</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-wide bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
            SCMS Login
          </h1>
          <p className="text-sm text-white/70 mt-1">
            Access your role-based dashboard
          </p>
        </div>

        {/* Role-based preview strip */}
        <div className="mb-5">
          <div
            key={role}
            className={`relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 px-3 py-3 transition-all duration-300`}
          >
            <div
              className={`absolute inset-0 opacity-30 bg-linear-to-r ${currentRole.color}`}
            />
            <div className="relative">
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/70">
                Logging in as
              </p>
              <p className="text-sm font-semibold mt-1">
                {currentRole.title}
              </p>
              <p className="text-[11px] text-white/70 mt-0.5">
                {currentRole.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm text-white/80">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-slate-900/60 text-white border border-white/20 focus:ring-2 focus:ring-sky-400 outline-none"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-white/80">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-slate-900/60 text-white border border-white/20 focus:ring-2 focus:ring-sky-400 outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Role dropdown */}
          <div>
            <label className="text-sm text-white/80">Login as</label>
            <select
              className="w-full p-3 rounded-lg bg-slate-900/60 text-white border border-white/20 focus:ring-2 focus:ring-sky-400 outline-none cursor-pointer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="supplier">Supplier</option>
              <option value="user">User</option>
              <option value="delivery">Delivery Person</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-sky-500 hover:bg-sky-400 rounded-lg font-semibold shadow-lg shadow-sky-500/40 transition"
          >
            Login
          </button>
        </form>

        {/* Register link */}
        <p className="mt-5 text-center text-sm text-white/70">
          New to SCMS?{" "}
          <Link to="/register" className="text-sky-300 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
