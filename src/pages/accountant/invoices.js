import React, { useState } from "react";
import AccountantNavbar from "../../components/AccountantNavbar";
import Nav2 from "../../components/Nav2Client";
import ActionButton from "../../components/ActionBtn2";
import Moment from "react-moment";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Profile from "../../assets/profile.png";

const AccountantInvoices = ({ invoices, client, client1 }) => {
  const [status, setStatus] = useState(false);
  const [value, setValue] = React.useState(1);
  const [messages, setMessages] = React.useState([]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const getStatus = (status) => {
    let statusClass;
    switch (status) {
      case "COMPLETED":
        statusClass = "p-4 text-green-700";
        break;

      case "INREVIEW":
        statusClass = "p-4 text-yellow-700";
        break;

      default: //failed
        statusClass = "p-4 text-red-700";
        break;
    }
    return statusClass;
  };
  return (
    <>
      <AccountantNavbar />
      {/* <div className="p-24 mt-[-30px]">
        <Nav2 title="Invoices" />
        <div className="p-4 my-10 flex items-center justify-center">
          <table className="table bg-white text-sm text-left text-gray-500 dark:text-gray-400 px-4">
            <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th className="p-4">Invoice Number</th>
                <th className="p-4">Invoice Name</th>
                <th className="p-4">Client Name</th>
                <th className="p-4">Date/Time Created</th>
                <th className="p-4">Invoice Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => {
                return (
                  <tr>
                    <td className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-all-search" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td className="p-4">{invoice.id}</td>
                    <td className="p-4">{invoice.name}</td>
                    <td className="p-4">{invoice.clientName}</td>
                    <td className="p-4">
                      <Moment format="HH:mm DD-MM-YYYY">
                        {invoice.createdAt}
                      </Moment>
                    </td>
                    <td className={getStatus(invoice.status)}>
                      {invoice.status}
                    </td>
                    <td className="p-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <ActionButton
                          client={invoice.clientId}
                          client1={invoice.id}
                          className="w-[20px] h-[45px]"
                        />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div> */}
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
                <Tab label="Reports" value="1" />
                <Tab label="Invoices" value="2" />
              </TabList>
            </div>
          </Box>
          <TabPanel value="1">
            <div className="w-[980px] h-[74px] rounded-lg my-2 bg-white shadow-lg flex items-center justify-between px-6">
              <div className="flex flex-col ml-4 text-black text-sm">
                <div className="font-semibold">Simon Ibrahim</div>
                <div className="font-normal">HSB 000000124</div>
              </div>
              <div className="text-green-500 font-medium text-sm">
                View Report
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div className="w-[980px] h-[74px] rounded-lg my-2 bg-white shadow-lg flex items-center justify-between px-6">
              <div className="flex flex-col ml-4 text-black text-sm">
                <div className="font-semibold">Simon Ibrahim</div>
                <div className="font-normal">HSB 000000124</div>
              </div>
              <div className="text-green-500 font-medium text-sm">
                View Report
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div className="w-[980px] h-[74px] rounded-lg my-2 bg-white shadow-lg flex items-center justify-between px-6">
              <div className="flex flex-col ml-4 text-black text-sm">
                <div className="font-semibold">Simon Ibrahim</div>
                <div className="font-normal">HSB 000000124</div>
              </div>
              <div className="text-green-500 font-medium text-sm">
                View Report
              </div>
            </div>
          </TabPanel>
          {invoices.map((invoice) => {
            return (
              <TabPanel value="2">
                <div className="w-[980px] h-[74px] rounded-lg my-6 bg-white shadow-lg flex items-center justify-between px-6">
                  <div className="flex items-center">
                    <img src={Profile} className="w-[60px] h-[60px]" />
                    <div className="flex flex-col ml-4 text-black text-sm">
                      <div className="font-semibold">{invoice.name}</div>
                      <div className="font-semibold">{invoice.id}</div>
                      <div className="font-medium">
                        Scaling Ventures International
                      </div>
                    </div>
                  </div>
                  <div className="text-green-500 font-medium text-sm">
                    12 read messages
                  </div>
                </div>
              </TabPanel>
            );
          })}
        </TabContext>
      </div>
    </>
  );
};

export default AccountantInvoices;
