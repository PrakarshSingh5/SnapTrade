import React, { useEffect} from 'react'
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import ImageCard from './ImageCard';
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
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

  const  purchaseImage= async(price, id, postUrl, author, title)=>{
    if(!isAuthenticated){
        toast.error("Please login to purchase asset");
        navigate('/login');
        return ;
    }

    try {
      const res= await axios.post(import.meta.env.VITE_API_URL+"/payment/generate", {
        price
      }, {
        headers :{
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      }, withCredentials: true
      
    }
  );
  const {data}= await res.data;
  handlePaymentVerify(data,id, postUrl,author, title, price );
  
      
    } catch (error) {
        toast.error(error.response.data.message);
    }
  }
  const handlePaymentVerify= async(data, id, postUrl, author, title, price)=>{
      const options= {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: data.amount,
        currency: data.currency,
        name: "Prakarsh Singh",
        order_id: data.id,
        theme: {
          color: "#5f63b8",

        },
        handler: async(response)=>{
            try {
               const res=await axios.post(import.meta.env.VITE_API_URL+"/payment/verify", 
                { razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razor_signature: response.razorpay_signature,
                  postId:id,
                  postUrl,
                  author, 
                  title,
                  price,
                },
                {
                  headers : {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                  },
                  withCredentials: true,

                }
              

               );

               const data = await res.data;
               toast.success(data.message);
              
            } catch (error) {
              toast.error(error.response.data.message);
            }
        }


      }
      const razorpayWindow = new window.Razorpay(options);
      razorpayWindow.open();
  }


  useEffect(()=> {
    getAllImages();
  },[]);
  const handleOnfav=()=>{
        toast.success("Image Saved to favourites");
  }

return (
  <div className='my-20 bg-bgColor flex flex-col justify-center items-center p-7'>
    <h2 className='text-4xl font-bold my-14 text-pink-500'>Collection</h2>
    <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
      {
        posts?.map(({_id, title, image, price, author}) => {
          return (
            <ImageCard 
              key={_id} 
              id={_id} 
              title={title} 
              author={author} 
              img={image}
              price={price}
              icon1={ 
                <FaShoppingCart title='cart' onClick={()=>purchaseImage(price, _id, image, author, title)} className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />
              }
              icon2={ 
               
                  <CiHeart title='like' onClick={handleOnfav} className={`text-2xl text-red  cursor-pointer hover:scale-110 transition-all ease-linear duration-300`} />
                  
              }
            />
          );
        })
      }
    </div>
  </div>
);

}

export default PhotoGallery
