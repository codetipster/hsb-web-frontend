import React from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { BiBookAdd } from "react-icons/bi";
import AddAccountantModal from "./AddAccountantModal";
import { Link } from "react-router-dom";

const Nav3 = () => {
  const handleSubmit = () => {
    console.log("clicked");
  };
  return (
    <div className="flex items-center justify-around">
      <div className="text-[#FF1C1D]">Employee Requests</div>
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
              placeholder="Search requests"
              className="w-[545px] h-[56px] py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
            />
          </div>
        </form>
      </div>
      <div className="flex">
        <div className=" flex-col items-center font-thin justify-center">
          <button
            onClick={handleSubmit}
            className="w-[171px] inline-flex items-center justify-center h-[56px] px-2 text-[#FF1C1D] font-medium bg-[#FFE9E9] rounded active:bg-[#FF1C1D] hover:bg-[#FF1C1D] hover:text-white"
          >
            <span>Filter account</span>
            <HiOutlineFilter className="ml-[10px]" />
          </button>
        </div>

        <div className=" flex-col items-center font-thin justify-center">
        <Link
        //   to="/clients/add-client"
          className="px-[20px] no-underline text-white"
        >
          {" "}
          <div className="w-[150px] h-[56px] inline-flex items-center px-6 text-white font-medium bg-[#FF1C1D] rounded-xl">
            Accept all
            <BiBookAdd className="ml-[10px]" />
          </div>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Nav3;
