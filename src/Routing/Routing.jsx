import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Register, NotFound } from "../pages";

import { useAuthContext } from "../hooks";

/**
 * @name Routing
 * @returns {function} all app routes
 */
export default function Routing() {
  const { authIsReady, user } = useAuthContext();

  return (
    <>
      {authIsReady && (
        <Routes>
          <Route
            path="/"
            element={!user ? <Navigate to="/login" /> : <Home />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}
