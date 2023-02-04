import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { TbLogin } from "react-icons/tb";
import Sidelogo from "../assets/Landing_Page.svg";
import logo from "../assets/logo.png";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [seePassword, setSeePassword] = useState(false);
  const { handleSubmit } = useForm();
  const initialValues = {
    email: "",
    password: "",
  };
  const [loginDetails, setLoginDetails] = useState(initialValues);
  const { email, password } = loginDetails;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  const handleToggle = () => {
    setSeePassword(!seePassword);
  };

  const handleLoginValidation = () => {
    try {
      fetch("https://hsb-backend.onrender.com/api/user/login", {
        method: "POST",
        body: JSON.stringify({
          email: loginDetails.email,
          password: loginDetails.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((user) => {
          console.log(user, "checking user");
          let userToken = JSON.stringify(user.token);
          localStorage.setItem("Token", userToken);
          // window.alert(user.message)
          navigate("/home");
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="flex items-center justify-center">
          <div className="w-1/2 h-screen">
            <img src={logo} className="px-4 py-6" />
            <div className="flex flex-col items-center justify-center my-36">
              <div className="text-center">
                <h5 className="font-medium text-xl text-black">
                  Sign into your account
                </h5>
                <p className="text-sm text-[#858481]">
                  Enter your details to access your account
                </p>
              </div>
              <div className="mx-10">
                <form
                  className="flex flex-col items-center justify-center"
                  onSubmit={handleSubmit(handleLoginValidation)}
                >
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Email"
                      className="w-[441px] h-[55px] border border-[#2b9558] text-gray-700 p-3 focus:ring-1 focus:ring-inset focus:ring-[#2b9558] rounded-lg"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="my-4">
                      <input
                        type={seePassword === false ? "password" : "text"}
                        name="password"
                        value={password}
                        placeholder="Password"
                        className="w-[441px] h-[55px] border border-[#2b9558] text-gray-700 p-3 focus:ring-1 focus:ring-inset focus:ring-[#2b9558] rounded-lg"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="text-2xl text-gray-500 absolute top-10 right-5">
                      {seePassword === false ? (
                        <AiFillEye onClick={handleToggle} />
                      ) : (
                        <AiFillEyeInvisible onClick={handleToggle} />
                      )}
                    </div>
                  </div>

                  <div className="w-[168px] text-xs h-[18px] text-gray-400 font-normal relative left-[145px]">
                    Forgot Password? Reset here
                  </div>

                  <button
                    type="submit"
                    className="mt-10 mb-4 flex items-center justify-center w-[441px] h-[56px] px-2 py-2 tracking-wide text-white text-l font-medium rounded bg-[#FF1C1D] disabled:bg-[#FFB5B5]"
                    disabled={!password}
                  >
                    Sign In <TbLogin className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img src={Sidelogo} alt="side-image" className="w-full h-screen" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
