import React, { useState } from "react";
import axios from "axios";
import { BiDotsVertical } from "react-icons/bi";

function DropdownMenu({ employee }) {
  const [isOpen, setIsOpen] = useState(false);
  const token = JSON.parse(localStorage.getItem("Token"));
  const url = `https://hsb-backend.onrender.com/api/client/employees/${employee}`;
  const status = "ACCEPTED";
  const status1 = "PENDING";

  const approveRequest = () => {
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
      alert("Request Approved");
    });
  };

  const pendingRequest = () => {
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
      alert("Request Pending");
    });
  };

  const deleteEmployee = () => {
    axios
      .delete(url, {
        headers: {
          Authorization: token,
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data, "delete client");
        alert("Employee has been deleted successfully");
      });
  };
  return (
    <div>
      <button
        className="inline-block px-[10px] py-2 rounded-md text-sm font-medium leading-5 text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiDotsVertical />
      </button>
      {isOpen && (
        <ul className="absolute px-3 py-2 w-48 bg-white rounded-md shadow-lg">
          <li className="px-[10px] py-2 text-green-700">
            <button type="submit" onClick={approveRequest}>
              Accepted
            </button>
          </li>
          <li className="px-[10px] py-2 text-yellow-700">
            <button type="submit" onClick={pendingRequest}>
              Pending
            </button>
          </li>
          <li className="px-[10px] py-2 text-red-700">
            <button type="submit" onClick={deleteEmployee}>
              Delete
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
