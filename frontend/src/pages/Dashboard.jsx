import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import { toast } from "sonner";
function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    fetchProductsCount();
  }, []);

  const fetchProductsCount = async () => {
    try {
      const token = localStorage.getItem("access");

      const response = await api.get("products/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTotalProducts(response.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          PrimeTrade Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </nav>

      {/* Dashboard Content */}
      <div className="max-w-6xl mx-auto mt-10">

        <h2 className="text-3xl font-bold mb-8">
          👋 Welcome, {user?.username}
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Username */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-gray-500 text-lg">
              Username
            </h3>

            <p className="text-2xl font-bold mt-3">
              👤 {user?.username}
            </p>
          </div>

          {/* Role */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-gray-500 text-lg">
              Role
            </h3>

            <p className="text-2xl font-bold mt-3 text-blue-600">
              🔑 {user?.role}
            </p>
          </div>

          {/* Products */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-gray-500 text-lg">
              Total Products
            </h3>

            <p className="text-2xl font-bold mt-3 text-green-600">
              📦 {totalProducts}
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex gap-5">

          <button
            onClick={() => navigate("/products")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            📂 Manage Products
          </button>

          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg"
          >
            🚪 Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;