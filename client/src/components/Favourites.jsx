import React, { useEffect } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import DashboardHeader from './DashboardHeader'
import { IoHeartDislikeOutline } from "react-icons/io5";
import axios from 'axios'
import ImageCard from './ImageCard';
import { useDispatch, useSelector } from 'react-redux';
import { setMyFavourites } from '../../store/slices/postSlice';
import {toast} from 'react-toastify'

const Favourites = () => {
    const dispatch=useDispatch();
    const   favourites= useSelector((state)=>state.posts.myFavourite);
    async function getFavourites(){
        try{
            const res=await axios.get(import.meta.env.VITE_API_URL+"/post/favourites",{
                headers:{
                    Authorization: "Bearer " + localStorage.getItem("accessToken"),
                }
            })
            const data=await res.data;
            if(data.success){
                dispatch(setMyFavourites(data.data));
            }
        }catch(error){
            toast.error(error.message);
        }
    }
    const removeFromFav=async(id, authorId)=>{
        try {
            const res=await axios.put(import.meta.env.VITE_API_URL+`/post/removeFromFavourites/${id}`,
                {authorId: authorId},{
                headers:{
                    Authorization: "Bearer " + localStorage.getItem("accessToken"),
                }
            })
            const data=await res.data;
            if(data.success){
                toast.success("Removed from favourites");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    useEffect(()=>{
        getFavourites();
    },[]);

  return (
    <div>
      <DashboardHeader/>
      <div className='mx-8 grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                favourites?.map(({_id, image, title, price, author, authorId})=>
                    <ImageCard key={_id} img={image} title={title} price={price} author={author}
                    icon2={<CiShoppingCart/>} icon1={<IoHeartDislikeOutline className='cursor-pointer text-red-600' onClick={()=>removeFromFav(_id, authorId)}/>} />
                )
            }
        </div>
    </div>
  )
}

export default Favourites
