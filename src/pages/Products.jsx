import React, { useState } from "react";

const Products = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: "P001",
      name: "Wireless Mouse",
      stock: 25,
      price: "₹599",
      category: "Electronics",
      description: "Ergonomic wireless mouse with 2.4GHz connectivity and 12-month battery life.",
      supplier: "TechGear Ltd",
      addedDate: "2025-07-10",
    },
    {
      id: "P002",
      name: "Bluetooth Headphones",
      stock: 10,
      price: "₹1,499",
      category: "Electronics",
      description: "Noise-cancelling over-ear headphones with 20-hour playback.",
      supplier: "SoundWave Inc",
      addedDate: "2025-06-22",
    },
    {
      id: "P003",
      name: "Office Chair",
      stock: 5,
      price: "₹3,200",
      category: "Furniture",
      description: "Ergonomic office chair with lumbar support and height adjustment.",
      supplier: "ComfortPlus Furnishings",
      addedDate: "2025-05-15",
    },
    {
      id: "P004",
      name: "Desk Lamp",
      stock: 15,
      price: "₹899",
      category: "Home",
      description: "LED desk lamp with adjustable brightness and flexible arm.",
      supplier: "BrightLite Co",
      addedDate: "2025-08-03",
    },
  ];

  const filteredProducts =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  const handleBack = () => setSelectedProduct(null);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      {!selectedProduct && (
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Products</h1>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring focus:ring-blue-200"
          >
            <option>All</option>
            <option>Electronics</option>
            <option>Furniture</option>
            <option>Home</option>
          </select>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Product Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 transition-all duration-300 ${
            selectedProduct ? "hidden lg:grid" : "grid"
          }`}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                Category: {product.category}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                Stock: {product.stock}
              </p>
              <p className="text-base font-bold text-blue-600">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        {/* Product Details */}
        {selectedProduct && (
          <div className="lg:w-1/3 bg-white p-6 rounded-2xl shadow-md animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Product Details
              </h2>
              <button
                onClick={handleBack}
                className="lg:hidden text-blue-600 text-sm font-medium hover:underline"
              >
                ← Back
              </button>
            </div>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-medium">Product ID:</span>{" "}
                {selectedProduct.id}
              </p>
              <p>
                <span className="font-medium">Name:</span>{" "}
                {selectedProduct.name}
              </p>
              <p>
                <span className="font-medium">Category:</span>{" "}
                {selectedProduct.category}
              </p>
              <p>
                <span className="font-medium">Supplier:</span>{" "}
                {selectedProduct.supplier}
              </p>
              <p>
                <span className="font-medium">Stock:</span>{" "}
                {selectedProduct.stock}
              </p>
              <p>
                <span className="font-medium">Price:</span>{" "}
                {selectedProduct.price}
              </p>
              <p>
                <span className="font-medium">Added On:</span>{" "}
                {selectedProduct.addedDate}
              </p>
              <p>
                <span className="font-medium">Description:</span>{" "}
                {selectedProduct.description}
              </p>
            </div>

            <button
              onClick={() => setSelectedProduct(null)}
              className="hidden lg:block mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
