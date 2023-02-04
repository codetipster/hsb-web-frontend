import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import Modal from "react-bootstrap/Modal";
import AddReport from "../components/AddReport";
import { BiDownload, BiAddToQueue } from "react-icons/bi";
import { MdOutlineArrowBackIos, MdOutlinePreview } from "react-icons/md";
import profileImage from "../assets/Frame.png";

const Clientprofile = ({ clients }) => {
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
  // const [invoice, setInvoice] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [jobType, setJobType] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    let url = `https://hsb-backend.onrender.com/api/client/clients/${id}`;
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
              "Content-type": "application/json",
            },
          })
          .then((response) => {
            console.log(response.data, "individual info");
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
            setJobType(response.data.jobType);
            setCompany(response.data.companyType);
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
      <div className="bg-gray-100 w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between py-4 px-8">
            <Link to="/clients" className="text-red-800 flex items-center">
              <MdOutlineArrowBackIos className="mr-1" />
              Client's profile
            </Link>
            <Link to="/clients/invoices" className="no-underline">
              <div>
                <button
                  onClick={handleReview}
                  className="w-[160px] inline-flex items-center h-[45px] px-2 ml-4 py-2 tracking-wide text-white text-l font-medium bg-[#FF1C1D] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
                        relative"
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
                <h4 className="">{firstName}<span className="ml-2">{lastName}</span></h4>
                <p className="">{email}</p>
                <h6>{jobType}<span> @ {company}</span></h6>
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
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
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
              <Modal.Header closeButton className="bg-[#EBF5F0]">
                <div className="p-1 bg-[#EBF5F0] w-full">
                  <Modal.Title className="text-sm font-bold bg-red-">
                    Add new Report
                  </Modal.Title>
                </div>
              </Modal.Header>
              <AddReport />
            </Modal>
          </div>
          {/* employee request section */}
          <div className="bg-white w-[489px] mt-4 rounded-lg">
            <p className="font-bold text-sm p-4">Employee request</p>
            <div className="flex flex-col items-center justify-center">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>

            <div className="my-4 mx-6">
              <button
                onClick={handleDownload}
                className="w-[441px] h-[56px] inline-flex items-center justify-center text-white font-medium bg-[#FFB5B5] rounded active:bg-[#FF1C1D] hover:bg-[#FF1C1D]"
              >
                Review all
                <MdOutlinePreview className="ml-4" />
              </button>
            </div>
          </div>
          {/* invoices secttion */}
          <div className="bg-white w-[489px] my-4 rounded-lg">
            <p className="font-bold text-sm p-4">Invoices</p>
            <div className="flex flex-col items-center justify-center">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="my-4 mx-6">
              <button
                onClick={handleDownload}
                className="w-[441px] h-[56px] inline-flex items-center justify-center text-white font-medium bg-[#FFB5B5] rounded active:bg-[#FF1C1D] hover:bg-[#FF1C1D]"
              >
                Review all
                <MdOutlinePreview className="ml-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientprofile;
