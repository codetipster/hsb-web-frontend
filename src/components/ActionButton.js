import React, { useState } from "react";
import axios from "axios";
import { BiDotsVertical } from "react-icons/bi";

function DropdownMenu({ accountant }) {
  const [isOpen, setIsOpen] = useState(false);
  const token = JSON.parse(localStorage.getItem("Token"));
  const url = `https://hsb-backend.onrender.com/api/accountant/accountants/${accountant}`;
  const status = "ACTIVE";
  const status1 = "DEACTIVATED";
  const status2 = "DELETED";

  const activateAccountant = () => {
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        status: status,
      }),
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
    }).then((response) => {
      console.log(response, "inactive client");
      alert("Accountant Successfully Activated");
    });
  };

  const deactivateAccountant = () => {
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        status: status1,
      }),
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
    }).then((response) => {
      console.log(response, "inactive client");
      alert("Accountant Successfully Deactivated");
    });
  };

  const deleteAccountant = () => {
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        status: status2,
      }),
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
    }).then((response) => {
      console.log(response, "delete client");
      alert("Delete Accountant");
    });
  };

  return (
    <div>
      <button
        className="inline-block px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-700 hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiDotsVertical />
      </button>
      {isOpen && (
        <ul className="absolute px-3 py-2 right-0 w-48 bg-white rounded-md shadow-lg">
          <li className="mt-2 p-2 text-green-600">
            <button type="submit" onClick={activateAccountant}>
              Activate
            </button>
          </li>
          <li className="mt-2 p-2 text-blue-600">
            <button type="submit" onClick={deactivateAccountant}>
              Deactivate
            </button>
          </li>
          <li className="mt-2 p-2 text-red-600">
            <button type="submit" onClick={deleteAccountant}>
              Delete Client
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
