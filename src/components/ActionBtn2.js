import React, { useState } from "react";
import { BiDotsVertical } from "react-icons/bi";
import SendCommentModal from "./SendCommentModal";
import ActionButton from "./ActionBtn4";

function DropdownMenu({ client, client1 }) {
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
          <li className="px-[10px] py-2 text-gray-700">Download</li>
          <li className="px-[10px] py-2 text-gray-700 ">
            <ActionButton client1={client1} />
          </li>
          <li className="px-[10px] py-2 text-gray-700">
            <SendCommentModal client={client} />
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
