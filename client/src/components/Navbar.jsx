import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5
    fixed top-0 left-0 right-0 shadow-md gap-1 sm:gap-0 z-30 bg-bgnav'>
        <div className='flex justify-between items-center' >
             <Link to='/' className='font-bold text-3xl text-white'>SnapTrade</Link>   
        </div>
      <ul className='flex gap-5 text-lg font-semibold text-gray-400 '>
        <Link to='/about' className='hover:text-yellow-400 cursor-pointer sm:p-2'>About</Link>
        <Link to='/contact' className='hover:text-yellow-400 cursor-pointer sm:p-2'>Contact</Link>
        <Link to='/login' className='hover:text-yellow-400 cursor-pointer sm:p-2'>LogIn</Link>
        <Link to='/signup' className='hover:text-yellow-400 cursor-pointer sm:p-2'>SignUp</Link>
      </ul>
    
    </nav>
  )
}

export default Navbar
