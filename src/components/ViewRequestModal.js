import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const ViewRequestModal = ({ employeeInfo }) => {
  const [show, setShow] = useState(false);

  //handle modal close
  const handleClose = () => setShow(false);
  //handle modal show
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="px-[10px] py-2 text-gray-700">
        View Request
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
              Employee Request
            </Modal.Title>
          </div>
        </Modal.Header>
        <div className="my-2 mx-2 p-2">
          <div className="grid gap-4">
            <div className="flex flex-col font-medium text-sm text-black">
              <span className="font-normal text-[#33322D]">Name</span>
              {employeeInfo.name}
            </div>
            <div className="flex flex-col font-medium text-sm text-black">
              <span className="font-normal text-[#33322D]">Birth Date</span>
              {employeeInfo.birthDate}
            </div>
            <div className="flex flex-col font-medium text-sm text-black">
              <span className="font-normal text-[#33322D]">Bank Name</span>
              {employeeInfo.bankName}
            </div>
          </div>

          <div className="flex items-center justify-center mt-4 px-2">
            <button
              onClick={handleClose}
              type="submit"
              className="w-20 h-10 p-2 text-white text-xl font-medium bg-[#FF1C1D] rounded"
            >
              OK
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ViewRequestModal;
