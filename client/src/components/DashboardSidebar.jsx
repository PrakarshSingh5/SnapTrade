import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { IoIosLogOut } from "react-icons/io";
import {Link, useLocation} from 'react-router-dom';
import { IoMdPhotos } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { setTab } from '../../store/slices/navSlice';
import { logout } from '../../store/slices/authslice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const DashboardSidebar = () => {
    const {pathname}=useLocation();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const sidebar=useSelector((state)=>state.nav.sidebar);
    const tab=useSelector((state)=>state.nav.tab);
    
    const author=useSelector((state)=>state.auth.author);
    const handleOnchange=()=>{
        dispatch(logout());
        toast.success("Logout Succesfull");
        navigate('/login');
    }

  return (
    <nav
    className={`fixed z-10 ${
      !sidebar == true
        ? "-translate-x-[500px] sm:translate-x-0"
        : "translate-x-0"
    } ease-in-out duration-300 flex sm:static text-lg font-semibold bg-white shadow-lg flex-col gap-2 w-fit min-h-screen p-3 list-none justify-between items-center`}
  >
    <div>
      {/* Circle with my names first letter */}
      <div className="bg-blue-600 my-5 w-fit rounded-full py-4 px-6 text-white">
        {author.charAt(0).toUpperCase()}
      </div>

      {/* list items */}
      <div className="flex flex-col gap-2">
        {pathname === "/seller/profile" ? (
          <li
            className={`w-full rounded-lg px-2 hover:bg-blue-600 hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${
              tab === "photos-management" && "bg-blue-600 text-white"
            }`}
            onClick={() => dispatch(setTab("photos-management"))}
          >
            <IoMdPhotos /> Photos Management
          </li>
        ) : (
          <li
            className={`w-full rounded-lg px-2 hover:bg-blue-600 hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${
              tab === "photos-purchased" && "bg-blue-600 text-white"
            }`}
            onClick={() => dispatch(setTab("photos-purchased"))}
          >
            <IoMdPhotos /> Photos Purchased
          </li>
        )}

        <li
          className={`w-full rounded-lg px-2 hover:bg-blue-600 hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${
            tab == "analytics" && "bg-blue-600 text-white"
          }`}
          onClick={() => dispatch(setTab("analytics"))}
        >
          <SiGoogleanalytics /> Analytics
        </li>

        <li
          className={`w-full rounded-lg px-2 hover:bg-blue-600 hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${
            tab === "orders" && "bg-blue-600 text-white"
          }`}
          onClick={() => dispatch(setTab("orders"))}
        >
          <CiShoppingCart /> Orders
        </li>
        <li
          className={`w-full rounded-lg px-2 hover:bg-blue-600 hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${
            tab === "favourites" && "bg-blue-600 text-white"
          }`}
          onClick={() => dispatch(setTab("favourites"))}
        >
          <FaRegHeart /> Favourites
        </li>
        <Link
          to="/"
          className="w-full rounded-lg px-2 hover:bg-blue-600 hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center"
        >
          <FaHome /> Home
        </Link>
      </div>
    </div>
            {/* //logout button */}
            <li className='w-full text-black rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer
            transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center'
            onClick={handleOnchange}> <IoIosLogOut/>
                Logout
            </li>
    </nav>
  )
}

export default DashboardSidebar
