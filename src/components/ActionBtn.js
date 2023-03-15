import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiDotsVertical } from "react-icons/bi";

function DropdownMenu({ clients }) {
  const [isOpen, setIsOpen] = useState(false);
  const token = JSON.parse(localStorage.getItem("Token"));
  const url = `https://hsb-backend-app-rpnm.onrender.com/api/client/clients/${clients.id}`;
  const status = "INACTIVE";
  const status1 = "ACTIVE";

  const activateClient = () => {
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
      alert("Client Successfully Activated");
    });
  };

  const deactivateClient = () => {
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
      alert("Client Successfully Deactivated");
    });
  };

  const deleteClient = () => {
    axios
      .delete(url, {
        headers: {
          Authorization: token,
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data, "delete client");
        alert(response.data.acknowledged);
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
          <li className="mt-2">
            <Link
              to={`/clients/clientProfile/${clients.id}`}
              className="px-[10px] py-2 no-underline text-gray-800"
            >
              View Client Profile
            </Link>
          </li>
          {/* <li className="mt-2 ">
            <Link
              to="/clients"
              className="px-[10px] py-2  no-underline text-gray-800"
            >
              View invoice(s)
            </Link>
          </li> */}
          {/* <li className="mt-2 px-[10px] py-2 text-gray-800">Drop feedback</li> */}
          <li className="mt-2 px-[10px] py-2 text-green-600">
            <button type="submit" onClick={activateClient}>
              Activate
            </button>
          </li>
          <li className="mt-2 px-[10px] py-2 text-blue-600">
            <button type="submit" onClick={deactivateClient}>
              Deactivate
            </button>
          </li>
          <li className="mt-2 px-[10px] py-2 text-red-600">
            <button type="submit" onClick={deleteClient}>
              Delete Client
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
