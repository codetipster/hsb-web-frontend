import React, { useState } from 'react'
import {IoMdAddCircleOutline} from 'react-icons/io'
import {BiSave} from 'react-icons/bi'

const FileUpload = ({clients}) => {
  const [reports, setReports] = useState(clients)
  const [title, setTitle] = useState('')
  const [file, setFile] = useState('');
  
  


  const uploadHandler = (e) => {
    console.log(e.target.files)
     const file = e.target.files[0]
     setFile(file)
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleUploadSubmit = (e) => {
     e.preventDefault()
     const formData = {
      title: title,
      id: reports.length + 1,
      file: file
     }
     console.log('submitted', formData)
  };

  
  
  return (
    <div className='p-4'>
    <form onSubmit={handleUploadSubmit} >
      <div>
        <label className="block mb-1 text-[12px] px-6 absolute mt-1px" for="forms-labelOverInputCode">Title</label>
        <input className="w-full mt-3 h-10 px-3 text-base text-sm placeholder-gray-350 border rounded-lg focus:shadow-outline" 
        type="text" placeholder="|Add a title " 
        onChange={handleTitle} value={title}
        />
      </div>
      <div className='p-2 border rounded mt-4 mx-4 bg-[#edf2f7] min-w-[380px] min-h-[230px] justify-center content-center'>
        <input type="file" className='justify-center items-center mt-[80px] mx-[80px]' name='file' 
          onChange={uploadHandler}
        />
        
        <p className='p-2 mx-[70px] text-sm'>Add Report files(PDF, JPG, PNG)</p>

      </div>
      <button
         onClick={handleUploadSubmit}
         className="w-[150px] mt-[10px] inline-flex items-center h-[45px] px-1 ml-4 py-2 tracking-wide text-white text-l font-medium bg-[#FFB5B5] rounded  focus:outline-none active:bg-[#FF1C1D] hover:bg-[#FF1C1D] 
          relative">
         <span className='px-[10px] '>Upload Report</span>
      </button> 
    </form>  
    </div>
    
  )
};


export default FileUpload;
