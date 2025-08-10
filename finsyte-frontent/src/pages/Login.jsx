import React, { useState } from "react";
import api from "../services/api";

export default function Login() {
  const [form, setForm] = useState({ identifier: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", form);
      console.log("✅ Logged in:", res.data);
      alert("Login successful!");
    } catch (err) {
      console.error("❌ Login Error:", err.response?.data || err.message);
      alert("Login failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="text"
        name="identifier"
        onChange={handleChange}
        placeholder="Email or Username"
        required
        className="w-full border mb-3 p-2"
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
        required
        className="w-full border mb-4 p-2"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Login</button>
    </form>
  );
}
