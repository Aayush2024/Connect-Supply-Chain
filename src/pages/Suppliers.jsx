import React, { useState } from "react";

const Suppliers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const suppliers = [
    {
      id: "SUP001",
      name: "TechTrade Pvt. Ltd.",
      contact: "Rahul Verma",
      phone: "9876543210",
      email: "rahul@techtrade.com",
      address: "New Delhi, India",
      productsSupplied: ["Wireless Mouse", "Bluetooth Headphones"],
      status: "Active",
    },
    {
      id: "SUP002",
      name: "HomeNeeds Co.",
      contact: "Sneha Patel",
      phone: "9988776655",
      email: "sneha@homeneeds.com",
      address: "Mumbai, India",
      productsSupplied: ["Desk Lamp", "Home Decor"],
      status: "Active",
    },
    {
      id: "SUP003",
      name: "OfficeMart Ltd.",
      contact: "Amit Sharma",
      phone: "9765432109",
      email: "amit@officemart.com",
      address: "Pune, India",
      productsSupplied: ["Office Chair", "Stationery Items"],
      status: "Inactive",
    },
    {
      id: "SUP004",
      name: "FurniWorld",
      contact: "Pooja Nair",
      phone: "9823456789",
      email: "pooja@furniworld.com",
      address: "Bangalore, India",
      productsSupplied: ["Furniture Set", "Desk Lamp"],
      status: "Pending",
    },
  ];

  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "text-green-600 bg-green-100";
      case "Pending":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-red-600 bg-red-100";
    }
  };

  return (
    <div className="p-6 space-y-6 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-6">
      {/* Left Side - Table */}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Suppliers</h1>
          <input
            type="text"
            placeholder="Search by name or contact..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-x-auto mt-6">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Supplier ID</th>
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Contact Person</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredSuppliers.map((supplier, i) => (
                <tr
                  key={i}
                  onClick={() => setSelectedSupplier(supplier)}
                  className="border-b hover:bg-gray-50 cursor-pointer transition"
                >
                  <td className="px-6 py-3 font-medium">{supplier.id}</td>
                  <td className="px-6 py-3">{supplier.name}</td>
                  <td className="px-6 py-3">{supplier.contact}</td>
                  <td className="px-6 py-3">{supplier.phone}</td>
                  <td className="px-6 py-3">{supplier.email}</td>
                  <td className="px-6 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        supplier.status
                      )}`}
                    >
                      {supplier.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Side - Supplier Details (only visible on lg screens) */}
      {selectedSupplier && (
        <div className="hidden lg:block w-1/3 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Supplier Details</h2>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">ID:</span> {selectedSupplier.id}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Company:</span> {selectedSupplier.name}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Contact:</span> {selectedSupplier.contact}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Phone:</span> {selectedSupplier.phone}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Email:</span> {selectedSupplier.email}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Address:</span> {selectedSupplier.address}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Products Supplied:</span>{" "}
            {selectedSupplier.productsSupplied.join(", ")}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                selectedSupplier.status
              )}`}
            >
              {selectedSupplier.status}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Suppliers;
