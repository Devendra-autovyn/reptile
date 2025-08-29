"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./login.css";
import { FlipWords } from "@/components/ui/flip-words";
import { Spotlight } from "@/components/ui/spotlight";
import RaptileLogo from "@/components/RaptileLogo";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      router.push("/");
    }
  };

  return (
    <div className="login-container">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <div className="flex items-center gap-2">
          <RaptileLogo />
          <h1 className="text-3xl font-bold text-foreground">Reptile</h1>
        </div>{" "}
        <span className="text-lg mt-1 text-muted-foreground text-center">
          <FlipWords
            words={["Fast.", "Secure.", "Limitless."]}
            duration={2000}
          />
        </span>
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
        <div className="links">
          <a href="#">Forgot Password?</a>
          <Link href="/signup">Create Account</Link>
        </div>
      </div>
    </div>
  );
}
