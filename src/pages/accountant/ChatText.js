import React from "react";
import AccountantNavbar from "../../components/AccountantNavbar";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Profile from "../../assets/profile.png";

const ChatText = () => {
  return (
    <>
      <AccountantNavbar />
      <Link to="/chats" className="no-underline">
        <div className="flex items-center text-[#BA1515] mt-20 mb-6 mx-10">
          <IoIosArrowBack size={20} className="mr-2" />
          Go Back
        </div>
      </Link>
      <div className="flex items-center justify-center">
        <div className="w-[980px] h-[92px] bg-[#ffffff] border rounded-lg shadow-md flex items-center justify-between px-6">
          <div className="flex items-center">
            <img src={Profile} className="w-[60px] h-[60px]" />
            <div className="flex flex-col ml-4 text-black text-sm">
              <div className="font-semibold">Godwin Issachar</div>
              <div className="font-semibold">
                Scaling Ventures International
              </div>
            </div>
          </div>
          <div className="text-[#008751] text-sm font-normal">Online</div>
        </div>
        <div className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
          <div className="w-[980px] h-[100px] bg-[#ffffff] border rounded-lg shadow-md flex items-center justify-center backdrop-blur-2xl mx-auto px-5">
            <form>
              <div className="w-[932px] h-[60px] bg-[#f3f3f3] py-3 px-4">
                <input
                  className=" w-[800px] h-full p-3  focus:ring-blue-500"
                  placeholder="Type here..."
                />
                <button className="absolute font-semibold text-[#008751] p-2 text-sm">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatText;
