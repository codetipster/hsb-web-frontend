import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiDotsVertical } from "react-icons/bi";

function DropdownMenu({ accountantClients }) {
  const [isOpen, setIsOpen] = useState(false);

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
              to={`/accountantClientPage/clientProfile/${accountantClients.id}`}
              className="p-2 no-underline text-gray-800"
            >
              View client Profile
            </Link>
          </li>
          <li className="mt-2 ">
            <Link to="/accountantInvoices" className="p-2  no-underline text-gray-800">
              View invoice(s)
            </Link>
          </li>
          <li className="mt-2 ">
            <Link className="p-2  no-underline text-gray-800">
              Drop feedback
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
