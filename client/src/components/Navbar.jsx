import React, { useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { login, logout } from '../../store/slices/authslice';


const Navbar = () => {

  const {pathname}=useLocation();
  const isAuthenticated=useSelector((state)=> state.auth.isAuthenticated);
  const role=useSelector((state)=>state.auth.role);
  const dispatch=useDispatch();
  const refreshToken=async()=> {
    try {
      const res=await axios.get(import.meta.env.VITE_API_URL+ '/refresh', {
        headers:{
          "Authorization": "Bearer " + localStorage.getItem("refreshToken"),
        }
      });
      const data=await res.data;
      dispatch(login(data));
    } catch (error) {
        dispatch(logout());
    }
  }
  useEffect(()=> {
      const interval=setInterval(()=>{
        refreshToken()
      }, 1000 * 60* 13) //13 min interval
      return ()=> clearInterval(interval);
  },[])

  return (
    <nav className={`flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5
     top-0 left-0 right-0 ${pathname==='/seller/profile'|| pathname==='/buyer/profile'? "hidden": "fixed"} shadow-md gap-1 sm:gap-0 z-30 bg-transparent`}>
        <div className='flex justify-between items-center' >
             <Link to='/' className='font-bold text-3xl text-white'>SnapTrade</Link>   
        </div>
      <ul className='flex gap-5 text-lg font-semibold text-gray-400 '>
        <Link to='/about' className='hover:text-white cursor-pointer sm:p-2'>About</Link>
        <Link to='/contact' className='hover:text-white cursor-pointer sm:p-2'>Contact</Link>
        {
          !isAuthenticated ? (<>
           <Link to='/login' className='hover:text-white cursor-pointer sm:p-2'>LogIn</Link>
           <Link to='/signup' className='hover:text-white cursor-pointer sm:p-2'>SignUp</Link>
          </>
           ):(  <Link to={`/${role}/profile`} className='hover:text-white cursor-pointer sm:p-2'>Profile</Link>)
        }
        
      </ul>
    
    </nav>
  )
}

export default Navbar
