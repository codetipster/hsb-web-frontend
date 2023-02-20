import React from "react";
import { BsPeople } from "react-icons/bs";
import { RiFileList3Line } from "react-icons/ri";
import AccountantNavbar from "../../components/AccountantNavbar";
import InfoCard from "../../components/InfoCard";
import HomeTable from "../../components/AccountantHomeTable";

const AccountantHomePage = ({ accountantClients, invoices }) => {
  const data = [
    {
      title: "Total number of clients",
      count: accountantClients.length,
      Icon: BsPeople,
      stat: 23,
    },
    {
      title: "Total number of reports/invoices",
      count: invoices.length,
      Icon: RiFileList3Line,
      stat: 12,
    },
  ];

  return (
    <>
      <AccountantNavbar />
      <div className="bg-gray-100 p-2">
        <div className="bg-gray-100 ">
          <div className="justify-center flex ">
            {data.map((info) => {
              const { title, count, Icon, stat } = info;
              return (
                <div
                  className=" flex m-2 w-full px-2 lg:px-4 space-x-3 justify-center py-4 "
                  key={title}
                >
                  <InfoCard
                    title={title}
                    count={count}
                    icon={<Icon />}
                    stat={stat}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <HomeTable accountantClients={accountantClients} />
      </div>
    </>
  );
};

export default AccountantHomePage;
