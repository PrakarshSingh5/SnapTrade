import React from 'react'
import {RiMenu3Fill} from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar } from '../../store/slices/navSlice'
import {IoClose} from 'react-icons/io5'

const DashboardHeader = () => {
    const author = useSelector((state)=>state.auth.author);
    const role=useSelector((state)=>state.auth.role);
    const sidebar=useSelector((state)=>state.nav.sidebar)
    const disptach=useDispatch();
  return <>
     <div className='my-5 mx-8'>
            <h1 className='text-3xl font-bold text-white'>
                Hello <span className='underline'>{author?.charAt(0).toUpperCase() + author?.slice(1)}</span> , </h1>
                <p className='text-white'>Welcome to your <span className='text-blue-600 '>{role} </span>dashboard </p>
      </div>
      <RiMenu3Fill onClick={()=>disptach(toggleSidebar())} className={`${sidebar == true? "hidden" : "block sm:hidden"} text-3xl absolute top-5 right-5`}/>
      <IoClose onClick={()=>disptach(toggleSidebar())} className={`${sidebar == true? "block sm:hidden" : "hidden" } text-3xl absolute top-5 right-5`}/>
  </>
   
  
}

export default DashboardHeader
