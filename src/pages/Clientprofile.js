import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Modal from 'react-bootstrap/Modal';
import { useDropzone } from 'react-dropzone';
import AddReport from '../components/AddReport'
import {Link} from 'react-router-dom'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { AiFillWechat } from 'react-icons/ai'
import { MdOutlinePreview } from 'react-icons/md'
import {BiDownload} from 'react-icons/bi'
import {BiAddToQueue} from 'react-icons/bi'
import {useParams} from 'react-router-dom'
import profileImage from '../assets/Frame.png'
import axios from 'react'
import Card from '../components/Card'


const Clientprofile = () => {
 

 const [show, setShow] = useState(false)
 const handleShow = () => {
      setShow(true)
  }
 const handleClose = () => setShow(false);

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
       <div className='bg-gray-100 w-full'>
           <div className='flex'>
             <Link to='/clients' className='text-red-800 flex px-[180px] py-10'>
                <MdOutlineArrowBackIos className='mt-1'/>
                    <span>Client's profile</span>
                </Link>
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
                        <p className='text-sm ml-6 mt-2'>fullName</p>
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
                <Card/>
                <div className="mt-3 p-4 flex flex-col items-center font-thin justify-center">
                        <button
                        onClick={handleShow}
                        className="w-[355px] inline-flex items-center h-[45px] px-2 ml-4 py-2 tracking-wide text-white text-l font-medium bg-[#FFB5B5] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                        relative"
                        >
                         <span className='px-[90px]'>Add new report</span>
                        <BiAddToQueue className='mx-[-60px]'/>
                        </button>      
                </div> 

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        className='mt-32'
                    >
                        <Modal.Header closeButton className='bg-[#EBF5F0]'>
                            <div className='p-1 bg-[#EBF5F0] w-full'>
                            <Modal.Title className='text-sm font-bold bg-red-'>Add new Report</Modal.Title>
                            </div>
                        </Modal.Header>
                        <AddReport />
                    </Modal>   
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