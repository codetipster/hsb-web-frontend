import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { HiCheck } from "react-icons/hi";

const SendCommentModal = ({ client }) => {
  // const { id } = useParams();
  // console.log(client,"person")
  const { handleSubmit } = useForm();
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const data = {
    comment: comment,
    clientId: client,
  };

  //handle modal close
  const handleClose = () => setShow(false);
  //handle modal show
  const handleShow = () => setShow(true);

  const handleCancel = (e) => {
    e.preventDefault(e);
    setShow(false);
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

  const handleSendComment = () => {
    const url = "https://hsb-backend.onrender.com/api/admin/send-comment";
    try {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: token,
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response, "response from sending comment");
          window.alert(response.comment);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <button onClick={handleShow}>Send Comment</button>

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
        <div className="flex items-center justify-center mt-4 px-6">
          You are about to send a comment to Client {client} 
        </div>
        <form
          onSubmit={handleSubmit(handleSendComment)}
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
              <span>Send</span>
              <HiCheck className="ml-2" />
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default SendCommentModal;
