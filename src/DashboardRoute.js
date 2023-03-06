import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Homepage from "./pages/admin/Homepage";
import AddClient from "./pages/admin/AddClient";
import Clientprofile from "./pages/admin/Clientprofile";
import Adminprofile from "./pages/admin/Adminprofile";
import Accountants from "./pages/admin/Accountants";
import Clientpage from "./pages/admin/Clientpage";
import Invoices from "./pages/admin/Invoices";
import Employees from "./pages/admin/employees";
// import { Languages } from "./pages/admin/Languages";

const DashboardRoute = () => {
  const [token, setToken] = useState("");
  const [clients, setClients] = useState([]);
  const [accountants, setAccountants] = useState([]);

  // clients
  useEffect(() => {
    const getToken = () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      if (token !== null || token !== undefined) {
        setToken(token);
      }
      axios
        .get("https://hsb-backend.onrender.com/api/admin/clients", {
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

  // accountants
  useEffect(() => {
    const getToken = () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      if (token !== null || token !== undefined) {
        setToken(token);
      }
      axios
        .get("https://hsb-backend.onrender.com/api/accountant/accountants", {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data, "accountant info");
          setAccountants(response.data);
        });
    };
    getToken();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={<Homepage clients={clients} accountants={accountants} />}
        />
        <Route path="/clients" element={<Clientpage clients={clients} />} />
        <Route
          path="/clients/add-client"
          element={<AddClient clients={clients} />}
        />
        <Route
          path="/clients/clientProfile/:id"
          element={<Clientprofile />}
        />
        <Route path="/profile" element={<Adminprofile />} />
        <Route
          path="/accountants"
          element={<Accountants clients={clients} />}
        />
        <Route
          path="/clients/invoices"
          element={<Invoices clients={clients} />}
        />
        <Route
          path="/clients/employees"
          element={<Employees clients={clients} />}
        />
        {/* <Route path="/languages" element={<Languages />} /> */}
      </Routes>
    </div>
  );
};

export default DashboardRoute;
