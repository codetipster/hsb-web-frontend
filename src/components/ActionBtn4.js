import React, { useState } from "react";
import NeedMoreDataModal from "./NeedMoreDataModal";

function DropdownMenu({ client1 }) {
  const [isOpen, setIsOpen] = useState(false);
  const token = JSON.parse(localStorage.getItem("Token"));
  const url = `https://hsb-backend.onrender.com/api/accountant/invoices/${client1}`;
  const status = "COMPLETED";
  const status1 = "INREVIEW";
  const status2 = "NEED MORE DATA";

  const completedInvoice = () => {
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
      alert("Invoice Completed");
    });
  };

  const inReviewInvoice = () => {
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
      alert("Invoice sent for review");
    });
  };

  const needMoreData = () => {
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
      console.log(response, "inactive client");
      alert("Invoice needs more info");
    });
  };

  return (
    <div>
      <button
        className="rounded-md text-sm font-medium text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        Change Status
      </button>
      {isOpen && (
        <ul className="absolute px-3 py-2 w-48 bg-white rounded-md shadow-lg">
          <li className="px-[10px] py-2 text-green-700">
            <button type="submit" onClick={completedInvoice}>
              Completed
            </button>
          </li>
          <li className="px-[10px] py-2 text-yellow-700">
            <button type="submit" onClick={inReviewInvoice}>
              In Review
            </button>
          </li>
          <li className="px-[10px] py-2 text-red-700">
            <NeedMoreDataModal client1={client1} />
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
