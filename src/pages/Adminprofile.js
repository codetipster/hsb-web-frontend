import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { AiFillWechat } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import {BiDownload} from 'react-icons/bi'
import profileImage from '../assets/Frame.png'

const Adminprofile = () => {
    const [seePassword, setSeePassword] = useState(false);

    const handleToggle = () => {
        setSeePassword(!seePassword);
    };

    const handleDownload = ()=>{
        console.log('downloadfrom admin profile')
    }
  return (
    <div>
       <div className='bg-gray-100 w-full p-[80px]'>
            <div className='bg-white w-[420px] mx-[590px] rounded-lg'>
                <p className='font-bold text-sm p-4'>Profile picture</p>
                    <div className='ml-[129px] p-2'>
                        <img src={profileImage}/>
                        <p className='text-sm ml-6 mt-2'>Ibrahim Solace</p>
                        <p className='text-sm ml-[-6px]'>Scaling Ventures Consult</p>
                    </div>
                    <div className="mt-3 p-4 flex flex-col items-center font-thin justify-center">
                        <button
                        onClick={handleDownload}
                        className="w-[355px] inline-flex items-center h-[45px] px-2 ml-4 py-2 tracking-wide text-white text-l font-medium bg-[#FFB5B5] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                        relative"
                        >
                         <span className='px-[90px]'>Download Image</span>
                        <BiDownload className='mx-[-60px]'/>
                        </button>      
                    </div>    
            </div>
           
            <div className='bg-white w-[420px] mt-8 mx-[590px] rounded-lg'>
                <p className='font-bold text-sm p-4'>Login details</p>
                  <div className='mt-2 mx-6'>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Email address</label>
                      <input className="w-[350px] mx-4 mt-3 h-10 px-3 shadow-lg text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="email" placeholder="|johndoe@gmail.com" id="forms-labelOverInputCode"/>
                  </div>

                  <div className='relative'>
                        <div  className="my-4 mx-6">
                            <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Password</label>
                            <input 
                                type={seePassword === false ? 'password' : 'text'}
                                name="password" 
                                placeholder="| ******" 
                                className='w-[350px] h-10 mx-4 border-b text-gray-700 px-4 py-2 mt-2 border focus:ring-1 focus:ring-inset focus:ring-black rounded shadow-lg'
                            />
                        </div>

                        <div className="text-2xl text-gray-400 absolute top-[15px] right-10">
                            {seePassword === false ? (
                            <AiFillEye onClick={handleToggle} />
                            ) : (
                            <AiFillEyeInvisible onClick={handleToggle} />
                            )}
                        </div>
                    </div>

                    <div className="mt-3 p-4 flex flex-col items-center font-thin justify-center">
                        <button
                        onClick={handleDownload}
                        className="w-[355px] inline-flex items-center h-[45px] px-2 ml-4 py-2 tracking-wide text-white text-l font-medium bg-[#FFB5B5] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                        relative"
                        >
                         <span className='px-[90px]'>Edit details</span>
                        <AiFillEdit className='mx-[-60px]'/>
                        </button>      
                    </div>    
            </div>
        </div>    
    </div>
  )
}

export default Adminprofile