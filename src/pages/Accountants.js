import React from 'react'
import { BiDotsVertical} from 'react-icons/bi'
import ListItemAccountant from '../components/ListItemAccountant'
import Nav2 from '../components/Nav2'

const Accountants = () => {
  return (
    <div className='p-24'>
        <Nav2 />
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    
           <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Accountant ID
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Mobile number
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Family name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            First name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Email address
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Date created
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                    </tr>
                </thead>


                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="flex items-center py-2 px-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="pl-3">
                                <div className="text-base mt-4 font-normal">0564321100</div>
                            </div>  
                        </th>
                        <td className="py-4 px-6">
                            +4476532190876
                        </td>
                        <td className="py-4 px-6">
                            Ibrahim
                        </td>
                        <td className="py-4 px-6">
                            Rialesex
                        </td>
                        <td className="py-4 px-6">
                        neil.sims@flowbite.com
                        </td>
                        <td className="py-4 px-6">
                        23.09.2022
                        </td>
                        <td className="py-4 px-6">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
                            </div>
                        </td>
                        <td className="py-4 px-6">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><BiDotsVertical className='w-[20px] h-[45px]'/></a>
                        </td>
                    </tr>

                    <ListItemAccountant 
                        id='123456908' phone='07068565502' first='John' last='Doe' email='john@gmail.com' data='12.12.2022' status='Not active'
                    />

                    <ListItemAccountant 
                        id='123456908' phone='07068565502' first='John' last='Doe' email='john@gmail.com' data='12.12.2022' status='Not active'
                    />

                    <ListItemAccountant 
                        id='123456908' phone='07068565502' first='John' last='Doe' email='john@gmail.com' data='12.12.2022' status='Not active'
                    />

                    <ListItemAccountant 
                        id='123456908' phone='07068565502' first='John' last='Doe' email='john@gmail.com' data='12.12.2022' status='Not active'
                    />

                    <ListItemAccountant 
                        id='123456908' phone='07068565502' first='John' last='Doe' email='john@gmail.com' data='12.12.2022' status='Not active'
                    />

                    <ListItemAccountant 
                        id='123456908' phone='07068565502' first='John' last='Doe' email='john@gmail.com' data='12.12.2022' status='Not active'
                    />

                </tbody>
            </table>
        </div>


    </div>
  )
}

export default Accountants