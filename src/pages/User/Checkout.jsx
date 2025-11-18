import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);

    const user = JSON.parse(localStorage.getItem("scms_user") || "{}");
    setPhone(user.phone || "");
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  const handlePlaceOrder = () => {
    if (!address || !phone) {
      alert("Please fill all fields.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const orderId = "ORD" + Math.floor(Math.random() * 90000 + 10000);
    const today = new Date().toLocaleDateString();

    const order = {
      id: orderId,
      items: cart,
      amount: total,
      address,
      phone,
      status: "Placed",
      date: today,
      paymentMethod: "COD",
      timeline: {
        placed: true,
        approved: true,
        packed: false,
        shipped: false,
        delivered: false,
      },
    };

    
  localStorage.setItem("lastOrder", JSON.stringify(order));

  const existingOrders = JSON.parse(localStorage.getItem("userOrders") || "[]");
  localStorage.setItem("userOrders", JSON.stringify([...existingOrders, order]));

  localStorage.setItem("cart", JSON.stringify([]));
  setCart([]);

  alert("Order placed successfully!");
  navigate(`/track/${order.id}`);   // 🔹 changed
};

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center text-gray-600">
        Your cart is empty. Add items first.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Checkout</h1>

      {/* Address Section */}
      <div className="bg-white rounded-xl shadow p-4 space-y-3">
        <h2 className="text-lg font-semibold">Delivery Details</h2>

        <textarea
          placeholder="Enter full delivery address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 rounded-lg border"
          rows="3"
        />

        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 rounded-lg border"
        />
      </div>

      {/* Order Summary */}
      <div className="bg-white rounded-xl shadow p-4 space-y-3">
        <h2 className="text-lg font-semibold">Order Summary</h2>

        {cart.map((item, idx) => (
          <div key={idx} className="flex justify-between text-sm">
            <span>
              {item.name} × {item.qty}
            </span>
            <span>₹{item.price * (item.qty || 1)}</span>
          </div>
        ))}

        <hr />

        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      {/* Place Order */}
      <button
        onClick={handlePlaceOrder}
        className="w-full py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
