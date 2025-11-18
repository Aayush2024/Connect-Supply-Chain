import React, { useState } from "react";
import { Link } from "react-router-dom";

const roles = [
  {
    key: "admin",
    label: "Admin",
    badge: "Overview & Control",
    lines: [
      "Sees global dashboard with KPIs for orders, stock and revenue.",
      "Manages products, users, suppliers and reports.",
      "Perfect to demonstrate overall system control.",
    ],
    highlight: "Central brain of the supply chain.",
  },
  {
    key: "supplier",
    label: "Supplier",
    badge: "Procurement & Stock",
    lines: [
      "Views purchase orders from admin or customers.",
      "Updates order status and stock availability.",
      "Shows supplier-centric performance metrics.",
    ],
    highlight: "Ensures products are always available.",
  },
  {
    key: "delivery",
    label: "Delivery",
    badge: "Logistics & Dispatch",
    lines: [
      "Sees assigned deliveries and upcoming routes.",
      "Marks orders as dispatched or delivered.",
      "Helps visualize the logistics layer in your project.",
    ],
    highlight: "Connects warehouses to end customers.",
  },
  {
    key: "user",
    label: "Customer",
    badge: "Shopping & Tracking",
    lines: [
      "Browses products, adds to cart and places orders.",
      "Tracks order timeline and views order history.",
      "Can raise support tickets or reviews.",
    ],
    highlight: "Front-facing experience of your system.",
  },
];

