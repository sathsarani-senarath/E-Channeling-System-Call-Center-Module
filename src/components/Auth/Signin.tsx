"use client";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ For navigation

export default function LoginPage() {
  const router = useRouter(); // ✅ Next.js router
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ✅ Login function with redirect
  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      setSuccess("");
      return;
    }

    if (email === "agent@example.com" && password === "123456") {
      setSuccess("Login successful!");
      setError("");

      // ✅ Redirect to /app/home after short delay
      setTimeout(() => {
        router.push("/pages/first");
      }, 1200);
    } else {
      setError("Invalid email or password");
      setSuccess("");
    }
  };

  // Google login redirect
  const handleGoogleLogin = () => {
    const clientId = "YOUR_GOOGLE_CLIENT_ID"; // replace with actual client ID
    const redirectUri = "http://localhost:3000";
    const scope = "email profile";
    const responseType = "token";
    const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    window.location.href = googleUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Logo */}
      <div className="mb-6 flex flex-col items-center">
        <Image
          src="/logo.jpg" // ensure this is in public folder
          alt="E-Channeling Logo"
          width={180}
          height={70}
          className="mb-2"
        />
      </div>

      {/* Login Card */}
      <div className="border border-gray-300 rounded-md p-8 w-full max-w-sm shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-2">Log In</h2>
        <p className="text-center text-gray-600 mb-6">
          Log In as an Agent to Continue
        </p>

        {/* Messages */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 text-center mb-4">{success}</p>
        )}

        {/* Email */}
        <label className="block mb-2 font-medium text-gray-700">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="agent@example.com"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Password */}
        <div className="flex justify-between items-center mb-2">
          <label className="font-medium text-gray-700">
            Password<span className="text-red-500">*</span>
          </label>
          <a href="#" className="text-blue-600 text-sm hover:underline">
            Forgot your password?
          </a>
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="123456"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition"
        >
          Log in
        </button>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center border border-gray-400 rounded-md py-2 mt-4 hover:bg-gray-100 transition"
        >
          <FcGoogle className="mr-2 text-xl" />
          Log in with Google
        </button>

        {/* Sign Up */}
        <p className="text-center text-sm text-gray-700 mt-4">
          Don't have an account?{" "}
          <a href="/pages/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

