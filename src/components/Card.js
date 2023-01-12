import React, { useState } from 'react';
import {BiDownload} from 'react-icons/bi'

const Card = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const types = ['image/png', 'image/jpeg']


  return (
    <div className='flex-1 min-w-0 rounded w-[355px] ml-10 mt-2'>
                    <div class="bg-gray-100 rounded p-1">
                            <p class="text-sm font-small text-gray-900 truncate dark:text-white">
                                This is good for business
                            </p>
                            <p class="text-sm text-gray-400 truncate dark:text-gray-400">
                                13 march, 12:30pm
                            </p>
                    </div>
                    <div className='relative'>
                        <BiDownload className='mx-[330px] absolute mt-[-30px]'/>
                    </div>    
    </div>
  )
}

export default Card