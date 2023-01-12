import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaCaretDown } from 'react-icons/fa';
import {BiBookAdd} from 'react-icons/bi'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { stripBasename } from '@remix-run/router';

const AddAccountantModal = () => {
  const [show, setShow] = useState(false);
  const [seePassword, setSeePassword] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [familyName, setFamilyName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedOption, setSelectedOption] = useState('');
  const [accountants, setAccountant] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/accountants').then(response => {
          setAccountant(response.data)
        })
    }, [])


//handle modal close
  const handleClose = () => setShow(false);
//handle modal show  
  const handleShow = () => setShow(true);

const handleFirstName = (e) => {  
  setFirstName(e.target.value)
}
const handleFamilyName = (e) => {  
  setFamilyName(e.target.value)
}
const handlePhone = (e) => {  
  setPhone(e.target.value)
}
const handleEmail = (e) => { 
  setEmail(e.target.value)
}
const handlePassword = (e) => {
  setPassword(e.target.value)
}
const handleChange = (event) => {
  setSelectedOption(event.target.value);
};


//handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(e)
    const newData = {
      firstName: firstName,
      familyName: familyName,
      phone: phone,
      email: email,
      status: selectedOption,
      date: new Date().toISOString(),
      id: accountants.length + 1,
      password: password
    }
    
    axios
        .post('http://localhost:3001/accountants', newData)
        .then(response => {
          setAccountant(accountants.concat(response.data))
        
        setShow(!show)
        })   
    
    
  };

  const handleCancel = (e) => {
    e.preventDefault(e)
    setShow(false)
  }


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
        <form onSubmit={handleSubmit} className='w-[470px] bg-white items-center justify-center items-center p-4 px-2'>
        <div className='mt-1 '>
          <input
            type="text"
            name="firstName"
            value={firstName}
            className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
            placeholder="First Name"
            onChange={handleFirstName}
          />
        </div>
        <div className='mt-1'>
        <input
            type="text"
            name="familyName"
            value={familyName}
            className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
            placeholder="Family Name"
            onChange={handleFamilyName}
          />
        </div>
        <div className='mt-1'>
        <input
            type="text"
            name="phone"
            value={phone}
            className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
            placeholder="Phone number"
            onChange={handlePhone}
          />
         </div>
         <div className='mt-1'>
          <input
            type="email"
            name="email"
            value={email}
            className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
            placeholder="Email"
            onChange={handleEmail}
          />
         </div>
         <label htmlFor="dropdown">
           Status:
         </label>
         <select name="dropdown" id="dropdown" value={selectedOption} onChange={handleChange}>
          <option value='active'>Active</option>
          <option value='not-active'>Not Active</option>
        </select>
         <div className='mt-1'>
          <input
            type="password"
            value={password}
            className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
            name="password"
            placeholder="Password"
            onChange={handlePassword}
          />
          </div>
          <div className='flex w-[570px] mt-4 px-2'>
              <button
                      onClick={handleCancel}
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
        </form>
      </Modal>
    </>
  )
}

export default AddAccountantModal