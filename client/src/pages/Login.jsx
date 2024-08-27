import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='mt-20 sm:mt-10 min-h-screen flex items-center justify-center w-full'>
    <div className='bg-white shadow-md rounded-3xl py-6 px-5 w-full sm:w-[27vw]'>
      <h1 className='text-2xl font-bold text-center mb-4'>Let's Connect!</h1>
      <form>
       
        <div>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
          <input type='text' name='eamil' id='email' placeholder='xyz@gmail.com' className='shadow-md rounded-md w-full px-3 py-2
          border border-gray-300 focus:outline-none focus:ring-black focus:border-black mb-4'/>
        </div>
        <div>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
          <input type='password' name='eamil' id='email' placeholder='******' className='shadow-md rounded-md w-full px-3 py-2
          border border-gray-300 focus:outline-none focus:ring-black focus:border-black mb-2'/>
        </div>
        
      <a href='#' className='text-xs text-gray-600 hover:text-black'>Forget Password</a>    
<div className='flex items-center justify-end mb-4'>
<Link to='/signup' className='text-xs text-gray-700 '>New user? <span className='text-blue-600'>Create an account</span></Link>
</div>
        <button type='submit' className='w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-teal-600'>Continue</button> 
      </form>
    </div>
  </div>
  )
}

export default Login
