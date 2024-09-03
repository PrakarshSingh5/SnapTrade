import { useDispatch } from "react-redux";
import { setAllPosts } from "../../store/slices/postSlice";
import axios from "axios";

const HeroSection = () => {
  const dispatch = useDispatch();
  const handleOnSearch=async(e)=>{
      try{
          const search= e.target.value;
          const res=await axios.get(import.meta.env.VITE_API_URL+`/post/search?search=${search}`);
          const { data }= await res.data;
          dispatch(setAllPosts(data));
      }catch(error){
          console.log(error.message);
      }
  }
  return (
    <div className="relative sm:w-full h-[60vh] overflow-clip  mx-auto flex justify-center items-center " >
      <img src="https://images.pexels.com/photos/28003891/pexels-photo-28003891.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.6&h=500&w=1000" alt="Background Image" className="absolute inset-0 w-full sm:w-full h-[60vh] object-fill filter " />
    <div className="relative w-full max-w-xl mx-auto bg-white rounded-full">
  <input placeholder="Search for all images on Snaptrade" className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200" type="search" name="search" id="search"
  onChange={handleOnSearch}/>
  <button type="submit" className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-pink-500 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
    <svg className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    </svg>
    Search
  </button>
</div>
    </div>
   
  );
};
export default HeroSection