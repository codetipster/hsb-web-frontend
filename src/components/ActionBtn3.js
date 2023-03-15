import React, { useState } from "react";
import { BiDotsVertical } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

function DropdownMenu({ employeeId }) {
  // const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const token = JSON.parse(localStorage.getItem("Token"));
  const url = `https://hsb-backend-app-rpnm.onrender.com/api/client/employees/${employeeId}`;
  const status = "ACCEPTED";
  const status1 = "DECLINED";

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

  const declineRequest = () => {
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
      alert("Request Declined");
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
        <ul className="absolute px-3 py-2 w-48 bg-white rounded-md shadow-lg">
          <li className="px-[10px] py-2 text-gray-700">View Request</li>
          <li className="px-[10px] py-2 text-green-700">
            <button type="submit" onClick={approveRequest}>
              Approve Request
            </button>
          </li>
          <li className="px-[10px] py-2 text-red-700">
            <button type="submit" onClick={declineRequest}>
              Decline Request
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
