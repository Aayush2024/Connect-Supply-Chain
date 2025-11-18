import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import UserOnboarding from "../../components/UserOnboarding";

// SAMPLE PRODUCT LIST (you can replace with backend later)
const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 599,
    mrp: 999,
    category: "Electronics",
    rating: 4.3,
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    price: 1299,
    mrp: 1999,
    category: "Electronics",
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 3499,
    mrp: 4999,
    category: "Furniture",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
  },
  {
    id: 4,
    name: "LED Desk Lamp",
    price: 899,
    mrp: 1299,
    category: "Home",
    rating: 4.1,
    img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
  },
  {
    id: 5,
    name: "Spiral Notebook Pack (5)",
    price: 249,
    mrp: 399,
    category: "Stationery",
    rating: 4.0,
    img: "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  
];

const CATEGORIES = ["All", "Electronics", "Furniture", "Home", "Stationery"];

const BrowseProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  // CART STATE
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const updateCart = (updated) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const addToCart = (product) => {
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

  const decreaseQty = (product) => {
    const updated = cart
      .map((item) =>
        item.id === product.id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0);

    updateCart(updated);
  };

  const getQty = (id) => {
    const found = cart.find((item) => item.id === id);
    return found ? found.qty : 0;
  };

  const filteredProducts = ALL_PRODUCTS.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name
      .toLowerCase()
      .includes(search.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Onboarding overlay (only first time for user role) */}
      <UserOnboarding />

      {/* Header / Hero */}
      <section className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Browse Products
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Clean, simple, and fast – choose items and add them to your cart.
            </p>
          </div>

          {/* Search */}
          <div className="w-full sm:w-80">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </section>

      {/* Category filter chips */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-sm rounded-full border transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section className="max-w-6xl mx-auto px-4 pb-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition p-3 flex flex-col"
          >
            <Link to={`/product/${p.id}`}>
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-36 sm:h-44 object-cover rounded-xl"
              />
            </Link>

            <h3 className="mt-3 text-sm font-semibold text-gray-800 line-clamp-2">
              {p.name}
            </h3>

            <div className="mt-1 flex items-center gap-1 text-xs">
              <span className="inline-flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded-full">
                {p.rating}
                <Star size={10} />
              </span>
              <span className="text-gray-400">• {p.category}</span>
            </div>

            <div className="mt-1">
              <span className="text-lg font-bold text-gray-900">
                ₹{p.price}
              </span>
              <span className="text-xs line-through ml-2 text-gray-400">
                ₹{p.mrp}
              </span>
              <span className="text-xs text-green-600 ml-2">
                {Math.round(((p.mrp - p.price) / p.mrp) * 100)}% off
              </span>
            </div>

            {/* Spacer to push button down */}
            <div className="flex-1" />

            {/* Cart buttons */}
            {getQty(p.id) === 0 ? (
              <button
                onClick={() => addToCart(p)}
                className="mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold"
              >
                Add to Cart
              </button>
            ) : (
              <div className="mt-3 flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-2 py-1">
                <button
                  onClick={() => decreaseQty(p)}
                  className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm"
                >
                  -
                </button>

                <span className="font-semibold text-gray-800 text-sm">
                  {getQty(p.id)}
                </span>

                <button
                  onClick={() => addToCart(p)}
                  className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm"
                >
                  +
                </button>
              </div>
            )}
          </div>
        ))}
      </section>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 py-10">
          No products found. Try another category or search term.
        </p>
      )}
    </div>
  );
};

export default BrowseProducts;
