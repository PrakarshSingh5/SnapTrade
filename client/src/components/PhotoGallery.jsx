import React, { useEffect } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import ImageCard from './ImageCard';
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setAllPosts } from '../../store/slices/postSlice';

const PhotoGallery = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const posts= useSelector((state)=> state.posts.allPosts);
  const isAuthenticated=useSelector((state)=> state.auth.isAuthenticated);
  const getAllImages=async()=> {
    if(posts.length > 0)return ;
    const res=await axios.get(import.meta.env.VITE_API_URL + "/post/getAll");
    const { data }= await res.data;
    dispatch(setAllPosts(data));
  }

  useEffect(()=> {
    getAllImages();
  },[]);


  return (
    <div className='my-20 bg-white flex flex-col justify-center items-center'>
    <h3 className='text-3xl font-semibold my-14'>Photos</h3>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
      {
        posts?.map(({_id, title, image, price, author})=>{
              return (
                <ImageCard key={_id} id={_id} title={title} author={author} 
                img={image}
                 price={price}
                icon1={ <FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />}
                 icon2={<FaHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />} />
              )
        })
      }
     
       
    </div>
    </div>
  )
}

export default PhotoGallery
