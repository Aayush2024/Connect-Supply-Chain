import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

// Keep this list in sync with BrowseProducts
const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 599,
    mrp: 999,
    category: "Electronics",
    rating: 4.3,
    warranty: "1 Year Manufacturer Warranty",
    returnPolicy: "10 Days Replacement Only",
    description:
      "Ergonomic wireless mouse with 1600 DPI sensitivity. Comfortable design for long usage.",
    specs: ["1600 DPI", "Nano Receiver", "2.4GHz Wireless", "USB Interface"],
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    price: 1299,
    mrp: 1999,
    category: "Electronics",
    rating: 4.5,
    warranty: "6 Months Warranty",
    returnPolicy: "7 Days Return",
    description:
      "Portable Bluetooth speaker with deep bass and waterproof build.",
    specs: ["10 hrs battery", "Bluetooth 5.0", "Water Resistant"],
    img: "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 3499,
    mrp: 4999,
    category: "Furniture",
    rating: 4.7,
    warranty: "2 Years Warranty",
    returnPolicy: "No Return, Replacement Only",
    description:
      "Comfortable office chair with adjustable height and lumbar support.",
    specs: ["Adjustable Height", "Cushioned Seat", "Ergonomic Backrest"],
    img: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
  },
  {
    id: 4,
    name: "LED Desk Lamp",
    price: 899,
    mrp: 1299,
    category: "Home",
    rating: 4.1,
    warranty: "1 Year Warranty",
    returnPolicy: "7 Days Return",
    description:
      "LED lamp with adjustable brightness and flexible neck stand.",
    specs: ["Touch Control", "3 Brightness Modes", "Energy Efficient"],
    img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
  },
  {
    id: 5,
    name: "Spiral Notebook Pack (5)",
    price: 249,
    mrp: 399,
    category: "Stationery",
    rating: 4.0,
    warranty: "No Warranty",
    returnPolicy: "7 Days Return",
    description:
      "High quality notebooks, perfect for school, office work, and projects.",
    specs: ["A5 Size", "200 Pages Each", "Soft Cover"],
    img: "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = ALL_PRODUCTS.find((p) => p.id === Number(id));

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  if (!product) {
    return <div className="p-6">Product not found.</div>;
  }

  const updateCart = (updated) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const getQty = () => {
    const found = cart.find((item) => item.id === product.id);
    return found ? found.qty : 0;
  };

  const addToCart = () => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      updateCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      updateCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = () => {
    const updated = cart
      .map((item) =>
        item.id === product.id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0);

    updateCart(updated);
  };

  // ⭐ Buy Now: add to cart (if needed) and go to cart
  const handleBuyNow = () => {
    const exists = cart.find((item) => item.id === product.id);
    let updated;

    if (exists) {
      updated = cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
    } else {
      updated = [...cart, { ...product, qty: 1 }];
    }

    updateCart(updated);
    navigate("/cart");
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Image */}
      <div className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row gap-4">
        <img
          src={product.img}
          alt={product.name}
          className="w-full sm:w-1/3 h-48 object-cover rounded-lg"
        />

        <div className="flex-1 space-y-2">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            {product.name}
          </h1>

          <p className="text-sm text-gray-500">
            Category: <span className="font-medium">{product.category}</span>
          </p>

          <div>
            <p className="text-2xl font-bold text-blue-600">₹{product.price}</p>
            <p className="text-xs text-gray-600">
              MRP:{" "}
              <span className="line-through text-gray-400">
                ₹{product.mrp}
              </span>{" "}
              <span className="text-green-600 font-semibold ml-1">
                {Math.round(
                  ((product.mrp - product.price) / product.mrp) * 100
                )}
                % OFF
              </span>
            </p>
          </div>

          {/* Warranty & Return */}
          <div className="text-xs text-gray-700 space-y-1">
            <p>
              <span className="font-semibold">Warranty:</span>{" "}
              {product.warranty}
            </p>
            <p>
              <span className="font-semibold">Return Policy:</span>{" "}
              {product.returnPolicy}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700">{product.description}</p>
        </div>
      </div>

      {/* Specs */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">
          Product Details
        </h2>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
          {product.specs.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

      {/* Cart buttons */}
      <div className="bg-white rounded-xl shadow p-4 flex flex-wrap gap-4 items-center justify-between">
        {getQty() > 0 && (
          <div className="flex items-center gap-3 bg-gray-100 px-3 py-1 rounded-lg border">
            <button
              onClick={decreaseQty}
              className="px-3 py-1 bg-gray-200 rounded text-lg font-bold"
            >
              -
            </button>
            <span className="text-lg font-semibold">{getQty()}</span>
            <button
              onClick={addToCart}
              className="px-3 py-1 bg-gray-200 rounded text-lg font-bold"
            >
              +
            </button>
          </div>
        )}

        <div className="flex gap-3 flex-wrap">
          {getQty() === 0 ? (
            <button
              onClick={addToCart}
              className="px-5 py-2 bg-orange-500 text-white rounded-lg text-sm sm:text-base"
            >
              Add to Cart
            </button>
          ) : (
            <Link
              to="/cart"
              className="px-5 py-2 bg-yellow-500 text-white rounded-lg text-sm sm:text-base text-center"
            >
              Go to Cart
            </Link>
          )}

          {/* 🔹 Buy Now: add to cart + go to cart */}
          <button
            onClick={handleBuyNow}
            className="px-5 py-2 bg-green-600 text-white rounded-lg text-sm sm:text-base text-center"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
