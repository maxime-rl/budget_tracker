import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="relative flex justify-between p-6 shadow-md">
      <span className="font-bold">Budget tracker</span>
      <ul className="flex">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li className="pl-6">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}
