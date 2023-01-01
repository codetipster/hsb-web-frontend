import React from 'react'
import ListItemAccountant  from '../components/ListItemAccountant'
import {BiDotsVertical} from 'react-icons/bi'
const HomeTable = () => {
  return (
    <div className='p-4 my-[-20px]'>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 px-4">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Client ID
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Family name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            First name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Legal name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Mobile number
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Accountant in charge
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                    </tr>
                </thead>

                <tbody>
                   
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
  )
}

export default HomeTable