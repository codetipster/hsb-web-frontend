import React from "react";
import AccountantNavbar from "../../components/AccountantNavbar";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const ChatText = () => {
  return (
    <>
      <AccountantNavbar />
      <Link to="/chats" className="no-underline">
        <div className="flex items-center text-[#BA1515] my-20 mx-10">
          <IoIosArrowBack size={20} className="mr-2" />
          Go Back
        </div>
      </Link>
      <div className="flex items-center justify-center">ChatText</div>
    </>
  );
};

export default ChatText;
