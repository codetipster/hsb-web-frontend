import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import AccountantHomePage from "./pages/accountant/HomePage";

const DashboardRoute = () => {
  const [token, setToken] = useState("");
  const [clients, setClients] = useState([]);
  const [accountants, setAccountants] = useState([]);
  const [invoices, setInvoices] = useState([]);

  // clients
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
          console.log(response.data, "client info");
          setClients(response.data);
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
        .get("https://hsb-backend.onrender.com/api/admin/invoices", {
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
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/accountantHomePage"
          element={<AccountantHomePage clients={clients} invoices={invoices} />}
        />
      </Routes>
    </div>
  );
};

export default DashboardRoute;
