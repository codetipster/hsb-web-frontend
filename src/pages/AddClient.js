import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { BiSave } from "react-icons/bi";
import AccountantInfo from "../components/AccountantInfo";

const AddClient = ({ clients }) => {
  const { handleSubmit } = useForm();
  const [seePassword, setSeePassword] = useState(false);
  const handleToggle = () => {
    setSeePassword(!seePassword);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    homeNumber: "",
    mobileNumber: "",
    iban: "",
    bankName: "",
    companyType: "",
    jobType: "",
    zipCode: "",
    city: "",
    legalNumber: "",
    accountantId: "",
    accountantName: "",
  };
  const [details, setDetails] = useState(initialValues);
  const {
    firstName,
    lastName,
    email,
    password,
    homeNumber,
    mobileNumber,
    iban,
    bankName,
    companyType,
    jobType,
    zipCode,
    city,
    legalNumber,
    accountantId,
    accountantName,
  } = details;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
    console.log(details, "details");
  };
  // const [clientsA, setClientsA] = useState(clients);
  // useEffect(() => {
  //   axios.get("http://localhost:3001/client-login").then((response) => {
  //     setNotice(response.data);
  //   });
  // }, []);

  // const handleNotifySubmit = (e) => {
  //   e.preventDefault();
  //   const newNotice = {
  //     legalNo: legal,
  //     password: pass,
  //     id: notice.length + 1,
  //   };
  //   axios
  //     .post("http://localhost:3001/client-login", newNotice)
  //     .then((response) => {
  //       setNotice(notice.concat(response.data));
  //       setPass("");
  //       setLegal("");
  //     });
  // };

  // const handleSubmitSave = (e) => {
  //   e.preventDefault();
  //   const newClient = {
  //     firstName: firstName,
  //     familyName: familyName,
  //     address: street,
  //     city: city,
  //     zip: zip,
  //     "s-date": start,
  //     job: job,
  //     company: company,
  //     bank: bank,
  //     IBAN: iban,
  //     legalNumber: legal,
  //     email: emaill,
  //     mobile: phone,
  //     "tax-id": tax,
  //     accountant: accountant,
  //     note: notes,
  //     id: clientsA.length + 1,
  //     status: status,
  //     invoice: [
  //       {
  //         id: 1,
  //         title: "Cleaner and better customer experience..",
  //         createdON: "2023-01-06T11:41:57.678Z",
  //         status: "Not Active",
  //       },
  //       {
  //         id: 2,
  //         title: "Cleaner and better customer experience..",
  //         createdON: "2023-01-06T11:41:57.678Z",
  //         status: "Not Active",
  //       },
  //     ],
  //   };
  //   axios.post("http://localhost:3001/clients", newClient).then((response) => {
  //     setClientsA(clientsA.concat(response.data));
  //   });
  // };
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

  const handleAccountantInfo = useCallback((data) => {
    console.log({ data });
    // setDetails({ ...details, accountantId: data.value });
    setDetails((prev) => {
      return { ...prev, accountantId: data.value, accountantName: data.label };
    });
    console.log(details, "accountID");
  }, []);

  const createClientData = () => {
    const url = "https://hsb-backend.onrender.com/api/admin/create-client";
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
          console.log(response, "response from creating client");
          window.alert(response.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="bg-gray-100 w-full flex flex-col items-center justify-center">
      <Link to="/clients" className="no-underline">
        <div className="text-red-800 flex items-center relative right-[500px] mt-4">
          <MdOutlineArrowBackIos className="mr-2" /> Add new client
        </div>
      </Link>
      {/* <div className="bg-white w-[420px] mt-4 mx-[600px] rounded-lg">
          <form className="w-[400px] bg-white items-center justify-center p-4">
            <p className="font-bold text-sm">Send Notification to Client</p>
            <div className="mt-8 ">
              <label
                className="mb-2 text-[12px]"
                for="forms-labelOverInputCode"
              >
                Legal number
              </label>
              <input
                className="w-[441px] h-[55px] px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
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
                  className="mb-2 text-[12px]"
                  for="forms-labelOverInputCode"
                >
                  Password
                </label>
                <input
                  className="w-[441px] h-[55px] px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
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
        </div> */}
      <div className="bg-white w-[489px] mt-4 rounded-lg">
        <div className="font-bold text-sm mx-10 mt-12">Create a new Client</div>
        <form className="px-4" onSubmit={handleSubmit(createClientData)}>
          <div className="mt-8 ">
            <label
              className="mb-2 text-[12px]"
              htmlFor="forms-labelOverInputCode"
            >
              First Name
            </label>
            <input
              id="forms-labelOverInputCode"
              className="w-[441px] h-[55px] px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              type="text"
              name="firstName"
              value={firstName}
              placeholder="John"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2 ">
            <label
              className="mb-2 text-[12px]"
              htmlFor="forms-labelOverInputCode"
            >
              Last Name
            </label>
            <input
              id="forms-labelOverInputCode"
              className="w-[441px] h-[55px] px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Doe"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2 ">
            <label
              className="mb-2 text-[12px]"
              htmlFor="forms-labelOverInputCode"
            >
              Email
            </label>
            <input
              id="forms-labelOverInputCode"
              className="w-[441px] h-[55px] px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              type="email"
              name="email"
              value={email}
              placeholder="johndoe@gmail.com"
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <div className="mt-2 ">
              <label
                className="mb-2 text-[12px]"
                htmlFor="forms-labelOverInputCode"
              >
                Password
              </label>
              <input
                id="forms-labelOverInputCode"
                className="w-[441px] h-[55px] px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
                type={seePassword === false ? "password" : "text"}
                placeholder="|***********"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="text-2xl text-gray-400 absolute top-12 right-4">
              {seePassword === false ? (
                <AiFillEye onClick={handleToggle} />
              ) : (
                <AiFillEyeInvisible onClick={handleToggle} />
              )}
            </div>
          </div>

          <div className="mt-2 ">
            <label
              className="mb-2 text-[12px]"
              htmlFor="forms-labelOverInputCode"
            >
              Home Number
            </label>
            <input
              id="forms-labelOverInputCode"
              className="w-[441px] h-[55px] px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              type="text"
              name="homeNumber"
              value={homeNumber}
              placeholder="|10997"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2 ">
            <label
              className="mb-2 text-[12px]"
              htmlFor="forms-labelOverInputCode"
            >
              Mobile Number
            </label>
            <input
              id="forms-labelOverInputCode"
              className="w-[441px] h-[55px] px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              type="text"
              name="mobileNumber"
              value={mobileNumber}
              placeholder="|10997"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2 ">
            <label
              className="mb-2 text-[12px]"
              htmlFor="forms-labelOverInputCode"
            >
              Type of company
            </label>
            <input
              id="forms-labelOverInputCode"
              className="w-[441px] h-[55px] px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              type="text"
              name="companyType"
              value={companyType}
              placeholder="|Meta"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2 ">
            <label
              className="mb-2 text-[12px]"
              htmlFor="forms-labelOverInputCode"
            >
              Bank Name
            </label>
            <input
              id="forms-labelOverInputCode"
              className="w-[441px] h-[55px] px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              type="text"
              name="bankName"
              value={bankName}
              placeholder="|Targobank"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2 ">
            <label
              className="mb-2 text-[12px]"
              htmlFor="forms-labelOverInputCode"
            >
              IBAN
            </label>
            <input
              id="forms-labelOverInputCode"
              className="w-[441px] h-[55px] px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              type="text"
              name="iban"
              value={iban}
              placeholder="|4521478"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2 ">
            <label
              className="mb-2 text-[12px]"
              htmlFor="forms-labelOverInputCode"
            >
              Job Type
            </label>
            <input
              id="forms-labelOverInputCode"
              className="w-[441px] h-[55px] px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              type="text"
              name="jobType"
              value={jobType}
              placeholder="|engineer"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2 ">
            <label
              className="mb-2 text-[12px]"
              htmlFor="forms-labelOverInputCode"
            >
              Zip Code
            </label>
            <input
              id="forms-labelOverInputCode"
              className="w-[441px] h-[55px] px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              type="text"
              name="zipCode"
              value={zipCode}
              placeholder="|858256"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2 ">
            <label
              className="mb-2 text-[12px]"
              htmlFor="forms-labelOverInputCode"
            >
              City
            </label>
            <input
              id="forms-labelOverInputCode"
              className="w-[441px] h-[55px] px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              type="text"
              name="city"
              value={city}
              placeholder="|Berlin"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2 ">
            <label
              className="mb-2 text-[12px]"
              htmlFor="forms-labelOverInputCode"
            >
              Legal Number
            </label>
            <input
              id="forms-labelOverInputCode"
              className="w-[441px] h-[55px] px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
              type="text"
              name="legalNumber"
              value={legalNumber}
              placeholder="|8541236987788545445"
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <AccountantInfo onMessage={handleAccountantInfo} />
          </div>
          <hr className="mt-4 bg-gray-900 border" />
          <div className="my-6 flex flex-col items-center font-thin justify-center">
            <button
              type="submit"
              className="w-[441px] inline-flex items-center justify-center h-[56px] px-2 ml-4 py-2 text-white font-medium disabled:bg-[#FFB5B5] rounded bg-[#FF1C1D]"
              disabled={!accountantName}
            >
              Save
              <BiSave className="ml-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
