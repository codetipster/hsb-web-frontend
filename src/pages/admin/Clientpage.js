import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav2 from "../../components/Nav2Client";
import ActionButton from "../../components/ActionBtn";

const Clientpage = ({ clients }) => {
  const [token, setToken] = useState("");
  const [invoice, setInvoice] = useState([]);
  const [client, setClients] = useState([]);

  useEffect(() => {
    const getToken = () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      if (token !== null || token !== undefined) {
        setToken(token);
      }
      axios
        .get("https://hsb-backend-app-rpnm.onrender.com/api/admin/clients", {
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

  const getStatus = (status) => {
    let statusClass;
    switch (status) {
      case "ACTIVE":
        statusClass = "p-4 text-green-500";
        break;

      case "PENDING":
        statusClass = "p-4 text-yellow-600";
        break;

      default: //failed
        statusClass = "p-4 text-red-600";
        break;
    }
    return statusClass;
  };
  
  return (
    <div className="p-24 mt-[-30px]">
      <Nav2 title="Clients" />
      <div className="p-4 my-10 flex items-center justify-center">
        <table className="table bg-white text-sm text-left text-gray-500 dark:text-gray-400 px-4">
          <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="p-4">Select</th>
              <th className="p-4">Client ID</th>
              <th className="p-4">Client Name</th>
              <th className="p-4">Legal Number</th>
              <th className="p-4">Mobile Number</th>
              <th className="p-4">Accountant in charge</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => {
              return (
                <tr>
                  <td className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4">HSB000{client.id}</td>
                  <td className="p-4">{client.firstName}</td>
                  <td className="p-4">{client.legalNumber}</td>
                  <td className="p-4">{client.mobileNumber}</td>
                  <td className="p-4">{client.accountantName}</td>
                  <td className={getStatus(client.status)}>
                    {client.status}
                  </td>
                  <td className="p-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <ActionButton
                        clients={client}
                        className="w-[20px] h-[45px]"
                      />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clientpage;
