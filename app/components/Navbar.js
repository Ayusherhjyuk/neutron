"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'




 


const Navbar = () => {

  const [showdropdown, setshowdropdown] = useState(false)
  const [showdropdown1, setshowdropdown1] = useState(false)
  const { data: session } = useSession()


  const [users, setUsers] = useState([]);

  

  useEffect(() => {
      axios.get('/api/notification')
        .then(response => {
          console.log("Users from API:", response.data);
          setUsers(response.data);
        })
        .catch(error => console.error(error));
    }, []);


   



  // if (session) {
  //   return <>
  //     Signed in as {session.user.email} <br />
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }

  return (

    <nav>
      <div className='flex  h-[70px] bg-black text-cyan-50 p-4 justify-between' >
      <Link className='logo font-bold  size-14 ' href={"/"}> 
     <img className=' scale-x-150 scale-150 relative bottom-[16px] ' src='/neutronlogoori.png'></img>
    
      </Link> 

       
      <div className='navbar flex  gap-3'>
        {/* <ul className='flex gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Sign-up</li>
                <li>Login</li>
            </ul> */}












   






<button onClick={() => setshowdropdown(!showdropdown)} id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400" type="button">
<svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
<path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
</svg>

<div className="absolute block w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full  top-5  start-4 dark:border-gray-900"></div>
</button>


<div  id="dropdownNotification" className={`  bg-white z-20 relative ${showdropdown ? "" : "hidden"}   w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700`} aria-labelledby="dropdownNotificationButton">
  <div className="block bg-white px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg   dark:text-white">
      Notifications
  </div>
  <div className=" noticard  h-[500px] overflow-scroll   bg-cyan-100  divide-y divide-gray-100 dark:divide-gray-700">


  {users.map((user, index) => (

    <a href={user.link} key={index} className="flex  z-30 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
      <div className="flex-shrink-0">
        <img className="rounded-full w-11 h-11" src="/bell.png" alt="Jese image"></img>
        
      </div>
      <div className="w-full   ps-3">
          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"> <span className="font-semibold text-gray-900 dark:text-white">{user.title}</span>
          <div> "{user.description}"</div></div>
          <div className="text-xs text-blue-600 dark:text-blue-500">{new Date(user.createdAt).toLocaleDateString() }</div>
      </div>
    </a>
  
))}
    
  </div>
  
</div>





















        <div className='relative'>
          {session && <>
            <button   id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none relative bottom-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex right-2 items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email}
            </button>


          
          
        </>
}

       

        {session && <Link href={"/logout"}>
          <button onClick={()=>signOut()} type="button" className="  relative bottom-2 text-black  bg-yellow-400 font-bold  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Logout</button></Link>}

         

        {!session && <Link href={"/login"}>
          <button type="button" className="loginbtn relative bottom-2 text-black   bg-yellow-500  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg  hover:text-[17px]  px-5 py-2.5 text-center me-2 mb-2" >Login</button></Link>}


          













        

























          
      </div>
      <div className='  hamclo flex  flex-row-reverse '>
<button onClick={() => setshowdropdown1(!showdropdown1)} id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" className="relative inline-flex text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400" type="button">
<img className=' relative  hamburger  size-8' src='hamburger.png'></img>


</button>


<div  id="dropdownNotification" className={`  bg-white z-20 relative ${showdropdown1 ? "" : "hidden"}   w-full max-w-sm bg-black divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700`} aria-labelledby="dropdownNotificationButton">
 
  <div className=" noticard  h-[340px] overflow-scroll     divide-y divide-gray-100 dark:divide-gray-700">


  <div className='  relative top-36  h-16 flex flex-col  justify-center items-center gap-6'>



  {!session && <Link href={"/login"}>
          <button type="button" className=" relative  text-black   bg-yellow-500  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg  hover:text-[17px]  px-5 py-2.5 text-center me-2 mb-2" >Login</button></Link>}
   
   
   <Link href={"/"}>
   <div className=' flex justify-center items-center '>
    <div><script src="https://cdn.lordicon.com/lordicon.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/epietrpn.json"
    trigger="hover"
    >
</lord-icon></div>
    <div className='text   text-black'>Home</div>
    </div></Link>

    


    <Link href={"/ongoingtour"}><div className=' textdiv flex justify-center items-center '>
    <div><img className=' size-7' src='/trophy.png'></img></div>
    <div className='text text-black' >Tournaments</div>
    </div></Link>

 
   <Link href={"/Scrims"}> <div className=' textdiv flex justify-center items-center '>
   <div><img className=' size-7' src='/battle.png'></img></div>
    <div className='text  text-black'>Scrims</div>
    </div></Link>


    


 

   <Link href={"/contact"}> <div className=' flex justify-center items-center '>
   <div><img className=' size-7' src='/phone.png'></img></div>
    <div className='text  text-black'>Contact</div>
    </div></Link>

















  

  </div>
  
  
    
  </div>
  
</div>

</div>




</div>
</div>


































  <div className=' belownav bg-zinc-800  h-16 flex  justify-center items-center gap-20'>

   <Link href={"/"}>
   <div className=' flex justify-center items-center '>
    <div><script src="https://cdn.lordicon.com/lordicon.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/epietrpn.json"
    trigger="hover"
    >
</lord-icon></div>
    <div className='text   text-white'>Home</div>
    </div></Link>


    <Link href={"/ongoingtour"}><div className=' textdiv flex justify-center items-center '>
    <div><img className=' size-7' src='/trophy.png'></img></div>
    <div className='text text-white' >Tournaments</div>
    </div></Link>

 
   <Link href={"/Scrims"}> <div className=' textdiv flex justify-center items-center '>
   <div><img className=' size-7' src='/battle.png'></img></div>
    <div className='text text-white'>Scrims</div>
    </div></Link>


    


 

   <Link href={"/contact"}> <div className=' flex justify-center items-center '>
   <div><img className=' size-7' src='/phone.png'></img></div>
    <div className='text text-white'>Contact</div>
    </div></Link>

















  

  </div>
  
    </nav>
  )
}

export default Navbar