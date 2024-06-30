"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';


const Page = () => {

 
    const router =useRouter() 
    const [user,setuser]=useState({
        name:"",phone:"",message:"",
      })

    
      let name,value;
    
      const handleInput =(e)=>{
       console.log(e)
       name=e.target.name;
       value=e.target.value;
    
       setuser({...user,[name]:value});
      }
    
      const handlesubmit = async (e) => {
        e.preventDefault();
        
          // Accessing form data from state
          const { name, phone, message} =  user;
      
          const res = await fetch("api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              phone,
              message,
            }),
          });
      
          const data = await res.json();
      
          if (res.status == 422  || !data) {
            window.alert("fill all fields");
          } else {
            window.alert("Query sunmitted");

            console.log(data);
            
          }
      

}



  return (
      <div className=' flex  contactcont '>
        <div  className=' contactcont1 flex flex-col w-[60%]  gap-10 h-screen  bg-yellow-400'>
          <div className=' text-6xl relative  top-24  font-bold'> GET IN TOUCH WITH US</div>
   <div className='  relative left-8 flex gap-7  top-24 h-60 '>
      
        < a href='https://www.instagram.com/neutron_esports_?igsh=MWg2dWMzOTNxNzJhMg=='><div className=' size-10'><Image src="/instagram.png" alt=""  width={1000} height={1000}></Image></div></a>
       <a href="https://m.youtube.com/@Neutron_esports/streams"><div className=' size-10'><Image src="/youtube.png" alt="" width={1000} height={1000}></Image></div></a>
        < a href='https://discord.com/invite/EH8GH3XNY4?fbclid=PAZXh0bgNhZW0CMTEAAaZbRwN_88cecpSYhcCc0KetNNusLq5F6tdU5ao50T4oyHIvFpooXScZB20_aem_Zp9bs6-Z5DFAGHyOY-CTMg'><div className=' size-10'><Image src="/discord.png" alt=""  width={1000} height={1000}></Image></div></a>
   </div>
   </div>
   <div className=' h-full '>

   <form className=" contactform max-w-md mx-auto bg-black h-[100%]    pt-7 pb-6   pr-20 pl-20 relative  top-44 right-40 ">
  <div className="relative z-0 w-full mb-5 group">
      
 
<div className=' text-white text-2xl'> Send your Query</div>
    

    <div className="relative z-0 w-full mb-5 group">
        <input type="text" value={user.name} onChange={handleInput} name="name" id="name" className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
    </div>
   
 
  
    <div className="relative z-0 w-full mb-5 group">
        <input type="tel" value={user.phone} onChange={handleInput}  name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" value={user.message} onChange={handleInput} name="message" id="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
    </div>
 
  <button type="submit"  onClick={handlesubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </div>
 
  
</form>

   </div>
      </div>
  )
}

export default Page