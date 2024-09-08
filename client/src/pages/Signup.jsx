import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [accountType, setAccountType] = useState("buyer");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + "/signup", {
        username, email, password, accountType
      });
   
      const data = await res.data;
      if (data.success) {
        setUsername("");
        setEmail("");
        setPassword("");
        setAccountType("");
        toast.success(data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
  

  <div className="mt-20 sm:mt-10  bg-gray-400 dark:bg-gray-900">

	<div className="mx-auto">
		<div className="flex justify-center px-6 py-12">
	
			<div className="w-full xl:w-3/4 lg:w-11/12 flex">
				
				<div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
                <img src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Background Image"  />

        </div>
			
				<div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
					<h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
					<form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={handleSignup}>
						 <div className="mb-4 md:flex md:justify-between"> 
							<div className="mb-4 md:mr-2 md:mb-0"> 
								 <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="username">
                                    Username
                                </label>
								<input className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    type='text' name='username' id='username' placeholder='xyz' value={username} onChange={(e) => setUsername(e.target.value)}
                                />
							</div>
							<div className="md:ml-2">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor='accountType'>
                                    AccountType
                                </label>
							<select name='accountType' id='accountType' onChange={(e) => setAccountType(e.target.value)} className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black mb-4'>
           <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
         
        </select>
							</div> 
						</div>
           
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                                Email
                            </label>
							<input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                type='email' name='email' id='email' placeholder='xyz@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}
                            />
						</div>
						<div className="mb-4 md:flex md:justify-between">
							<div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white " >
                                    Password
                                </label>
								<input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    type='password' name='password' id='password' placeholder='***************' value={password} onChange={(e) => setPassword(e.target.value)}
                                />
							
              {/* {
                password === "" ? (<p className="text-xs italic text-red-500">Please choose a password.</p>):(null)
              }	 */}
							</div>
							<div className="md:ml-2">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                    Confirm Password
                                </label>
								<input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="c_password"
                                    type="password"
                                    value={confpassword} onChange={(e) => setConfPassword(e.target.value)}
                                    placeholder="******************"
                                />
                                  {
                password === confpassword ? (null):(<p className="text-xs italic text-red-500">Password does not match.</p>)
              }	
							</div>
						</div>
						<div className="mb-6 text-center">
							<button
                                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Register Account
                            </button>
						</div>
						<hr className="mb-6 border-t" />
						<div className="text-center">
							<a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								href="#">
								Forgot Password?
							</a>
						</div>
						<div className="text-center">
							<Link className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								to="/login">
								Already have an account? Login!
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>

  )
}

export default Signup;
