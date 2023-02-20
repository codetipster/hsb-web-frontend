import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import DashboardRoute from "./DashboardRoute";
import Login from "../src/pages/Login";
import "./App.css";
import AccountantHomePage from "./pages/accountant/HomePage";
import AccountantClientpage from "./pages/accountant/ClientPage";
import AccountantInvoices from "./pages/accountant/invoices";
import AccountantClientprofile from "./pages/accountant/ClientProfile";

function App() {
  const [token, setToken] = useState("");
  const [accountantClients, setAccountantClients] = useState([]);
  const [invoices, setInvoices] = useState([]);

  // accountantClient
  useEffect(() => {
    const getToken = () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      if (token !== null || token !== undefined) {
        setToken(token);
      }
      axios
        .get("https://hsb-backend.onrender.com/api/accountant/clients", {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data, "accountant client info");
          setAccountantClients(response.data);
        });
    };
    getToken();
  }, []);

  // invoices
  useEffect(() => {
    const getToken = () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      if (token !== null || token !== undefined) {
        setToken(token);
      }
      axios
        .get("https://hsb-backend.onrender.com/api/accountant/invoices", {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data, "invoices");
          setInvoices(response.data);
        });
    };
    getToken();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<DashboardRoute />} />
      <Route
        path="/accountantHomePage"
        element={
          <AccountantHomePage
            accountantClients={accountantClients}
            invoices={invoices}
          />
        }
      />
      <Route
        path="/accountantClientPage"
        element={<AccountantClientpage />}
        accountantClients={accountantClients}
      />
      <Route
        path="/accountantInvoices"
        element={<AccountantInvoices invoices={invoices} />}
      />
      <Route
        path="/accountantClientPage/clientProfile/:id"
        element={<AccountantClientprofile />}
      />
    </Routes>
  );
}

export default App;
