import { useEffect, useState } from "react";
import api from "../services/api";
import ProductForm from "../components/ProductForm";
import Navbar from "../components/Navbar";
import { toast } from "sonner";
function Products() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("access");

      const response = await api.get("products/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(response.data);

    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) return;

  try {
    const token = localStorage.getItem("access");

    await api.delete(`products/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success("Product Deleted Successfully!");

    fetchProducts();

  } catch (error) {
    console.log(error.response?.data);
    toast.error("Delete Failed!");
  }
};
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <Navbar />

      <div className="flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          Products
        </h1>

        {user?.role === "ADMIN" && (
          <button
            onClick={() => {
          setSelectedProduct(null);
          setShowModal(true);
        }}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Add Product
          </button>
        )}
          </div>

      <table className="w-full mt-8 bg-white shadow rounded-lg">

        <thead>

          <tr className="bg-gray-200">

            <th className="p-3">Name</th>

            <th>Price</th>

            <th>Stock</th>

            {user?.role === "ADMIN" && (
              <th>Action</th>
            )}

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr key={product.id} className="text-center border-b">

              <td className="p-3">
                {product.name}
              </td>

              <td>
                ₹ {product.price}
              </td>

              <td>
                {product.stock}
              </td>

              {user?.role === "ADMIN" && (

                <td>

                  <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowModal(true);
                  }}
                  className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>

                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>

              )}

            </tr>

          ))}

        </tbody>

      </table>
           

            {showModal && (
        <ProductForm
  product={selectedProduct}
  onClose={() => setShowModal(false)}
  onSuccess={fetchProducts}
/>
      )}

    </div>
  );
}

export default Products;  