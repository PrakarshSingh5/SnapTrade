import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='mt-20 sm:mt-10 min-h-screen flex items-center justify-center w-full'>
      <div className='bg-white shadow-md rounded-3xl py-6 px-5 w-full sm:w-[27vw]'>
        <h1 className='text-2xl font-bold text-center mb-4'>Create an account</h1>
        <hr className="my-4 border-gray-200 md:my-8 dark:border-gray-700"/>

        <form>
          <div>
            <label htmlFor='username' className='block text-sm font-medium text-gray-700 mb-2'>Username</label>
            <input type='text' name='name' id='name' placeholder='xyz' className='shadow-md rounded-md w-full px-3 py-2
            border border-gray-300 focus:outline-none focus:ring-black focus:border-black mb-4'/>
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
            <input type='text' name='eamil' id='email' placeholder='xyz@gmail.com' className='shadow-md rounded-md w-full px-3 py-2
            border border-gray-300 focus:outline-none focus:ring-black focus:border-black mb-4'/>
          </div>
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
            <input type='password' name='eamil' id='email' placeholder='******' className='shadow-md rounded-md w-full px-3 py-2
            border border-gray-300 focus:outline-none focus:ring-black focus:border-black mb-4'/>
          </div>
          <div>
            <label htmlFor='accountType' className='block text-sm font-medium text-gray-700 mb-2'>Select Your Account Type</label>
            <select className='shadow-md rounded-md w-full px-3 py-2
            border border-gray-300 focus:outline-none focus:ring-black focus:border-black mb-4'>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
           </div>
<div className='flex items-center justify-end mb-4'>
<Link to='/login' className='text-xs text-gray-700 '>Already have an account?  <span className='text-blue-600'>Sign in</span></Link>
</div>
          <button type='submit' className='w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-teal-600'>Continue</button> 
        </form>
      </div>
    </div>
  )
}

export default Signup
