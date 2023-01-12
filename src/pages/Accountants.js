import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Nav2 from '../components/Nav2'
import BtnLang from '../components/BtnLang'
const Accountants = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
      setIsOpen(!isOpen)
    }

    const [statuus, setstatuus] = useState(false)


    const [accountants, setAccountants] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/accountants').then((response)=>{
            setAccountants(response.data)
        })
    },[])
  
  return (
    <div className='p-24 mt-[-30px]'>
        <Nav2 title='Accountants'/>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="table">
            <thead>
                    <tr>
                        <th>Account ID</th>
                        <th>Phone Number</th>
                        <th>Family Name</th>
                        <th>first Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
            </thead>
            <tbody>
                {accountants.map((accountant) => {
                    return(
                        <tr >  
                            <td>{accountant.id}</td>
                            <td>{accountant.phone}</td>
                            <td>{accountant.familyName}</td>
                            <td>{accountant.firstName}</td>
                            <td>{accountant.email}</td>
                            <td>{accountant.date}</td>
                                <td className="py-4 px-6">
                                    <div className="flex items-center">
                                        <div className={statuus? "h-2.5 w-2.5 rounded-full bg-green-400 mr-2" : "h-2.5 w-2.5 rounded-full bg-red-500 mr-2"}></div> {accountant.status}
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><BtnLang className='w-[20px] h-[45px]' onClick={toggleDropdown}/></a>
                                    
                                </td>
                        </tr> 
                    )
                })}   
            </tbody> 
        </table>    
        </div>    
    </div>
  )
}

export default Accountants