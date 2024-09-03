import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import { login } from '../../store/slices/authslice'
import { useDispatch } from 'react-redux'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleOnchange=async(e)=>{
    e.preventDefault();
    try{
      const res=await axios.post(import.meta.env.VITE_API_URL+'/login',
        {
          email, 
          password
        }
      );
      const data=await res.data;
      toast.success(data.message);
        //dispatch -- jo bhi data a rha hai usko sab push karna hai state me
       dispatch(login(data));
       navigate(`/${data.role}/profile`);
      } catch (error) {
        toast.error(error.response.data.message);
      }
  }
  return (
<div className='mt-20 sm:mt-10 min-h-screen flex items-center justify-center w-full'>
<div className='bg-white shadow-md rounded-3xl py-6 px-5 w-full sm:w-[27vw]'>
  <h1 className='text-2xl font-bold text-center mb-4'>Let's Connect!</h1>
  <form onSubmit={handleOnchange}>
    <div>
      <label htmlFor='login-email' className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
      <input
        type='text'
        name='email'
        id='email123'
        placeholder='xyz@gmail.com'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black mb-4'
      />
    </div>
    <div>
      <label htmlFor='login-password' className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Enter your password'
        className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black mb-2'
      />
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
