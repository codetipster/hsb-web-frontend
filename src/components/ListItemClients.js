import React, { useState } from "react";
import { BiDotsVertical } from "react-icons/bi";

const ListItemClients = ({ invoiceID, name, clientName, session, status }) => {
  const [statuus, setstatuus] = useState(false);
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4 w-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label for="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        class="flex items-center py-2 px-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="pl-3">
          <div className="text-base mt-4 font-normal">{invoiceID}</div>
        </div>
      </th>
      <td className="py-4 px-6">{name}</td>
      <td className="py-4 px-6">{clientName}</td>
      <td className="py-4 px-6">{session}</td>
      <td className="py-4 px-6">
        <div className="flex items-center">
          <div
            className={
              statuus
                ? "h-2.5 w-2.5 rounded-full bg-green-400 mr-2"
                : "h-2.5 w-2.5 rounded-full bg-red-500 mr-2"
            }
          ></div>{" "}
          {status}
        </div>
      </td>
      <td className="py-4 px-6">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          <BiDotsVertical className="w-[20px] h-[45px]" />
        </a>
      </td>
    </tr>
  );
};

export default ListItemClients;
