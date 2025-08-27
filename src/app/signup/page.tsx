"use client";

import React, { useState } from "react";
import Link from "next/link";
import "../login/login.css";
import RaptileLogo from "@/components/RaptileLogo";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "",
    password: "",
    upiId: "",
    phoneNo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Account created for ${formData.username}!`);
    // Ideally, you'd navigate away or show a success message
  };

  return (
    <div className="login-container">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center signup-card">
        <div className="flex items-center gap-3 mb-2">
          <RaptileLogo className="h-12 w-12" />
          <h1 className="logo">Raptile</h1>
        </div>
        <p className="tagline">Create your account</p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-grid">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="dropdown"
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="merchant">Merchant</option>
              <option value="admin">Admin</option>
            </select>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-grid">
            <input
              type="text"
              name="upiId"
              placeholder="UPI ID"
              value={formData.upiId}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phoneNo"
              placeholder="Phone Number"
              value={formData.phoneNo}
              onChange={handleChange}
            />
          </div>

          <input type="submit" value="Sign Up" />
        </form>

        <div className="links">
          <span>Already have an account?</span>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
