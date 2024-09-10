


const ImageCard = ({id, img, title, price,  icon1, icon2}) => {

  return (
    <>
        <div className="relative mb-10 cursor-pointer group ">
         <img  src={img}  alt={title}  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"/>

  {/* <!-- Popup (Appears on hover) --> */}
  <div  className="absolute bottom-0 left-0 right-0 bg-white/190 backdrop-blur-3xl p-2 rounded-lg opacity-0 group-hover:opacity-90 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
  
    <div className="flex justify-between items-center">
      
          <span>{icon2}</span>
    
          <div class="flex items-center">
                <span class="mr-2 font-semibold text-xl">${price}</span>
                <span class="text-2xl">{icon1}</span>
            </div>
         
      
    </div>
  </div>
</div>

        
    </>
  )
}


export default ImageCard
