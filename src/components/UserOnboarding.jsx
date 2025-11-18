import React, { useEffect, useState } from "react";

const UserOnboarding = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("scms_role");
    const onboarded = localStorage.getItem("scms_user_onboarded");

    if (role === "user" && !onboarded) {
      setShow(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("scms_user_onboarded", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md mx-4 bg-slate-900/95 border border-white/15 rounded-2xl p-6 text-white shadow-2xl shadow-black/60 animate-fade-up">
        <h2 className="text-lg font-semibold mb-1">
          Welcome to SCMS Customer Panel
        </h2>
        <p className="text-xs text-white/70 mb-4">
          Here&apos;s a quick guide to get you started:
        </p>

        <div className="space-y-2 text-sm">
          <Step bullet="1" title="Browse Products">
            Explore available items, filter categories and view details.
          </Step>
          <Step bullet="2" title="Add to Cart & Buy Now">
            Add items to your cart or use Buy Now to jump quickly to checkout.
          </Step>
          <Step bullet="3" title="Checkout & Track Orders">
            Place your order, then track its status from My Orders & Track
            screens.
          </Step>
          <Step bullet="4" title="Profile & Support">
            View your profile details and reach support from the user menu.
          </Step>
        </div>

        <button
          onClick={handleClose}
          className="mt-5 w-full py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-sm font-semibold shadow-md shadow-sky-500/40"
        >
          Got it, start shopping
        </button>
      </div>
    </div>
  );
};

const Step = ({ bullet, title, children }) => (
  <div className="flex gap-3">
    <div className="w-6 h-6 rounded-full bg-sky-500/80 flex items-center justify-center text-xs font-bold">
      {bullet}
    </div>
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs text-white/70">{children}</p>
    </div>
  </div>
);

export default UserOnboarding;
