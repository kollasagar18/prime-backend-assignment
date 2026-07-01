import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "sonner";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("auth/login/", form);

      localStorage.setItem("access", response.data.access);
localStorage.setItem("refresh", response.data.refresh);

localStorage.setItem(
  "user",
  JSON.stringify(response.data.user)
);

toast.success("Login Successful!");

navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid Email or Password");
      console.log(error.response?.data);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-xl rounded-xl w-96 p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600">
          PrimeTrade
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Product Management System
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-6 space-y-4"
        >

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="w-full border rounded-lg p-3"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="w-full border rounded-lg p-3"
            value={form.password}
            onChange={handleChange}
          />

          <button
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6">

          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 ml-2"
          >
            Register
          </Link>

        </p>

      </div>
    </div>
  );
}

export default Login;