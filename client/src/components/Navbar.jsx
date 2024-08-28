import React from 'react'
import {Link, useLocation} from 'react-router-dom'
const Navbar = () => {
  const {pathname}=useLocation();
  return (
    <nav className={`flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5
     top-0 left-0 right-0 ${pathname==='/seller/profile'|| pathname==='/buyer/profile'? "hidden": "fixed"} shadow-md gap-1 sm:gap-0 z-30 bg-blue-600`}>
        <div className='flex justify-between items-center' >
             <Link to='/' className='font-bold text-3xl text-white'>SnapTrade</Link>   
        </div>
      <ul className='flex gap-5 text-lg font-semibold text-gray-400 '>
        <Link to='/about' className='hover:text-white cursor-pointer sm:p-2'>About</Link>
        <Link to='/contact' className='hover:text-white cursor-pointer sm:p-2'>Contact</Link>
        <Link to='/login' className='hover:text-white cursor-pointer sm:p-2'>LogIn</Link>
        <Link to='/signup' className='hover:text-white cursor-pointer sm:p-2'>SignUp</Link>
      </ul>
    
    </nav>
  )
}

export default Navbar
