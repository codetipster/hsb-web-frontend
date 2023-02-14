import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import { HiCheck } from "react-icons/hi";

const SendCommentModal = () => {
  const { handleSubmit } = useForm();
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

  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
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

  //   const createAccountantData = () => {
  //     const url = "https://hsb-backend.onrender.com/api/admin/create-accountant";
  //     try {
  //       fetch(url, {
  //         method: "POST",
  //         body: JSON.stringify(details),
  //         headers: {
  //           Authorization: token,
  //           "Content-type": "application/json",
  //         },
  //       })
  //         .then((res) => res.json())
  //         .then((response) => {
  //           console.log(response, "response from creating accountant");
  //           window.alert(response.message);
  //         });
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  return (
    <>
      <button
        onClick={handleShow}
        className="px-[10px]  no-underline text-gray-800"
      >
        Send Comment
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
              Send Comment
            </Modal.Title>
          </div>
        </Modal.Header>
        <div className="flex items-center justify-center mt-4">
          You are about to send a comment to Client 1010101010
        </div>
        <form
          //   onSubmit={handleSubmit(createAccountantData)}
          className="w-full flex flex-col justify-center items-center my-3 px-4"
        >
          <textarea
            rows="4"
            name="comment"
            value={comment}
            className="w-full mx-2 p-4 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline"
            placeholder="Write a comment..."
            onChange={handleChange}
          ></textarea>
          <div className=" mt-4">
            <button
              type="submit"
              className="w-[441px] h-[56px] inline-flex items-center justify-center text-white font-medium bg-[#FF1C1D] rounded  active:bg-[#FF1C1D] text-xl"
            >
              <span>Save</span>
              <HiCheck className="ml-2" />
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default SendCommentModal;
