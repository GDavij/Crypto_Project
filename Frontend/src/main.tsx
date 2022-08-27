import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Crypt from "./Pages/Crypt";
import "./main.css";
import Hashes from "./Pages/Hashes";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Crypt />} />
        <Route path="/Hash" element={<Hashes />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
