import React, { useState, useEffect, Fragment } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import { HiCheck } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NeedMoreDataModal = ({ client, client1 }) => {
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
      <button onClick={handleShow}>Need more Data</button>

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
             Need more data
            </Modal.Title>
          </div>
        </Modal.Header>
        <div className="flex items-center justify-center mt-4 px-6">
          You are about to change the status of invoice {client1} to "Need more
          Data" on HSB
          <br />
          <br />
          Select a reason to inform the client why invoice status has changed
        </div>
        <form
          onSubmit={handleSubmit(handleSendComment)}
          className="w-full flex flex-col justify-center items-center my-3 px-4"
        >
          <select className="w-[441px] h-[55px] rounded-md bg-white p-3 text-sm font-medium text-gray-800 border border-[#0A0903]">
            <option>Reasons</option>
            <option value={"en"}>Documents not complete</option>
            <option value={"ko"}>Documents not complete</option>
            <option value={"chi"}>Documents not complete</option>
          </select>
          {/* <Menu as="div" className="relative">
            <div>
              <Menu.Button className="w-[441px] h-[55px] inline-flex items-center justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-800 border border-[#0A0903]">
                Reasons
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Documents not complete
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-4 py-2 text-left text-sm"
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu> */}
          <div className=" mt-4">
            <button
              type="submit"
              className="w-[441px] h-[56px] inline-flex items-center justify-center text-white font-medium bg-[#FF1C1D] rounded  active:bg-[#FF1C1D] text-xl"
            >
              <span>Confirm Status</span>
              <HiCheck className="ml-2" />
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default NeedMoreDataModal;
