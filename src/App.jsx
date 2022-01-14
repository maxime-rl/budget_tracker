import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import { Navbar, Footer } from "./components";
import "tailwindcss/tailwind.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routing />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
