import React, { useState, useEffect } from "react";
import axios from "axios";
import AccountantNavbar from "../../components/AccountantNavbar";
import Nav2 from "../../components/Nav2Accountant";
import ActionButton from "../../components/AccountantActionButton";

const AccountantClientpage = ({accountantClients}) => {
  const [status, setStatus] = useState(false);
  const [token, setToken] = useState("");
  const [invoice, setInvoice] = useState([]);
  const [clients, setClients] = useState([]);

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
  return (
    <>
      <AccountantNavbar />
      <div className="p-24 mt-[-30px]">
        <Nav2 title="Clients" />
        <div className="p-4 my-10 flex items-center justify-center">
          <table className="table bg-white text-sm text-left text-gray-500 dark:text-gray-400 px-4 shadow-xl">
            <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                    <span className="pl-2">Client ID</span>
                  </div>
                </th>
                <th className="p-4">Client Name</th>
                <th className="p-4">Legal Number</th>
                <th className="p-4">Mobile Number</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {accountantClients.map((client) => {
                return (
                  <tr>
                    <td className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          // name={clients.id}
                          // checked={clients?.isChecked || false}
                          // onChange={handleChange}
                        />
                        <label
                          htmlFor="checkbox-all-search"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                        <span className="pl-2">HSB000{client.id}</span>
                      </div>
                    </td>
                    <td className="p-4">{client.firstName}</td>
                    <td className="p-4">{client.legalNumber}</td>
                    <td className="p-4">{client.mobileNumber}</td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <div
                          className={
                            status
                              ? "h-2.5 w-2.5 rounded-full bg-green-400 mr-2"
                              : "h-2.5 w-2.5 rounded-full bg-red-500 mr-2"
                          }
                        ></div>{" "}
                        {client.status}
                      </div>
                    </td>
                    <td className="p-4">
                      {/* <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    > */}
                      <ActionButton
                        accountantClients={client}
                        className="w-[20px] h-[45px]"
                      />
                      {/* </a> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AccountantClientpage;
