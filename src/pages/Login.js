import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import Sidelogo from '../assets/Landing_Page.svg'
import logo from '../assets/logo.png'


const Login = () => {
    const [seePassword, setSeePassword] = useState(false);

    const handleToggle = () => {
        setSeePassword(!seePassword);
    };

    const handleSubmit = (e) => {
        console.log(e);
    };

  return (
    <div className='bg-white flex'>
        <div className='sm:w-1/2 items-center'>
            <img src={logo} className='px-4 py-6'/>
            <div className='text-center py-2 my-10 pt-10'>
                <h5 className='font-bold text-xl'>Sign into your account</h5>
                <p className='text-sm'>Enter your  details to access your account</p>
            </div>
            <div className='mx-10'>
                <form className="flex flex-col items-center justify-center">
                   <div>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        className='w-[350px] h-10 border-b border-[#ffffff] text-gray-700 px-4 py-2 mt-2 focus:ring-1 focus:ring-inset focus:ring-black rounded shadow-lg'
                    />
                   </div>
                    <div className='relative'>
                    <div  className="my-4">
                        <input 
                            type={seePassword === false ? 'password' : 'text'}
                            name="password" 
                            placeholder="Password" 
                            className='w-[350px] h-10 border-b border-[#fffff] text-gray-700 px-4 py-2 mt-2 focus:ring-1 focus:ring-inset focus:ring-black rounded shadow-lg'
                        />
                    </div>

                    <div className="text-2xl text-gray-500 absolute top-[34px] right-5">
                      {seePassword === false ? (
                      <AiFillEye onClick={handleToggle} />
                       ) : (
                       <AiFillEyeInvisible onClick={handleToggle} />
                      )}
                    </div>
                    </div>
                    <div className="w-[240px] text-sm h-[20px] text-gray-400 relative left-[100px]">
                      <a href="/" className='w-full font-thin font-normal'>Forgot Password? Reset here</a>
                    </div>

                    <div className="mt-6 flex flex-col items-center font-thin justify-center">
                        <button
                        onClick={handleSubmit}
                        className="w-[350px] h-[50px] px-2 py-2 tracking-wide text-white text-l font-medium bg-[#FFB5B5] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                        relative"
                        >
                        Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div className='w-1/2'>
            <img src={Sidelogo} alt='side-image' className='w-full sm:block hidden'/>
        </div>
    </div>
  )
}

export default Login