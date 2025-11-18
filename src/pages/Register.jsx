import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirm) {
      alert("Please fill all fields");
      return;
    }

    if (form.password !== form.confirm) {
      alert("Passwords do not match");
      return;
    }

    // Just a demo registration flow
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-sky-900 relative overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute -top-32 -left-20 w-96 h-96 bg-sky-500/25 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full" />

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-8 text-white shadow-2xl shadow-black/40">

        {/* Logo */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg shadow-sky-500/30">
            <span className="text-3xl font-extrabold tracking-widest">S</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-wide bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="text-sm text-white/70 mt-1">
            Register to access SCMS
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-sm text-white/80">Full Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-slate-900/60 text-white border border-white/20 focus:ring-2 focus:ring-sky-400 outline-none"
              placeholder="John Doe"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-white/80">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-slate-900/60 text-white border border-white/20 focus:ring-2 focus:ring-sky-400 outline-none"
              placeholder="user@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-white/80">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-slate-900/60 text-white border border-white/20 focus:ring-2 focus:ring-sky-400 outline-none"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-white/80">Confirm Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-slate-900/60 text-white border border-white/20 focus:ring-2 focus:ring-sky-400 outline-none"
              placeholder="••••••••"
              value={form.confirm}
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 rounded-lg font-semibold shadow-lg shadow-emerald-500/40 transition"
          >
            Register
          </button>
        </form>

        {/* Already have an account? */}
        <p className="mt-5 text-center text-sm text-white/70">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-300 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
