import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../components/Nav3";
import ActionButton from "../../components/ActionBtn5";
import Moment from "react-moment";
import AccountantNavbar from "../../components/AccountantNavbar";

const AccountantEmployees = ({ clients }) => {
  const [token, setToken] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getToken = () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      if (token !== null || token !== undefined) {
        setToken(token);
      }
      axios
        .get("https://hsb-backend-app-rpnm.onrender.com/api/admin/employees", {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data, "employees");
          setEmployees(response.data);
        });
    };
    getToken();
  }, []);

  const getStatus = (status) => {
    let statusClass;
    switch (status) {
      case "ACCEPTED":
        statusClass = "p-4 text-green-600";
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
    <>
    <AccountantNavbar/>
      <div className="p-24 mt-[-30px]">
        <Nav />
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
                <th className="p-4">Employee Name</th>
                <th className="p-4">Bank Name</th>
                <th className="p-4">IBAN Number</th>
                <th className="p-4">Date/Time Created</th>
                <th className="p-4">Employee Status</th>
              </tr>
            </thead>
            {/* <tbody>
            {employees.map((employee) => {
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
                  <td className="p-4">{employee.name}</td>
                  <td className="p-4">{employee.bankName}</td>
                  <td className="p-4">{employee.iban}</td>
                  <td className="p-4">
                    <Moment format="HH:mm DD-MM-YYYY">
                      {employee.createdAt}
                    </Moment>
                  </td>
                  <td className={getStatus(employee.status)}>
                    {employee.status}
                  </td>
                  <td className="p-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <ActionButton
                        employee={employee.id}
                        className="w-[20px] h-[45px]"
                      />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody> */}
          </table>
        </div>
      </div>
    </>
  );
};

export default AccountantEmployees;
