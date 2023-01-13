import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { BiSave } from "react-icons/bi";

const AddClient = ({ clients }) => {
  const [seePassword, setSeePassword] = useState(false);
  const [pass, setPass] = useState("");
  const [legal, setLegal] = useState("");
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZipcode] = useState("");
  const [start, setStart] = useState("");
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [bank, setBank] = useState("");
  const [iban, setIBAN] = useState("");
  const [phone, setPhone] = useState("");
  const [emaill, setEmaill] = useState("");
  const [tax, setTaxID] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("");
  const [accountant, setAccountant] = useState("");
  const [notice, setNotice] = useState([]);
  const [clientsA, setClientsA] = useState(clients);
  useEffect(() => {
    axios.get("http://localhost:3001/client-login").then((response) => {
      setNotice(response.data);
    });
  }, []);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleFamilyName = (e) => {
    setFamilyName(e.target.value);
  };
  const handleStreet = (e) => {
    setStreet(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleZip = (e) => {
    setZipcode(e.target.value);
  };
  const handleStart = (event) => {
    setStart(event.target.value);
  };
  const handleJob = (event) => {
    setJob(event.target.value);
  };
  const handleCompany = (event) => {
    setCompany(event.target.value);
  };
  const handleBank = (event) => {
    setBank(event.target.value);
  };
  const handleIBAN = (event) => {
    setIBAN(event.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmaill = (e) => {
    setEmaill(e.target.value);
  };
  const handleTax = (e) => {
    setTaxID(e.target.value);
  };
  const handleNotes = (e) => {
    setNotes(e.target.value);
  };
  const handleAccountant = (e) => {
    setAccountant(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleToggle = () => {
    setSeePassword(!seePassword);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handleLegal = (e) => {
    setLegal(e.target.value);
  };

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    const newNotice = {
      legalNo: legal,
      password: pass,
      id: notice.length + 1,
    };
    axios
      .post("http://localhost:3001/client-login", newNotice)
      .then((response) => {
        setNotice(notice.concat(response.data));
        setPass("");
        setLegal("");
      });
  };

  const handleSubmitSave = (e) => {
    e.preventDefault();
    const newClient = {
      firstName: firstName,
      familyName: familyName,
      address: street,
      city: city,
      zip: zip,
      "s-date": start,
      job: job,
      company: company,
      bank: bank,
      IBAN: iban,
      legalNumber: legal,
      email: emaill,
      mobile: phone,
      "tax-id": tax,
      accountant: accountant,
      note: notes,
      id: clientsA.length + 1,
      status: status,
      invoice: [
        {
          id: 1,
          title: "Cleaner and better customer experience..",
          createdON: "2023-01-06T11:41:57.678Z",
          status: "Not Active",
        },
        {
          id: 2,
          title: "Cleaner and better customer experience..",
          createdON: "2023-01-06T11:41:57.678Z",
          status: "Not Active",
        },
      ],
    };
    axios.post("http://localhost:3001/clients", newClient).then((response) => {
      setClientsA(clientsA.concat(response.data));
    });
  };

  return (
    <div>
      <div className="bg-gray-100 w-full">
        <a href="#" className="text-red-800 flex px-[170px] py-10 no-underline">
          <MdOutlineArrowBackIos className="mt-1" />
          <Link to="/clients" className="no-underline text-red-800">
            Add Clients
          </Link>
        </a>

        <div className="bg-white w-[420px] mt-4 mx-[600px] rounded-lg">
          <form className="w-[400px] bg-white items-center justify-center p-4">
            <p className="font-bold text-sm">Login data</p>
            <div className="mt-8 ">
              <label
                className="block mb-1 text-[12px] px-6 absolute mt-1px"
                for="forms-labelOverInputCode"
              >
                Legal number
              </label>
              <input
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="|123456789"
                id="forms-labelOverInputCode"
                value={legal}
                onChange={handleLegal}
              />
            </div>

            <div className="relative">
              <div className="mt-2 ">
                <label
                  className="block mb-1 text-[12px] px-6 absolute mt-1px"
                  for="forms-labelOverInputCode"
                >
                  Password
                </label>
                <input
                  className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                  type={seePassword === false ? "password" : "text"}
                  placeholder="|*******"
                  id="forms-labelOverInputCode"
                  value={pass}
                  onChange={handlePass}
                />
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
                onClick={handleNotifySubmit}
                className="w-[355px] inline-flex items-center h-[45px] px-2 ml-4 py-2 tracking-wide text-white text-l font-medium bg-[#FFB5B5] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                        relative"
              >
                <span className="px-[90px]">Notify Client</span>
                <MdNotificationsActive className="mx-[-60px]" />
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white w-[420px] mt-4 mx-[600px] rounded-lg">
          <form className="w-[400px] bg-white items-center justify-center p-4">
            <p className="font-bold text-sm">General information</p>
            <div className="mt-8 ">
              <label
                className="block mb-1 text-[12px] px-6 absolute mt-1px"
                for="forms-labelOverInputCode"
              >
                first name
              </label>
              <input
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="|John"
                id="forms-labelOverInputCode"
                onChange={handleFirstName}
                value={firstName}
              />
            </div>

            <div className="mt-2 ">
              <label
                className="block mb-1 text-[12px] px-6 absolute mt-1px"
                for="forms-labelOverInputCode"
              >
                family name
              </label>
              <input
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="|Doe"
                id="forms-labelOverInputCode"
                onChange={handleFamilyName}
                value={familyName}
              />
            </div>

            <div className="mt-2 ">
              <label
                className="block mb-1 text-[12px] px-6 absolute mt-1px"
                for="forms-labelOverInputCode"
              >
                Street/House number
              </label>
              <input
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="|8"
                id="forms-labelOverInputCode"
                onChange={handleStreet}
                value={street}
              />
            </div>

            <div className="mt-2 ">
              <label
                className="block mb-1 text-[12px] px-6 absolute mt-1px"
                for="forms-labelOverInputCode"
              >
                City
              </label>
              <input
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="|Berlin"
                id="forms-labelOverInputCode"
                onChange={handleCity}
                value={city}
              />
            </div>

            <div className="mt-2 ">
              <label
                className="block mb-1 text-[12px] px-6 absolute mt-1px"
                for="forms-labelOverInputCode"
              >
                Zip code
              </label>
              <input
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="|10997"
                id="forms-labelOverInputCode"
                onChange={handleZip}
                value={zip}
              />
            </div>

            <div className="mt-2 ">
              <label
                className="block mb-1 text-[12px] px-6 absolute mt-1px"
                for="forms-labelOverInputCode"
              >
                Start date
              </label>
              <input
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="|10-12-2021"
                id="forms-labelOverInputCode"
                onChange={handleStart}
                value={start}
              />
            </div>

            <div className="mt-2 ">
              <label
                className="block mb-1 text-[12px] px-6 absolute mt-1px"
                for="forms-labelOverInputCode"
              >
                Type of job
              </label>
              <input
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="|Pizza seller"
                id="forms-labelOverInputCode"
                onChange={handleJob}
                value={job}
              />
            </div>

            <div className="mt-2 ">
              <label
                className="block mb-1 text-[12px] px-6 absolute mt-1px"
                for="forms-labelOverInputCode"
              >
                Type of company
              </label>
              <input
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="|GmbH"
                id="forms-labelOverInputCode"
                onChange={handleCompany}
                value={company}
              />
            </div>

            <div className="mt-2 ">
              <label
                className="block mb-1 text-[12px] px-6 absolute mt-1px"
                for="forms-labelOverInputCode"
              >
                Bank name
              </label>
              <input
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="|Targobank"
                id="forms-labelOverInputCode"
                onChange={handleBank}
                value={bank}
              />
            </div>

            <div className="mt-2 ">
              <label
                className="block mb-1 text-[12px] px-6 absolute mt-1px"
                for="forms-labelOverInputCode"
              >
                IBAN
              </label>
              <input
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="|*************"
                id="forms-labelOverInputCode"
                onChange={handleIBAN}
                value={iban}
              />
            </div>

            <div className="mt-2 ">
              <label
                className="block mb-1 text-[12px] px-6 absolute mt-1px"
                for="forms-labelOverInputCode"
              >
                Status
              </label>
              <input
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="|**********"
                id="forms-labelOverInputCode"
                onChange={handleStatus}
                value={status}
              />
            </div>

            <div className="mt-2 ">
              <label
                className="block mb-1 text-[12px] px-6 absolute mt-1px"
                for="forms-labelOverInputCode"
              >
                Email address
              </label>
              <input
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type="email"
                placeholder="|johndoe@gmail.com"
                id="forms-labelOverInputCode"
                onChange={handleEmaill}
                value={emaill}
              />
            </div>

            <div className="mt-2 ">
              <label
                className="block mb-1 text-[12px] px-6 absolute mt-1px"
                for="forms-labelOverInputCode"
              >
                Mobile number
              </label>
              <input
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="|+447 123 456 89"
                id="forms-labelOverInputCode"
                onChange={handlePhone}
                value={phone}
              />
            </div>

            <div className="mt-2 ">
              <label
                className="block mb-1 text-[12px] px-6 absolute mt-1px"
                for="forms-labelOverInputCode"
              >
                Tax ID(optional)
              </label>
              <input
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="|*******"
                id="forms-labelOverInputCode"
                onChange={handleTax}
                value={tax}
              />
            </div>

            <div className="mt-2 ">
              <label
                className="block mb-1 text-[12px] px-6 absolute mt-1px"
                for="forms-labelOverInputCode"
              >
                Notes
              </label>
              <input
                className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="|Let me know how this goes for you"
                id="forms-labelOverInputCode"
                onChange={handleNotes}
                value={notes}
              />
            </div>
            <hr className="mt-4 bg-gray-900 border" />
            <div className="bg-white">
              <p className="font-bold text-sm mt-4">Allocate accountant</p>
              <div className="mt-4">
                <label
                  className="block mb-1 text-[12px] px-6 absolute mt-1px"
                  for="forms-labelOverInputCode"
                >
                  Accountant name
                </label>
                <input
                  className="w-full mx-2 mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                  type="text"
                  placeholder="|'Ibrahim Alkais"
                  id="forms-labelOverInputCode"
                  onChange={handleAccountant}
                  value={accountant}
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center font-thin justify-center">
              <button
                onClick={handleSubmitSave}
                className="w-[355px] inline-flex items-center h-[45px] px-2 ml-4 py-2 tracking-wide text-white text-l font-medium bg-[#FFB5B5] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                        relative"
              >
                <span className="px-[110px]">Save</span>
                <BiSave className="mx-[-60px]" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClient;
