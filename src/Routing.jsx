import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, NotFound } from "./pages";

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
