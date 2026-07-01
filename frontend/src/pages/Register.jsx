import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "sonner";
function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post("auth/register/", form);

      toast.success("Registration Successful!");

      navigate("/");
    } catch (error) {
      console.log(error.response?.data);
      toast.error("Registration Failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white shadow-xl rounded-xl w-96 p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600">
          Register
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Create Your Account
        </p>

        <form onSubmit={handleRegister} className="space-y-4 mt-6">

          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full border rounded-lg p-3"
            value={form.username}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3"
            value={form.password}
            onChange={handleChange}
          />

          <select
            name="role"
            className="w-full border rounded-lg p-3"
            value={form.role}
            onChange={handleChange}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-6">
          Already have an account?

          <Link
            to="/"
            className="text-blue-600 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;