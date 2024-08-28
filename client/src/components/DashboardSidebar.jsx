import React from 'react'
import {useSelector} from 'react-redux'
import { IoIosLogOut } from "react-icons/io";
import {Link, useLocation} from 'react-router-dom';
import { IoMdPhotos } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

const DashboardSidebar = () => {
    const {pathname}=useLocation();
    const author=useSelector((state)=>state.auth.author);
  return (
    <nav className='flex text-lg font-semibold bg-white shadow-lg flex-col
    gap-2 w-fit min-h-screen p-3 list-none justify-between items-center '>
            <div >
                <div className='bg-blue-700 my-5 w-fit rounded-full py-4
                px-6 text-white'>
    {author.charAt(0).toUpperCase()}
                </div>

                <div className='flex flex-col gap-2'>
                        {
                                pathname==='/seller/profile'?(<li className='w-full text-blue-700 rounded-lg hover:bg-white hover:text-black cursor-pointer
                                    transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center'><IoMdPhotos />Photo Management</li>)
                                :(<li className='w-full text-blue-700 rounded-lg hover:bg-white hover:text-black cursor-pointer
                                    transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center'> <IoMdPhotos /> Photos Purchased</li>)
                        }
                        <li className='w-full text-blue-700 rounded-lg hover:bg-white hover:text-black cursor-pointer
                                    transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center'>
                                   <SiGoogleanalytics />      Anlytics
                        </li>
                        <li className='w-full text-blue-700 rounded-lg hover:bg-white hover:text-black cursor-pointer
                                    transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center'>
                                   <CiShoppingCart />      Orders
                        </li>
                        <li className='w-full text-blue-700 rounded-lg hover:bg-white hover:text-black cursor-pointer
                                    transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center'>
                                   <FaRegHeart />      Favourite
                        </li>
                        <Link to='/' className='w-full text-blue-700 rounded-lg hover:bg-white hover:text-black cursor-pointer
                                    transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center'>
                                   <FaHome />      Home
                        </Link>
                </div>
            </div>
            {/* //logout button */}
            <li className='w-full text-blue-700 rounded-lg hover:bg-black hover:text-white cursor-pointer
            transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center'> <IoIosLogOut/>
                Logout
            </li>
    </nav>
  )
}

export default DashboardSidebar
