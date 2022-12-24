import React from 'react'
import Navbar from '../components/Navbar'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { AiFillWechat } from 'react-icons/ai'
import { MdOutlinePreview } from 'react-icons/md'
import {BiDownload} from 'react-icons/bi'
import {BiAddToQueue} from 'react-icons/bi'
import profileImage from '../assets/Frame.png'
import Card from '../components/Card'
const Clientprofile = () => {
    const handleChat = () => {
        console.log('chat')
    }

    const handleReview = () => {
        console.log('review')
    }
    
    const handleDownload = () => {
        console.log('download')
    }
  return (
    <div>
       <Navbar />
       <div className='bg-gray-100 w-full'>
           <div className='flex'>
             <a href='#' className='text-red-800 flex px-[180px] py-10'>
                <MdOutlineArrowBackIos className='mt-1'/>
                    <span>Client's profile</span>
                </a>
                <div className='flex mt-7 ml-[680px]'>
                    <button
                        onClick={handleChat}
                        className="w-[155px] inline-flex items-center h-[45px] px-2 ml-4 py-2 tracking-wide text-white text-l font-medium bg-[#FFE9E9] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                        relative"
                        >
                        <span className='px-[10px]'>Chat client</span>
                        <AiFillWechat className='mx-[2px]'/>
                    </button> 

                    <button
                        onClick={handleReview}
                        className="w-[160px] inline-flex items-center h-[45px] px-2 ml-4 py-2 tracking-wide text-white text-l font-medium bg-[#FF1C1D] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                        relative"
                        >
                        <span className='px-[4px]'>Review Invoice</span>
                        <MdOutlinePreview className='mx-[1px]'/>
                    </button>     
                 </div>
            </div>

            <div className='bg-white w-[420px] mt-4 mx-[590px] rounded-lg'>
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

            <div className='bg-white w-[420px] mt-4 mx-[590px] rounded-lg'>
                <p className='font-bold text-sm p-4'>Reports</p>
                <div className='flex-1 min-w-0 rounded w-[355px] ml-10'>
                    <div class="bg-gray-100 rounded p-1">
                            <p class="text-sm font-small text-gray-900 truncate dark:text-white">
                                This is good for business
                            </p>
                            <p class="text-sm text-gray-400 truncate dark:text-gray-400">
                                13 march, 12:30pm
                            </p>
                    </div>
                    <div className='relative'>
                        <BiDownload className='mx-[330px] absolute mt-[-30px]'/>
                    </div>    
                </div>
                <Card />
                <Card />
                <Card />
                <div className="mt-3 p-4 flex flex-col items-center font-thin justify-center">
                        <button
                        onClick={handleDownload}
                        className="w-[355px] inline-flex items-center h-[45px] px-2 ml-4 py-2 tracking-wide text-white text-l font-medium bg-[#FFB5B5] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                        relative"
                        >
                         <span className='px-[90px]'>Add new report</span>
                        <BiAddToQueue className='mx-[-60px]'/>
                        </button>      
                </div>    
            </div>

            <div className='bg-white w-[420px] mt-4 mx-[590px] rounded-lg'>
                <p className='font-bold text-sm p-4'>Employee request</p>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <div className="mt-3 p-4 flex flex-col items-center font-thin justify-center">
                        <button
                        onClick={handleDownload}
                        className="w-[355px] inline-flex items-center h-[45px] px-2 ml-4 py-2 tracking-wide text-white text-l font-medium bg-[#FFB5B5] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                        relative"
                        >
                         <span className='px-[90px]'>Review all</span>
                        <MdOutlinePreview className='mx-[-60px]'/>
                        </button>      
                </div>  
            </div>

            <div className='bg-white w-[420px] mt-4 mx-[590px] rounded-lg'>
                <p className='font-bold text-sm p-4'>Invoices</p>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <div className="mt-3 p-4 flex flex-col items-center font-thin justify-center">
                        <button
                        onClick={handleDownload}
                        className="w-[355px] inline-flex items-center h-[45px] px-2 ml-4 py-2 tracking-wide text-white text-l font-medium bg-[#FFB5B5] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                        relative"
                        >
                         <span className='px-[90px]'>Review all</span>
                        <MdOutlinePreview className='mx-[-60px]'/>
                        </button>      
                </div>  
            </div>
       </div>
    </div>
  )
}

export default Clientprofile