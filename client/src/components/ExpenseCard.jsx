import React from 'react'
import { useLocation } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const ExpandChart = ({data, title, value, datakey}) => {
  const {pathname}=useLocation();
  return (
    <div>
        <h1 className='text-2xl text-white font-semibold my-5 ml-8'>{title}</h1>
       <div className='w-[83vw] sm:w-[25vw] ml-8 p-2 bg-white rounded-2xl shadow-md flex 
        flex-col justify-between items-center gap-5' >
        <ResponsiveContainer width="100%" height={150}>
            <LineChart margin={{
                top:20, 
                bottom: -50,
                left: -60,
            }} data={data}>
                <XAxis dataKey="title" hide/>
                <YAxis  />
                <Tooltip/>
        <Line type="monotone" dataKey={datakey} stroke="#8884d8" strokeWidth={2} />
         </LineChart>
        </ResponsiveContainer>
        <p>
          Total {pathname == "/seller/profile" ? "Earned" : "Spent"} : ${value}
        </p>
        </div>
            
           

    </div>
  )
}

export default ExpandChart
