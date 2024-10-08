import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import ImageCard from "./ImageCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAllPosts } from "../../store/slices/postSlice";
import { useEffect } from "react";
import {toast} from "react-toastify";

const PhotoGallery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts.allPosts);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const getAllImages = async () => {
    if (posts.length > 0) return;
    const res = await axios.get(import.meta.env.VITE_API_URL + "/post/getAll");
    const { data } = await res.data;
    // console.log(data);
    dispatch(setAllPosts(data));
  };

  const purchaseImage = async (price, id, postUrl, author, title) => {
    if (!isAuthenticated) {
      toast.error("Please login to purchase asset");
      navigate("/login");
      return;
    }

    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/payment/generate",
        {
          price,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      const { data } = await res.data;
      await handlePaymentVerify(data, id, postUrl, author, title, price);
      // will use using a function here to handle the payment verification
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handlePaymentVerify = async (
    data,
    id,
    postUrl,
    author,
    title,
    price
  ) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Prakarsh Singh",
      order_id: data.id,
      theme: {
        color: "#5f63b8",
      },
      handler: async (response) => {
        try {
          const res = await axios.post(
            import.meta.env.VITE_API_URL + "/payment/verify",
            {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              postId: id,
              postUrl,
              author,
              title,
              price,
            },
            {
              headers: {
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
      },
    };
    const razorpayWindow = new window.Razorpay(options);
    razorpayWindow.open();
  };

  useEffect(() => {
    getAllImages();
  }, []);
 
  const addToFav=async(id, authorId)=>{
    console.log("Prakarsh you clicked it")
   try {
     const res = await axios.put(import.meta.env.VITE_API_URL + `/post/addToFavourites/${id}`, 
      {
        authorId: authorId,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        }
      }
    );
    const data=res.data;
    if(data.success)
        toast.success(data.message);
    
   } catch (error) {
      toast.error(error.message);
   }


  }


  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>

      <div className="container mx-auto p-4">
        <div className="container mx-auto p-4">
            <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            {posts?.map(({ _id, title, image, price, author, authorId }) => {
          
          return (
            <ImageCard
              key={_id}
              id={_id}
              title={title}
              author={author}
              img={image}
              price={price}
              icon1={
                <FaShoppingCart
                  title="Cart"
                  onClick={() =>
                    purchaseImage(price, _id, image, author, title)
                  }
                  className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"
                />
              }
              icon2={
                <IoIosHeart onClick={()=>addToFav( _id , authorId)} className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
              }
            />
          );
        })}
            </div>

        </div>

      </div>
    </div>
  );
};

export default PhotoGallery;