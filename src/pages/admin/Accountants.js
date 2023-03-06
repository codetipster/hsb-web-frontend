import React,{ useEffect, useState } from "react";
import axios from "axios";
import Moment from "react-moment";
import Nav2 from "../../components/Nav2";
import ActionButton from "../../components/ActionButton";

const Accountants = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
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

  const getStatus = (status) => {
    let statusClass;
    switch (status) {
      case "ACTIVE":
        statusClass = "p-3 text-green-500";
        break;

      case "DEACTIVATED":
        statusClass = "p-3 text-blue-600";
        break;

      default: //failed
        statusClass = "p-3 text-red-600";
        break;
    }
    return statusClass;
  };

  return (
    <div className="p-24 mt-[-30px]">
      <Nav2 title="Accountants" />
      <div className="p-3 my-10 flex items-center justify-center">
        <table className="table bg-white text-sm text-left text-gray-500 dark:text-gray-400 px-4">
          <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="p-3">Select</th>
              <th className="p-3">Accountant ID</th>
              <th className="p-3">Mobile Number</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Date Created</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {accountants.map((accountant) => {
              return (
                <tr>
                  <td className="p-3">
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
                  <td className="p-3">{accountant.id}</td>
                  <td className="p-3">{accountant.mobileNumber}</td>
                  <td className="p-3">{accountant.firstName}</td>
                  <td className="p-3">{accountant.email}</td>
                  <td className="p-3">
                    <Moment format="HH:mm DD-MM-YYYY">
                      {accountant.createdAt}
                    </Moment>
                  </td>
                  <td className={getStatus(accountant.status)}>
                    {accountant.status}
                  </td>
                  <td className="p-3">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <ActionButton
                        accountant={accountant.id}
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

export default Accountants;
