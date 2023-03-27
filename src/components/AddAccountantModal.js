import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { BiBookAdd } from "react-icons/bi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const AddAccountantModal = () => {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const handleToggle = () => {
    setSeePassword(!seePassword);
  };
  //handle modal close
  const handleClose = () => setShow(false);
  //handle modal show
  const handleShow = () => setShow(true);

  const handleCancel = (e) => {
    e.preventDefault(e);
    setShow(false);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    homeAddress: "",
    mobileNumber: "",
  };
  const [details, setDetails] = useState(initialValues);
  const { firstName, lastName, email, password, homeAddress, mobileNumber } =
    details;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      if (token !== null || token !== undefined) {
        setToken(token);
      }
    };
    getToken();
  }, []);

  const createAccountantData = () => {
    const url =
      "https://hsb-backend-app-rpnm.onrender.com/api/admin/create-accountant";
    try {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          Authorization: token,
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response, "response from creating accountant");
          window.alert(response.message);
          navigate("/accountants");
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <button
        onClick={handleShow}
        className="w-[237px] inline-flex items-center h-[56px] px-2 ml-4 tracking-wide text-white text-l font-medium bg-[#FF1C1D] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
            relative"
      >
        <span className="px-[20px]">Add new accountant</span>
        <BiBookAdd className="mx-[-10px]" />
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="mt-32"
      >
        <Modal.Header closeButton className="bg-[#EBF5F0]">
          <div className="p-1 bg-[#EBF5F0] w-full">
            <Modal.Title className="text-sm font-bold bg-red-">
              Add new accountant
            </Modal.Title>
          </div>
        </Modal.Header>
        <form
          onSubmit={handleSubmit(createAccountantData)}
          className="w-[470px] bg-white justify-center items-center p-4 px-2"
        >
          <div className="mt-1 ">
            <input
              type="text"
              name="firstName"
              value={firstName}
              className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              placeholder="First Name"
              onChange={handleChange}
            />
          </div>
          <div className="mt-1">
            <input
              type="text"
              name="lastName"
              value={lastName}
              className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              value={email}
              className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          {/* <div className="mt-1">
            <input
              type="email"
              name="email"
              value={email}
              className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              placeholder="Email"
              onChange={handleEmail}
            />
          </div> */}
          {/* <label htmlFor="dropdown">Status:</label>
          <select
            name="dropdown"
            id="dropdown"
            value={selectedOption}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="not-active">Not Active</option>
          </select> */}
          <div className="relative">
            <div className="mt-1">
              <input
                type={seePassword === false ? "password" : "text"}
                value={password}
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="text-2xl text-gray-400 absolute top-[24px] right-2">
              {seePassword === false ? (
                <AiFillEye onClick={handleToggle} />
              ) : (
                <AiFillEyeInvisible onClick={handleToggle} />
              )}
            </div>
          </div>
          <div className="mt-1">
            <input
              type="text"
              name="homeAddress"
              value={homeAddress}
              className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              placeholder="Home Address"
              onChange={handleChange}
            />
          </div>
          <div className="mt-1">
            <input
              type="text"
              name="mobileNumber"
              value={mobileNumber}
              className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              placeholder="Mobile Number"
              onChange={handleChange}
            />
          </div>
          <div className="flex w-[570px] mt-4 px-2">
            <button
              onClick={handleCancel}
              className="w-[200px] inline-flex items-center h-[45px] px-2 ml-4 tracking-wide text-white text-l font-medium bg-[#FFB5B5] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                      relative"
            >
              <span className="px-[20px]">Cancel</span>
              <BiBookAdd className="mx-[-10px]" />
            </button>
            <button
              type="submit"
              className="w-[200px] inline-flex items-center h-[45px] px-2 ml-4 tracking-wide text-white text-l font-medium bg-[#FF1C1D] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                      relative"
            >
              <span className="px-[20px]">Confirm</span>
              <BiBookAdd className="mx-[-10px]" />
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddAccountantModal;
