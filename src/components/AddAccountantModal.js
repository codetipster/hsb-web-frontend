import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BiBookAdd} from 'react-icons/bi'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const AddAccountantModal = () => {
  const [show, setShow] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

    const handleToggle = () => {
        setSeePassword(!seePassword);
    };

    const handleSubmit = () => {
        console.log('confirm');
    };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
            onClick={handleShow}
            className="w-[260px] inline-flex items-center h-[45px] px-2 ml-4 tracking-wide text-white text-l font-medium bg-[#FF1C1D] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
            relative"
            >

            <span className='px-[20px]'>Add new accountant</span>
            <BiBookAdd className='mx-[-10px]'/>
     </button>     

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='mt-32'
      >
        <Modal.Header closeButton className='bg-[#EBF5F0]'>
        <div className='p-1 bg-[#EBF5F0] w-full'>
          <Modal.Title className='text-sm font-bold bg-red-'>Add new accountant</Modal.Title>
        </div>
        </Modal.Header>
        <Modal.Body>
        <form className='w-[400px] bg-white items-center justify-center p-2'>
                    <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">First name</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|Snow" id="forms-labelOverInputCode"/>
                    </div>

                     <div className='mt-2'>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Family name</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|John" id="forms-labelOverInputCode"/>
                    </div>

                    <div className='mt-2'>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Email</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="john@gmail.com" id="forms-labelOverInputCode"/>
                    </div>

                    <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Phone number</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|+449123456789" id="forms-labelOverInputCode"/>
                    </div>

                    <div className='mt-2 '>
                      <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Home address</label>
                      <input className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" type="text" placeholder="|Oranienburg, Munich" id="forms-labelOverInputCode"/>
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
                            
                    </div>

        </form>
        </Modal.Body>
        <Modal.Footer>
        <div className='flex w-[570px]'>
        <button
                onClick={handleSubmit}
                className="w-[200px] inline-flex items-center h-[45px] px-2 ml-4 tracking-wide text-white text-l font-medium bg-[#FFB5B5] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                relative"
                >
  
                <span className='px-[20px]'>Cancel</span>
                <BiBookAdd className='mx-[-10px]'/>
          </button>

          <button
                onClick={handleSubmit}
                className="w-[200px] inline-flex items-center h-[45px] px-2 ml-4 tracking-wide text-white text-l font-medium bg-[#FF1C1D] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                relative"
                >
  
                <span className='px-[20px]'>Confirm</span>
                <BiBookAdd className='mx-[-10px]'/>
          </button> 
          </div> 
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddAccountantModal