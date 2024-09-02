import React from 'react'

const Contact = () => {
  return (
    <div className="top-7">
     {/* top container with tagline and backgroundImage  */}
    <div className="relative">
      {/* image section  */}
      <section className="w-full h-[40vh] lg:h-[55vh] bg-cover bg-center brightness-50" >
      </section>
  
      <div className="absolute top-1/2 left-[5%] md:left-[10%] -translate-y-1/2 text-white">
              
        <h1 className="text-3xl md:text-5xl font-bold">Get In Touch</h1>
        <p className="text-sm md:text-lg">
          The Ultimate Guide To Ace SDE Interviews.
        </p>
      </div>
    </div>
  
 
    <div className="w-full h-[1200px] md:h-[60vh] lg:h-[130vh] bg-blue-300 relative">
  
      
      <div
        className="absolute -top-[3%] md:-top-[10%] left-1/2 -translate-x-1/2 grid grid-cols-1 md:grid-cols-3 h-fit w-4/5 md:w-[90%] lg:w-4/5 rounded shadow overflow-hidden text-white">
       
        <div className="p-2 md:p-4 h-full bg-gray-800 col-span-2">
          <form>
           
            <div className="flex flex-col md:flex-row justify-around items-start md:items-center pt-8 p-4">
       
              <h2 className="text-2xl md:text-3xl font-semibold">Send Us A Message</h2>
  
             
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-forward"
                width="33" height="33" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                <path d="M3 6l9 6l9 -6" />
                <path d="M15 18h6" />
                <path d="M18 15l3 3l-3 3" />
              </svg>
            </div>
  
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 px-4 md:py-12 md:px-8 text-sm">
            
              <div className="flex flex-col gap-1">
                <label className="font-semibold">
                        Name <span className="text-red-500">&#42;</span>
                      </label>
                <input
                        className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                        placeholder="Enter Your Name"
                        required
                        name="name"
                        type="text"
                      />
                    </div>
  
                
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">
                        Email <span className="text-red-500">&#42;</span>
                      </label>
                  <input
                        className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                        placeholder="Enter Your Email"
                        required
                        name="email"
                        type="email"
                      />
                    </div>
  
                 
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold">
                        Phone <span className="text-red-500">&#42;</span>
                      </label>
                    <input
                        className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                        placeholder="Enter Your Phone Number"
                        required
                        name="phone"
                        type="tel"
                      />
                    </div>
  
                   
                    <div className="flex flex-col gap-1">
                      <label className="font-semibold">
                        Subject <span className="text-red-500">&#42;</span>
                      </label>
                      <input
                        className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                        placeholder="Enter Your Subject"
                        required
                        name="subject"
                        type="text"
                      />
                    </div>
  
                      
                      <div className="flex flex-col gap-1 md:col-span-2">
                        <label className="font-semibold">
                        Message <span className="text-red-500">&#42;</span>
                      </label>
                        <input
                        className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                        placeholder="Enter Your Message"
                        required
                        name="subject"
                        type="text"
                      />
                    </div>
                      </div>
          </form>
  
         
          <div className="flex items-center justify-center md:justify-end py-4 px-8">
           
            <button className="py-2 px-4 md:py-4 md:px-6 bg-gray-800 rounded-md border-2 border-white flex items-center gap-2 hover:scale-95 transition-all">
                    <span className="text-xl">Submit</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-telegram"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#fff"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                    </svg>
                  </button>
          </div>
        </div>
   
        <div className="py-6 px-4 h-[500px] md:h-full bg-blue-800 grid grid-cols-1 grid-rows-5">
          
          <h2 className="text-xl lg:text-2xl text-center md:text-start font-semibold">Contact Information</h2>
  
         
          <div className="row-span-4 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-share" width="35"
              height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
              <path d="M3 7l9 6l9 -6" />
              <path d="M16 22l5 -5" />
              <path d="M21 21.5v-4.5h-4.5" />
            </svg>
            <span>snaptrade@support.com</span>
          </div>
  
         
          <div className="flex justify-center md:justify-start items-center gap-4">
            <a title="youtube" href="#">
              <img className="h-8 w-8 invert" src="https://www.svgrepo.com/show/521936/youtube.svg" /></a>
              <a title="linkedin" href="https://www.linkedin.com/in/prakarsh-singh-40a086228/">
                <img className="h-12 w-12 invert" src="https://www.svgrepo.com/show/520815/linkedin.svg" /></a>
                <a title="instagram" href="https://www.instagram.com/_prakarsh._/?next=%2F&hl=en">
                  <img className="h-8 w-8 invert" src="https://www.svgrepo.com/show/521711/instagram.svg" /></a>
                  <a title="github" href="https://github.com/PrakarshSingh5">
                    <img className="h-8 w-8 invert" src="https://www.svgrepo.com/show/512317/github-142.svg" /></a>
          </div>
                 
        </div>
      </div>
          
    </div>
    </div>
  )
}

export default Contact
