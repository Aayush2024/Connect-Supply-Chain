import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("scms_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  if (!user) return <div className="p-6">Loading profile...</div>;

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Your Profile</h1>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">

        {/* Profile Header */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold">
            {user.name.charAt(0)}
          </div>

          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.role.toUpperCase()}</p>
          </div>
        </div>

        <hr />

        {/* Details */}
        <div className="space-y-3">

          <div>
            <p className="text-gray-500 text-sm">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Phone</p>
            <p className="font-medium">{user.phone}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Address</p>
            <p className="font-medium">{user.address}</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;
