"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="login-container">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <h1 className="logo">🌀 Raptile</h1>
        <p className="tagline">Fast • Secure • Limitless</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
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

        <div className="links">
          <a href="#">Forgot Password?</a>
          <Link href="/signup">Create Account</Link>
        </div>
      </div>
    </div>
  );
}
