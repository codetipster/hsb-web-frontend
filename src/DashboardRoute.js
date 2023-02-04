import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import AddClient from "./pages/AddClient";
import Clientprofile from "./pages/Clientprofile";
import Adminprofile from "./pages/Adminprofile";
import Accountants from "./pages/Accountants";
import Clientpage from "./pages/Clientpage";
import BtnLang from "./components/ActionBtn";
import Courses from "./pages/Courses";
import Invoices from "./pages/Invoices";

const DashboardRoute = () => {
  const [token, setToken] = useState("");
  const [clients, setClients] = useState([]);
  const [accountants, setAccountants] = useState([]);
  useEffect(() => {
    const getToken = () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      if (token !== null || token !== undefined) {
        setToken(token);
      }
      axios
        .get("https://hsb-backend.onrender.com/api/client/clients", {
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
        <Route path="/drop" element={<BtnLang />} />
        <Route path="/test" element={<Courses />} />
      </Routes>
    </div>
  );
};

export default DashboardRoute;
