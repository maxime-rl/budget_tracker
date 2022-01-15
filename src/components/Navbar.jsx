import React from "react";
import { useLogout, useAuthContext } from "../hooks";
import { Link } from "react-router-dom";

/**
 * @name Navbar
 * @returns {ReactElement}
 */
export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="relative flex justify-between px-3 md:px-6 py-6 shadow-md">
      <span className="font-bold">Budget tracker</span>
      <ul className="flex">
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li className="pl-6">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>{user.displayName}</li>
            <li className="pl-6">
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
