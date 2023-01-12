import React,{useState} from 'react'
import BtnLang from './BtnLang'

const ListItemAccountant = ({accountant}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
      setIsOpen(!isOpen)
    }

    const [statuus, setstatuus] = useState(false)


  return (
      <div>
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
   </div>
  )
}                  
export default ListItemAccountant