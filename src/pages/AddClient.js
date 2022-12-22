import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { MdOutlineArrowBackIos } from 'react-icons/md'
import {MdNotificationsActive} from 'react-icons/md'
import {BiSave} from 'react-icons/bi'

const AddClient = () => {
    const [seePassword, setSeePassword] = useState(false);

    const handleToggle = () => {
        setSeePassword(!seePassword);
    };

    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleSubmit2 = () => {
        console.log('submitted2')
    }

  return (
    <div>
        <Navbar />
        <div className='bg-gray-100 w-full'>
            <a href='#' className='text-red-800 flex px-[120px] py-10'>
               <MdOutlineArrowBackIos className='mt-1'/>
                <span>Add new client</span>
            </a>

            <div className='bg-white w-[420px] mt-4 mx-[500px] rounded-lg'>
                <form className='w-[400px] bg-white items-center justify-center p-4'>
                    <p className='font-bold text-sm'>Login data</p>
                    <div className='mt-8 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Legal number</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|123456789" id="forms-labelOverInputCode"/>
                    </div>
                    
                    <div className='relative'>
                        <div className='mt-2 '>
                            <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Password</label>
                            <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type={seePassword === false ? 'password' : 'text'} placeholder="|*******" id="forms-labelOverInputCode"/>
                        </div>
                        <div className="text-2xl text-gray-400 absolute top-[22px] right-5">
                            {seePassword === false ? (
                            <AiFillEye onClick={handleToggle} />
                            ) : (
                            <AiFillEyeInvisible onClick={handleToggle} />
                            )}
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col items-center font-thin justify-center">
                        <button
                        onClick={handleSubmit}
                        className="w-[355px] inline-flex items-center h-[45px] px-2 ml-4 py-2 tracking-wide text-white text-l font-medium bg-[#FFB5B5] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                        relative"
                        >
                         <span className='px-[90px]'>Notify Client</span>
                        <MdNotificationsActive className='mx-[-60px]'/>
                        </button>      
                    </div>

                </form>
            </div>

            <div className='bg-white w-[420px] mt-4 mx-[500px] rounded-lg'>
               <form className='w-[400px] bg-white items-center justify-center p-4'>
                  <p className='font-bold text-sm'>General information</p>
                  <div className='mt-8 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">first name</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|John" id="forms-labelOverInputCode"/>
                  </div>

                  <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">family name</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|Doe" id="forms-labelOverInputCode"/>
                  </div>

                  <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Street/House number</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|8" id="forms-labelOverInputCode"/>
                  </div>

                  <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">City</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|Berlin" id="forms-labelOverInputCode"/>
                  </div>

                  <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Zip code</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|10997" id="forms-labelOverInputCode"/>
                  </div>

                  <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Start date</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|10-12-2021" id="forms-labelOverInputCode"/>
                  </div>

                  <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Type of job</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|Pizza seller" id="forms-labelOverInputCode"/>
                  </div>

                  <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Type of company</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|GmbH" id="forms-labelOverInputCode"/>
                  </div>

                  <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Bank name</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|Targobank" id="forms-labelOverInputCode"/>
                  </div>

                  <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">IBAN</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|*************" id="forms-labelOverInputCode"/>
                  </div>

                  <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Legal number</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|**********" id="forms-labelOverInputCode"/>
                  </div>

                  <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Email address</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="email" placeholder="|johndoe@gmail.com" id="forms-labelOverInputCode"/>
                  </div>

                  <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Mobile number</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|+447 123 456 89" id="forms-labelOverInputCode"/>
                  </div>

                  <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Tax ID(optional)</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|*******" id="forms-labelOverInputCode"/>
                  </div>

                  <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Accountant</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|************" id="forms-labelOverInputCode"/>
                  </div>

                  <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Notes</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|Let me know how this goes for you" id="forms-labelOverInputCode"/>
                  </div>
                  <hr className='mt-4 bg-gray-900 border'/>
                    <div className='bg-white'>
                        <p className='font-bold text-sm mt-4'>Allocate accountant</p>
                        <div className='mt-4'>
                            <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Accountant name</label>
                            <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|'Ibrahim Alkais" id="forms-labelOverInputCode"/>
                        </div>  
                    </div>
                    <div className="mt-6 flex flex-col items-center font-thin justify-center">
                        <button
                        onClick={handleSubmit2}
                        className="w-[355px] inline-flex items-center h-[45px] px-2 ml-4 py-2 tracking-wide text-white text-l font-medium bg-[#FFB5B5] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                        relative"
                        >
                         <span className='px-[110px]'>Save</span>
                        <BiSave className='mx-[-60px]'/>
                        </button>      
                    </div>
               </form>
            </div>
        </div>
    </div>
  )
}

export default AddClient