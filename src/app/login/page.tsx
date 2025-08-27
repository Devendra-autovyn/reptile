"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./login.css";
import RaptileLogo from "@/components/RaptileLogo";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (email && password) {
      router.push("/");
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        <div className="flex items-center gap-3 mb-2 justify-center">
          <RaptileLogo className="h-12 w-12" />
          <h1 className="logo">Raptile</h1>
        </div>
        <p className="tagline text-center">Welcome back</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email / Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Login" />
        </form>

        <div className="links mt-4 text-center">
          <a href="#" className="text-sm">Forgot Password?</a>
          <span className="mx-2">|</span>
          <Link href="/signup" className="text-sm">Create Account</Link>
        </div>
      </div>
    </div>
  );
}