const Landing = () => {
  const [activeRole, setActiveRole] = useState("admin");

  const scrollToContact = () => {
    const section = document.getElementById("contact-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const roleData = roles.find((r) => r.key === activeRole);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white relative overflow-hidden">
      {/* Soft gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -left-32 w-80 h-80 bg-sky-500/25 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full" />

      {/* ---------------- TOP NAVBAR ---------------- */}
      <header className="relative z-10 w-full flex items-center justify-between px-6 md:px-16 py-4 border-b border-white/10 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-900/40 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center font-bold text-lg shadow shadow-sky-500/50">
            C
          </div>
          <div>
            <h1 className="font-semibold leading-tight text-sm md:text-base">
              CSC
            </h1>
            <p className="text-xs text-white/70">Connect Supply Chain</p>
          </div>
        </div>

        <nav className="flex items-center gap-3 md:gap-5 text-sm">
          <button
            onClick={scrollToContact}
            className="hidden md:inline-block px-4 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            Contact
          </button>
          <Link
            to="/login"
            className="px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-white/40 hover:bg-white/10 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-sky-500 hover:bg-sky-400 font-semibold shadow-md shadow-sky-500/40"
          >
            Register
          </Link>
        </nav>
      </header>

      {/* ---------------- HERO + ROLE PREVIEW ---------------- */}
      <main className="relative z-10 flex-1 w-full">
        <section className="max-w-6xl mx-auto px-6 md:px-16 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: HERO TEXT */}
          <div className="space-y-6">
            <p className="tracking-[0.25em] text-[11px] md:text-xs text-sky-300">
              Smart Flow. Smart Control. Connect Supply Chain.
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Manage your{" "}
              <span className="text-sky-300 font-bold">entire</span>{" "}
              <span className="text-emerald-300 font-bold">supply chain</span>{" "}
              in one place.
            </h2>

            <p className="text-sm md:text-base text-white/75 max-w-xl">
              Connect Supply Chain helps you oversee orders, inventory, suppliers and deliveries with powerful analytics and dashboards.
              Connect warehouses, suppliers, delivery partners and customers in one unified platform.
            </p>

            <div className="flex flex-wrap gap-2 text-[11px] md:text-xs text-white/65">
              <Badge>Connect warehouses & suppliers</Badge>
              <Badge>Real-time tracking </Badge>
              <Badge>Role-based dashboards</Badge>
            </div>

            {/* CALL TO ACTIONS */}
            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                to="/login"
                className="px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-sm font-semibold shadow-lg shadow-sky-500/40"
              >
                Go to Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2.5 rounded-full border border-white/40 text-sm hover:bg-white/10"
              >
                Create Account
              </Link>
              <button
                onClick={scrollToContact}
                className="px-5 py-2.5 rounded-full text-sm border border-emerald-300/70 text-emerald-200 hover:bg-emerald-400/10"
              >
                Contact Us
              </button>
            </div>

            {/* Simple how it works line */}
            <div className="mt-4 flex flex-wrap gap-4 text-xs md:text-sm text-white/60">
              <Step label="Login" />
              <Step label="Select Role" />
              <Step label="Control Orders & Inventory" />
            </div>
          </div>

          {/* RIGHT: UNIQUE ROLE PREVIEW CARD */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-4 sm:p-5 lg:p-6 shadow-xl shadow-black/40 flex flex-col gap-4">
            {/* Role tabs */}
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <button
                  key={role.key}
                  onClick={() => setActiveRole(role.key)}
                  className={`px-3 py-1.5 rounded-full text-xs md:text-sm border ${
                    activeRole === role.key
                      ? "bg-sky-500 border-sky-400 text-white shadow-sm shadow-sky-500/60"
                      : "border-white/20 text-white/70 hover:bg-white/5"
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>

            {/* Role content preview */}
            <div className="bg-slate-950/70 border border-white/10 rounded-2xl p-4 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs text-sky-300 uppercase tracking-[0.2em]">
                    {roleData.label} PANEL
                  </p>
                  <p className="text-sm font-semibold">{roleData.badge}</p>
                </div>
                <div className="text-right text-[11px] text-emerald-300">
                  Live preview of role-based view
                </div>
              </div>

              <ul className="mt-2 space-y-1 text-[11px] md:text-xs text-white/70">
                {roleData.lines.map((line, idx) => (
                  <li key={idx}>• {line}</li>
                ))}
              </ul>

              <p className="mt-2 text-xs text-emerald-300">
                {roleData.highlight}
              </p>
            </div>

            {/* Mini analytics preview */}
            <div className="grid grid-cols-3 gap-2 text-[10px] md:text-xs">
              <MiniStat title="Orders Today" value="128" accent="sky" />
              <MiniStat title="Active Suppliers" value="24" accent="emerald" />
              <MiniStat title="On-time Delivery" value="96%" accent="amber" />
            </div>
          </div>
        </section>

        {/* ---------------- FLOW / ARCHITECTURE STRIP ---------------- */}
        <section className="w-full border-t border-white/10 bg-slate-950/70">
          <div className="max-w-6xl mx-auto px-6 md:px-16 py-6 md:py-8">
            <h3 className="text-sm md:text-base font-semibold mb-3 text-white/80">
              Supply chain flow visualization
            </h3>
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-white/70">
              <FlowNode label="Supplier" />
              <FlowArrow />
              <FlowNode label="Inventory" />
              <FlowArrow />
              <FlowNode label="Orders" />
              <FlowArrow />
              <FlowNode label="Delivery" />
              <FlowArrow />
              <FlowNode label="Customer" />
            </div>
          </div>
        </section>

        {/* ---------------- CONTACT SECTION ---------------- */}
        <section
          id="contact-section"
          className="w-full border-t border-white/10 bg-slate-950/95"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-16 py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact info / project explanation */}
            <div className="space-y-3">
              <p className="text-xs tracking-[0.3em] text-sky-300">CONTACT</p>
              <h3 className="text-xl md:text-2xl font-semibold">
                Let's talk about your supply chain.{" "}
                
              </h3>
              <p className="text-sm text-white/70">
                Use this section in your documentation as “Future Scope”. SCMS
                can connect with Spring Boot + PostgreSQL APIs to handle real
                orders, inventory updates and user authentication.
              </p>

              <div className="space-y-1 text-sm text-white/80">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  ayushumrey03@gmail.com
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +91-62636-36739
                </p>
                <p>
                  <span className="font-semibold">Location:</span> Jabalpur, India
                  
                </p>
              </div>
            </div>

            {/* Contact form (frontend demo only) */}
            <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 md:p-6 shadow-xl shadow-black/40">
              <h4 className="text-sm font-semibold mb-3 text-white/90">
                Quick Contact
              </h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Frontend demo only. In a real app this would send your message to a backend API."
                  );
                }}
                className="space-y-3 text-sm"
              >
                <div>
                  <label className="block text-xs mb-1 text-white/70">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-slate-800/80 border border-white/10 px-3 py-2 text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-xs mb-1 text-white/70">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg bg-slate-800/80 border border-white/10 px-3 py-2 text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs mb-1 text-white/70">
                    Message
                  </label>
                  <textarea
                    rows="3"
                    className="w-full rounded-lg bg-slate-800/80 border border-white/10 px-3 py-2 text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
                    placeholder="Describe your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-1 rounded-lg bg-sky-500 hover:bg-sky-400 text-sm font-semibold py-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="relative z-10 w-full border-t border-white/10 bg-slate-950/98">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] md:text-xs text-white/60">
          <p>© 2025 CSC — Connect Supply Chain (Make India Faster).</p>
          <div className="flex gap-4">
            <button
              onClick={scrollToContact}
              className="hover:text-sky-300 transition"
            >
              Contact
            </button>
            <span className="hover:text-sky-300 transition cursor-default">
              For More Detail
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* --------- Small components for clean code --------- */

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-3 py-1">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
    {children}
  </span>
);

const Step = ({ label }) => (
  <div className="flex items-center gap-2">
    <span className="w-4 h-4 rounded-full border border-emerald-300 flex items-center justify-center text-[9px] text-emerald-200">
      ✓
    </span>
    <span>{label}</span>
  </div>
);

const MiniStat = ({ title, value, accent }) => {
  const accentColor =
    accent === "sky"
      ? "text-sky-300 bg-sky-500/10"
      : accent === "emerald"
      ? "text-emerald-300 bg-emerald-500/10"
      : "text-amber-300 bg-amber-500/10";

  return (
    <div className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
      <p className="text-[10px] text-white/65">{title}</p>
      <p className={`text-sm font-semibold mt-1 inline-flex px-1.5 rounded ${accentColor}`}>
        {value}
      </p>
    </div>
  );
};

const FlowNode = ({ label }) => (
  <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-[11px] md:text-xs">
    {label}
  </div>
);

const FlowArrow = () => (
  <span className="text-white/40 text-lg md:text-xl">➝</span>
);

const RoleCard = ({ title, points }) => (
  <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-4 space-y-2">
    <h4 className="text-sm font-semibold text-white">{title}</h4>
    <ul className="text-[11px] md:text-xs text-white/70 space-y-1">
      {points.map((p, i) => (
        <li key={i}>• {p}</li>
      ))}
    </ul>
  </div>
);

export default Landing;
