"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Static credentials for admin login
    const adminUsername = "admin";
    const adminPassword = "password123";

    if (username === adminUsername && password === adminPassword) {
      // Store the login state in localStorage
      localStorage.setItem("adminAuth", "true");
      router.push("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Admin Login
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              placeholder="Enter admin username"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              placeholder="Enter admin password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
