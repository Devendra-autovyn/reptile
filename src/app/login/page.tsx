"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./login.css";
import RaptileLogo from "@/components/RaptileLogo";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Trigger the animation on component mount
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className={`login-container ${isLoaded ? 'loaded' : ''}`}>
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <div className="flex items-center gap-3 mb-2">
          <RaptileLogo className="h-12 w-12" />
          <h1 className="logo">Raptile</h1>
        </div>
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
