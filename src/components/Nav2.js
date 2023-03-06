import React from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { BiBookAdd } from "react-icons/bi";
import AddAccountantModal from "./AddAccountantModal";
import { Link } from "react-router-dom";

const Nav2 = ({ title }) => {
  const handleSubmit = () => {
    console.log("clicked");
  };
  if (title === "Invoices") {
    return (
      <div className="w-full flex items-center justify-center bg-black">
        <p className=" text-[#FF1C1D] mt-4">{title}</p>
        <div className=" items-center justify-center">
          <input
            type="text"
            className=" mt-1 absolute p-2 pl-10 mx-[200px] mt-[-40px]  w-80 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search accountants"
          />

          <div className="flex ml-[800px] py-[-20px]">
            <div className=" flex-col items-center font-thin justify-center">
              <button
                onClick={handleSubmit}
                className="w-[260px] inline-flex items-center h-[45px] px-2 ml-4 tracking-wide text-[#FF1C1D] text-l font-medium bg-[#FFE9E9] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] hover:text-white 
                                relative"
              >
                <span className="px-[20px]">Filter clients</span>
                <HiOutlineFilter className="mx-[-10px]" />
              </button>
            </div>

            <div className=" flex-col items-center font-thin justify-center">
              <button
                onClick={handleSubmit}
                className="w-[260px] inline-flex items-center h-[45px] px-2 ml-4 tracking-wide text-white text-l font-medium bg-[#FF1C1D] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                                relative"
              >
                <Link
                  to="/clients/add-client"
                  className="px-[20px] no-underline text-white"
                >
                  Add new client
                </Link>

                <BiBookAdd className="mx-[-10px]" />
              </button>
            </div>
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
              placeholder="Search Accountants"
              className="w-[545px] h-[56px] py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
            />
          </div>
        </form>
      </div>
      <div className="flex items-center">
        <div className=" flex-col items-center font-thin justify-center">
          <button
            onClick={handleSubmit}
            className="w-[194px] h-[56px] inline-flex items-center justify-center text-[#BA1515] font-medium bg-[#FFE9E9] rounded-xl"
          >
            Filter clients
            <HiOutlineFilter className="ml-2" />
          </button>
        </div>

        <div className=" flex-col items-center font-thin justify-center">
          <AddAccountantModal />
        </div>
      </div>
    </div>
  );
};

export default Nav2;
