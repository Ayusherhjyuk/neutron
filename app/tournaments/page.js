import React from 'react'
import Link from 'next/link'
import ongoingtour from '../ongoingtour/page'

const Tournaments = () => {
  return (
    

       <div className=' flex relative top-2'>

        <div className='w-[10%] bg-zinc-800 '>
           <div className=' flex flex-col  gap-24 relative top-9 ' >
            <Link href={"/ongoingtour"}><div className=' text '>Ongoing Tournaments</div></Link>
            <Link href={"/upcomingtour"}><div className=' text'>Upcoming  Tournaments</div></Link>
            <Link href={"/pasttour"}><div className=' text'>past Tournaments</div></Link>
           </div>
        </div>
        <div className=' w-[90%] h-screen'>

        </div>
       </div>
  )
}

export default Tournaments