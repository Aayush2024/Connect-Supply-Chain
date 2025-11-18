// src/pages/Settings.jsx
import React, { useEffect, useState } from "react";

const Settings = () => {
  const role = localStorage.getItem("scms_role") || "admin";

  // ---------- STORAGE KEYS ----------
  const storageKey =
    role === "admin"
      ? "admin_settings"
      : role === "supplier"
      ? "supplier_settings"
      : role === "delivery"
      ? "delivery_settings"
      : "user_settings";

  const photoKey = `${role}_profile_photo`;

  // ---------- DEFAULT SETTINGS PER ROLE ----------
  const getDefaultSettings = () => {
    if (role === "admin") {
      return {
        appName: "SCMS - Smart Chain",
        timezone: "IST (Asia/Kolkata)",
        emailReports: true,
        lowStockAlerts: true,
        autoBackup: false,
        primaryColor: "#2563EB",
        logoUrl: "",
      };
    }

    if (role === "supplier") {
      return {
        businessName: "Supplier Pvt Ltd",
        defaultDispatchDays: 2,
        autoAcceptPO: false,
        stockAlerts: true,
        email: "supplier@example.com",
        bankName: "HDFC Bank",
        accountNumber: "0000000000",
        ifsc: "HDFC0000000",
        gstin: "",
        pan: "",
      };
    }

    if (role === "delivery") {
      return {
        autoAcceptDeliveries: false,
        maxDeliveriesPerDay: 20,
        preferredArea: "Nagpur City",
        liveTrackingShare: true,
        safetyMode: true,
        vehicleType: "Bike",
        vehicleNumber: "MH 12 AB 1234",
        licenseNumber: "",
        soundAlerts: true,
        vibrationAlerts: true,
      };
    }

    return {
      marketingEmails: false,
      orderAlerts: true,
      smsUpdates: true,
      language: "English",
      theme: "Light",
      soundAlerts: true,
      vibrationAlerts: true,
    };
  };

  const [settings, setSettings] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
      return saved || getDefaultSettings();
    } catch {
      return getDefaultSettings();
    }
  });

  const [profilePhoto, setProfilePhoto] = useState(null);
  const [security, setSecurity] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  // LOAD PROFILE PHOTO
  useEffect(() => {
    const savedPhoto = localStorage.getItem(photoKey);
    if (savedPhoto) setProfilePhoto(savedPhoto);
  }, [photoKey]);

  const handleChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem(storageKey, JSON.stringify(settings));
    alert("Settings saved successfully!");
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result;
      setProfilePhoto(dataUrl);
      localStorage.setItem(photoKey, dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (!security.newPass || !security.confirm) {
      alert("Please fill all password fields.");
      return;
    }
    if (security.newPass !== security.confirm) {
      alert("New password and confirm password do not match.");
      return;
    }
    alert("Password updated (demo only).");
    setSecurity({ current: "", newPass: "", confirm: "" });
  };

  const roleLabel =
    role === "admin"
      ? "Admin"
      : role === "supplier"
      ? "Supplier"
      : role === "delivery"
      ? "Delivery Partner"
      : "User";

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
          <p className="text-sm text-gray-500">
            Manage your preferences and account. Logged in as{" "}
            <span className="font-semibold text-gray-700">{roleLabel}</span>.
          </p>
        </div>
      </div>

      {/* Profile Photo */}
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center text-gray-500 text-xl font-semibold">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              roleLabel.charAt(0)
            )}
          </div>
          <div>
            <p className="text-sm text-gray-600">Profile Photo</p>
            <p className="text-xs text-gray-400 mb-2">
              Upload a picture (stored locally).
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="text-xs"
            />
          </div>
        </div>
      </div>

      {/* ======================= ROLE SPECIFIC SETTINGS (unchanged) ======================= */}

      {/* ADMIN */}
      {role === "admin" && (
        <div className="grid gap-6 md:grid-cols-2">
          {/* App Settings */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Application Settings
            </h2>

            <div>
              <label className="text-sm text-gray-600">Application Name</label>
              <input
                className="w-full border rounded p-2 mt-1"
                value={settings.appName}
                onChange={(e) => handleChange("appName", e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Timezone</label>
              <input
                className="w-full border rounded p-2 mt-1"
                value={settings.timezone}
                onChange={(e) => handleChange("timezone", e.target.value)}
              />
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-3">
            <h2 className="text-lg font-semibold text-gray-800">
              Alerts & Reports
            </h2>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={settings.emailReports}
                onChange={(e) => handleChange("emailReports", e.target.checked)}
              />
              Email summary reports
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={settings.lowStockAlerts}
                onChange={(e) =>
                  handleChange("lowStockAlerts", e.target.checked)
                }
              />
              Low stock alerts
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={settings.autoBackup}
                onChange={(e) => handleChange("autoBackup", e.target.checked)}
              />
              Automatic backups
            </label>
          </div>

          {/* Branding */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-4 md:col-span-2">
            <h2 className="text-lg font-semibold text-gray-800">Branding</h2>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm">Primary Color</label>
                <input
                  type="color"
                  className="w-16 h-10 mt-1 border rounded"
                  value={settings.primaryColor}
                  onChange={(e) =>
                    handleChange("primaryColor", e.target.value)
                  }
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm">Logo URL</label>
                <input
                  className="w-full border rounded p-2 mt-1"
                  placeholder="https://example.com/logo.png"
                  value={settings.logoUrl}
                  onChange={(e) => handleChange("logoUrl", e.target.value)}
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 md:col-span-2"
          >
            Save Admin Settings
          </button>
        </div>
      )}

      {/* SUPPLIER */}
      {role === "supplier" && (
        <>
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <h2 className="text-lg font-semibold">Business Preferences</h2>

            <input
              className="border rounded p-2 w-full"
              value={settings.businessName}
              onChange={(e) => handleChange("businessName", e.target.value)}
            />

            <input
              type="number"
              className="border rounded p-2 w-32"
              value={settings.defaultDispatchDays}
              onChange={(e) =>
                handleChange("defaultDispatchDays", Number(e.target.value))
              }
            />

            <label className="flex gap-2 text-sm">
              <input
                type="checkbox"
                checked={settings.autoAcceptPO}
                onChange={(e) => handleChange("autoAcceptPO", e.target.checked)}
              />
              Auto-accept Purchase Orders
            </label>

            <label className="flex gap-2 text-sm">
              <input
                type="checkbox"
                checked={settings.stockAlerts}
                onChange={(e) => handleChange("stockAlerts", e.target.checked)}
              />
              Stock Alerts
            </label>
          </div>

          {/* Bank Details */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <h2 className="text-lg font-semibold">Bank Details</h2>

            <input
              className="border rounded p-2 w-full"
              value={settings.bankName}
              onChange={(e) => handleChange("bankName", e.target.value)}
            />

            <input
              className="border rounded p-2 w-full"
              value={settings.accountNumber}
              onChange={(e) => handleChange("accountNumber", e.target.value)}
            />

            <input
              className="border rounded p-2 w-full"
              value={settings.ifsc}
              onChange={(e) => handleChange("ifsc", e.target.value)}
            />
          </div>

          <button
            onClick={handleSave}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Supplier Settings
          </button>
        </>
      )}

      {/* DELIVERY */}
      {role === "delivery" && (
        <>
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <h2 className="text-lg font-semibold">Delivery Preferences</h2>

            <label className="flex gap-2 text-sm">
              <input
                type="checkbox"
                checked={settings.autoAcceptDeliveries}
                onChange={(e) =>
                  handleChange("autoAcceptDeliveries", e.target.checked)
                }
              />
              Auto-Accept Deliveries
            </label>

            <input
              type="number"
              className="border rounded p-2 w-32"
              value={settings.maxDeliveriesPerDay}
              onChange={(e) =>
                handleChange("maxDeliveriesPerDay", Number(e.target.value))
              }
            />

            <input
              className="border rounded p-2 w-full"
              value={settings.preferredArea}
              onChange={(e) => handleChange("preferredArea", e.target.value)}
            />
          </div>

          <button
            onClick={handleSave}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Delivery Settings
          </button>
        </>
      )}

      {/* USER */}
      {role === "user" && (
        <>
          <div className="bg-white rounded-2xl shadow p-6 space-y-4 max-w-xl">
            <h2 className="text-lg font-semibold">Notification Preferences</h2>

            <label className="flex gap-2 text-sm">
              <input
                type="checkbox"
                checked={settings.orderAlerts}
                onChange={(e) => handleChange("orderAlerts", e.target.checked)}
              />
              Order Alerts
            </label>

            <label className="flex gap-2 text-sm">
              <input
                type="checkbox"
                checked={settings.smsUpdates}
                onChange={(e) => handleChange("smsUpdates", e.target.checked)}
              />
              SMS Updates
            </label>
          </div>

          <button
            onClick={handleSave}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save User Settings
          </button>
        </>
      )}

      {/* ACCOUNT SECURITY — Danger Zone Removed */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-4 max-w-xl">
        <h2 className="text-lg font-semibold text-gray-800">
          Account & Security
        </h2>

        <form onSubmit={handlePasswordUpdate}>
          <input
            type="password"
            placeholder="Current Password"
            className="border rounded p-2 w-full mt-1"
            value={security.current}
            onChange={(e) =>
              setSecurity((prev) => ({ ...prev, current: e.target.value }))
            }
          />

          <input
            type="password"
            placeholder="New Password"
            className="border rounded p-2 w-full mt-3"
            value={security.newPass}
            onChange={(e) =>
              setSecurity((prev) => ({ ...prev, newPass: e.target.value }))
            }
          />

          <input
            type="password"
            placeholder="Confirm New Password"
            className="border rounded p-2 w-full mt-3"
            value={security.confirm}
            onChange={(e) =>
              setSecurity((prev) => ({ ...prev, confirm: e.target.value }))
            }
          />

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
