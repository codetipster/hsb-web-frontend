import React from 'react'
import { BsPeople, BsPerson } from 'react-icons/bs'
import Navbar from '../components/Navbar'
import InfoCard from '../components/InfoCard'



const Homepage = () => {

    const data = [
        {   
            title: 'Total number of clients',
            count: 1078,
            Icon: BsPeople,
            stat: 23
        },
        {   
            
            title: 'Total number of accountants',
            count: 108,
            Icon: BsPerson,
            stat: 12
        },
        
        
    ]

const accountants = [
  {  id: 1, firstname: 'Alice', lastname: 'jones', legalname: 'solae', phone: 1234567890, accountant: 'lionel messi', state: true },
  { id: 2, firstname: 'Alice', lastname: 'jones', legalname: 'solae', phone: 1234567890, accountant: 'lionel messi', state: true },
  { id: 3, firstname: 'Alice', lastname: 'jones', legalname: 'solae', phone: 1234567890, accountant: 'lionel messi', state: true },
  { id: 4, firstname: 'Alice', lastname: 'jones', legalname: 'solae', phone: 1234567890, accountant: 'lionel messi', state: true },
  { id: 5, firstname: 'Alice', lastname: 'jones', legalname: 'solae', phone: 1234567890, accountant: 'lionel messi', state: true },
  { id: 6, firstname: 'Alice', lastname: 'jones', legalname: 'solae', phone: 1234567890, accountant: 'lionel messi', state: true },
  { id: 7, firstname: 'Alice', lastname: 'jones', legalname: 'solae', phone: 1234567890, accountant: 'lionel messi', state: true },
];


    
  return (
    <div >
        
        <div className='bg-gray-100 '>
            <div className='justify-center flex '>
                {data.map(dat=> {
                    const {title, count, Icon, stat } = dat
                    return(
                    
                        <div className=" flex m-2 w-full px-2 lg:px-4 space-x-3 justify-center py-4 " key={title}>
                            <InfoCard title={title} count={count} icon= {<Icon />} stat={stat} />
                        </div>
                    
                    )
                })}
            </div>
        </div>

        <div className='bg-gray-100 justify-center w-full my-10 p-10 rounded'>
            <table className="w-full bg-white justify-center rounded">
                <thead>
                    <tr className="text-sm font-semibold justify-center items-center">
                    <td className="py-4 border-b border-gray-700 p-2 ">
                        <input type='checkbox' className=''/>
                    </td>
                        <td className=" border-b border-gray-700 py-2">Client ID</td>
                        <td className=" border-b border-gray-700 py-2">Family name</td>
                        <td className=" border-b border-gray-700 py-2">First name</td>
                        <td className=" border-b border-gray-700 py-2">Legal name</td>
                        <td className=" border-b border-gray-700 py-2">Mobile number</td>
                        <td className=" border-b border-gray-700 py-2">Accountant in charge</td>
                        <td className=" border-b border-gray-700 py-2">Status</td>
                    </tr>
                </thead>
                <tbody>
                    {accountants.map(({ id, firstname, lastname, legalname, phone, state, accountant }) => (
                    <tr className="text-sm text-gray-500">
                        <td className='p-2'>
                            <div className='flex gap-4 items-center'>
                            <input type='checkbox'/>
                            </div>
                        </td>
                        <td className="border px-2 py-4">{id}</td>
                        <td className="border px-2 py-4">{firstname}</td>
                        <td className="border px-2 py-4">{lastname}</td>
                        <td className="border px-2 py-4">{legalname}</td>
                        <td className="border px-2 py-4">{phone}</td>
                        <td className="border px-2 py-4">{accountant}</td>
                        <td className="border px-2 py-4">{state===true? 'active' : 'non-active'}</td>
                       
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Homepage