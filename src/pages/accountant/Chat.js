import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AccountantNavbar from "../../components/AccountantNavbar";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Profile from "../../assets/profile.png";

const Chat = () => {
  const [value, setValue] = React.useState(1);
  const [messages, setMessages] = React.useState([]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    const getToken = () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      axios
        .get("https://hsb-backend-app-rpnm.onrender.com/api/user/messages", {
          headers: {
            Authorization: token,
            "Content-type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data, "Messages");
          setMessages(response.data);
        });
    };
    getToken();
  }, []);
  return (
    <>
      <AccountantNavbar />
      <div className="flex flex-col items-center justify-center">
        <TabContext value={value}>
          <Box sx={{ position: "relative", top: "20px" }}>
            <div className="w-[980px] h-[92px] rounded-lg mt-[52px] shadow-md pt-10">
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                centered
                className="text-green-500"
                TabIndicatorProps={{
                  sx: { backgroundColor: "red", height: 4 },
                }}
                sx={{
                  "& button": {
                    borderRadius: 2,
                    color: "#6/chats/messagesC6A5E",
                    fontWeight: "700",
                  },
                  "& button.Mui-selected": {
                    fontWeight: "bold",
                    color: "black",
                  },
                }}
              >
                <Tab label="All Chats" value="1" />
                <Tab label="Unread Chats" value="2" />
              </TabList>
            </div>
          </Box>
          <Link to="/chats/messages" className="no-underline">
            {messages.map((message) => {
              return (
                <TabPanel value="1">
                  <div className="w-[980px] h-[74px] rounded-lg my-6 bg-white shadow-lg flex items-center justify-between px-6">
                    <div className="flex items-center">
                      <img src={Profile} className="w-[60px] h-[60px]" />
                      <div className="flex flex-col ml-4 text-black text-sm">
                        {/* <div className="font-semibold">Godwin Issachar</div> */}
                        <div className="font-medium">
                          {message.id}
                        </div>
                        <div className="font-semibold">
                          {message.text}
                        </div>
                      </div>
                    </div>
                    {/* <div className="text-green-500 font-medium text-sm">
                      12 read messages
                    </div> */}
                  </div>
                </TabPanel>
              );
            })}
          </Link>
          <TabPanel value="2">
            <div className="w-[980px] h-[74px] rounded-lg my-2 bg-white shadow-lg flex items-center justify-between px-6">
              <div className="flex items-center">
                <img src={Profile} className="w-[60px] h-[60px]" />
                <div className="flex flex-col ml-4 text-black text-sm">
                  <div className="font-semibold">Godwin Issachar</div>
                  <div className="font-medium">
                    Scaling Ventures International
                  </div>
                </div>
              </div>
              <div className="text-red-500 font-medium text-sm">
                12 unread messages
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="w-[980px] h-[74px] rounded-lg my-2 bg-white shadow-lg flex items-center justify-between px-6">
              <div className="flex items-center">
                <img src={Profile} className="w-[60px] h-[60px]" />
                <div className="flex flex-col ml-4 text-black text-sm">
                  <div className="font-semibold">Godwin Issachar</div>
                  <div className="font-medium">
                    Scaling Ventures International
                  </div>
                </div>
              </div>
              <div className="text-red-500 font-medium text-sm">
                12 unread messages
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="w-[980px] h-[74px] rounded-lg my-2 bg-white shadow-lg flex items-center justify-between px-6">
              <div className="flex items-center">
                <img src={Profile} className="w-[60px] h-[60px]" />
                <div className="flex flex-col ml-4 text-black text-sm">
                  <div className="font-semibold">Godwin Issachar</div>
                  <div className="font-medium">
                    Scaling Ventures International
                  </div>
                </div>
              </div>
              <div className="text-red-500 font-medium text-sm">
                12 unread messages
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </div>
    </>
  );
};

export default Chat;
