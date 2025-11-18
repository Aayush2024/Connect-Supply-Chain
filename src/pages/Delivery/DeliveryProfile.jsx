import React, { useState, useEffect } from "react";

const DeliveryProfile = () => {
  const [profile, setProfile] = useState({
    name: "Delivery Partner",
    email: "delivery@example.com",
    phone: "9876543210",
    vehicleNo: "MH 12 AB 1234",
    city: "Nagpur, Maharashtra",
    shift: "Morning",
    totalDeliveries: 128,
    onTimeRate: "94%",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("delivery_profile") || "null");
    if (saved) setProfile(saved);
  }, []);

  const handleSave = () => {
    localStorage.setItem("delivery_profile", JSON.stringify(profile));
    alert("Profile updated!");
  };

  const handleChange = (key, value) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Delivery Profile
      </h1>

      <div className="bg-white rounded-2xl shadow p-6 space-y-4 max-w-xl">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              className="w-full border rounded p-2"
              value={profile.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              className="w-full border rounded p-2"
              value={profile.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Phone</label>
            <input
              className="w-full border rounded p-2"
              value={profile.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Vehicle No.</label>
            <input
              className="w-full border rounded p-2"
              value={profile.vehicleNo}
              onChange={(e) => handleChange("vehicleNo", e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">City / Area</label>
            <input
              className="w-full border rounded p-2"
              value={profile.city}
              onChange={(e) => handleChange("city", e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Shift</label>
            <select
              className="w-full border rounded p-2"
              value={profile.shift}
              onChange={(e) => handleChange("shift", e.target.value)}
            >
              <option>Morning</option>
              <option>Evening</option>
              <option>Full Day</option>
            </select>
          </div>
        </div>

        {/* Read-only stats */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-xs text-gray-500">Total Deliveries</p>
            <p className="text-xl font-semibold text-gray-800">
              {profile.totalDeliveries}
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-xs text-gray-500">On-time Rate</p>
            <p className="text-xl font-semibold text-green-600">
              {profile.onTimeRate}
            </p>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default DeliveryProfile;
