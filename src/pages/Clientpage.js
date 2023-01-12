import React from 'react'
import Nav2 from '../components/Nav2'
import BtnLang from '../components/BtnLang'
import {useState} from 'react'

const Clientpage = ({clients}) => {
    const [statuus, setstatuus] = useState(false)
   
  return (
    <div className='p-24 mt-[-30px]'>
        <Nav2 title='Invoices'/>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="table w-full text-sm text-left text-gray-500 dark:text-gray-400 px-4">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr >
                            <th className='p-4'>Select</th>
                            <th className='p-4'>Invoice Number</th>
                            <th className='p-4'>Invoice Name</th>
                            <th className='p-4'>Client Name</th>
                            <th className='p-4'>Date/Time Created</th>
                            <th className='p-4'>Invoice Status</th>
                        </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                    client.invoice.map(invoice => (  
                        <tr key={invoice.id}>
                            <td className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                            </td>
                            
                            <td className="p-4">HSB000{invoice.id}</td>
                            <td className="p-4">{invoice.title}</td>
                            <td className="p-4">{`${client.firstName}  ${client.familyName}`}</td>
                            <td className="p-4">{invoice.createdON}</td>
                            
                                <td className="p-4">
                                    <div className="flex items-center">
                                        <div className={statuus? "h-2.5 w-2.5 rounded-full bg-green-400 mr-2" : "h-2.5 w-2.5 rounded-full bg-red-500 mr-2"}></div> {invoice.status}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><BtnLang className='w-[20px] h-[45px]' /></a>
                                    
                                </td>
                        </tr> 
                    ))
                    ))}
                </tbody> 
        </table>   
        </div>


    </div>
  )
}

export default Clientpage