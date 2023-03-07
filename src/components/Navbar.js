import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import img from "../assets/logo.png";
import Login from "../pages/Login";
import { IoPersonSharp } from "react-icons/io5";
import Badge from "@mui/material/Badge";
import { Notifications } from "@mui/icons-material";
// import Languageoption from "./LanguageDropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const navigation = [
  { name: "Home", href: "/home" },
  { name: "Clients", href: "/clients" },
  { name: "Accountants", href: "/accountants" },
  { name: "Profile", href: "/profile" },
  // { name: "Logout", href: "/" },
  { name: "English", href: "/languages" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const navigate = useNavigate();
  const [loggedin, setLoggedin] = useState(true);
  const [notifications, setNotification] = useState([]);
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  const handleLogin = () => {
    console.log("logging into app");
    setLoggedin(!loggedin);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const getToken = () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      const id = JSON.parse(localStorage.getItem("Id"));
      if (token !== null || token !== undefined) {
        // setToken(token);
      }
      axios
        .get(`https://hsb-backend.onrender.com/api/user/notification/${id}`, {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data, "notification");
          setNotification(response.data);
        });
    };
    getToken();
  }, []);

  if (loggedin === true) {
    return (
      <Disclosure as="nav" className="bg-white shadow-md no-underline">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-4">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-[#FFE9E9] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={img}
                      alt="HSB"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src={img}
                      alt="HSB"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex px-32 space-x-4 no-underline">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) => {
                            return (
                              "px-6 py-2 rounded-md text-sm font-medium no-underline" +
                              (isActive
                                ? "text-white bg-[#FFE9E9] no-underline hover:bg-[#FFE9E9]"
                                : "bg-[#FFE9E9] text-gray-800 hover:bg-[#FFE9E9] no-underline")
                            );
                          }}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                      {/* <Languageoption onChange={(e) => handleClick(e)} /> */}
                      {/* <button onClick={handleLogin}>Logout</button> */}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* <button
                    type="button"
                    className="rounded-full bg-white p-1 text-gray-400 w-10 h-10"
                  >
                    <span className="sr-only">Viewnotifications</span>
                    <BellIcon size={20} aria-hidden="true" />
                  </button> */}
                  {/* Notification dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full  text-sm">
                        <span className="sr-only">Open user menu</span>
                        {/* <div className="rounded-full bg-white p-1 text-gray-400 w-8 h-8"> */}
                        <Badge badgeContent={5} color="error">
                          <Notifications size={30} color="black" />
                        </Badge>
                        {/* </div> */}
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-[300px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {Array.isArray(notifications) &&
                        notifications.length ? (
                          <div>
                            {notifications.map((notification) => {
                              return (
                                <Menu.Item>
                                  <p
                                    className="
                                   px-4 text-sm text-gray-700"
                                  >
                                    {notification.messageBody}
                                  </p>
                                </Menu.Item>
                              );
                            })}
                          </div>
                        ) : (
                          <h3
                            className="
                          px-4 text-sm text-gray-700"
                          >
                            No New Notifications
                          </h3>
                        )}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm">
                        <span className="sr-only">Open user menu</span>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-gray-400">
                          <IoPersonSharp size={20} />
                        </div>
                        {/* <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        /> */}
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/profile"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        {/* <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item> */}
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={logout}
                            >
                              Logout
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-[#FFE9E9] text-black"
                        : "text-gray-800 hover:bg-[#FFE9E9] hover:text-gray-800",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <button onClick={handleLogin}>Logout</button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  }
  return (
    <div>
      <Login />
    </div>
  );
}
