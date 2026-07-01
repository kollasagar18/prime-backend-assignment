import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          PrimeTrade
        </h1>

        <div className="flex items-center gap-6">

          <Link
            to="/dashboard"
            className="hover:text-yellow-300"
          >
            Dashboard
          </Link>

          <Link
            to="/products"
            className="hover:text-yellow-300"
          >
            Products
          </Link>

          <span className="font-semibold">
            👤 {user?.username}
          </span>

          <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
            {user?.role}
          </span>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;