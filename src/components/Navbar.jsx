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
    <nav className="relative basis-auto shadow-md">
      <div className="flex justify-between px-4 md:px-8 py-6 lg:max-w-screen-lg lg:mx-auto">
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
      </div>
    </nav>
  );
}
