import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(saved);
  }, []);

  const updateCart = (updated) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
    );
    updateCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, qty: (item.qty || 1) - 1 } : item
      )
      .filter((item) => (item.qty || 1) > 0);
    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    navigate("/checkout"); // 🔹 important: this triggers navigation
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <h1 className="text-2xl font-semibold mb-4">My Cart</h1>
        <p className="text-gray-500 text-sm">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-4">
      <h1 className="text-2xl font-semibold mb-2">My Cart</h1>

      {/* Cart items */}
      {cart.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-sm p-4 flex gap-4 items-center"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h2 className="font-semibold text-gray-800">{item.name}</h2>
            <p className="text-blue-600 font-bold mt-1">₹{item.price}</p>
          </div>

          {/* Quantity controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-3 py-1 bg-gray-200 rounded-lg text-lg font-bold"
            >
              -
            </button>
            <span className="text-lg font-semibold">{item.qty || 1}</span>
            <button
              onClick={() => increaseQty(item.id)}
              className="px-3 py-1 bg-gray-200 rounded-lg text-lg font-bold"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="px-3 py-1 text-xs sm:text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Summary + Checkout */}
      <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="text-lg font-semibold">
          Total: <span className="text-blue-600">₹{total}</span>
        </div>

        <button
          onClick={handleCheckout}
          className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg text-sm sm:text-base hover:bg-green-700"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
