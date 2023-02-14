import React from "react";
import { Routes, Route } from "react-router-dom";
import AccountantDashboardRoute from "./AccountantDashboardRoute";
import DashboardRoute from "./DashboardRoute";
import Login from "../src/pages/Login";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<DashboardRoute />} />
      {/* <Route path="/*" element={<AccountantDashboardRoute />} /> */}
    </Routes>
  );
}

export default App;
