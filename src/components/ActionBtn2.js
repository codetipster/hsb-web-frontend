import React, { useState } from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import { BiDotsVertical } from "react-icons/bi";
import SendCommentModal from "./SendCommentModal";
import ActionButton from "./ActionBtn4";

function DropdownMenu({ client, client1, imageUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleDownload = (e) => {
    const fileUrl = imageUrl;
    const extractedUrl = fileUrl.match(/uploads\/(.+)$/)[1];
    e.preventDefault();
    let url = `https://hsb-backend-app-rpnm.onrender.com/download/${extractedUrl}`;
    const token = JSON.parse(localStorage.getItem("Token"));
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
        responseType: "blob",
      })
      .then((res) => {
        console.log(res, "checking download");
        fileDownload(res.data, "downloaded.png");
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
          <li className="px-[10px] py-2 text-gray-700" onClick={handleDownload}>
            Download
          </li>
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
