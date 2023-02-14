import React, { useState } from "react";
import { BiDotsVertical } from "react-icons/bi";
import { Link } from "react-router-dom";

function DropdownMenu({ client }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="inline-block px-[10px] py-2 rounded-md text-sm font-medium leading-5 text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        Change Status
      </button>
      {isOpen && (
        <ul className="absolute px-3 py-2 w-48 bg-white rounded-md shadow-lg">
          <li className="mt-2">
            <Link
              //   to={`/clients/clientProfile/${client.id}`}
              className="px-[10px] no-underline text-gray-800"
            >
              Completed
            </Link>
          </li>
          <li className="mt-2 ">
            <Link
              //   to="/profile"
              className="px-[10px]  no-underline text-gray-800"
            >
              In Review
            </Link>
          </li>
          <li className="mt-2 ">
            <Link
              //   to="/profile"
              className="px-[10px]  no-underline text-gray-800"
            >
              Need More data
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
