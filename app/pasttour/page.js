"use client"
import React,{ useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Image from 'next/image'

const Pasttour = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/pasttour')
          .then(response => {
            console.log("Users from API:", response.data);
            setUsers(response.data);
          })
          .catch(error => console.error(error));
      }, []);


  return (
    

    <div className='tourpage flex relative top-2 bg-black background'>

    <div className='tourpageup flex  flex-col gap-32 w-[10%] bg-zinc-800 '>
       
       <div> <Link href={"/ongoingtour"}><div className=' text sidetext  text-slate-100 '>Ongoing Tournaments</div></Link></div>
       <div> <Link href={"/upcomingtour"}><div className=' text sidetext text-slate-100'>Upcoming  Tournaments</div></Link></div>
       <div> <Link href={"/pasttour"}><div className=' text sidetext text-yellow-500 '>past Tournaments</div></Link></div>
       </div>
        
        <div className=' w-[90%] min-h-[100vh]  relative bottom-8'>



<div className=' flex flex-col ml-28  mr-28 relative top-9  gap-6'>


{users.map((user, index) => (
    <div className='flex  h-60 ongoingcard 'key={index}>
        <div className='cardimg w-[40%]'>
            
            <Image className='h-full w-full object-cover' src={user.imgurl} alt='img'></Image>
        </div>
        <div className='carddet w-[60%] flex flex-col items-center relative'>
            <p className=' ongoingcardtitle text-4xl relative top-5'>{user.title}</p> 
           <div className='price flex gap-9'> <p className='text-2xl relative top-10'>Entry fee: {user.entryfee}</p>
           <p className='text-2xl relative top-10'>Prize: {user.prize}</p></div>
           
            <div className='ongoingcardbtn winnername relative top-24'> <p className='text-3xl relative'>Winner: {user.winnername}</p></div>
            <div className='flex  date  absolute bottom-0'>
               
                <p className='n text-sm'>Date: {new Date(user.date).toLocaleDateString()}</p>
            </div>
        </div>
    </div>
))}






</div>


        </div>
       </div>




  )
}

export default Pasttour