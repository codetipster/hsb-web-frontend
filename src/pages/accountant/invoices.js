import React, { useState, useEffect } from "react";
import axios from "axios";
import AccountantNavbar from "../../components/AccountantNavbar";
import Nav2 from "../../components/Nav2Client";
import ActionButton from "../../components/ActionBtn2";

const AccountantInvoices = ({ clients }) => {
  const [status, setStatus] = useState(false);
  const [token, setToken] = useState("");
  const [invoices, setInvoices] = useState([]);

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
    <>
      <AccountantNavbar />
      <div className="p-24 mt-[-30px]">
        <Nav2 title="Invoices" />
        <div className="p-4 my-10 flex items-center justify-center">
          <table className="table bg-white text-sm text-left text-gray-500 dark:text-gray-400 px-4">
            <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="p-4">
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
                </th>
                <th className="p-4">Invoice Number</th>
                <th className="p-4">Invoice Name</th>
                <th className="p-4">Client Id</th>
                <th className="p-4">Date/Time Created</th>
                <th className="p-4">Invoice Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => {
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
                    <td className="p-4">{invoice.id}</td>
                    <td className="p-4">{invoice.name}</td>
                    <td className="p-4">HSB000{invoice.clientId}</td>
                    <td className="p-4">{invoice.createdAt}</td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <div
                          className={
                            status
                              ? "h-2.5 w-2.5 rounded-full bg-green-400 mr-2"
                              : "h-2.5 w-2.5 rounded-full bg-red-500 mr-2"
                          }
                        ></div>{" "}
                        {invoice.status}
                      </div>
                    </td>
                    <td className="p-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <ActionButton
                          client={invoice}
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
    </>
  );
};

export default AccountantInvoices;
