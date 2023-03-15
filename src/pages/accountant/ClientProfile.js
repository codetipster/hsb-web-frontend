import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import AccountantNavbar from "../../components/AccountantNavbar";
import AddReport from "../../components/AddReport";
import { BiDownload, BiAddToQueue } from "react-icons/bi";
import { MdOutlineArrowBackIos, MdOutlinePreview } from "react-icons/md";
import profileImage from "../../assets/Frame.png";
import ActionButton from "../../components/ActionBtn3";

const AccountantClientprofile = ({ clients }) => {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const handleReview = () => {
    console.log("review");
  };

  const handleDownload = () => {
    console.log("download");
  };
  const [token, setToken] = useState("");
  const initalClientInfo = {
    firstName: "",
    lastName: "",
    email: "",
    jobType: "",
    company: "",
    invoices: [],
    reports: [],
    employees: [],
  };
  const [clientInfo, setClientInfo] = useState(initalClientInfo);
  const {
    firstName,
    lastName,
    email,
    jobType,
    company,
    reports,
    invoices,
    employees,
  } = clientInfo;

  useEffect(() => {
    let url = `https://hsb-backend-app-rpnm.onrender.com/api/client/clients/${id}`;
    let info;
    const getToken = () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      if (token !== null || token !== undefined) {
        setToken(token);
      }
      try {
        axios
          .get(url, {
            headers: {
              Authorization: token,
            },
          })
          .then((response) => {
            console.log(response.data, "individual info");
            info = response.data;
            // invoices
            const _invoices = [];
            info.invoices.forEach((item) => {
              const _invoicesObject = {
                name: item.name,
                createdAt: item.createdAt,
                status: item.status,
              };
              _invoices.push(_invoicesObject);
            });

            // reports
            const _reports = [];
            info.reports.forEach((item) => {
              const _reportsObject = {
                name: item.name,
                createdAt: item.createdAt,
              };
              _reports.push(_reportsObject);
            });

            // employees
            const _employees = [];
            info.employees.forEach((item) => {
              const _employeesObject = {
                name: item.name,
                createdAt: item.createdAt,
                status: item.status,
              };
              _employees.push(_employeesObject);
            });
            setClientInfo({
              firstName: info.firstName,
              lastName: info.lastName,
              email: info.email,
              jobType: info.jobType,
              company: info.companyType,
              invoices: _invoices,
              reports: _reports,
              employees: _employees,
            });
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };
    getToken();
  }, []);

  return (
    <div>
      <AccountantNavbar/>
      <div className="bg-gray-100 w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between py-4 px-8">
            <Link to="/clients" className="text-red-800 flex items-center">
              <MdOutlineArrowBackIos className="mr-1" />
              Client's profile
            </Link>
            <Link to="/accountantInvoices" className="no-underline">
              <div>
                <button
                  onClick={handleReview}
                  className="w-[160px] inline-flex items-center h-[45px] px-2 ml-4 py-2 tracking-wide text-white text-l font-medium bg-[#FF1C1D] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] relative"
                >
                  <span className="px-[4px]">Review Invoice</span>
                  <MdOutlinePreview className="mx-[1px]" />
                </button>
              </div>
            </Link>
          </div>
          {/* image section */}
          <div className="bg-white w-[489px] h-[380px] mt-2 rounded-lg">
            <p className="font-bold text-sm px-4 py-2">Profile picture</p>
            <div className="flex flex-col items-center justify-center">
              <img src={profileImage} />
              <div className="text-sm mt-2 text-center">
                <h4 className="">
                  {firstName}
                  <span className="ml-2">{lastName}</span>
                </h4>
                <p className="">{email}</p>
                <h6>
                  {jobType}
                  <span> @ {company}</span>
                </h6>
                <div className="my-3">
                  <button
                    onClick={handleDownload}
                    className="w-[441px] h-[56px] inline-flex items-center justify-center text-white font-medium bg-[#FFB5B5] rounded active:bg-[#FF1C1D] hover:bg-[#FF1C1D]"
                  >
                    Download Image
                    <BiDownload className="ml-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* report section */}
          <div className="bg-white w-[489px] mt-4 rounded-lg">
            <p className="font-bold text-sm p-4">Reports</p>
            <div className="flex flex-col items-center justify-center">
              {clientInfo.reports.length > 0 &&
                clientInfo.reports.map((data, index) => {
                  return (
                    <div
                      className="w-[441px] h-[60px] rounded bg-gray-100 my-2"
                      key={index}
                    >
                      <div className="flex items-center justify-between px-4 py-2">
                        <div className="text-sm font-normal truncate">
                          <p className=" text-gray-900">
                            {data.name}
                            <br />
                            <span className="text-gray-400 ">
                              {" "}
                              {data.createdAt}
                            </span>
                          </p>
                        </div>
                        <div>
                          <BiDownload />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="my-4 mx-6">
              <button
                onClick={handleShow}
                className="w-[441px] h-[56px] inline-flex items-center justify-center text-white font-medium bg-[#FFB5B5] rounded active:bg-[#FF1C1D] hover:bg-[#FF1C1D]"
              >
                Add new report
                <BiAddToQueue className="ml-4" />
              </button>
            </div>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              className="my-4 mx-62"
            >
              <Modal.Header
                closeButton
                className="bg-[#EBF5F0] h-[56px] w-full"
              >
                <Modal.Title className="text-base font-bold">
                  Send report
                </Modal.Title>
              </Modal.Header>
              <AddReport />
            </Modal>
          </div>
          {/* employee request section */}
          <div className="bg-white w-[489px] mt-4 rounded-lg">
            <p className="font-bold text-sm p-4">Employee request</p>
            <div className="flex flex-col items-center justify-center">
              {clientInfo.employees.length > 0 &&
                clientInfo.employees.map((data, index) => {
                  return (
                    <div
                      className="w-[441px] h-20 rounded bg-gray-100 my-2"
                      key={index}
                    >
                      <div className="flex items-center justify-between px-4 py-2">
                        <div className="text-sm font-normal truncate">
                          <p className=" text-gray-900">
                            {data.name}
                            <br />
                            <span className="text-gray-400 ">
                              {" "}
                              {data.createdAt}
                            </span>
                            <br />
                            <span className="text-green-400">
                              {" "}
                              {data.status}
                            </span>
                          </p>
                        </div>
                        <div>
                          {/* <BiDownload /> */}
                          <ActionButton />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <Link to="/accountantEmployees" className="no-underline">
              <div className="my-4 mx-6">
                <button
                  onClick={handleDownload}
                  className="w-[441px] h-[56px] inline-flex items-center justify-center text-white font-medium bg-[#FFB5B5] rounded active:bg-[#FF1C1D] hover:bg-[#FF1C1D]"
                >
                  Review all
                  <MdOutlinePreview className="ml-4" />
                </button>
              </div>
            </Link>
          </div>
          {/* invoices secttion */}
          <div className="bg-white w-[489px] my-4 rounded-lg">
            <p className="font-bold text-sm p-4">Invoices</p>
            <div className="flex flex-col items-center justify-center">
              {clientInfo.invoices.length > 0 &&
                clientInfo.invoices.map((data, index) => {
                  return (
                    <div
                      className="w-[441px] h-20 rounded bg-gray-100 my-2"
                      key={index}
                    >
                      <div className="flex items-center justify-between px-4 py-2">
                        <div className="text-sm font-normal truncate">
                          <p className=" text-gray-900">
                            {data.name}
                            <br />
                            <span className="text-gray-400 ">
                              {" "}
                              {data.createdAt}
                            </span>
                            <br />
                            <span className="text-green-400">
                              {" "}
                              {data.status}
                            </span>
                          </p>
                        </div>
                        <div>
                          <BiDownload />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <Link to="/accountantInvoices" className="no-underline">
              <div className="my-4 mx-6">
                <button
                  onClick={handleDownload}
                  className="w-[441px] h-[56px] inline-flex items-center justify-center text-white font-medium bg-[#FFB5B5] rounded active:bg-[#FF1C1D] hover:bg-[#FF1C1D]"
                >
                  Review all
                  <MdOutlinePreview className="ml-4" />
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountantClientprofile;
