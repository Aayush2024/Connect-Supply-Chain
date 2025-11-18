import React, { useState, useEffect } from "react";

const SupplierProfile = () => {
  const [profile, setProfile] = useState({
    businessName: "Supplier Pvt Ltd",
    email: "supplier@example.com",
    phone: "9876543210",
    address: "Pune, Maharashtra",
    bank: "HDFC Bank",
    upi: "supplier@upi",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("supplier_profile"));
    if (saved) setProfile(saved);
  }, []);

  const update = () => {
    localStorage.setItem("supplier_profile", JSON.stringify(profile));
    alert("Profile updated!");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Supplier Profile</h1>

      <div className="bg-white rounded-xl shadow p-6 space-y-3">
        {Object.keys(profile).map((key) => (
          <div key={key}>
            <label className="text-sm text-gray-600 capitalize">{key}</label>
            <input
              className="w-full border rounded p-2"
              value={profile[key]}
              onChange={(e) =>
                setProfile({ ...profile, [key]: e.target.value })
              }
            />
          </div>
        ))}

        <button
          onClick={update}
          className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default SupplierProfile;
