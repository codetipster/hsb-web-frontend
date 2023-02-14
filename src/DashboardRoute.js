import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import AccountantNavbar from "./components/AccountantNavbar";
import Homepage from "./pages/admin/Homepage";
import AddClient from "./pages/admin/AddClient";
import Clientprofile from "./pages/admin/Clientprofile";
import Adminprofile from "./pages/admin/Adminprofile";
import Accountants from "./pages/admin/Accountants";
import Clientpage from "./pages/admin/Clientpage";
import Invoices from "./pages/admin/Invoices";

// ACCOUNTANT ROUTES
import AccountantHomePage from "./pages/accountant/HomePage";
import Employees from "./pages/admin/employees";
// import BtnLang from "./components/admin/ActionBtn";
// import Courses from "./pages/admin/Courses";

const DashboardRoute = () => {
  const [token, setToken] = useState("");
  const [clients, setClients] = useState([]);
  const [accountantClient, setAccountantClient] = useState([]);
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

  // accountantClient
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
          console.log(response.data, "accountant client info");
          setAccountantClient(response.data);
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
    <div>
      <Navbar />
      {/* <AccountantNavbar /> */}
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
        <Route path="/clients/clientProfile/:id" element={<Clientprofile />} />
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
        {/* ACCOUNTANT ROUTES */}
        <Route
          path="/accountantHomePage"
          element={
            <AccountantHomePage
              accountantClient={accountantClient}
              invoices={invoices}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default DashboardRoute;
