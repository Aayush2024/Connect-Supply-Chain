import React, { useState } from "react";
import { Edit, Save, PlusCircle } from "lucide-react";

const SupplierProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Wireless Mouse", price: 599, stock: 120 },
    { id: 2, name: "Office Chair", price: 3499, stock: 40 },
    { id: 3, name: "LED Desk Lamp", price: 899, stock: 80 },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", stock: "" });

  const updateProduct = (id, field, value) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      )
    );
  };

  const addNewProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock) {
      alert("Enter all fields");
      return;
    }

    const next = {
      id: Date.now(),
      ...newProduct,
      price: Number(newProduct.price),
      stock: Number(newProduct.stock),
    };

    setProducts([...products, next]);
    setNewProduct({ name: "", price: "", stock: "" });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">My Products</h1>

      {/* Add new product */}
      <div className="bg-white shadow rounded-xl p-4 flex gap-3 items-end">
        <div className="flex-1">
          <label className="text-sm">Product Name</label>
          <input
            className="w-full border rounded p-2"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
        </div>

        <div>
          <label className="text-sm">Price</label>
          <input
            type="number"
            className="w-28 border rounded p-2"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
        </div>

        <div>
          <label className="text-sm">Stock</label>
          <input
            type="number"
            className="w-28 border rounded p-2"
            value={newProduct.stock}
            onChange={(e) =>
              setNewProduct({ ...newProduct, stock: e.target.value })
            }
          />
        </div>

        <button
          onClick={addNewProduct}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2"
        >
          <PlusCircle size={20} /> Add
        </button>
      </div>

      {/* Product table */}
      <div className="bg-white shadow rounded-xl p-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Edit</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">
                  {editingId === p.id ? (
                    <input
                      className="border p-1 rounded"
                      value={p.name}
                      onChange={(e) =>
                        updateProduct(p.id, "name", e.target.value)
                      }
                    />
                  ) : (
                    p.name
                  )}
                </td>

                <td className="px-4 py-3 text-center">
                  {editingId === p.id ? (
                    <input
                      type="number"
                      className="border p-1 w-20 rounded"
                      value={p.price}
                      onChange={(e) =>
                        updateProduct(p.id, "price", Number(e.target.value))
                      }
                    />
                  ) : (
                    "₹" + p.price
                  )}
                </td>

                <td className="px-4 py-3 text-center">
                  {editingId === p.id ? (
                    <input
                      type="number"
                      className="border p-1 w-20 rounded"
                      value={p.stock}
                      onChange={(e) =>
                        updateProduct(p.id, "stock", Number(e.target.value))
                      }
                    />
                  ) : (
                    p.stock
                  )}
                </td>

                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() =>
                      setEditingId(editingId === p.id ? null : p.id)
                    }
                    className="text-blue-600"
                  >
                    {editingId === p.id ? <Save size={18} /> : <Edit size={18} />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierProducts;
