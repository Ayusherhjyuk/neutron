"use client"
import React from 'react'
import Link from 'next/link'
import Footer from '../components/Footer'
import axios from 'axios'
import { useEffect, useState } from "react";

const ongoingtour = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/ongoingtour')
          .then(response => {
            console.log("Users from API:", response.data);
            setUsers(response.data);
          })
          .catch(error => console.error(error));
      }, []);


  return (
    

    <div className='tourpage flex relative top-2 bg-black background'>

        <div className='tourpageup flex  flex-col gap-32 w-[10%] bg-zinc-800 '>
           
           <div> <Link href={"/ongoingtour"}><div className=' text sidetext  text-yellow-500 '>Ongoing Tournaments</div></Link></div>
           <div> <Link href={"/upcomingtour"}><div className=' text sidetext text-slate-100'>Upcoming  Tournaments</div></Link></div>
           <div> <Link href={"/pasttour"}><div className=' text sidetext text-slate-100'>past Tournaments</div></Link></div>
           </div>
       
        <div className=' w-[90%]  min-h-[100vh]  relative bottom-8'>



<div className=' tourcard flex flex-col ml-28  mr-28 relative top-9  gap-6'>


{users.map((user, index) => (
    <div className='flex    h-60 ongoingcard key={index}'>
        <div className='cardimg w-[40%]'>
            
            <img className='h-full w-full object-cover' src={user.imgurl} alt='img'></img>
        </div>
        <div className=' carddet w-[60%] flex flex-col items-center  relative'>
            <p className=' ongoingcardtitle text-4xl relative top-5'>{user.title}</p> 
           <div className=' price flex gap-9'> <p className='text-2xl relative top-10'>Entry fee: {user.entryfee}</p>
           <p className='text-2xl relative top-10'>Prize: {user.prize}</p></div>
            <a href={user.reglink} className='ongoingcardbtn relative top-24'><button type="button" className="  relative bottom-2 text-black   bg-yellow-500  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg  hover:text-[17px]  px-5 py-2.5 text-center me-2 mb-2" >Participate Now</button></a>
            <div className='flex date  absolute bottom-0'>
               
                <p className=' text-sm'>ANNOUNCEMENT:  {new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    </div>
))}






</div>


        </div>
       </div>

 


  )
}

export default ongoingtour