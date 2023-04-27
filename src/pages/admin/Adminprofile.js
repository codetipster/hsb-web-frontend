import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillEyeInvisible, AiFillEye, AiFillEdit } from "react-icons/ai";
import { TbCameraPlus } from "react-icons/tb";
import profileImage from "../../assets/Frame.png";

const Adminprofile = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleToggle = () => {
    setSeePassword(!seePassword);
  };

  const handleDownload = () => {
    console.log("downloadfrom admin profile");
  };

  useEffect(() => {
    let details;
    const getToken = () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      if (token !== null || token !== undefined) {
        setToken(token);
      }
      axios
        .get(`${process.env.REACT_APP_API_URL_DEVELOPMENT}/api/admin/profile`, {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data, "admin profile");
          details = response.data;
          setName(details.firstName);
          setEmail(details.email);
        });
    };
    getToken();
  }, []);
  return (
    <div className="bg-gray-100 w-full h-full">
      <div className="flex flex-col items-center justify-center py-10">
        <div className="bg-white w-[489px] h-[372px] rounded-lg">
          <p className="font-bold text-sm p-4">Profile picture</p>
          <div className="flex flex-col items-center justify-center">
            <img src={profileImage} />
            <div className="text-sm font-medium text-center">
              <p>{name}</p>
              <p>Scaling Ventures Consult</p>
            </div>
            <button
              onClick={handleDownload}
              className="w-[441px] h-[56px] inline-flex items-center justify-center p-2 text-white font-medium bg-[#FFB5B5] rounded active:bg-[#FF1C1D] hover:bg-[#FF1C1D]"
            >
              Change Image
              <TbCameraPlus className="ml-4" />
            </button>
          </div>
          {/* login info */}
        </div>
        <div className="bg-white w-[489px] h-[350px] mt-8 rounded-lg">
          <p className="font-bold text-sm m-4">Login details</p>
          <div className="flex flex-col items-center mx-6 mt-2">
            <form>
              <div>
                <label className="block mb-2 text-[12px]">Email address</label>
                <input
                  className="w-[441px] h-[55px] px-3 text-base placeholder-gray-350 border rounded-lg"
                  type="email"
                  placeholder="|johndoe@gmail.com"
                  value={email}
                />
              </div>
              <div className="relative">
                <div className="my-2">
                  <label className="block mb-2 text-[12px]">Password</label>
                  <input
                    type={seePassword === false ? "password" : "text"}
                    name="password"
                    placeholder="|******"
                    className="w-[441px] h-[55px] px-3 text-base placeholder-gray-350 border rounded-lg"
                    value={password}
                  />
                </div>
                <div className="text-2xl text-gray-400 absolute top-10 right-4">
                  {seePassword === false ? (
                    <AiFillEye onClick={handleToggle} />
                  ) : (
                    <AiFillEyeInvisible onClick={handleToggle} />
                  )}
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={handleDownload}
                  className="w-[441px] h-[55px] inline-flex items-center justify-center p-2 text-white font-medium bg-[#FFB5B5] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D]"
                >
                  Edit details
                  <AiFillEdit className="ml-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminprofile;
