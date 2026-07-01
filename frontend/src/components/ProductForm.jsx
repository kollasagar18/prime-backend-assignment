import { useState } from "react";
import api from "../services/api";
import { toast } from "sonner";

function ProductForm({ onClose, onSuccess, product }) {
  const [form, setForm] = useState({
    name: product?.name || "",
    description: product?.description || "",
    price: product?.price || "",
    stock: product?.stock || "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("access");

      if (product) {
        // EDIT PRODUCT
        await api.put(`products/${product.id}/`, form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("Product Updated Successfully!");
      } else {
        // ADD PRODUCT
        await api.post("products/", form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("Product Added Successfully!");
      }

      onSuccess();
      onClose();
    } catch (error) {
      console.log(error.response?.data);
      toast.error("Operation Failed!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white w-[450px] rounded-xl shadow-xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          {product ? "Edit Product" : "Add Product"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="w-full border p-3 rounded"
            value={form.name}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            className="w-full border p-3 rounded"
            value={form.description}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full border p-3 rounded"
            value={form.price}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            className="w-full border p-3 rounded"
            value={form.stock}
            onChange={handleChange}
            required
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {product ? "Update" : "Save"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default ProductForm;