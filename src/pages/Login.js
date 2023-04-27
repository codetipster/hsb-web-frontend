import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { TbLogin } from "react-icons/tb";
import Sidelogo from "../assets/Landing_Page.svg";
import logo from "../assets/logo.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Importing DOMPurify for input sanitization
import DOMPurify from "dompurify";

const RATE_LIMIT_TIMEOUT = 10000; // Set rate limit to 5 seconds

const Login = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [seePassword, setSeePassword] = useState(false);
  const { handleSubmit } = useForm();
  const [isRateLimited, setIsRateLimited] = useState(false);
  
  // Removed initialValues and useState for loginDetails

  // Using useRef instead of useState for email and password
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleToggle = () => {
    setSeePassword(!seePassword);
  };

  const handleLoginValidation = async () => {
    try {
      // Sanitize email and password input
      const sanitizedEmail = DOMPurify.sanitize(emailRef.current.value);
      const sanitizedPassword = DOMPurify.sanitize(passwordRef.current.value);
      const loginSuccess =  false;
      const res = await axios.post(`${process.env.REACT_APP_API_URL_DEVELOPMENT}/api/user/login`, {
        email: sanitizedEmail,
        password: sanitizedPassword,
      });

      const user = res.data;

      let userToken = JSON.stringify(user.token);
      let Id = JSON.stringify(user.id);

      // Using HttpOnly cookies for storing Token and Id
      document.cookie = `Token=${userToken}; path=/; HttpOnly; Secure; SameSite=Strict`;
      document.cookie = `Id=${Id}; path=/; HttpOnly; Secure; SameSite=Strict`;

      MySwal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You are now logged in.',
        showConfirmButton: false,
        timer: 2000,
      });
      
      if (user.user === "admin") {
        return navigate("/home");
      }
      if (user.user === "accountant") {
        return navigate("/accountantHomePage");
      }
      //simulate failed login attempt
      if (!loginSuccess) {
        setIsRateLimited(true);
        setTimeout(()  =>  {
          setIsRateLimited(false);
        }, RATE_LIMIT_TIMEOUT);
        return;
      }


    } catch (err) {
      console.log(err.message);
      MySwal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid email or password.',
        timer: 1500
      });
      setIsRateLimited(true);
      setTimeout(() => {
        setIsRateLimited(false);
      }, RATE_LIMIT_TIMEOUT);
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
                    {/* Using ref instead of value and onChange */}
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-[441px] h-[55px] border border-[#2b9558] text-gray-700 p-3 focus:ring-1 focus:ring-inset focus:ring-[#2b9558] rounded-lg"
                      ref={emailRef}
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="my-4">
                      {/* Using ref instead of value and onChange */}
                      <input
                        type={seePassword === false ? "password" : "text"}
                        name="password"
                        placeholder="Password"
                        className="w-[441px] h-[55px] border border-[#2b9558] text-gray-700 p-3 focus:ring-1 focus:ring-inset focus:ring-[#2b9558] rounded-lg"
                        ref={passwordRef}
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
                      disabled={isRateLimited}
                      className="mt-10 mb-4 flex items-center justify-center w-[441px] h-[56px] px-2 py-2 tracking-wide text-white text-l font-medium rounded bg-[#FF1C1D] disabled:bg-[#7c7575] disabled:cursor-not-allowed"
                    // Removed the disabled={!password} as password is now managed using useRef
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
