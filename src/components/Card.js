import React, { useState } from "react";
import { BiDownload } from "react-icons/bi";

const Card = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  return (
    <div className="w-[441px] h-[60px] rounded bg-gray-100 my-2">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="text-sm font-normal truncate">
          <p className=" text-gray-900">
            This is good for business
            <br />
            <span className="text-gray-400 "> 13 march, 12:30pm</span>
          </p>
        </div>
        <div>
          <BiDownload />
        </div>
      </div>
    </div>
  );
};

export default Card;
