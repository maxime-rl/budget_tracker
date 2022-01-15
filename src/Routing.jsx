import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, NotFound } from "./pages";

/**
 * @name Routing
 * @returns {function} all app routes
 */
export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
