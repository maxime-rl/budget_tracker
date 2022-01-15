import React from "react";
import { useLogout } from "../hooks";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { logout } = useLogout();

  return (
    <nav className="relative flex justify-between px-3 md:px-6 py-6 shadow-md">
      <span className="font-bold">Budget tracker</span>
      <ul className="flex">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li className="pl-6">
          <Link to="/register">Register</Link>
        </li>
        <li>
          <button onClick={logout} className="pl-6">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
