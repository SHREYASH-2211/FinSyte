import { useState } from "react";
import axios from "../services/api"; // assuming this is configured with baseURL
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/register", {
        fullname,
        username,
        email,
        password,
      });

      toast.success("✅ Registered successfully!", { autoClose: 3000 });

      // Optional: Clear form
      setFullname("");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error(
        error.response?.data?.message ||
          "❌ Registration failed. Please try again.",
        { autoClose: 3000 }
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Full Name"
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
