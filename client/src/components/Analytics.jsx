import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import DashboardHeader from './DashboardHeader'
import { useLocation } from 'react-router-dom'
import {ResponsiveContainer ,Line,LineChart, XAxis, YAxis, Tooltip } from 'recharts'
import ExpenseCard from './ExpenseCard';
import { current } from '@reduxjs/toolkit'

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const Analytics = () => {
  const [tillNow, setTillNow]=useState([]);
  const [thisYear, setThisYear]=useState([]);
  const [thisMonth, setThisMonth]=useState([]);
  const [thisWeek, setThisWeek]=useState([]);

    const {pathname}=useLocation();
    const getPostByDateRange=async()=>{
      const res=await axios.get(import.meta.env.VITE_API_URL + "/post/getPostsByDateRange", 
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),

          },
          withCredentials: true,
        }
      );
      const {data}=await res.data;
      
      setTillNow(data.tillNow);
      setThisMonth(data.thisMonth);
      setThisYear(data.thisYear);
      setThisWeek(data.thisWeek);
    }

    useEffect(()=>{
      getPostByDateRange();
},[]);
const calculateForSeller=(data)=>{
  const value=data.reduce((acc, current)=>{
      const price=current.price || 0;
      const purchases= current.purchasedBy ? current.purchasedBy.length : 0;
      return acc+ (price * purchases);
  }, 0);
  return value;
}
const calculateForBuyer=(data)=>data.reduce((acc, curr)=> acc + curr.price, 0);
  
     
 

  
  return (
    <div>
        <DashboardHeader/>
        <h1 className='text-2xl font-semibold mb-5 ml-8 text-white'>Analytics</h1>
        <h2 className='text-2xl text-white font-semibold my-5 ml-8 '>{pathname=='/seller/profile'? "Uploaded":"Purchased"} This Year</h2>
        <div className='w-[83vw] sm:w-[80vw] ml-8 p-2 bg-white rounded-2xl shadow-md flex 
        flex-col justify-between items-center gap-5' >
        <ResponsiveContainer width="100%" height={150}>
            <LineChart margin={{
                top:20, 
                bottom: -50,
                left: -40,
            }} data={thisYear}>
                <XAxis dataKey="title" />
                <YAxis  />
                <Tooltip/>
        <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
         </LineChart>
        </ResponsiveContainer>
        <p>Total {pathname == "/seller/profile"? "Earned": "Spent"} = $ {pathname == "/seller/profile"? calculateForSeller(thisYear): calculateForBuyer(thisYear)} </p>
        </div>
       
        {
                      !thisMonth?.length ? <h1 className='text-2xl font-semibold my-5 ml-8 text-white'>No Data available</h1>
                      : <div className='flex flex-col sm:flex-row justify-between gap-2 mb-10'>
                         <ExpenseCard
            data={thisWeek}
            title={`${
              pathname == "/seller/profile" ? "Earned" : "Spent"
            } This Week`}
            dataKey="price"
            value={
              pathname == "/seller/profile"
                ? calculateForSeller(thisWeek)
                : calculateForBuyer(thisWeek)
            }
          />
          <ExpenseCard
            data={thisMonth}
            title={`${
              pathname == "/seller/profile" ? "Earned" : "Spent"
            } This Months`}
            dataKey="price"
            value={
              pathname == "/seller/profile"
                ? calculateForSeller(thisMonth)
                : calculateForBuyer(thisMonth)
            }
          />
          <ExpenseCard
            data={tillNow}
            title={`${
              pathname == "/seller/profile" ? "Earned" : "Spent"
            } Till Now`}
            dataKey="price"
            value={
              pathname == "/seller/profile"
                ? calculateForSeller(tillNow)
                : calculateForBuyer(tillNow)
            }
          />
                  </div>
                   }
                    
      
    </div>
  )
}

export default Analytics
