import React from 'react'
import { BsPeople, BsPerson } from 'react-icons/bs'
import Navbar from '../components/Navbar'
import InfoCard from '../components/InfoCard'
import HomeTable from  '../components/HomeTable'





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




    
  return (
    <div className='bg-gray-100 p-2'>
        
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
        
        <HomeTable />
        
    </div>
  )
}

export default Homepage