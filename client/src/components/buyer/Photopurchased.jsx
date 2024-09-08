import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { logout } from '../../../store/slices/authslice'
import DashboardHeader from '../DashboardHeader'
import ImageCard from '../ImageCard'
import { setMyPosts } from '../../../store/slices/postSlice'
import {IoArrowDownCircle} from 'react-icons/io5'

const Photopurchased = () => {
    const dispatch=useDispatch();
    const posts=useSelector((state)=>state.posts.myPosts);
    const getMypost=async()=>{
        try {
            if(posts.length>0)return;
          const res= await axios.get(import.meta.env.VITE_API_URL + "/post/myPosts", 
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("accessToken"),
                },
                withCredentials: true,
            }
          )     
          const { data }= await res.data;
          dispatch(setMyPosts(data));
            
        } catch (error) {
                toast.error("Failed to fetch Photos");
                dispatch(logout());
        }
    }
    useEffect(()=>{
        getMypost();
    }, []);

    const downloadImage=async(image, title)=>{
        try {
            const response=await fetch(image);
            if(!response.ok){
                throw new Error("Failed to download");
            }
            
            const blob=await response.blob;
            const url=URL.createObjectURL(blob);
            const a=document.createElement("a");
            a.href = url;
            a.download = `${title}.jpg`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.log("Error downloading image", error);
        }
    }
  return (
    <div>
        <DashboardHeader/>
        <div className='mx-8 grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
       {
            posts?.map(({_id, title, postUrl, author, price})=>
                    <ImageCard title={title} key={_id} price={price} author={author} img={postUrl} icon2={ <IoArrowDownCircle title='Download' className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear
                        duration-300' onClick={()=>downloadImage(postUrl, title)}/>}   />
            )
       }

        </div>
    </div>
  )
}

export default Photopurchased
