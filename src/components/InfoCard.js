import React from 'react'
import {TfiStatsUp } from 'react-icons/tfi'

const InfoCard = ({title, count, icon, stat}) => {
  return (
    <div className="flex justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100  dark:border-gray-700 dark:hover:bg-gray-700 w-[450px]">
      <div className='justify-center'>
        <p>{title}</p>
        <p className='text-lg font-bold'>{count}</p>
        <div className='flex  justify-between'><div className='flex border justify-center p-1 bg-gray-200 rounded-lg'><TfiStatsUp />{stat}%</div> <span className='text-xs px-2 '>increase from last month</span></div>
      </div>

      <div className='mt-7 w-10 h-10 mx-20 bg-gray-300 flex items-center rounded-full justify-center'>
          {icon} 
      </div>
    </div>
  )
}


export default InfoCard