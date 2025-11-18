// src/components/SplashScreen.jsx
import React, { useEffect } from "react";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // show for 2.5s

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-sky-900 relative overflow-hidden">
      {/* Soft glow blobs */}
      <div className="pointer-events-none absolute -top-24 -left-16 w-72 h-72 bg-sky-500/25 rounded-full blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-float-slow" />

      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4">
        {/* Logo circle */}
        <div className="mx-auto mb-4 w-20 h-20 rounded-3xl bg-white/5 border border-white/25 shadow-lg shadow-sky-500/30 flex items-center justify-center animate-pop-in">
          <span className="text-3xl font-extrabold tracking-widest">C</span>
        </div>

        {/* App name */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-[0.35em] uppercase animate-fade-up">
          <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
            CSC
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-sm sm:text-base text-white/80 animate-fade-up delay-200">
          Connect Supply Chain
        </p>
        <p className="mt-1 text-xs sm:text-sm text-white/60 animate-fade-up delay-300">
          Connecting every step of your supply chain.
        </p>

        {/* Loading bar */}
        <div className="mt-6 w-44 sm:w-52 h-1.5 bg-white/15 rounded-full mx-auto overflow-hidden">
          <div className="h-full w-1/2 bg-linear-to-r from-sky-400 to-emerald-300 rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
