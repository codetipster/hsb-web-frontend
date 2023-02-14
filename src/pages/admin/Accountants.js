import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav2 from "../../components/Nav2Accountant";
import ActionButton from "../../components/ActionBtn";

const Accountants = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [status, setStatus] = useState(false);
  const [accountants, setAccountants] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      if (token !== null || token !== undefined) {
        setToken(token);
      }
      axios
        .get("https://hsb-backend.onrender.com/api/accountant/accountants/", {
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
    <div className="p-24 mt-[-30px]">
      <Nav2 title="Accountants" />
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-10">
        <table className="table">
          <thead>
            <tr>
              <th className="p-4">Select</th>
              <th className="p-4">Accountant ID</th>
              <th className="p-4">Mobile Number</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Date Created</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {accountants.map((accountant) => {
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
                  <td className="p-4">{accountant.id}</td>
                  <td className="p-4">{accountant.mobileNumber}</td>
                  <td className="p-4">{accountant.firstName}</td>
                  <td className="p-4">{accountant.email}</td>
                  <td className="p-4">{accountant.createdAt}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div
                        className={
                          status
                            ? "h-2.5 w-2.5 rounded-full bg-green-400 mr-2"
                            : "h-2.5 w-2.5 rounded-full bg-red-500 mr-2"
                        }
                      ></div>{" "}
                      {accountant.status}
                    </div>
                  </td>
                  {/* <td className="py-4 px-6">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <ActionButton
                        className="w-[20px] h-[45px]"
                        onClick={toggleDropdown}
                      />
                    </a>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accountants;
