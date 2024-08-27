import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import ImageCard from './ImageCard';

const PhotoGallery = () => {
  return (
    <div className='my-20 bg-white flex flex-col justify-center items-center'>
    <h3 className='text-3xl font-semibold my-14'>Photos</h3>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
       <ImageCard title="The Beach" author="prakarsh" 
       img="https://images.pexels.com/photos/27047511/pexels-photo-27047511/free-photo-of-a-walrus-and-its-two-young-on-the-ice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        price={10}
       icon1={ <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />}
        icon2={<FaHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />} />
        <ImageCard title="The Beach" author="prakarsh" 
       img="https://images.pexels.com/photos/26059002/pexels-photo-26059002/free-photo-of-waterbuck-in-nature.jpeg" 
        price={10}
       icon1={ <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />}
        icon2={<FaHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />} />
      <ImageCard title="The Beach" author="prakarsh" 
       img="https://images.pexels.com/photos/25950518/pexels-photo-25950518/free-photo-of-giraffe-walking-on-savannah.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        price={10}
       icon1={ <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />}
        icon2={<FaHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />} />
      <ImageCard title="The Beach" author="prakarsh" 
       img="https://images.pexels.com/photos/1116380/pexels-photo-1116380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        price={10}
       icon1={ <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />}
        icon2={<FaHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />} />
      <ImageCard title="The Beach" author="prakarsh" 
       img="https://images.pexels.com/photos/1116380/pexels-photo-1116380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        price={10}
       icon1={ <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />}
        icon2={<FaHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />} />
      <ImageCard title="The Beach" author="prakarsh" 
       img="https://images.pexels.com/photos/1116380/pexels-photo-1116380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        price={10}
       icon1={ <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />}
        icon2={<FaHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />} />
      <ImageCard title="The Beach" author="prakarsh" 
       img="https://images.pexels.com/photos/1140923/pexels-photo-1140923.jpeg?auto=compress&cs=tinysrgb&w=400" 
        price={10}
       icon1={ <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />}
        icon2={<FaHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />} />
    </div>
    </div>
  )
}

export default PhotoGallery
