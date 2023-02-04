import React from "react";
import { Link } from "react-router-dom";
import { BiBookAdd } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { HiOutlineFilter } from "react-icons/hi";

const Nav2 = ({ title }) => {
  if (title === "Invoices") {
    return (
      <div className="flex items-center justify-around">
        <div className="text-[#FF1C1D]">{title}</div>
        <div>
          <form className="px-4">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Invoice Name"
                className="w-[545px] h-[56px] py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
              />
            </div>
          </form>
        </div>
        <div className="flex">
          <div className=" flex-col items-center font-thin justify-center">
            <button
              // onClick={handleSubmit}
              className="w-[166px] inline-flex items-center justify-center h-[56px] px-2 ml-4 text-[#BA1515] font-medium bg-[#FFE9E9] rounded"
            >
              <span>Filter account</span>
              <HiOutlineFilter className="ml-2" />
            </button>
          </div>

          <div className=" flex-col items-center font-thin justify-center">
            <button
              // onClick={handleSubmit}
              className="w-[176px] inline-flex items-center justify-center h-[56px] px-2 ml-4 text-white font-medium bg-[#ff1c1d] rounded"
            >
              <span>Download all</span>
              <FiDownload className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-around">
      <div className="text-[#FF1C1D]">{title}</div>
      <div>
        <form className="px-4">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search Clients"
              className="w-[545px] h-[56px] py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
            />
          </div>
        </form>
      </div>
      <div className=" flex-col items-center font-thin justify-center">
        <Link
          to="/clients/add-client"
          className="px-[20px] no-underline text-white"
        >
          {" "}
          <div className="w-[191px] h-[56px] inline-flex items-center px-6 text-white font-medium bg-[#FF1C1D] rounded-xl">
            Add new client
            <BiBookAdd className="ml-[10px]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav2;
