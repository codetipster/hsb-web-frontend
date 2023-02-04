import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardRoute from "./DashboardRoute";
import Login from "../src/pages/Login";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<DashboardRoute />} />
    </Routes>
  );
}

export default App;
