import React, { useState } from "react";

const Support = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!message) return alert("Enter ticket message");
    alert("Support ticket submitted!");
    setMessage("");
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Support / Complaints</h1>

      <textarea
        className="w-full p-3 border rounded-lg"
        placeholder="Describe your issue..."
        rows="4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        className="px-4 py-2 bg-red-500 text-white rounded-lg"
        onClick={handleSubmit}
      >
        Submit Complaint
      </button>
    </div>
  );
};

export default Support;
